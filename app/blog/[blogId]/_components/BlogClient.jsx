"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ShareIcons from "../ShareIcons";
import calendar from "../../../../public/calendar.svg";
import HeadTop from "../../_components/HeadTop";
import {
  addLinkTags,
  deleteLinkTags,
  updateLinkTags,
  deleteAllLinkTags,
  getLinkTags,
} from "../../../services/apiBlogs";
import Link from "next/link";
import supabase from "../../../services/supabase";

function formatDateGeorgian(dateString) {
  const date = new Date(dateString);
  const georgianMonths = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
  ];
  const day = date.getDate();
  const month = georgianMonths[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

function parseTextWithLinks(text) {
  // Check if the text contains the link pattern "text:::url"
  const linkPattern = /([^:::]+):::([^\s]+)/g;

  if (!linkPattern.test(text)) {
    return text;
  }

  // Reset the regex for actual replacement
  linkPattern.lastIndex = 0;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Add the link
    const linkText = match[1].trim();
    const linkUrl = match[2].trim();

    parts.push(
      <a
        key={match.index}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {linkText}
      </a>
    );

    lastIndex = linkPattern.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function BlogClient({ blog, blogId }) {
  // State to track real-time updates
  const [currentBlog, setCurrentBlog] = useState(blog);

  // Create the absolute URL for sharing
  const blogUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://academy.idearoom.ge"
  }/blog/${blogId}`;

  // Real-time subscription for blog updates
  useEffect(() => {
    if (!blogId) return;

    const subscription = supabase
      .channel(`blog-${blogId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "blogs",
          filter: `id=eq.${blogId}`,
        },
        (payload) => {
          if (payload.eventType === "UPDATE" && payload.new) {
            setCurrentBlog((prevBlog) => ({
              ...prevBlog,
              ...payload.new,
              linkTag: Array.isArray(payload.new.linkTag)
                ? payload.new.linkTag
                : [],
            }));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [blogId]);

  return (
    <section className="container max-sm:max-w-[90%] mt-[128px] mx-auto">
      <div className="max-sm:mb-12">
        <HeadTop headText="ბლოგი" blogTitle={currentBlog.title} />
      </div>
      <div className="bg-white relative rounded-[20px] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between min-h-[475px]">
        <div className="w-full  md:w-auto md:mt-[-40px] mb-6 md:mb-0">
          <h1 className="text-lg sm:text-xl text-secondary-500 font-bold caps-text max-w-[500px] mb-3 sm:mb-5">
            {currentBlog.title}
          </h1>
          <div className="text-secondary-500 flex items-center gap-2 mb-4 text-[14px] max-sm:mb-8">
            <Image src={calendar} alt="calendar-icon" />{" "}
            {formatDateGeorgian(currentBlog.created_at)}
          </div>
          <div className="flex md:absolute md:bottom-[30px] gap-4 items-center mt-4 md:mt-0">
            <ShareIcons url={blogUrl} quote={currentBlog.title} />
          </div>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <img
            className="w-full h-auto md:h-[403px] object-cover rounded-[12px]"
            src={currentBlog.image || "/coverweb.webp"}
            width={539}
            quality={100}
            alt={currentBlog.title}
          />
        </div>
      </div>
      <div className="my-6 sm:my-10 max-sm:mt-12">
        <div className="prose max-w-none">
          <p className="text-base max-sm:text-sm text-secondary-500">
            {currentBlog.text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {parseTextWithLinks(line)}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <div>
        <div className="border-t border-[#EBF0F6] my-6 sm:my-10"></div>
        <div className="caps-text flex gap-2 flex-wrap items-center font-medium text-secondary-500">
          <p className="mr-1 mt-[3px]">ტეგები: </p>

          {(() => {
            const rawTags = currentBlog.linkTag || [];

            // Helper to transform raw tag (string or object) into a uniform { name, url } shape
            const normalizeTag = (tag) => {
              if (typeof tag === "string") {
                // Try to parse as JSON first (for format like '{"name":"სახელი","url":"https://example.com"}')
                try {
                  const parsed = JSON.parse(tag);
                  if (
                    parsed &&
                    typeof parsed === "object" &&
                    parsed.name &&
                    parsed.url
                  ) {
                    return {
                      name: parsed.name.trim(),
                      url: parsed.url.trim(),
                    };
                  }
                } catch (e) {
                  // If JSON parsing fails, try the old "Name:::URL" pattern
                  const [namePart, urlPart] = tag.split(":::");
                  if (urlPart) {
                    return {
                      name: (namePart || "").trim(),
                      url: (urlPart || "#").trim(),
                    };
                  }
                }

                // Fallback for plain string
                return {
                  name: tag.trim(),
                  url: "#",
                };
              }

              if (typeof tag === "object" && tag !== null) {
                // Already in correct format
                return {
                  name: tag.name || "",
                  url: tag.url || "#",
                };
              }

              // Fallback – treat entire value as name with no URL
              return {
                name: String(tag),
                url: "#",
              };
            };

            const tags = Array.isArray(rawTags)
              ? rawTags.map(normalizeTag)
              : [];

            if (tags.length > 0) {
              return tags.map((tag, i) => (
                <div
                  className="mb-1"
                  key={`linktag-${blogId}-${i}-${tag.name || i}`}
                >
                  <Link
                    target="_blank"
                    href={tag.url}
                    rel="nofollow noopener noreferrer"
                    className="text-[12px] text-[#434a53] bg-[#eaeff4] hover:bg-primary-400 hover:text-white p-1 px-3 pt-2 rounded-[4px] transition-all duration-300"
                  >
                    {tag.name}
                  </Link>
                </div>
              ));
            }

            return (
              <span className="text-gray-400 text-xs">ტეგები არ არის</span>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
