import supabase, { executeWithTimeout, handleSupabaseError } from "./supabase";

// მარტივი კეშის ობიექტი
const cache = {
  data: {},
  expiryTimes: {},
};

// კეშში შენახვის ფუნქცია
function setCache(key, data, ttl = 1800000) {
  // 30 წუთის TTL (Time To Live) ნაგულისხმევად
  cache.data[key] = data;
  cache.expiryTimes[key] = Date.now() + ttl;
}

// კეშის წაკითხვის ფუნქცია
function getCache(key) {
  const now = Date.now();
  if (cache.data[key] && cache.expiryTimes[key] > now) {
    return cache.data[key]; // კეშის დაბრუნება თუ ვალიდურია
  }
  return null; // კეშის ვადა ამოწურულია ან არ არსებობს
}

export async function getBlogs(id, ttl = 1800000) {
  const cacheKey = id ? `blog_${id}` : "all_blogs";

  // შემოწმება გვაქვს თუ არა ვალიდური კეში
  const cachedData = getCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  try {
    let query = supabase.from("blogs").select("*");

    if (id) {
      const operation = query.eq("id", id).single();
      const { data, error } = await executeWithTimeout(
        operation,
        15000,
        "Fetch single blog"
      );

      if (error) {
        throw handleSupabaseError(error, "Fetch single blog");
      }

      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    } else {
      // დავალაგოთ შექმნის თარიღის მიხედვით კლებადობით
      const operation = query.order("created_at", {
        ascending: false,
      });
      const { data, error } = await executeWithTimeout(
        operation,
        15000,
        "Fetch all blogs"
      );

      if (error) {
        throw handleSupabaseError(error, "Fetch all blogs");
      }

      // Validate data structure
      if (!Array.isArray(data)) {
        console.warn("Invalid data structure received from Supabase");
        return [];
      }

      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    }
  } catch (error) {
    console.error("Error in getBlogs:", error);
    // Return empty array for listing, null for single blog
    return id ? null : [];
  }
}

export async function getBlog(id, ttl = 300000) {
  // 5 წუთის კეში ნაგულისხმევად
  const cacheKey = `blog_detail_${id}`;

  // შემოწმება გვაქვს თუ არა ვალიდური კეში
  const cachedData = getCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  try {
    const operation = supabase.from("blogs").select("*").eq("id", id).single();

    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Fetch blog detail"
    );

    if (error) {
      throw handleSupabaseError(error, "Fetch blog detail");
    }

    setCache(cacheKey, data, ttl); // შევინახოთ კეშში
    return data;
  } catch (error) {
    console.error("Error in getBlog:", error);
    throw new Error(`Blog with ID ${id} Could Not Be Loaded`);
  }
}

export async function getBlogsLimited(id, ttl = 120000) {
  // 2 წუთის კეში ნაგულისხმევად
  const cacheKey = id ? `blog_limited_${id}` : "limited_blogs";

  // შემოწმება გვაქვს თუ არა ვალიდური კეში
  const cachedData = getCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  try {
    let query = supabase.from("blogs").select("*");

    if (id) {
      const operation = query.eq("id", id).single();
      const { data, error } = await executeWithTimeout(
        operation,
        15000,
        "Fetch limited blog"
      );

      if (error) {
        throw handleSupabaseError(error, "Fetch limited blog");
      }

      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    } else {
      // დავალაგოთ შექმნის თარიღის მიხედვით კლებადობით და შევზღუდოთ 3 ბლოგით
      const operation = query
        .order("created_at", { ascending: false })
        .limit(3);

      const { data, error } = await executeWithTimeout(
        operation,
        15000,
        "Fetch limited blogs"
      );

      if (error) {
        throw handleSupabaseError(error, "Fetch limited blogs");
      }

      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    }
  } catch (error) {
    console.error("Error in getBlogsLimited:", error);
    return null;
  }
}

// კეშის გასუფთავების ფუნქცია (გამოიყენეთ როცა საჭიროა, მაგ: ახალი ბლოგის დამატების შემდეგ)
export function clearBlogsCache() {
  Object.keys(cache.data).forEach((key) => {
    if (key.includes("blog")) {
      delete cache.data[key];
      delete cache.expiryTimes[key];
    }
  });
}
