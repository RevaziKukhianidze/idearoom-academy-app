import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { addBlog } from "../../../services/apiBlogs";

export async function POST(request) {
  try {
    const blogData = await request.json();

    if (!blogData || !blogData.title) {
      return NextResponse.json(
        { error: "Blog data is required (at minimum title)" },
        { status: 400 }
      );
    }

    // Add the blog and invalidate cache
    const result = await addBlog(blogData);

    // COMPREHENSIVE revalidation - be more aggressive
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidatePath("/blog", "layout");
    revalidatePath("/blog", "page");
    revalidatePath("/courses", "layout");
    revalidatePath("/courses", "page");
    revalidatePath("/offer", "layout");
    revalidatePath("/offer", "page");

    // Revalidate all dynamic routes
    revalidatePath("/blog/[blogId]", "layout");
    revalidatePath("/blog/[blogId]", "page");
    revalidatePath("/courses/[courseId]", "layout");
    revalidatePath("/courses/[courseId]", "page");
    revalidatePath("/offer/[offerId]", "layout");
    revalidatePath("/offer/[offerId]", "page");

    // Revalidate all tags
    revalidateTag("blogs");
    revalidateTag("courses");
    revalidateTag("offers");

    const response = NextResponse.json({
      success: true,
      message: "ბლოგი წარმატებით დაემატა და cache განახლდა",
      data: result.data,
      shouldRefresh: true, // Signal client to refresh
    });

    // Force browser to not cache this response
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    response.headers.set("Surrogate-Control", "no-store");

    return response;
  } catch (error) {
    console.error("API Error in /api/blogs/add:", error);
    return NextResponse.json(
      {
        error: error.message || "ბლოგის დამატებისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
