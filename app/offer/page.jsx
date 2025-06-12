import React from "react";
import Link from "next/link";
import { getOffers } from "../services/apiOffers";
import HeadTopOffer from "../_components/HeadTopOffer";

export const metadata = {
  title: "შეთავაზებები",
  description:
    "იდეარუმის აკადემიის სპეციალური შეთავაზებები - ისწავლე ახალი უნარები ფასდაკლებით, მოიპოვე ღირებული ცოდნა ხელმისაწვდომ ფასებში",
  openGraph: {
    title: "შეთავაზებები - იდეარუმის აკადემია",
    description:
      "იდეარუმის აკადემიის სპეციალური შეთავაზებები - ისწავლე ახალი უნარები ფასდაკლებით",
    type: "website",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function OffersPage() {
  try {
    const courses = await getOffers();

    // Sort courses by ID in descending order
    const sortedCourses = [...courses].sort((a, b) => b.id - a.id);

    return (
      <div className="container mx-auto max-sm:max-w-[95%] mt-[80px] py-8">
        <div className="mt-2">
          <HeadTopOffer>
            <p className="cursor-pointer">შეთავაზება</p>
          </HeadTopOffer>
        </div>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white blog-shadow relative rounded-[20px] p-6"
            >
              <div className="relative">
                <img
                  className="mb-5 object-cover h-[284px] rounded-[12px] w-full relative"
                  src={course.image || course.section_image}
                  alt={course.title}
                  loading="lazy"
                />
                <p className="absolute max-sm:py-[5px] max-sm:px-4 max-sm:text-sm bg-[#FDB927] top-[10px] right-[10px] px-5 py-[5px] shadow-lg pt-[10px] rounded-full text-[#383838] font-bold caps-text">
                  -{course.discount_percentage}%
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {course.course_category &&
                  course.course_category.map((category, id) => {
                    return (
                      <div key={id}>
                        <p className="text-sm max-lg:text-xs caps-text font-[500] text-[#383838] bg-[#f4f6f7] py-[6px] px-4 rounded-full">
                          {category}
                        </p>
                      </div>
                    );
                  })}
              </div>
              <h2 className="text-lg max-md:text-base mt-6 text-secondary-800 font-[600] mb-2 caps-text">
                {course.title}
              </h2>
              <p className="text-[#434a53] max-md:text-[13px] text-sm caps-text mb-6 line-clamp-2">
                {course.text}
              </p>
              <div className="w-full h-[1px] bg-[#EFF2F5] mb-6"></div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-2">
                  <span className="text-[#383838] text-xl lg:mr-2 font-bold">
                    ₾ {course.price}
                  </span>
                  <span className="text-[#d95a5a] font-[500] text-xl line-through">
                    ₾ {course.old_price}
                  </span>
                </div>
                <Link href={`/offer/${course.id}`} prefetch={false}>
                  <button className="w-full rounded-[10px] bg-primary-500 text-[#fff] hover:bg-primary-600 duration-300  py-[12px] pt-[14px] text-sm caps-text font-bold px-5">
                    დეტალურად
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading offers:", error);
    return (
      <div className="container mx-auto max-sm:max-w-[90%] mt-[80px] py-8">
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
}
