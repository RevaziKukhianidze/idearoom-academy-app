import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { addOffer } from "../../../services/apiOffers";

export async function POST(request) {
  try {
    const offerData = await request.json();

    if (!offerData || !offerData.title) {
      return NextResponse.json(
        { error: "Offer data is required (at minimum title)" },
        { status: 400 }
      );
    }

    // Add the offer and invalidate cache
    const result = await addOffer(offerData);

    // COMPREHENSIVE revalidation - be more aggressive
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidatePath("/offer", "layout");
    revalidatePath("/offer", "page");
    revalidatePath("/courses", "layout");
    revalidatePath("/courses", "page");
    revalidatePath("/blog", "layout");
    revalidatePath("/blog", "page");

    // Revalidate all dynamic routes
    revalidatePath("/offer/[offerId]", "layout");
    revalidatePath("/offer/[offerId]", "page");
    revalidatePath("/courses/[courseId]", "layout");
    revalidatePath("/courses/[courseId]", "page");

    // Revalidate all tags
    revalidateTag("offers");
    revalidateTag("courses");
    revalidateTag("blogs");

    const response = NextResponse.json({
      success: true,
      message: "შეთავაზება წარმატებით დაემატა და cache განახლდა",
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
    console.error("API Error in /api/offers/add:", error);
    return NextResponse.json(
      {
        error: error.message || "შეთავაზების დამატებისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
