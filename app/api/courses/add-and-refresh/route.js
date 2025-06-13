import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { addCourse, clearAllCache } from "../../../services/apiCourses";

export async function POST(request) {
  try {
    const courseData = await request.json();

    if (!courseData || !courseData.title) {
      return NextResponse.json(
        { error: "Course data is required (at minimum title)" },
        { status: 400 }
      );
    }

    // Add the course
    const result = await addCourse(courseData);

    // Wait a moment for database to update
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Clear cache once only
    clearAllCache();

    // Aggressive revalidation of all paths
    const pathsToRevalidate = ["/", "/courses", "/offer"];

    for (const path of pathsToRevalidate) {
      revalidatePath(path, "layout");
      revalidatePath(path, "page");
    }

    // Revalidate dynamic routes
    revalidatePath("/courses/[courseId]", "layout");
    revalidatePath("/courses/[courseId]", "page");
    revalidatePath("/offer/[offerId]", "layout");
    revalidatePath("/offer/[offerId]", "page");

    // Revalidate all tags
    revalidateTag("courses");
    revalidateTag("offers");

    return NextResponse.json({
      success: true,
      message: "კურსი წარმატებით დაემატა და ყველა cache განახლდა",
      data: result.data,
      shouldRefresh: true,
    });
  } catch (error) {
    console.error("API Error in /api/courses/add-and-refresh:", error);
    return NextResponse.json(
      {
        error: error.message || "კურსის დამატებისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
