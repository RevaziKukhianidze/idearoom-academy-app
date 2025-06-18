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

export async function getBlogs(id, ttl = 120000) {
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
        return [];
      }

      setCache(cacheKey, data, ttl); // შევინახოთ კეშში
      return data;
    }
  } catch (error) {
    // Return empty array for listing, null for single blog
    return id ? null : [];
  }
}

export async function getBlog(id, ttl = 120000) {
  // 2 წუთის კეში ნაგულისხმევად
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
    // Return an empty array instead of null to prevent runtime errors in components
    return [];
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

// Real-time სინქრონიზაციისთვის (ადმინიდან წაშლის შემდეგ)
export function invalidateBlogCache() {
  clearBlogsCache();
}

// ბლოგის დამატების ფუნქცია
export async function addBlog(blogData) {
  try {
    const operation = supabase.from("blogs").insert([blogData]).select();

    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Add blog"
    );

    if (error) {
      throw handleSupabaseError(error, "Add blog");
    }

    // Clear blog cache to ensure fresh data
    clearBlogsCache();

    return { data: data?.[0] };
  } catch (error) {
    throw new Error(`ბლოგის დამატება ვერ მოხერხდა: ${error.message}`);
  }
}

// ბლოგის განახლების ფუნქცია (მთავარია ტეგების განახლებისთვის)
export async function updateBlog(id, blogData) {
  try {
    const operation = supabase
      .from("blogs")
      .update(blogData)
      .eq("id", id)
      .select();

    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Update blog"
    );

    if (error) {
      throw handleSupabaseError(error, "Update blog");
    }

    // Clear blog cache to ensure fresh data
    clearBlogsCache();

    return { data: data?.[0] };
  } catch (error) {
    throw new Error(`ბლოგის განახლება ვერ მოხერხდა: ${error.message}`);
  }
}

// ბლოგის წაშლის ფუნქცია
export async function deleteBlog(id) {
  try {
    const operation = supabase.from("blogs").delete().eq("id", id);

    const { error } = await executeWithTimeout(operation, 15000, "Delete blog");

    if (error) {
      throw handleSupabaseError(error, "Delete blog");
    }

    // Clear blog cache to ensure fresh data
    clearBlogsCache();

    return { success: true };
  } catch (error) {
    throw new Error(`ბლოგის წაშლა ვერ მოხერხდა: ${error.message}`);
  }
}

// ============ LINKTAG CRUD OPERATIONS ============

// ლინკ ტეგების დამატება
export async function addLinkTags(blogId, linkTags) {
  try {
    const response = await fetch(`/api/blogs/linkTag/add?blogId=${blogId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ linkTag: linkTags }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "ლინკ ტეგების დამატება ვერ მოხერხდა");
    }

    // Clear blog cache to ensure fresh data
    clearBlogsCache();

    return result;
  } catch (error) {
    throw new Error(`ლინკ ტეგების დამატება ვერ მოხერხდა: ${error.message}`);
  }
}

// ლინკ ტეგების წაშლა
export async function deleteLinkTags(blogId, options = {}) {
  try {
    const response = await fetch(`/api/blogs/linkTag/delete?blogId=${blogId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options), // { tagNames: [], tagUrls: [], deleteAll: false }
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "ლინკ ტეგების წაშლა ვერ მოხერხდა");
    }

    // Clear blog cache to ensure fresh data
    clearBlogsCache();

    return result;
  } catch (error) {
    throw new Error(`ლინკ ტეგების წაშლა ვერ მოხერხდა: ${error.message}`);
  }
}

// ლინკ ტეგების განახლება (სრული ჩანაცვლება)
export async function updateLinkTags(blogId, linkTags) {
  try {
    const response = await fetch(`/api/blogs/linkTag/update?blogId=${blogId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ linkTag: linkTags }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "ლინკ ტეგების განახლება ვერ მოხერხდა");
    }

    // Clear blog cache to ensure fresh data
    clearBlogsCache();

    return result;
  } catch (error) {
    throw new Error(`ლინკ ტეგების განახლება ვერ მოხერხდა: ${error.message}`);
  }
}

// ყველა ლინკ ტეგის წაშლა
export async function deleteAllLinkTags(blogId) {
  return deleteLinkTags(blogId, { deleteAll: true });
}

// ლინკ ტეგების მიღება კონკრეტული ბლოგისთვის
export async function getLinkTags(blogId) {
  try {
    const blog = await getBlog(blogId);
    return blog?.linkTag || [];
  } catch (error) {
    throw new Error(`ლინკ ტეგების მიღება ვერ მოხერხდა: ${error.message}`);
  }
}
