import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { deleteBlog, getBlogs } from "../../../services/apiBlogs";

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Delete the blog and invalidate cache
    await deleteBlog(parseInt(id));

    // AGGRESSIVELY Revalidate ALL Next.js cache and paths that might show blogs
    revalidatePath("/blog", "layout");
    revalidatePath("/blog", "page");
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidateTag("blogs");
    revalidateTag("blog");
    revalidateTag("all_blogs");

    // Revalidate all individual blog pages that might show related blogs
    revalidatePath(`/blog/${id}`, "layout");
    revalidatePath(`/blog/${id}`, "page");

    // Force revalidate the entire blogs directory - be MORE aggressive
    revalidatePath("/blog/[blogId]", "layout");
    revalidatePath("/blog/[blogId]", "page");

    // Also revalidate ALL blog pages since they all show "other blogs"
    revalidatePath("/blog");
    revalidatePath("/blog/[...slug]");

    // NEW: Revalidate each individual blog detail page so that the
    // "other blogs" section is regenerated without the deleted blog.
    try {
      const remainingBlogs = await getBlogs();
      if (Array.isArray(remainingBlogs)) {
        await Promise.all(
          remainingBlogs.map((blog) =>
            blog?.id ? revalidatePath(`/blog/${blog.id}`) : null
          )
        );
      }
    } catch (revalidateErr) {
      console.error(
        "Failed to revalidate individual blog pages after deletion:",
        revalidateErr
      );
    }

    // Revalidate paths that might cache blog lists
    revalidateTag("related-blogs");
    revalidateTag("latest-blogs");

    const response = NextResponse.json({
      success: true,
      message:
        "ბლოგი წარმატებით წაიშალა, cache განახლდა და გვერდები revalidate-ება",
    });

    // Force browser to not cache this response and refresh pages
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    response.headers.set("Surrogate-Control", "no-store");

    return response;
  } catch (error) {
    console.error("API Error in /api/blogs/delete:", error);
    return NextResponse.json(
      {
        error: error.message || "ბლოგის წაშლისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
