import supabase from "./supabase";

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
    // Add timeout protection
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), 10000)
    );

    let query = supabase.from("blogs").select("*");

    if (id) {
      query = query.eq("id", id);
      const queryPromise = query.single();
      const { data, error } = await Promise.race([
        queryPromise,
        timeoutPromise,
      ]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }
      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    } else {
      // დავალაგოთ შექმნის თარიღის მიხედვით კლებადობით
      const queryPromise = query.order("created_at", {
        ascending: false,
      });
      const { data, error } = await Promise.race([
        queryPromise,
        timeoutPromise,
      ]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
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
    console.error("Error fetching blogs:", error);
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
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    setCache(cacheKey, data, ttl); // შევინახოთ კეშში
    return data;
  } catch (error) {
    console.error("Error fetching blog:", error);
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
      const { data, error } = await query.single();

      if (error) throw error;
      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    } else {
      // დავალაგოთ შექმნის თარიღის მიხედვით კლებადობით და შევზღუდოთ 3 ბლოგით
      const { data, error } = await query
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) throw error;
      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
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
