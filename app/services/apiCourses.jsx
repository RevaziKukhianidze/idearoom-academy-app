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

  // Always invalidate the collection caches
  cache.invalidate("all_courses");
  cache.invalidate("limited_courses");
}
