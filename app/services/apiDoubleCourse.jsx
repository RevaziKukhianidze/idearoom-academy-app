// services/apiDoubleCourse.js
import supabase from "./supabase";

// Simple in-memory cache
const cache = {
  data: {},
  timeouts: {},

  DEFAULT_TTL: 3600000,

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

export async function apiDoubleCourse() {
  const cacheKey = "all_offered_courses";

  try {
    // Check cache first
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    // If not in cache, fetch from Supabase
    const { data, error } = await supabase.from("offered_course").select("*");

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    // Store in cache and return
    return cache.set(cacheKey, data);
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
}

export async function getOfferedCourseById(id) {
  const cacheKey = `offered_course_${id}`;

  try {
    // Check cache first
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    // If not in cache, fetch from Supabase
    const { data, error } = await supabase
      .from("offered_course")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    // Store in cache and return
    return cache.set(cacheKey, data);
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
}

// Function to manually invalidate cache when data changes
export function invalidateOfferedCourseCache(id = null) {
  if (id) {
    // Invalidate specific offered course
    cache.invalidate(`offered_course_${id}`);
  }

  // Always invalidate the collection cache
  cache.invalidate("all_offered_courses");
}
