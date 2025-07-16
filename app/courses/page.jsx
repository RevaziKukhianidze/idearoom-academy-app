"use client";
import React, { useState, useEffect } from "react";
import { getCourses } from "../services/apiCourses";
import HeadTopCourse from "./_components/HeadTopCourse";
import CoursesPageCard from "../_components/shared/CoursesPageCard";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Set document title
    document.title = "კურსები - იდეარუმის აკადემია";
  }, []);

  // Load courses data
  useEffect(() => {
    async function loadCourses() {
      try {
        const coursesData = await getCourses();
        if (coursesData && Array.isArray(coursesData)) {
          setCourses(coursesData);
        }
      } catch (err) {
        console.error("Failed to load courses:", err);
        setError(err);
      }
    }

    loadCourses();
  }, []);

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
    <section className="container max-lg:max-w-[95%] mt-[128px] mx-auto">
      <HeadTopCourse />
      <div className="grid grid-cols-1  mx-auto md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8 mb-5">
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
