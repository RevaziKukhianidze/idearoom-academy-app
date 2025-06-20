"use client";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export default function BlogCard({ blog, blogIndex, className = "" }) {
  return (
    <div
      key={blogIndex}
      className={`bg-white blog-shadow py-4 max-lg:h-[530px] max-xl:h-[515px] h-[545px] max-md:h-[500px] max-sm:h-auto px-4 relative cursor-pointer rounded-[20px] ${className}`}
    >
      <img
        className="w-full rounded-[12px] h-auto xl:h-[284px] object-cover"
        src={blog.image || "/coverweb.webp"}
        alt={`blog-${blogIndex + 1}`}
      />
      <div className="py-4 sm:py-6">
        <h4 className="caps-text line-clamp-2 text-[#282525] font-bold text-base">
          {blog.title}
        </h4>
        <p className="text-sm max-lg:line-clamp-3 line-clamp-3 leading-[1.65] font-regular mt-3 sm:mt-4 text-secondary-500 pr-2">
          {blog.text.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
        <div className="flex max-md:mt-[50px] lg:absolute max-lg:mt-[50px] bottom-[20px] right-[20px] justify-end">
          <Link href={`/blog/${blog.id}`}>
            <Button className="w-full max-sm:min-w-full pt-3 sm:w-[152px] text-sm rounded-[12px] h-[48px]">
              გაიგე მეტი
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
