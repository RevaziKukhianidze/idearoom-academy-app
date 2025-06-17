import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import supabase, {
  executeWithTimeout,
  handleSupabaseError,
} from "../../../../services/supabase";

export async function PUT(request) {
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

    if (!Array.isArray(linkTag)) {
      return NextResponse.json(
        { error: "linkTag must be an array" },
        { status: 400 }
      );
    }

    // Validate linkTag structure
    const isValidStructure = linkTag.every(
      (tag) =>
        typeof tag === "object" &&
        tag !== null &&
        typeof tag.name === "string" &&
        typeof tag.url === "string"
    );

    if (!isValidStructure) {
      return NextResponse.json(
        { error: "Each linkTag must have 'name' and 'url' properties" },
        { status: 400 }
      );
    }

    // Get current blog for comparison
    const { data: currentBlog, error: fetchError } = await supabase
      .from("blogs")
      .select("linkTag")
      .eq("id", blogId)
      .single();

    if (fetchError) {
      throw handleSupabaseError(fetchError, "Fetch current blog");
    }

    const oldTags = currentBlog.linkTag || [];

    // Update blog with new linkTags (complete replacement)
    const operation = supabase
      .from("blogs")
      .update({ linkTag })
      .eq("id", blogId)
      .select();

    const { data, error } = await executeWithTimeout(
      operation,
      15000,
      "Update linkTags in blog"
    );

    if (error) {
      throw handleSupabaseError(error, "Update linkTags in blog");
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

    // Calculate changes
    const oldCount = oldTags.length;
    const newCount = linkTag.length;
    const changeType =
      newCount > oldCount
        ? "დამატება"
        : newCount < oldCount
        ? "წაშლა"
        : "განახლება";

    const response = NextResponse.json({
      success: true,
      message: `ლინკ ტეგები წარმატებით განახლდა (${changeType})`,
      data: data?.[0],
      changes: {
        oldCount,
        newCount,
        changeType,
        difference: newCount - oldCount,
      },
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
    console.error("API Error in /api/blogs/linkTag/update:", error);
    return NextResponse.json(
      {
        error: error.message || "ლინკ ტეგების განახლებისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
