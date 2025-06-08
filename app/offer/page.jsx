"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { apiDoubleCourse } from "../services/apiDoubleCourse";
import HeadTopOffer from "../_components/HeadTopOffer";

export default function Page() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = useCallback(async () => {
    try {
      const data = await apiDoubleCourse();

      // ასლის შექმნა და დალაგება (არ შეცვალოთ ორიგინალი მასივი)
      const sortedCourses = [...data].sort((a, b) => b.id - a.id);
      setCourses(sortedCourses);
    } catch (err) {
      // Store a more user-friendly error message
      setError(
        err.message || "Failed to load courses. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    document.title = "idearoom | შეთავაზება";

    // გამოვიყენოთ AbortController მოთხოვნის გასაუქმებლად საჭიროების შემთხვევაში
    const abortController = new AbortController();

    fetchCourses();

    return () => {
      abortController.abort();
    };
  }, [fetchCourses]);

  if (loading) {
    return (
      <div>
        <section className="relative z-50 bg-white w-full h-screen">
          <div className="absolute spinner top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"></div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto max-sm:max-w-[90%] mt-[120px] py-8 text-center">
        <div className="bg-red-50 p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold text-red-700 mb-2">
            Error loading courses
          </h2>
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => {
              setLoading(true);
              setError(null);
              fetchCourses();
            }}
            className="mt-4 bg-primary-500 text-white py-2 px-6 rounded-lg hover:bg-primary-600 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-sm:max-w-[90%] mt-[80px] py-8">
      <div className="mt-2">
        <HeadTopOffer>
          <p className="cursor-pointer">შეთავაზება</p>
        </HeadTopOffer>
      </div>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white blog-shadow relative rounded-[20px] p-6"
          >
            <div className="relative">
              <img
                className="mb-5 w-full relative"
                src={course.image}
                alt={`course-image-${course.id}`}
                loading="lazy" // დავამატოთ lazy loading ზედმეტი რექვესტების თავიდან ასაცილებლად
              />
              <p className="absolute max-sm:py-[5px] max-sm:px-4 max-sm:text-sm bg-[#FDB927] top-[10px] right-[10px] px-5 py-[5px] shadow-lg pt-[10px] rounded-full text-[#383838] font-bold caps-text">
                -{course.discount_percentage}%
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {course.course_category.map((category, id) => {
                return (
                  <div key={id}>
                    <p className="text-sm max-lg:text-xs caps-text font-[500] text-[#383838] bg-[#f4f6f7] py-[6px] px-4 rounded-full">
                      {category}
                    </p>
                  </div>
                );
              })}
            </div>
            <h2 className="text-lg mt-6 text-secondary-800 font-[600] mb-2 caps-text">
              {course.title}
            </h2>
            <p className="text-[#434a53] text-sm caps-text mb-6 line-clamp-2">
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
}
