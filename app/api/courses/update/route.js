import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { updateCourse } from "../../../services/apiCourses";

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

    const courseData = await request.json();

    if (!courseData) {
      return NextResponse.json(
        { error: "Course data is required" },
        { status: 400 }
      );
    }

    // Update the course and invalidate cache
    const result = await updateCourse(parseInt(id), courseData);

    // COMPREHENSIVE revalidation - be more aggressive for updates
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidatePath("/courses", "layout");
    revalidatePath("/courses", "page");
    revalidatePath("/offer", "layout");
    revalidatePath("/offer", "page");
    revalidatePath("/blog", "layout");
    revalidatePath("/blog", "page");

    // Revalidate specific course page and all course pages
    revalidatePath(`/courses/${id}`, "layout");
    revalidatePath(`/courses/${id}`, "page");

    // Force revalidate the entire courses directory
    revalidatePath("/courses/[courseId]", "layout");
    revalidatePath("/courses/[courseId]", "page");
    revalidatePath("/offer/[offerId]", "layout");
    revalidatePath("/offer/[offerId]", "page");

    // Also revalidate ALL course pages since they might show related courses
    revalidatePath("/courses");
    revalidatePath("/courses/[...slug]");

    // Revalidate all tags
    revalidateTag("courses");
    revalidateTag("offers");
    revalidateTag("blogs");
    revalidateTag("course");
    revalidateTag("all_courses");
    revalidateTag("related-courses");
    revalidateTag("latest-courses");

    const response = NextResponse.json({
      success: true,
      message:
        "კურსი წარმატებით განახლდა, cache განახლდა და გვერდები revalidate-ება",
      data: result.data,
      shouldRefresh: true, // Signal client to refresh
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
    console.error("API Error in /api/courses/update:", error);
    return NextResponse.json(
      {
        error: error.message || "კურსის განახლებისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
