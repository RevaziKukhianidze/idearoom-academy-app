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

    // Revalidate ALL Next.js cache and paths that might show courses
    revalidatePath("/courses", "layout");
    revalidatePath("/courses", "page");
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidateTag("courses");

    // Revalidate all individual course pages that might show related courses
    revalidatePath("/courses/[courseId]", "layout");
    revalidatePath("/courses/[courseId]", "page");

    return NextResponse.json({
      success: true,
      message: "კურსი წარმატებით დაემატა და cache განახლდა",
      data: result.data,
    });
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
