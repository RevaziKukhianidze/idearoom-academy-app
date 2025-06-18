import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import supabase, {
  executeWithTimeout,
  handleSupabaseError,
} from "../../../../services/supabase";

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("blogId");

    if (!blogId) {
      return NextResponse.json(
        { error: "blogId parameter is required" },
        { status: 400 }
      );
    }

    const { linkTag } = await request.json();

    if (!linkTag || !Array.isArray(linkTag)) {
      return NextResponse.json(
        { error: "linkTag array is required" },
        { status: 400 }
      );
    }

    // Get current blog to merge with existing linkTags
    const { data: currentBlog, error: fetchError } = await supabase
      .from("blogs")
      .select("linkTag")
      .eq("id", blogId)
      .single();

    if (fetchError) {
      throw handleSupabaseError(fetchError, "Fetch current blog");
    }

    // Merge existing tags with new tags (avoid duplicates)
    const existingTags = currentBlog.linkTag || [];
    const newTags = [...existingTags];

    linkTag.forEach((newTag) => {
      const exists = existingTags.some(
        (existing) =>
          existing.name === newTag.name && existing.url === newTag.url
      );
      if (!exists) {
        newTags.push(newTag);
      }
    });

    // Update blog with new linkTags
    const operation = supabase
      .from("blogs")
      .update({ linkTag: newTags })
      .eq("id", blogId)
      .select();

    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Add linkTags to blog"
    );

    if (error) {
      throw handleSupabaseError(error, "Add linkTags to blog");
    }

    // AGGRESSIVE cache invalidation and revalidation
    revalidatePath("/blog", "layout");
    revalidatePath("/blog", "page");
    revalidatePath(`/blog/${blogId}`, "layout");
    revalidatePath(`/blog/${blogId}`, "page");
    revalidatePath("/blog/[blogId]", "layout");
    revalidatePath("/blog/[blogId]", "page");
    revalidatePath("/", "layout");
    revalidatePath("/", "page");

    revalidateTag("blogs");
    revalidateTag("blog");
    revalidateTag("linkTags");
    revalidateTag(`blog-${blogId}`);

    const response = NextResponse.json({
      success: true,
      message: "ლინკ ტეგები წარმატებით დაემატა",
      data: data?.[0],
      addedTags: linkTag,
      totalTags: newTags.length,
    });

    // Force no-cache headers
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error("API Error in /api/blogs/linkTag/add:", error);
    return NextResponse.json(
      {
        error: error.message || "ლინკ ტეგების დამატებისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
