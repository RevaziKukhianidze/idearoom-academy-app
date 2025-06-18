"use client";
import React, { useState, useEffect } from "react";
import { getCourses } from "../services/apiCourses";
import HeadTopCourse from "./_components/HeadTopCourse";
import CoursesPageCard from "../_components/shared/CoursesPageCard";

// CoursesLoader კომპონენტი
function CoursesLoader() {
  return (
    <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
      <div className="spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Set document title
    document.title = "კურსები - იდეარუმის აკადემია";

    async function fetchCourses() {
      try {
        const data = await getCourses();
        setCourses(data || []);
      } catch (err) {
        setError(err);
        console.error("Error loading courses:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (isLoading) {
    return (
      <section className="container max-sm:max-w-[95%] mt-[128px] mx-auto">
        <HeadTopCourse />
        <CoursesLoader />
      </section>
    );
  }

  if (error) {
    return (
      <section className="container max-sm:max-w-[95%] mt-[128px] mx-auto">
        <HeadTopCourse />
        <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
          <h1 className="text-xl font-bold">
            კურსების ჩატვირთვაში მოხდა შეცდომა
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="container max-sm:max-w-[95%] mt-[128px] mx-auto">
      <HeadTopCourse />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8 mb-5">
        {courses
          .slice()
          .reverse()
          .map((course) => (
            <CoursesPageCard key={course.id} course={course} />
          ))}
      </div>
    </section>
  );
}
