import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { updateBlog } from "../../../services/apiBlogs";

export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID parameter is required" },
        { status: 400 }
      );
    }

    const blogData = await request.json();

    if (!blogData) {
      return NextResponse.json(
        { error: "Blog data is required" },
        { status: 400 }
      );
    }

    // Update the blog and invalidate cache
    const result = await updateBlog(parseInt(id), blogData);

    // AGGRESSIVELY Revalidate ALL Next.js cache and paths that might show blogs
    revalidatePath("/blog", "layout");
    revalidatePath("/blog", "page");
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidateTag("blogs");
    revalidateTag("blog");
    revalidateTag("all_blogs");

    // Revalidate specific blog page and all blog pages
    revalidatePath(`/blog/${id}`, "layout");
    revalidatePath(`/blog/${id}`, "page");

    // Force revalidate the entire blogs directory
    revalidatePath("/blog/[blogId]", "layout");
    revalidatePath("/blog/[blogId]", "page");

    // Also revalidate ALL blog pages since they might show related blogs
    revalidatePath("/blog");
    revalidatePath("/blog/[...slug]");

    // Revalidate paths that might cache blog lists
    revalidateTag("related-blogs");
    revalidateTag("latest-blogs");

    const response = NextResponse.json({
      success: true,
      message:
        "ბლოგი და მისი ტეგები წარმატებით განახლდა, cache განახლდა და გვერდები revalidate-ება",
      data: result.data,
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
    console.error("API Error in /api/blogs/update:", error);
    return NextResponse.json(
      {
        error: error.message || "ბლოგის განახლებისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
