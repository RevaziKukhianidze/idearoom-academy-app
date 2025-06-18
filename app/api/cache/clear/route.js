import { NextResponse } from "next/server";
import { clearAllCache as clearCoursesCache } from "../../../services/apiCourses";
import { clearAllCache as clearOffersCache } from "../../../services/apiOffers";
import { clearBlogsCache } from "../../../services/apiBlogs";

export async function POST(request) {
  try {
    // Clear all caches
    clearCoursesCache();
    clearOffersCache();
    clearBlogsCache();

    console.log("All caches cleared manually via API");

    return NextResponse.json({
      success: true,
      message: "ყველა cache წარმატებით გაიწმინდა! ახლა გვერდი განახლეთ.",
    });
  } catch (error) {
    console.error("API Error in /api/cache/clear:", error);
    return NextResponse.json(
      {
        error: error.message || "Cache-ის გაწმენდისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
