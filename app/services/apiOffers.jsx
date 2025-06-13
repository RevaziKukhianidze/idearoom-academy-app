import supabase, { executeWithTimeout, handleSupabaseError } from "./supabase";

// Simple in-memory cache
const cache = {
  data: {},
  timeouts: {},

  // Cache duration in milliseconds (2 minutes default)
  DEFAULT_TTL: 120000,

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

  // Always invalidate ALL collection caches to ensure complete refresh
  cache.invalidate("all_offers");

  // Force invalidate all offer-related cache entries
  Object.keys(cache.data).forEach((key) => {
    if (key.startsWith("offer_") || key.includes("offers")) {
      cache.invalidate(key);
    }
  });
}

// Function to force clear all cache
export function clearAllCache() {
  console.log("Clearing all offers cache...");
  cache.invalidateAll();
}

// Function to delete an offer and invalidate cache
export async function deleteOffer(id) {
  try {
    const operation = supabase.from("offered_course").delete().eq("id", id);

    const { error } = await executeWithTimeout(
      operation,
      15000,
      "Delete offer"
    );

    if (error) {
      throw handleSupabaseError(error, "Delete offer");
    }

    // Aggressively invalidate cache for deleted offer to ensure it disappears from "other offers" sections
    console.log(`Deleting offer ${id} and clearing relevant cache...`);

    // First invalidate normally
    invalidateCache(id);

    // Then force clear the main collections cache to ensure deleted offer disappears
    cache.invalidate("all_offers");
    cache.invalidate("limited_offers");

    // Force clear any cached offer data
    Object.keys(cache.data).forEach((key) => {
      if (
        key.includes("offer") ||
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
  } catch (error) {
    console.error("Error in deleteOffer:", error);
    throw error;
  }
}

// Function to add a new offer and invalidate cache
export async function addOffer(offerData) {
  try {
    const operation = supabase
      .from("offered_course")
      .insert([offerData])
      .select()
      .single();

    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Add offer"
    );

    if (error) {
      throw handleSupabaseError(error, "Add offer");
    }

    // Invalidate relevant cache entries for new offer
    console.log(`Adding new offer and invalidating relevant cache...`);
    invalidateCache();

    return { success: true, data };
  } catch (error) {
    console.error("Error in addOffer:", error);
    throw error;
  }
}

// Function to update an offer and invalidate cache
export async function updateOffer(id, offerData) {
  try {
    const operation = supabase
      .from("offered_course")
      .update(offerData)
      .eq("id", id)
      .select()
      .single();

    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Update offer"
    );

    if (error) {
      throw handleSupabaseError(error, "Update offer");
    }

    // Invalidate relevant cache entries for updated offer
    console.log(`Updating offer ${id} and invalidating relevant cache...`);
    invalidateCache(id);

    return { success: true, data };
  } catch (error) {
    console.error("Error in updateOffer:", error);
    throw error;
  }
}
