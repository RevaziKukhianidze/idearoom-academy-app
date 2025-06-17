import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { clearAllCache as clearCoursesCache } from "../../services/apiCourses";
import { clearAllCache as clearOffersCache } from "../../services/apiOffers";
import { clearBlogsCache } from "../../services/apiBlogs";

export async function POST(request) {
  try {
    // Clear all server-side caches
    clearCoursesCache();
    clearOffersCache();
    clearBlogsCache();

    // Force revalidate ALL pages that might show courses, offers, or blogs
    const pathsToRevalidate = ["/", "/courses", "/offer", "/blog"];

    // Revalidate each path with both layout and page
    for (const path of pathsToRevalidate) {
      revalidatePath(path, "layout");
      revalidatePath(path, "page");
    }

    // Revalidate dynamic routes
    revalidatePath("/courses/[courseId]", "layout");
    revalidatePath("/courses/[courseId]", "page");
    revalidatePath("/offer/[offerId]", "layout");
    revalidatePath("/offer/[offerId]", "page");
    revalidatePath("/blog/[blogId]", "layout");
    revalidatePath("/blog/[blogId]", "page");

    // Revalidate all tags
    revalidateTag("courses");
    revalidateTag("offers");
    revalidateTag("blogs");
    revalidateTag("linkTags");

    console.log(
      "Force refresh completed - all caches cleared and pages revalidated"
    );

    // Send response with refresh instruction
    return NextResponse.json({
      success: true,
      message: "ყველა cache გაიწმინდა! გვერდი ახლავე განახლდება...",
      shouldRefresh: true,
    });
  } catch (error) {
    console.error("API Error in /api/force-refresh:", error);
    return NextResponse.json(
      {
        error: error.message || "Force refresh-ისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
