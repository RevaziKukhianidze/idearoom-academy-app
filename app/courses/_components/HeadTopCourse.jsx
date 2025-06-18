import React from "react";
import HomeIcon from "../../../public/homeIcon.svg";
import rightArrow from "../../../public/rightArrow.svg";
import Link from "next/link";
import Image from "next/image";

export default function HeadTopCourse({ children, isCoursesPage = true }) {
  return (
    <div className="flex flex-wrap max-sm:mb-7 gap-3 items-center sm:my-7">
      <Link href="/">
        <Image
          className="w-[14px] h-[12px] sm:w-[16px] sm:h-[14px]"
          src={HomeIcon}
          alt="homeIcon-svg"
        />
      </Link>
      <Image className="mt-[2px]" src={rightArrow} alt="rightArrow-svg" />

      {isCoursesPage ? (
        <Link href="/courses">
          <p className="caps-text text-xs hover:underline sm:text-sm font-regular text-[#6A737D] mt-[5px]">
            კურსები
          </p>
        </Link>
      ) : (
        <Link href="/offer">
          <p className="caps-text text-xs hover:underline sm:text-sm font-regular text-[#6A737D] mt-[5px]">
            შეთავაზება
          </p>
        </Link>
      )}

      {children && (
        <>
          <Image className="mt-[2px]" src={rightArrow} alt="rightArrow-svg" />
          <div className="caps-text text-xs sm:text-sm font-regular text-[#6A737D] mt-[5px]">
            {children}
          </div>
        </>
      )}
    </div>
  );
}
