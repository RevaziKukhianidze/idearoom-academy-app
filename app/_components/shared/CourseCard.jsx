"use client";
import arrowRight from "../../../public/arrowRight.svg";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <Link href={`/courses/${course.id}`} key={course.id}>
      <div className="bg-white group relative card-shadow-inner duration-500 transition-all rounded-[16px] flex flex-col">
        <div className="relative w-full pt-[65%] overflow-hidden rounded-t-[16px]">
          <img
            className="object-cover absolute top-0 left-0 w-full h-full rounded-tl-[16px] rounded-tr-[16px]"
            src={course.image}
            alt={`course-image-${course.id}`}
          />
        </div>
        <div className="p-3 md:p-4 flex flex-col flex-grow">
          <h3 className="text-base mt-2 font-bold text-secondary-500 caps-text line-clamp-2">
            {course.title}
          </h3>
          <p className="mt-4 md:mt-2 text-secondary-500 font-regular text-xs md:text-sm mb-3 md:mb-5">
            ტრენერი: {course.lecturer}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex items-center">
                <p className="font-bold text-secondary-500 text-base md:text-lg">
                  {course.price} ₾
                </p>
                <span className="ml-2 line-through text-xs md:text-sm text-[#838383] font-bold">
                  {course.oldprice} ₾
                </span>
              </div>
              <div className="bg-primary-500 group-hover:bg-primary-600 duration-300 transition-all rounded-full absolute right-[10px] bottom-[10px]">
                <Image
                  className="w-[40px] p-1"
                  src={arrowRight}
                  alt="arrowRight svg"
                />
              </div>
            </div>
            {course.showButton && (
              <Button className="caps-text text-[10px] md:text-[12px] h-[26px] md:h-[32px] max-sm:text-[11px] w-[110px] md:w-[124px] font-medium">
                რეგისტრაცია
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
