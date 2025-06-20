"use client";
import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import HeadTopCourse from "../../../courses/_components/HeadTopCourse";
import RegistrationForm from "../../../_components/RegistrationForm";
import checkbox from "../../../../public/checkbox.svg";
import lightCalendar from "../../../../public/calendarLight.svg";
import tv from "../../../../public/tv.svg";
import timer from "../../../../public/timer.svg";
import user from "../../../../public/user.svg";
import badge from "../../../../public/badge.svg";
import downArrow from "../../../../public/downArrow.svg";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { getOffers } from "../../../services/apiOffers";

function AccordionItem({ title, content }) {
  return (
    <div className="py-2">
      <details className="group">
        <summary className="w-full rounded-[12px] px-6 bg-[#f9fafb] py-5 text-left font-medium text-secondary-500 caps-text flex justify-between items-center list-none cursor-pointer">
          <span className="mt-2 max-md:text-sm">{title}</span>
          <span>
            <Image
              className="group-open:rotate-180 transition-transform"
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
}

function DetailsTab({ course_details }) {
  return (
    <div className="bg-white rounded-[20px] px-4 py-6 lg:px-6 lg:py-8 mb-8 lg:mb-0">
      <p className="text-lg lg:text-xl leading-[24px] font-bold caps-text text-secondary-500 mb-5">
        კურსის აღწერა
      </p>
      <div>
        {Array.isArray(course_details) &&
          course_details.map((detail, i) => (
            <div
              key={i}
              className="flex items-start gap-3 lg:gap-4 text-sm mb-6 leading-[24px] text-secondary-500"
            >
              <Image
                src={checkbox}
                alt="checkbox"
                className="min-w-[20px] mt-1"
              />
              <p>{detail}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

function SyllabusTab({ syllabusItems }) {
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
}

function LecturerTab({ lecturers, lecturers_details }) {
  return (
    <div className="bg-white rounded-[20px] px-4 py-6 lg:px-6 lg:py-8 mb-8 lg:mb-0">
      <div className="flex flex-col gap-6">
        {Array.isArray(lecturers) &&
          lecturers.map((lecturer, i) => (
            <div key={i} className="text-sm leading-[24px] text-secondary-500">
              <p className="font-bold caps-text mb-2 text-lg">{lecturer}</p>
              {Array.isArray(lecturers_details) && lecturers_details[i] && (
                <div className="flex items-start gap-3 lg:gap-4">
                  <p className="text-[#535960]">{lecturers_details[i]}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default function OfferClient({
  offer,
  relatedOffers,
  syllabusItems,
  course_details,
  lecturers,
  lecturers_details,
  activeTab: initialActiveTab = "details",
}) {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  // Keep up-to-date list of related offers
  const [otherOffers, setOtherOffers] = useState(relatedOffers || []);

  // Refresh "other offers" whenever the viewed offer changes
  useEffect(() => {
    async function refreshRelated() {
      try {
        const all = await getOffers();
        const updated = (all || [])
          .filter((o) => o.id !== offer.id)
          .sort((a, b) => b.id - a.id)
          .slice(0, 5);
        setOtherOffers(updated);
      } catch (err) {
        console.error("Failed to refresh related offers", err);
      }
    }

    refreshRelated();
  }, [offer.id]);

  const handleShowRegistrationForm = useCallback(() => {
    setShowRegistrationForm(true);
  }, []);

  const handleCancelRegistration = useCallback(() => {
    setShowRegistrationForm(false);
  }, []);

  if (!offer) {
    return (
      <div className="container max-w-[95%] mx-auto px-4 py-10 mt-[128px]">
        <HeadTopCourse isCoursesPage={false}>
          <p className="cursor-pointer">შეთავაზება</p>
        </HeadTopCourse>
        <div className="bg-white h-[475px] rounded-[20px] p-8">
          <h1 className="text-2xl font-bold">შეთავაზება ვერ მოიძებნა</h1>
          <Link href="/offer">
            <Button className="mt-4">უკან დაბრუნება</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto max-sm:max-w-[90%] max-sm:mx-auto mt-[128px]">
      <HeadTopCourse isCoursesPage={false}>
        <p className="cursor-pointer">{offer.title}</p>
      </HeadTopCourse>
      <div className="grid grid-cols-1 max-sm:mt-7 lg:grid-cols-12 gap-8 xl:gap-12">
        {/* მარცხენა კოლონა: Offer Details and Syllabus */}
        <div className="lg:col-span-7">
          <img
            className="w-[100%] max-sm:h-auto rounded-[18px] h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            quality={100}
            src={offer.image || offer.section_image || "/coverweb.webp"}
            alt={offer.title}
          />
          <h4 className="text-xl caps-text font-bold mt-6 lg:mt-8 text-secondary-500">
            {offer.title}
          </h4>
          <p className="text-secondary-500 mt-2 text-sm caps-text">
            <span className="font-bold">ლექტორები:</span>{" "}
            {Array.isArray(lecturers) && lecturers.length > 0
              ? lecturers.join(", ")
              : ""}
          </p>

          {/* კურსის დეტალები max-lg-ზე */}
          <div className="lg:hidden mt-6 mb-8">
            <div className="bg-white w-full relative px-4 py-6 rounded-[20px]">
              <h3 className="text-base lg:text-lg font-bold caps-text text-secondary-500 mb-4">
                კურსის დეტალები
              </h3>
              <div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image src={lightCalendar} alt="calendar icon" />
                  <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-[15px]">
                    დაწყების თარიღი:{" "}
                    <span className="text-[#88919C] regular-text font-[400] ml-1">
                      {offer.start_course || "მალე დაიწყება"}
                    </span>
                  </p>
                </div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image src={tv} alt="tv icon" />
                  <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                    კურსის ხანგრძლივობა:{" "}
                    <span className="text-[#88919C] regular-text font-[400] ml-1">
                      {offer.qunatity_of_lessons || offer.quantity_of_lessons}{" "}
                      შეხვედრა
                    </span>
                  </p>
                </div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image src={timer} alt="timer icon" />
                  <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                    შეხვედრის ხანგრძლივობა:{" "}
                    <span className="text-[#88919C] regular-text font-[400] ml-1">
                      {offer.lesson_time} საათი
                    </span>
                  </p>
                </div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image src={user} alt="user icon" />
                  <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                    სტუდენტები ჯგუფში:{" "}
                    <span className="text-[#88919C] regular-text font-[400] ml-1">
                      {offer.qunatity_of_students || offer.quantity_of_students}
                    </span>
                  </p>
                </div>
                <div className="flex my-1 items-center gap-3 caps-text">
                  <Image src={badge} alt="badge icon" />
                  <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                    სერთიფიკატი და სტაჟირება
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-base lg:text-lg text-secondary-500 caps-text mt-6 lg:mt-8">
                  ფასი: <span className="font-bold">₾ {offer.price}</span>
                </p>
                {!offer.old_price !== "" && Number(offer.old_price) > 0 && (
                  <p className="text-[16px] line-through font-[300] ml-4 caps-text text-[#d95a5a] mt-6 lg:mt-8">
                    <span className="font-bold leading-[24px]">
                      ₾ {offer.old_price}
                    </span>
                  </p>
                )}
              </div>
              <div className="space-y-4 mt-4 lg:mt-6">
                <Button
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white text-[15px] lg:text-[16px] pt-3 lg:pt-4 h-[48px] lg:h-[56px] caps-text font-bold"
                  onClick={handleShowRegistrationForm}
                >
                  დარეგისტრირდი
                </Button>
              </div>
            </div>
          </div>

          {/* ტაბების მენიუ */}
          <div className="flex my-5 lg:my-7 mb-8 lg:mb-12 text-sm items-center gap-3 caps-text overflow-x-auto whitespace-nowrap">
            <div
              onClick={() => setActiveTab("details")}
              className={`${
                activeTab === "details"
                  ? "bg-primary-500 text-white"
                  : "bg-white text-secondary-500"
              } pt-3 lg:pt-4 p-2 lg:p-3 px-3 lg:px-5 rounded-[8px] cursor-pointer`}
            >
              კურსის დეტალები
            </div>
            <div
              onClick={() => setActiveTab("syllabus")}
              className={`${
                activeTab === "syllabus"
                  ? "bg-primary-500 text-white"
                  : "bg-white text-secondary-500"
              } pt-3 lg:pt-4 p-2 lg:p-3 px-3 lg:px-5 rounded-[8px] cursor-pointer`}
            >
              სილაბუსი
            </div>
            <div
              onClick={() => setActiveTab("lecturer")}
              className={`${
                activeTab === "lecturer"
                  ? "bg-primary-500 text-white"
                  : "bg-white text-secondary-500"
              } pt-3 lg:pt-4 p-2 lg:p-3 px-3 lg:px-5 rounded-[8px] cursor-pointer`}
            >
              ლექტორი
            </div>
          </div>

          {/* Render Tab Content */}
          {activeTab === "details" && (
            <DetailsTab course_details={course_details} />
          )}
          {activeTab === "syllabus" && (
            <SyllabusTab syllabusItems={syllabusItems} />
          )}
          {activeTab === "lecturer" && (
            <LecturerTab
              lecturers={lecturers}
              lecturers_details={lecturers_details}
            />
          )}
        </div>

        {/* მარჯვენა კოლონა: Course Info and Related Offers */}
        <div className="lg:col-span-5 max-lg:hidden block max-lg:mt-[-30px]">
          <div className="bg-white w-full relative px-4 py-6 lg:px-6 lg:py-8 rounded-[20px] mb-8">
            {offer.courseIcon && (
              <img
                className="hidden xl:block absolute max-w-[95%] bottom-[85px] right-[10px]"
                src={offer.courseIcon || "/coverweb.webp"}
                alt="illustration svg"
              />
            )}
            <h3 className="text-base lg:text-lg font-bold caps-text text-secondary-500 mb-4">
              კურსის დეტალები
            </h3>
            <div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image src={lightCalendar} alt="calendar icon" />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-[15px]">
                  დაწყების თარიღი:{" "}
                  <span className="text-[#88919C] regular-text font-[400] ml-1">
                    {offer.start_course || "მალე დაიწყება"}
                  </span>
                </p>
              </div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image src={tv} alt="tv icon" />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                  კურსის ხანგრძლივობა:{" "}
                  <span className="text-[#88919C] regular-text font-[400] ml-1">
                    {offer.qunatity_of_lessons || offer.quantity_of_lessons}{" "}
                    შეხვედრა
                  </span>
                </p>
              </div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image src={timer} alt="timer icon" />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                  შეხვედრის ხანგრძლივობა:{" "}
                  <span className="text-[#88919C] regular-text font-[400] ml-1">
                    {offer.lesson_time} საათი
                  </span>
                </p>
              </div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image src={user} alt="user icon" />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                  სტუდენტები ჯგუფში:{" "}
                  <span className="text-[#88919C] regular-text font-[400] ml-1">
                    {offer.qunatity_of_students || offer.quantity_of_students}
                  </span>
                </p>
              </div>
              <div className="flex my-1 items-center gap-3 caps-text">
                <Image src={badge} alt="badge icon" />
                <p className="mt-2 text-secondary-500 font-[500] text-sm lg:text-base">
                  სერთიფიკატი და სტაჟირება
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-base lg:text-lg text-secondary-500 caps-text mt-6 lg:mt-8">
                ფასი: <span className="font-bold">₾ {offer.price}</span>
              </p>
              {!offer.old_price !== "" && Number(offer.old_price) > 0 && (
                <p className="text-[16px] line-through font-[300] ml-4 caps-text text-[#d95a5a] mt-6 lg:mt-8">
                  <span className="font-bold leading-[24px]">
                    ₾ {offer.old_price}
                  </span>
                </p>
              )}
            </div>
            <div className="space-y-4 mt-4 lg:mt-6">
              <Button
                className="w-full bg-primary-500 hover:bg-primary-600 text-white text-[15px] lg:text-[16px] pt-3 lg:pt-4 h-[48px] lg:h-[56px] caps-text font-bold"
                onClick={handleShowRegistrationForm}
              >
                დარეგისტრირდი
              </Button>
            </div>
          </div>

          {/* Related offers section */}
          <div>
            <h4 className="caps-text mt-8 lg:mt-[64px] text-secondary-500 text-base font-bold mb-4">
              სხვა შეთავაზებები
            </h4>
            <div className="bg-white flex flex-col gap-5 p-3 lg:p-4 w-full rounded-[20px]">
              {otherOffers && otherOffers.length > 0 ? (
                otherOffers.map((relatedOffer, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start md:items-center overflow-hidden rounded-[12px] bg-[#F9FAFB]"
                  >
                    <img
                      src={relatedOffer.section_image || "/coverweb.webp"}
                      alt={`offer-image-${relatedOffer.id}`}
                      className="object-cover w-[200px] h-[190px] max-sm:w-full max-sm:max-w-[100%] max-sm:h-[350px] mx-auto rounded-lg md:rounded-none"
                    />
                    <div className="caps-text max-md:p-4 sm:max-md:p-8 mt-3 md:mt-0 max-lg:mb-5 md:ml-8 lg:ml-8 text-[#282525] w-full">
                      <p className="font-[500] mt-1 text-[#282525] text-[15px] pr-8">
                        {relatedOffer.title}
                      </p>
                      <p className="text-[13px] my-2 pr-4 font-[500] leading-[24px]">
                        {Array.isArray(relatedOffer.lecturers) &&
                        relatedOffer.lecturers.length > 1
                          ? "ლექტორები: "
                          : "ლექტორი: "}
                        {Array.isArray(relatedOffer.lecturers)
                          ? relatedOffer.lecturers.join(", ")
                          : relatedOffer.lecturers}
                      </p>
                      <Link href={`/offer/${relatedOffer.id}`}>
                        <Button className="w-full max-lg:text-[13px] lg:w-[140px] pt-3 rounded-[10px] xl:w-[180px] h-[44px] md:w-[140px] mt-1 lg:mt-2 text-sm">
                          დეტალურად
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-secondary-500">არ არის ხელმისაწვდომი</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
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
            courses={otherOffers ? [offer, ...otherOffers] : [offer]}
            preselectedCourse={offer}
          />
          <AlertDialog.Cancel asChild></AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </section>
  );
}
