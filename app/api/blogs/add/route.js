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

    // Revalidate ALL Next.js cache and paths that might show blogs
    revalidatePath("/blog", "layout");
    revalidatePath("/blog", "page");
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidateTag("blogs");

    // Revalidate all individual blog pages that might show related blogs
    revalidatePath("/blog/[blogId]", "layout");
    revalidatePath("/blog/[blogId]", "page");

    return NextResponse.json({
      success: true,
      message: "ბლოგი წარმატებით დაემატა და cache განახლდა",
      data: result.data,
    });
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
