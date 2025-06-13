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

    // Revalidate ALL Next.js cache and paths that might show offers
    revalidatePath("/offer", "layout");
    revalidatePath("/offer", "page");
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidateTag("offers");

    // Revalidate all individual offer pages that might show related offers
    revalidatePath("/offer/[offerId]", "layout");
    revalidatePath("/offer/[offerId]", "page");

    return NextResponse.json({
      success: true,
      message: "შეთავაზება წარმატებით დაემატა და cache განახლდა",
      data: result.data,
    });
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
