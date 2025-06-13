import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { deleteCourse, getCourses } from "../../../services/apiCourses";

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

    // Delete the course and invalidate cache
    await deleteCourse(parseInt(id));

    // AGGRESSIVELY Revalidate ALL Next.js cache and paths that might show courses
    revalidatePath("/courses", "layout");
    revalidatePath("/courses", "page");
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidateTag("courses");
    revalidateTag("course");
    revalidateTag("all_courses");

    // Revalidate all individual course pages that might show related courses
    revalidatePath(`/courses/${id}`, "layout");
    revalidatePath(`/courses/${id}`, "page");

    // Force revalidate the entire courses directory - be MORE aggressive
    revalidatePath("/courses/[courseId]", "layout");
    revalidatePath("/courses/[courseId]", "page");

    // Also revalidate ALL course pages since they all show "other courses"
    revalidatePath("/courses");
    revalidatePath("/courses/[...slug]");

    // NEW: Revalidate each individual course detail page so that the
    // "other courses" section is regenerated without the deleted course.
    try {
      const remainingCourses = await getCourses();
      if (Array.isArray(remainingCourses)) {
        await Promise.all(
          remainingCourses.map((course) =>
            course?.id ? revalidatePath(`/courses/${course.id}`) : null
          )
        );
      }
    } catch (revalidateErr) {
      console.error(
        "Failed to revalidate individual course pages after deletion:",
        revalidateErr
      );
    }

    // Revalidate paths that might cache course lists
    revalidateTag("related-courses");
    revalidateTag("latest-courses");

    const response = NextResponse.json({
      success: true,
      message:
        "კურსი წარმატებით წაიშალა, cache განახლდა და გვერდები revalidate-ება",
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
    console.error("API Error in /api/courses/delete:", error);
    return NextResponse.json(
      {
        error: error.message || "კურსის წაშლისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
