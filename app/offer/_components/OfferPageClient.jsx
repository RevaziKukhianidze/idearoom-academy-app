"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import HeadTopOffer from "../../_components/HeadTopOffer";
import { getOffers } from "../../services/apiOffers";

// Force refresh cache and reload page to get latest data from Supabase
const forceRefreshData = async () => {
  try {
    // Call force-refresh API to clear all caches
    await fetch("/api/force-refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Clear browser cache
    if (typeof window !== "undefined" && "caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }

    // Reload page to get fresh data (silent reload)
    setTimeout(() => {
      window.location.reload();
    }, 100);
  } catch (error) {
    console.error("Error refreshing data:", error);
  }
};

// OffersLoader კომპონენტი
function OffersLoader() {
  return (
    <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
      <div className="spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default function OfferPageClient({
  offers: initialOffers,
  error: initialError,
}) {
  const [courses, setCourses] = useState(initialOffers);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(initialError);

  useEffect(() => {
    // Set document title
    document.title = "შეთავაზება - იდეარუმის აკადემია";
  }, []);

  // Auto refresh data from Supabase and update local state - MORE AGGRESSIVE
  useEffect(() => {
    async function refreshOffers() {
      try {
        setIsLoading(true);

        // Clear all possible caches first
        if (typeof window !== "undefined" && "caches" in window) {
          caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });
        }

        // Clear sessionStorage to force refresh
        sessionStorage.clear();

        // Call force-refresh API
        await fetch("/api/force-refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Wait a moment then fetch fresh data
        setTimeout(async () => {
          try {
            const freshOffers = await getOffers();
            if (freshOffers && Array.isArray(freshOffers)) {
              setCourses(freshOffers);
            }
            setIsLoading(false);
          } catch (err) {
            console.error("Failed to refresh offers:", err);
            setIsLoading(false);
            // Force page reload as fallback
            window.location.reload();
          }
        }, 500);
      } catch (err) {
        console.error("Failed to refresh offers:", err);
        setIsLoading(false);
        // Force page reload as fallback
        window.location.reload();
      }
    }

    // Always refresh when component mounts, no session storage check
    refreshOffers();
  }, []);

  // Also add a periodic check for new data every 30 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const freshOffers = await getOffers();
        if (
          freshOffers &&
          Array.isArray(freshOffers) &&
          freshOffers.length !== courses.length
        ) {
          // If the count changed, refresh the page
          window.location.reload();
        }
      } catch (err) {
        console.error("Periodic check failed:", err);
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [courses.length]);

  if (isLoading) {
    return (
      <div className="container mx-auto max-sm:max-w-[95%] mt-[80px] py-8">
        <div className="mt-2">
          <HeadTopOffer>
            <p className="cursor-pointer">შეთავაზება</p>
          </HeadTopOffer>
        </div>
        <OffersLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto max-sm:max-w-[95%] mt-[80px] py-8">
        <div className="mt-2">
          <HeadTopOffer>
            <p className="cursor-pointer">შეთავაზება</p>
          </HeadTopOffer>
        </div>
        <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
          <h1 className="text-xl font-bold">
            შეთავაზებების ჩატვირთვაში მოხდა შეცდომა
          </h1>
        </div>
      </div>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="container mx-auto max-sm:max-w-[95%] mt-[80px] py-8">
        <div className="mt-2">
          <HeadTopOffer>
            <p className="cursor-pointer">შეთავაზება</p>
          </HeadTopOffer>
        </div>
        <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
          <h1 className="text-xl font-bold">შეთავაზებები ჯერ არ არის</h1>
        </div>
      </div>
    );
  }

  // Sort courses by ID in descending order
  const sortedCourses = [...courses].sort((a, b) => b.id - a.id);

  return (
    <div className="container mx-auto max-lg:max-w-[95.5%] mt-[80px] py-8">
      <div className="mt-2">
        <HeadTopOffer>
          <p className="cursor-pointer">შეთავაზება</p>
        </HeadTopOffer>
      </div>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCourses.map((course) => (
          <Link key={course.id} href={`/offer/${course.id}`} prefetch={false}>
            <div className="bg-white blog-shadow relative rounded-[20px] p-6">
              <div className="relative">
                <img
                  className="mb-5 object-cover h-[284px] rounded-[12px] w-full relative"
                  src={course.image || course.section_image || "/coverweb.webp"}
                  alt={course.title}
                  loading="lazy"
                />
                <p className="absolute max-sm:py-[5px] max-sm:px-4 max-sm:text-sm bg-[#FDB927] top-[10px] right-[10px] px-5 py-[5px] shadow-lg pt-[10px] rounded-full text-[#383838] font-bold caps-text">
                  -{course.discount_percentage}%
                </p>
              </div>

              <h2 className="text-lg h-[56px] max-md:text-base mt-6 text-secondary-800 font-[600] mb-2 caps-text">
                {course.title}
              </h2>
              <p className="text-[#434a53] max-md:text-[13px] text-sm caps-text mb-6 line-clamp-2">
                {course.text}
              </p>
              <div className="w-full h-[1px] bg-[#EFF2F5] mb-6"></div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-2">
                  <span className="text-[#383838] text-xl lg:mr-2 font-bold">
                    {course.price} ₾
                  </span>
                  {!course.old_price !== "" && Number(course.old_price) > 0 && (
                    <span className="text-[#d95a5a] font-[500] text-xl line-through">
                      {course.old_price} ₾
                    </span>
                  )}
                </div>

                <Button
                  className="bg-primary-500 absolute right-[45px] bottom-[20px] max-md:right-[24px] max-lg:px-4 max-md:px-6 hover:bg-primary-600 text-white py-[18px] px-6 rounded-[10px] font-[500] pt-[22px] transition-colors duration-200 caps-text"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `/offer/${course.id}`;
                  }}
                >
                  დეტალურად
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
