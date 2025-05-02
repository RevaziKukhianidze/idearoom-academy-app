import { useState, useEffect } from "react";
import Headline from "./Headline";
import SeeAllButton from "./SeeAllButton";
import CourseItem from "./CourseItem";
import Link from "next/link";

// Loader Component
function CoursesLoader() {
  return (
    <section className="relative z-50 bg-white w-full h-screen">
      <div className="absolute spinner top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"></div>
    </section>
  );
}

export default function Courses() {
  // გამოიყენება loading state-ის მანეჯმენტისთვის
  const [isLoading, setIsLoading] = useState(true);

  // useEffect სიმულირებს მონაცემების ჩატვირთვას
  useEffect(() => {
    // მაგალითად, 2 წამში ჩატვირთვის დასრულება
    const timer = setTimeout(() => {
      setIsLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container pt-[72px] relative max-sm:max-w-[85%] mx-auto pb-8 max-md:py-9 md:pb-6">
      <h1 className="text-[20px] max-sm:text-[19px] text-center leading-[24px] mt-[72px] caps-text font-bold text-secondary-500">
        აირჩიე სასურველი კურსი და დარეგისტრირდი
      </h1>

      {isLoading ? (
        <CoursesLoader />
      ) : (
        <>
          <CourseItem />
          <div className="flex items-center justify-center text-center">
            <Link className="max-sm:w-full" href="/courses">
              <SeeAllButton buttonText="ყველას ნახვა" />
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
