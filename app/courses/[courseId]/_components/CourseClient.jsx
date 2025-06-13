"use client";
import React, { useState, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import HeadTopCourse from "../../_components/HeadTopCourse";
import RegistrationForm from "../../../_components/RegistrationForm";
import checkbox from "../../../../public/checkbox.svg";
import lightCalendar from "../../../../public/calendarLight.svg";
import tv from "../../../../public/tv.svg";
import timer from "../../../../public/timer.svg";
import user from "../../../../public/user.svg";
import badge from "../../../../public/badge.svg";
import downArrow from "../../../../public/downArrow.svg";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useRouter, useSearchParams } from "next/navigation";

// Performance optimization: Memoize loader component
const RelatedCoursesLoader = memo(() => {
  return (
    <section className="relative z-50 w-full">
      <div className="absolute spinner top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"></div>
    </section>
  );
});
RelatedCoursesLoader.displayName = "RelatedCoursesLoader";

// Performance optimization: Memoize AccordionItem
const AccordionItem = memo(({ title, content }) => {
  return (
    <div className="py-2">
      <details className="group">
        <summary className="w-full rounded-[12px] px-6 bg-[#f9fafb] py-5 text-left font-medium text-secondary-500 caps-text flex justify-between items-center list-none cursor-pointer">
          <span className="mt-2 max-md:text-sm">{title}</span>
          <span>
            <Image
              className="group-open:rotate-180 w-[16px] h-[16px] transition-transform"
              src={downArrow}
              alt="dropdown-arrow"
            />
          </span>
        </summary>
        <div className="mt-3 text-secondary-500">
          <div className="xl:ml-12 xl:py-5">
            <ul className="list-disc pl-5">
              {Array.isArray(content) && content.length > 0 ? (
                content.map((item, i) => (
                  <li className="mb-2 text-[#535960]" key={i}>
                    {String(item)}
                  </li>
                ))
              ) : (
                <li className="mb-2 text-[#535960]">
                  {typeof content === "string" ? content : "კურსი მიუწვდომელია"}
                </li>
              )}
            </ul>
          </div>
        </div>
      </details>
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

// Performance optimization: Memoize tab components
const DetailsTab = memo(({ course }) => {
  return (
    <div className="bg-white overflow-x-hidden rounded-[20px] px-4 py-6 lg:px-6 lg:py-8 mb-8 lg:mb-0">
      <p className="text-lg lg:text-xl leading-[24px] font-bold caps-text text-secondary-500 mb-5">
        კურსის აღწერა
      </p>
      <div className="overflow-x-hidden">
        {Array.isArray(course.course_details) &&
          course.course_details.map((detail, i) => (
            <div
              key={i}
              className="flex overflow-x-hidden items-start gap-3 lg:gap-4 text-sm mb-6 leading-[24px] text-secondary-500"
            >
              <Image
                src={checkbox}
                alt="checkbox"
                className="min-w-[20px] mt-1"
                width={20}
                height={20}
                priority={i < 2} // Only prioritize the first two images
              />
              <p>{detail}</p>
            </div>
          ))}
      </div>
    </div>
  );
});
DetailsTab.displayName = "DetailsTab";

const SyllabusTab = memo(({ syllabusItems }) => {
  return (
    <div className="bg-white rounded-[20px] px-4 py-6 lg:px-6 lg:py-8 mb-8 lg:mb-0">
      <p className="text-lg lg:text-xl leading-[24px] font-bold caps-text text-secondary-500 mb-5">
        სილაბუსი
      </p>
      {syllabusItems.length > 0 ? (
        syllabusItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title || `ლექცია ${index + 1}`}
            content={item.content || []}
          />
        ))
      ) : (
        <p className="text-secondary-500">სილაბუსი არ არის ხელმისაწვდომი</p>
      )}
    </div>
  );
});
SyllabusTab.displayName = "SyllabusTab";

const LecturerTab = memo(({ course }) => {
  return (
    <div className="bg-white rounded-[20px] px-4 py-6 lg:px-6 lg:py-8 mb-8 lg:mb-0">
      <div className="flex items-start text-sm leading-[24px] text-secondary-500 gap-3 lg:gap-4">
        {course.lecturer_details ? (
          <p>
            {course.lecturer_details.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        ) : (
          <p>ინფორმაცია ლექტორის შესახებ არ არის ხელმისაწვდომი</p>
        )}
      </div>
    </div>
  );
});
LecturerTab.displayName = "LecturerTab";

// Performance optimization: Memoize the entire CourseClient component
function CourseClient({
  courseData,
  relatedCourses,
  syllabusItems,
  activeTab: initialActiveTab,
  courseId,
}) {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  // Determine current tab from URL (?tab=), fallback to the initial value provided by server
  const currentTab = searchParams.get("tab") || initialActiveTab || "details";

  const handleShowRegistrationForm = useCallback(() => {
    setShowRegistrationForm(true);
  }, []);

  const handleCancelRegistration = useCallback(() => {
    setShowRegistrationForm(false);
  }, []);

  // Performance optimization: Create memoized handler for related courses
  const handleRelatedCourseClick = useCallback(
    (id) => {
      router.prefetch(`/courses/${id}`); // Prefetch the destination
      router.push(`/courses/${id}`);
    },
    [router]
  );

  // If course data is not loaded, show a minimal loading state
  if (!courseData) {
    return (
      <div className="container max-w-[95%] mx-auto py-10">
        <div className="bg-white mt-5 h-[475px] rounded-[20px] p-8 flex items-center justify-center">
          <h1 className="text-2xl font-bold">კურსი იტვირთება...</h1>
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto max-sm:max-w-[95%] max-sm:mx-auto mt-[128px]">
      <HeadTopCourse isCoursesPage={true}>
        <p className="cursor-pointer">{courseData.title}</p>
      </HeadTopCourse>
      <div className="grid  grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
        {/* Left Column: Course Details and Syllabus */}
        <div className="lg:col-span-7">
          <img
            className="w-[100%] max-sm:h-auto rounded-[18px] h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            loading="eager" // Load this image immediately
            fetchPriority="high"
            width={804}
            height={500}
            src={courseData.image}
            alt="courseImage"
          />
          <h4 className="text-xl caps-text font-bold mt-6 lg:mt-8 text-secondary-500">
            {courseData.title}
          </h4>
          <p className="text-secondary-500 mt-2 text-sm caps-text">
            <span className="font-bold">ლექტორი:</span> {courseData.lecturer}
          </p>

          {/* Mobile Course Details Section - Only render on mobile */}
          <div className="lg:hidden block mt-6 mb-6">
            <div className="bg-white w-full relative px-4 py-6 rounded-[20px] mb-8">
              <h3 className="text-base font-bold caps-text text-secondary-500 mb-4">
                კურსის დეტალები
              </h3>
              <div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image
                    src={lightCalendar}
                    alt="calendar icon"
                    width={24}
                    height={24}
                  />
                  <p className="mt-2 text-secondary-500 font-[400] text-sm">
                    დაწყების თარიღი:{" "}
                    <span className="text-[#88919C] ml-1">
                      {courseData.start_course}
                    </span>
                  </p>
                </div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image src={tv} alt="tv icon" width={24} height={24} />
                  <p className="mt-2  text-secondary-500 font-[400] text-sm">
                    კურსის ხანგრძლივობა:{" "}
                    <span className="text-[#88919C] regular-text ml-1">
                      {courseData.quantity_lessons} შეხვედრა
                    </span>
                  </p>
                </div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image src={timer} alt="timer icon" width={24} height={24} />
                  <p className="mt-2 text-secondary-500 font-[400] text-sm">
                    შეხვედრის ხანგრძლივობა:{" "}
                    <span className="text-[#88919C] font-[100] regular-text ml-1">
                      {courseData.lesson_time} საათი
                    </span>
                  </p>
                </div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image src={user} alt="user icon" width={24} height={24} />
                  <p className="mt-2 text-secondary-500 font-[400] text-sm">
                    სტუდენტი ჯგუფში:{" "}
                    <span className="text-[#88919C] regular-text ml-1">
                      {courseData.quantity_of_students}
                    </span>
                  </p>
                </div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image src={badge} alt="badge icon" width={24} height={24} />
                  <p className="mt-2 text-secondary-500 font-[400] text-sm">
                    სერთიფიკატი და სტაჟირება
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-base text-secondary-500 caps-text mt-6">
                  ფასი:{" "}
                  <span className="font-bold">{courseData.price} ლარი</span>
                </p>
                <p className="text-[16px] line-through font-[300] ml-4 caps-text text-[#d95a5a] mt-6">
                  <span className="font-bold leading-[24px]">
                    {courseData.oldprice} ლარი
                  </span>
                </p>
              </div>
              <Button
                className="w-full mt-4 text-[15px] pt-3 h-[48px] caps-text font-bold"
                onClick={handleShowRegistrationForm}
              >
                დარეგისტრირდი
              </Button>
            </div>
          </div>

          {/* Tabs Menu - For better performance, use shallow routing */}
          <div className="flex my-5 lg:my-7 mb-8 lg:mb-12 text-sm items-center gap-3 caps-text overflow-x-auto whitespace-nowrap">
            <Link
              href={`/courses/${courseData.id}?tab=details`}
              scroll={false}
              shallow={true}
              className={`${
                currentTab === "details"
                  ? "bg-primary-500 text-white"
                  : "bg-white text-secondary-500"
              } pt-3 lg:pt-4 p-2 lg:p-3 px-3 lg:px-5 rounded-[8px] cursor-pointer`}
              prefetch={true}
            >
              კურსის დეტალები
            </Link>
            <Link
              href={`/courses/${courseData.id}?tab=syllabus`}
              scroll={false}
              shallow={true}
              className={`${
                currentTab === "syllabus"
                  ? "bg-primary-500 text-white"
                  : "bg-white text-secondary-500"
              } pt-3 lg:pt-4 p-2 lg:p-3 px-3 lg:px-5 rounded-[8px] cursor-pointer`}
              prefetch={true}
            >
              სილაბუსი
            </Link>
            <Link
              href={`/courses/${courseData.id}?tab=lecturer`}
              scroll={false}
              shallow={true}
              className={`${
                currentTab === "lecturer"
                  ? "bg-primary-500 text-white"
                  : "bg-white text-secondary-500"
              } pt-3 lg:pt-4 p-2 lg:p-3 px-3 lg:px-5 rounded-[8px] cursor-pointer`}
              prefetch={true}
            >
              ლექტორი
            </Link>
          </div>

          {/* Render Tab Content - Only render the active tab */}
          {currentTab === "details" && <DetailsTab course={courseData} />}
          {currentTab === "syllabus" && (
            <SyllabusTab syllabusItems={syllabusItems} />
          )}
          {currentTab === "lecturer" && <LecturerTab course={courseData} />}
        </div>

        {/* Right Column: Other Course Details & Related Courses */}
        <div className="lg:col-span-5">
          <div className="bg-white w-full relative px-4 py-6 lg:px-6 lg:py-8 rounded-[20px] mb-8 max-lg:hidden">
            {/* Only load the icon when it's needed */}
            {courseData.courseIcon && (
              <img
                className="hidden xl:block absolute max-w-[95%] bottom-[85px] right-[10px]"
                src={courseData.courseIcon}
                alt="illustration svg"
                loading="lazy"
              />
            )}
            <h3 className="text-base lg:text-lg font-bold caps-text text-secondary-500 mb-4">
              კურსის დეტალები
            </h3>
            <div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image
                  src={lightCalendar}
                  alt="calendar icon"
                  width={24}
                  height={24}
                />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-[15px]">
                  დაწყების თარიღი:{" "}
                  <span className="text-[#88919C] font-[400] regular-text ml-1">
                    {courseData.start_course}
                  </span>
                </p>
              </div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image src={tv} alt="tv icon" width={24} height={24} />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                  კურსის ხანგრძლივობა:{" "}
                  <span className="text-[#88919C] font-[400] regular-text ml-1">
                    {courseData.quantity_lessons} შეხვედრა
                  </span>
                </p>
              </div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image src={timer} alt="timer icon" width={24} height={24} />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                  შეხვედრის ხანგრძლივობა:{" "}
                  <span className="text-[#88919C] font-[400] regular-text ml-1">
                    {courseData.lesson_time} საათი
                  </span>
                </p>
              </div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image src={user} alt="user icon" width={24} height={24} />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                  სტუდენტი ჯგუფში:{" "}
                  <span className="text-[#88919C] ml-1">
                    {courseData.quantity_of_students}
                  </span>
                </p>
              </div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image src={badge} alt="badge icon" width={24} height={24} />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                  სერთიფიკატი და სტაჟირება
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-base lg:text-lg text-secondary-500 caps-text mt-6 lg:mt-8">
                ფასი: <span className="font-bold">{courseData.price} ლარი</span>
              </p>
              <p className="text-[16px] line-through font-[300] ml-4 caps-text text-[#d95a5a] mt-6 lg:mt-8">
                <span className="font-bold leading-[24px]">
                  {courseData.oldprice} ლარი
                </span>
              </p>
            </div>
            <Button
              className="w-full mt-4 lg:mt-6 text-[15px] lg:text-[16px] pt-3 lg:pt-4 h-[48px] lg:h-[56px] caps-text font-bold"
              onClick={handleShowRegistrationForm}
            >
              დარეგისტრირდი
            </Button>
          </div>

          <div>
            <h4 className="caps-text max-lg:mt-3 lg:mt-[64px] text-secondary-500 text-base font-bold mb-4">
              სხვა კურსები
            </h4>
            <div className="bg-white flex flex-col gap-4 p-3 lg:p-4 w-full rounded-[20px]">
              {relatedCourses.length > 0 ? (
                relatedCourses.map((relatedCourse, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row  items-start md:items-center overflow-hidden rounded-[12px] bg-[#F9FAFB] cursor-pointer"
                    onClick={() => handleRelatedCourseClick(relatedCourse.id)}
                  >
                    <img
                      src={relatedCourse.section_image}
                      alt="similar-course"
                      className="object-cover w-[190px] h-[190px] max-sm:w-full max-sm:max-w-[100%] max-sm:h-[350px] mx-auto rounded-lg md:rounded-none"
                      loading="lazy"
                    />

                    <div className="caps-text max-md:p-4 sm:max-md:p-8 mt-3 md:mt-0 max-lg:mb-5 md:ml-8 lg:ml-8 text-[#282525] w-full">
                      <p className="font-[500] text-base lg:text-base">
                        {relatedCourse.title}
                      </p>
                      <p className="text-xs lg:text-sm mt-3 xl:mt-1 mb-3 lg:mb-4 font-[400] text-[#50565e]">
                        ტრენერი:{" "}
                        <span>
                          {relatedCourse.lecturer || "ლაზარე კალმხალიძე"}
                        </span>
                      </p>
                      <Button
                        className="w-full max-lg:text-[13px] lg:w-[140px] xl:w-[180px] h-[44px] md:w-[140px] mt-1 lg:mt-2 text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRelatedCourseClick(relatedCourse.id);
                        }}
                      >
                        კურსის ნახვა
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <RelatedCoursesLoader />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Modal - Only create when needed */}
      {showRegistrationForm && (
        <AlertDialog.Root
          open={showRegistrationForm}
          onOpenChange={setShowRegistrationForm}
        >
          <AlertDialog.Overlay className="fixed inset-0 bg-[#2b2640d4] bg-opacity-60 backdrop-blur-md z-50" />
          <AlertDialog.Content
            className="
              fixed top-1/2 left-1/2 h-auto w-full container -translate-x-1/2 -translate-y-1/2 
              rounded-[20px] bg-white p-4 overflow-y-auto z-50
              max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full max-lg:max-w-none max-lg:translate-x-0 max-lg:translate-y-0 max-lg:rounded-none
            "
          >
            <AlertDialog.Title className="sr-only">
              კურსზე რეგისტრაცია
            </AlertDialog.Title>
            <RegistrationForm
              onCancel={handleCancelRegistration}
              courses={[courseData, ...relatedCourses]}
              preselectedCourse={courseData}
            />
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
    </section>
  );
}

export default memo(CourseClient);
