import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { deleteOffer, getOffers } from "../../../services/apiOffers";

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

    // Delete the offer and invalidate cache
    await deleteOffer(parseInt(id));

    // AGGRESSIVELY Revalidate ALL Next.js cache and paths that might show offers
    revalidatePath("/offer", "layout");
    revalidatePath("/offer", "page");
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidateTag("offers");
    revalidateTag("offer");
    revalidateTag("all_offers");

    // Revalidate all individual offer pages that might show related offers
    revalidatePath(`/offer/${id}`, "layout");
    revalidatePath(`/offer/${id}`, "page");

    // Force revalidate the entire offers directory - be MORE aggressive
    revalidatePath("/offer/[offerId]", "layout");
    revalidatePath("/offer/[offerId]", "page");

    // Also revalidate ALL offer pages since they all show "other offers"
    revalidatePath("/offer");
    revalidatePath("/offer/[...slug]");

    // Revalidate paths that might cache offer lists
    revalidateTag("related-offers");
    revalidateTag("latest-offers");

    // NEW: Revalidate every remaining individual offer page so their
    // "other offers" სექცია აღარ აჩვენებს წაშლილ შეთავაზებას.
    try {
      const remainingOffers = await getOffers();
      if (Array.isArray(remainingOffers)) {
        await Promise.all(
          remainingOffers.map((o) =>
            o?.id ? revalidatePath(`/offer/${o.id}`) : null
          )
        );
      }
    } catch (err) {
      console.error(
        "Failed to revalidate individual offer pages after deletion:",
        err
      );
    }

    const response = NextResponse.json({
      success: true,
      message:
        "შეთავაზება წარმატებით წაიშალა, cache განახლდა და გვერდები revalidate-ება",
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
    console.error("API Error in /api/offers/delete:", error);
    return NextResponse.json(
      {
        error: error.message || "შეთავაზების წაშლისას მოხდა შეცდომა",
      },
      { status: 500 }
    );
  }
}
