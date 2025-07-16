import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { addCourse } from "../../../services/apiCourses";

export async function POST(request) {
  try {
    const courseData = await request.json();

    if (!courseData || !courseData.title) {
      return NextResponse.json(
        { error: "Course data is required (at minimum title)" },
        { status: 400 }
      );
    }

    // Add the course and invalidate cache
    const result = await addCourse(courseData);

    // COMPREHENSIVE revalidation - be more aggressive
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidatePath("/courses", "layout");
    revalidatePath("/courses", "page");
    revalidatePath("/offer", "layout");
    revalidatePath("/offer", "page");
    revalidatePath("/blog", "layout");
    revalidatePath("/blog", "page");

    // Revalidate all dynamic routes
    revalidatePath("/courses/[courseId]", "layout");
    revalidatePath("/courses/[courseId]", "page");
    revalidatePath("/offer/[offerId]", "layout");
    revalidatePath("/offer/[offerId]", "page");

    // Revalidate all tags
    revalidateTag("courses");
    revalidateTag("offers");
    revalidateTag("blogs");

    const response = NextResponse.json({
      success: true,
      message: "კურსი წარმატებით დაემატა და cache განახლდა",
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
    console.error("API Error in /api/courses/add:", error);
    return NextResponse.json(
      {
        error: error.message || "კურსის დამატებისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
