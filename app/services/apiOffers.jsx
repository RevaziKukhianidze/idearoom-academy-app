import supabase, { executeWithTimeout, handleSupabaseError } from "./supabase";

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

export async function getOffers() {
  const cacheKey = "all_offers";

  // Check cache first
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    // If not in cache, fetch from Supabase
    const operation = supabase.from("offered_course").select("*");
    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Fetch all offers"
    );

    if (error) {
      throw handleSupabaseError(error, "Fetch all offers");
    }

    if (!data || !Array.isArray(data)) {
      throw new Error("მონაცემები ვერ მოიძებნა");
    }

    // Store in cache and return
    return cache.set(cacheKey, data);
  } catch (error) {
    console.error("Error in getOffers:", error);
    throw error;
  }
}

export async function getOfferById(id) {
  const cacheKey = `offer_${id}`;

  // Check cache first
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    // If not in cache, fetch from Supabase
    const operation = supabase
      .from("offered_course")
      .select("*")
      .eq("id", id)
      .single();

    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Fetch single offer"
    );

    if (error) {
      throw handleSupabaseError(error, "Fetch single offer");
    }

    if (!data) {
      throw new Error("კურსი ვერ მოიძებნა");
    }

    // Store in cache and return
    return cache.set(cacheKey, data);
  } catch (error) {
    console.error("Error in getOfferById:", error);
    throw error;
  }
}

// Function to manually invalidate cache when data changes
export function invalidateCache(id = null) {
  if (id) {
    // Invalidate specific offer
    cache.invalidate(`offer_${id}`);
  }

  // Always invalidate the collection caches
  cache.invalidate("all_offers");
}
