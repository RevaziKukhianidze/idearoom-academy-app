import supabase from "./supabase";

// მარტივი კეშის ობიექტი
const cache = {
  data: {},
  expiryTimes: {},
};

// კეშში შენახვის ფუნქცია
function setCache(key, data, ttl = 1800000) {
  // 1 წუთის TTL (Time To Live) ნაგულისხმევად
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

// Timeout wrapper for API calls
async function withTimeout(promise, timeoutMs = 10000) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), timeoutMs)
    ),
  ]);
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
      query = query.eq("id", id);
      const { data, error } = await withTimeout(query.single());

      if (error) throw error;
      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    } else {
      // დავალაგოთ შექმნის თარიღის მიხედვით კლებადობით
      const { data, error } = await withTimeout(
        query.order("created_at", { ascending: false })
      );

      if (error) throw error;
      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    }
  } catch (error) {
    return null;
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
    const { data, error } = await withTimeout(
      supabase.from("blogs").select("*").eq("id", id).single()
    );

    if (error) throw error;
    setCache(cacheKey, data, ttl); // შევინახოთ კეშში
    return data;
  } catch (error) {
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
      query = query.eq("id", id);
      const { data, error } = await withTimeout(query.single());

      if (error) throw error;
      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    } else {
      // დავალაგოთ შექმნის თარიღის მიხედვით კლებადობით და შევზღუდოთ 3 ბლოგით
      const { data, error } = await withTimeout(
        query.order("created_at", { ascending: false }).limit(3)
      );

      if (error) throw error;
      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    }
  } catch (error) {
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
