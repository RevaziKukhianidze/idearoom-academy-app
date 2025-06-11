import React from "react";
import { getOffers, getOfferById } from "../../services/apiOffers";
import OfferClient from "./_components/OfferClient";

// Generate metadata for the page
export async function generateMetadata({ params }) {
  try {
    const offerId = params.offerId;
    const offer = await getOfferById(parseInt(offerId));

    if (!offer) {
      return {
        title: "შეთავაზება ვერ მოიძებნა",
        description: "მოთხოვნილი შეთავაზება არ არსებობს ან წაშლილია",
      };
    }

    // Extract description from offer text or course details
    const description =
      offer.text ||
      (Array.isArray(offer.course_details) && offer.course_details.length > 0
        ? offer.course_details[0]
        : "განსაკუთრებული შეთავაზება იდეარუმის აკადემიისგან - ისწავლე ახალი უნარები ფასდაკლებით");

    // Try different image fields that might be used
    const rawImageUrl =
      offer.image ||
      offer.section_image ||
      offer.course_image ||
      offer.banner_image;

    // Ensure image URL is absolute
    const imageUrl = rawImageUrl?.startsWith("http")
      ? rawImageUrl
      : rawImageUrl?.startsWith("/")
      ? `https://academy.idearoom.ge${rawImageUrl}`
      : rawImageUrl
      ? `https://academy.idearoom.ge/${rawImageUrl}`
      : "https://academy.idearoom.ge/coverweb.webp"; // fallback image

    return {
      title: offer.title,
      description: description,
      openGraph: {
        title: offer.title,
        description: description,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: offer.title,
          },
        ],
        type: "website",
        locale: "ka_GE",
        url: `https://academy.idearoom.ge/offer/${offerId}`,
        siteName: "იდეარუმის აკადემია",
      },
      twitter: {
        card: "summary_large_image",
        title: offer.title,
        description: description,
        images: [imageUrl],
      },
      robots: {
        follow: true,
        index: true,
      },
    };
  } catch (error) {
    return {
      title: "შეთავაზება",
      description: "იდეარუმის აკადემიის შეთავაზებები",
    };
  }
}

// Helper functions for data processing
function processData(data) {
  if (Array.isArray(data)) return data;
  if (data == null) return [];
  if (typeof data === "string") {
    try {
      const trimmedData = data.trim();
      if (
        (trimmedData.startsWith("[") && trimmedData.endsWith("]")) ||
        (trimmedData.startsWith("{") && trimmedData.endsWith("}"))
      ) {
        return JSON.parse(trimmedData);
      }
      return [trimmedData];
    } catch (e) {
      return [];
    }
  }
  return [];
}

function validateSyllabusContent(content) {
  if (!Array.isArray(content)) return [String(content)];
  return content.map((item) => String(item));
}

// Main component for the offer page
export default async function OfferPage({ params, searchParams }) {
  try {
    const offerId = params.offerId;
    const activeTab = searchParams?.tab || "details";

    // Fetch offer data
    const offer = await getOfferById(parseInt(offerId));

    if (!offer) {
      return (
        <div className="container max-w-[95%] mx-auto px-4 py-10 mt-[128px]">
          <div className="bg-white h-[475px] rounded-[20px] p-8">
            <h1 className="text-2xl font-bold">შეთავაზება ვერ მოიძებნა</h1>
          </div>
        </div>
      );
    }

    // Get related offers
    const allOffers = await getOffers();
    const relatedOffers = allOffers
      .filter((o) => o.id !== parseInt(offerId))
      .slice(0, 4);

    // Process syllabus data
    let syllabusItems = [];
    const titles = processData(offer.syllabus_title);
    const contents = processData(offer.syllabus_content);

    if (Array.isArray(titles) && titles.length > 0) {
      syllabusItems = titles.map((title, index) => {
        let contentArray = [];
        if (Array.isArray(contents) && contents.length > index) {
          contentArray = validateSyllabusContent(contents[index]);
        }
        return {
          title: `ლექცია ${index + 1}: ${title}`,
          content: contentArray,
        };
      });
    } else if (Array.isArray(contents) && contents.length > 0) {
      syllabusItems = contents.map((contentArray, index) => ({
        title: `ლექცია ${index + 1}`,
        content: validateSyllabusContent(contentArray),
      }));
    }

    if (syllabusItems.length === 0) {
      syllabusItems = [
        {
          title: "ლექცია 1",
          content: ["შინაარსი 1", "შინაარსი 2"],
        },
      ];
    }

    // Process other data
    const course_details = processData(offer.course_details);
    const lecturers = processData(offer.lecturers);
    const lecturers_details = processData(offer.lecturers_details);

    // Ensure start_course has a default value
    if (!offer.start_course) {
      offer.start_course = "მალე დაიწყება";
    }

    return (
      <OfferClient
        offer={offer}
        relatedOffers={relatedOffers}
        syllabusItems={syllabusItems}
        course_details={course_details}
        lecturers={lecturers}
        lecturers_details={lecturers_details}
        activeTab={activeTab}
      />
    );
  } catch (error) {
    return (
      <div className="container max-w-[95%] mx-auto px-4 py-10 mt-[128px]">
        <div className="bg-white h-[475px] rounded-[20px] p-8">
          <h1 className="text-2xl font-bold">შეთავაზება ვერ მოიძებნა</h1>
        </div>
      </div>
    );
  }
}

// Generate static paths for the generation - simplified for faster builds
export async function generateStaticParams() {
  // Return empty array to force dynamic rendering during build
  // This prevents build hanging issues with external API calls
  return [];
}
