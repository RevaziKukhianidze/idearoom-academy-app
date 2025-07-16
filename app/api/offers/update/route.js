import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { updateOffer } from "../../../services/apiOffers";

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

    const offerData = await request.json();

    if (!offerData) {
      return NextResponse.json(
        { error: "Offer data is required" },
        { status: 400 }
      );
    }

    // Update the offer and invalidate cache
    const result = await updateOffer(parseInt(id), offerData);

    // COMPREHENSIVE revalidation - be more aggressive for updates
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidatePath("/offer", "layout");
    revalidatePath("/offer", "page");
    revalidatePath("/courses", "layout");
    revalidatePath("/courses", "page");
    revalidatePath("/blog", "layout");
    revalidatePath("/blog", "page");

    // Revalidate specific offer page and all offer pages
    revalidatePath(`/offer/${id}`, "layout");
    revalidatePath(`/offer/${id}`, "page");

    // Force revalidate the entire offers directory
    revalidatePath("/offer/[offerId]", "layout");
    revalidatePath("/offer/[offerId]", "page");
    revalidatePath("/courses/[courseId]", "layout");
    revalidatePath("/courses/[courseId]", "page");

    // Also revalidate ALL offer pages since they might show related offers
    revalidatePath("/offer");
    revalidatePath("/offer/[...slug]");

    // Revalidate all tags
    revalidateTag("offers");
    revalidateTag("courses");
    revalidateTag("blogs");
    revalidateTag("offer");
    revalidateTag("all_offers");
    revalidateTag("related-offers");
    revalidateTag("latest-offers");

    const response = NextResponse.json({
      success: true,
      message:
        "შეთავაზება წარმატებით განახლდა, cache განახლდა და გვერდები revalidate-ება",
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
    console.error("API Error in /api/offers/update:", error);
    return NextResponse.json(
      {
        error: error.message || "შეთავაზების განახლებისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
