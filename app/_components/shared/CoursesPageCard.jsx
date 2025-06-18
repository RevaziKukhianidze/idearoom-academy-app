"use client";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CoursesPageCard({ course }) {
  return (
    <div className="bg-white h-auto blog-shadow transition-all duration-300 rounded-[18px] overflow-hidden border border-gray-100">
      <div className="relative">
        <img
          className="w-full object-cover"
          src={course.image || "/coverweb.webp"}
          alt={`course-image-${course.id}`}
        />
      </div>

      <div className="p-6">
        <h3 className="text-[18px] upper-text caps-text font-bold text-[#434a53] mb-3 mt-1 line-clamp-2 leading-tight">
          {course.title}
        </h3>

        <div className="flex items-center text-gray-600">
          <span className="text-sm caps-text">ტრენერი: {course.lecturer}</span>
        </div>

        <div className="flex relative mt-6 items-center justify-between">
          <div className="flex items-center">
            <span className="text-[18px] font-bold text-[#434a53] bg-primary-100 mr-4 rounded-full px-3 py-1">
              {course.price} ₾
            </span>
            {!course.oldprice !== "" && Number(course.oldprice) > 0 && (
              <span className="text-lg text-[#d95a5a] font-[500] line-through">
                {course.oldprice} ₾
              </span>
            )}
          </div>
          <Link href={`/courses/${course.id}`}>
            <Button className="bg-primary-500 hover:bg-primary-600 text-white py-[18px] px-6 rounded-[10px] font-[500] pt-[22px]   transition-colors duration-200">
              დეტალურად
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
