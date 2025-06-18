import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import supabase, {
  executeWithTimeout,
  handleSupabaseError,
} from "../../../../services/supabase";

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("blogId");

    if (!blogId) {
      return NextResponse.json(
        { error: "blogId parameter is required" },
        { status: 400 }
      );
    }

    const { tagNames, tagUrls, deleteAll } = await request.json();

    // Get current blog
    const { data: currentBlog, error: fetchError } = await supabase
      .from("blogs")
      .select("linkTag")
      .eq("id", blogId)
      .single();

    if (fetchError) {
      throw handleSupabaseError(fetchError, "Fetch current blog");
    }

    const existingTags = currentBlog.linkTag || [];
    let newTags = [...existingTags];

    if (deleteAll) {
      // Delete all tags
      newTags = [];
    } else if (tagNames && Array.isArray(tagNames)) {
      // Delete by tag names
      newTags = existingTags.filter((tag) => !tagNames.includes(tag.name));
    } else if (tagUrls && Array.isArray(tagUrls)) {
      // Delete by tag URLs
      newTags = existingTags.filter((tag) => !tagUrls.includes(tag.url));
    } else {
      return NextResponse.json(
        {
          error:
            "Either tagNames, tagUrls array, or deleteAll flag is required",
        },
        { status: 400 }
      );
    }

    // Update blog with filtered linkTags
    const operation = supabase
      .from("blogs")
      .update({ linkTag: newTags })
      .eq("id", blogId)
      .select();

    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Delete linkTags from blog"
    );

    if (error) {
      throw handleSupabaseError(error, "Delete linkTags from blog");
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

    const deletedCount = existingTags.length - newTags.length;

    const response = NextResponse.json({
      success: true,
      message: `${deletedCount} ლინკ ტეგი წარმატებით წაიშალა`,
      data: data?.[0],
      deletedCount,
      remainingTags: newTags.length,
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
    console.error("API Error in /api/blogs/linkTag/delete:", error);
    return NextResponse.json(
      {
        error: error.message || "ლინკ ტეგების წაშლისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
