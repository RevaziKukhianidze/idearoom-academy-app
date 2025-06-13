import supabase from "./supabase";

// Simple in-memory cache
const cache = {
  data: {},
  timeouts: {},

  // Cache duration in milliseconds (30 minutes default)
  DEFAULT_TTL: 1800000,

  set(key, value, ttl = this.DEFAULT_TTL) {
    this.data[key] = value;

    // Clear any existing timeout
    if (this.timeouts[key]) {
      clearTimeout(this.timeouts[key]);
    }

    // Set expiration timeout
    this.timeouts[key] = setTimeout(() => {
      delete this.data[key];
      delete this.timeouts[key];
    }, ttl);

    return value;
  },

  get(key) {
    return this.data[key];
  },

  has(key) {
    return key in this.data;
  },

  invalidate(key) {
    delete this.data[key];
    if (this.timeouts[key]) {
      clearTimeout(this.timeouts[key]);
      delete this.timeouts[key];
    }
  },

  invalidateAll() {
    Object.keys(this.timeouts).forEach((key) => {
      clearTimeout(this.timeouts[key]);
    });
    this.data = {};
    this.timeouts = {};
  },
};

export async function getCourses() {
  const cacheKey = "all_courses";

  // Check cache first
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const { data, error } = await supabase.from("courses").select("*");

    if (error) {
      console.error("Error in getCourses:", error);
      return [];
    }

    // Store in cache and return
    return cache.set(cacheKey, data || []);
  } catch (err) {
    console.error("Unexpected error in getCourses:", err);
    return [];
  }
}

export async function getCourseById(id) {
  const cacheKey = `course_${id}`;

  // Check cache first
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  // If not in cache, fetch from Supabase
  let { data, error } = await supabase
    .from("courses")
    .select("*, syllabus_title, syllabus_content")
    .eq("id", id)
    .single();

  // Store in cache and return
  return cache.set(cacheKey, data);
}

export async function getLimitedCourse() {
  const cacheKey = "limited_courses";

  // Check cache first
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    // Try fetching from Supabase
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("id", { ascending: false })
      .limit(4);

    if (error) {
      console.error("Error in getLimitedCourse:", error);
      return [];
    }

    // Store in cache and return
    return cache.set(cacheKey, data || []);
  } catch (err) {
    console.error("Unexpected error in getLimitedCourse:", err);
    return [];
  }
}

// Function to manually invalidate cache when data changes
export function invalidateCache(id = null) {
  if (id) {
    // Invalidate specific course
    cache.invalidate(`course_${id}`);
  }

  // Always invalidate ALL collection caches to ensure complete refresh
  cache.invalidate("all_courses");
  cache.invalidate("limited_courses");

  // Force invalidate all course-related cache entries
  Object.keys(cache.data).forEach((key) => {
    if (key.startsWith("course_") || key.includes("courses")) {
      cache.invalidate(key);
    }
  });
}

// Function to force clear all cache
export function clearAllCache() {
  console.log("Clearing all cache...");
  cache.invalidateAll();
}

// Function to delete a course and invalidate cache
export async function deleteCourse(id) {
  try {
    const { error } = await supabase.from("courses").delete().eq("id", id);

    if (error) {
      console.error("Error deleting course:", error);
      throw error;
    }

    // Aggressively invalidate cache for deleted course to ensure it disappears from "other courses" sections
    console.log(`Deleting course ${id} and clearing relevant cache...`);

    // First invalidate normally
    invalidateCache(id);

    // Then force clear the main collections cache to ensure deleted course disappears
    cache.invalidate("all_courses");
    cache.invalidate("limited_courses");

    // Force clear any cached course data
    Object.keys(cache.data).forEach((key) => {
      if (
        key.includes("course") ||
        key.includes("all_") ||
        key.includes("limited_")
      ) {
        cache.invalidate(key);
      }
    });

    // Force aggressive cache clear and page refresh
    if (typeof window !== "undefined") {
      // Try to clear service worker cache
      if ("caches" in window) {
        caches.keys().then((names) => {
          names.forEach((name) => caches.delete(name));
        });
      }

      // Force refresh after delay
      setTimeout(() => {
        window.location.reload(true);
      }, 300);
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error in deleteCourse:", err);
    throw err;
  }
}

// Function to add a new course and invalidate cache
export async function addCourse(courseData) {
  try {
    const { data, error } = await supabase
      .from("courses")
      .insert([courseData])
      .select()
      .single();

    if (error) {
      console.error("Error adding course:", error);
      throw error;
    }

    // Invalidate only relevant cache entries instead of clearing everything
    console.log(
      `Adding new course (ID: ${data?.id}) and invalidating relevant cache...`
    );

    // Only invalidate course-related cache, don't clear everything
    invalidateCache();

    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error in addCourse:", err);
    throw err;
  }
}

// Function to update a course and invalidate cache
export async function updateCourse(id, courseData) {
  try {
    const { data, error } = await supabase
      .from("courses")
      .update(courseData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating course:", error);
      throw error;
    }

    // Invalidate relevant cache entries for updated course
    console.log(`Updating course ${id} and invalidating relevant cache...`);
    invalidateCache(id);

    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error in updateCourse:", err);
    throw err;
  }
}
