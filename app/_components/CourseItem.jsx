"use client";
import React, { useEffect, useState } from "react";
import arrowRight from "../../public/arrowRight.svg";
import { Button } from "../../components/ui/button";
import { getLimitedCourse } from "../services/apiCourses";
import Link from "next/link";
import Image from "next/image";
import CourseCard from "./shared/CourseCard";
export default function CourseItem() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getLimitedCourse();
      setCourses(data);
    }

    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mt-8 md:mt-12 mb-5">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
