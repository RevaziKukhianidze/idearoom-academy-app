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

export async function getOffers() {
  const cacheKey = "all_offers";

  // Check cache first
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  // If not in cache, fetch from Supabase
  let { data, error } = await supabase.from("offered_course").select("*");

  if (error) {
    console.error("Error fetching offers:", error);
    throw new Error("Failed to fetch offers");
  }

  // Store in cache and return
  return cache.set(cacheKey, data);
}

export async function getOfferById(id) {
  const cacheKey = `offer_${id}`;

  // Check cache first
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  // If not in cache, fetch from Supabase
  let { data, error } = await supabase
    .from("offered_course")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching offer:", error);
    throw new Error(`Failed to fetch offer with ID ${id}`);
  }

  // Store in cache and return
  return cache.set(cacheKey, data);
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
