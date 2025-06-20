import React from "react";
import Link from "next/link";
import { getOffers } from "../services/apiOffers";
import OfferPageClient from "./_components/OfferPageClient";

export const metadata = {
  title: "შეთავაზება",
  description:
    "იდეარუმის აკადემიის განსაკუთრებული შეთავაზებები - ისწავლე ახალი უნარები ფასდაკლებით. ციფრული მარკეტინგი, SEO, SMM და სხვა კურსები.",
  openGraph: {
    title: "შეთავაზება - იდეარუმის აკადემია",
    description:
      "იდეარუმის აკადემიის განსაკუთრებული შეთავაზებები - ისწავლე ახალი უნარები ფასდაკლებით. ციფრული მარკეტინგი, SEO, SMM და სხვა კურსები.",
    images: [
      {
        url: "https://academy.idearoom.ge/coverweb.webp",
        width: 1200,
        height: 630,
        alt: "იდეარუმის აკადემიის შეთავაზებები",
      },
    ],
    type: "website",
    locale: "ka_GE",
    url: "https://academy.idearoom.ge/offer",
    siteName: "იდეარუმის აკადემია",
  },
  twitter: {
    card: "summary_large_image",
    title: "შეთავაზება - იდეარუმის აკადემია",
    description:
      "იდეარუმის აკადემიის განსაკუთრებული შეთავაზებები - ისწავლე ახალი უნარები ფასდაკლებით. ციფრული მარკეტინგი, SEO, SMM და სხვა კურსები.",
    images: ["https://academy.idearoom.ge/coverweb.webp"],
  },
  robots: {
    follow: true,
    index: true,
  },
};

// OffersLoader კომპონენტი
function OffersLoader() {
  return (
    <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
      <div className="spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default async function OffersPage() {
  try {
    const offers = await getOffers();
    return <OfferPageClient offers={offers || []} />;
  } catch (error) {
    console.error("Error loading offers:", error);
    return <OfferPageClient offers={[]} error={error} />;
  }
}
