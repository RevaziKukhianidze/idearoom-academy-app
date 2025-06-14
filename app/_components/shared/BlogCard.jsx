"use client";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export default function BlogCard({ blog, blogIndex }) {
  return (
    <div
      key={blogIndex}
      className="bg-white blog-shadow py-4 max-md:h-auto h-[570px] px-4 relative cursor-pointer rounded-[20px]"
    >
      <img
        className="w-full rounded-[12px] h-auto xl:h-[284px] object-cover"
        src={blog.image}
        alt={`blog-${blogIndex + 1}`}
      />
      <div className="py-4 sm:py-6">
        <h4 className="caps-text text-[#282525] font-bold text-base">
          {blog.title}
        </h4>
        <p className="text-sm max-lg:line-clamp-3 leading-[1.65] font-regular mt-3 sm:mt-4 text-secondary-500">
          {blog.text.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
        <div className="flex mt-[75px] md:absolute bottom-[20px] right-[20px] justify-end">
          <Link href={`/blog/${blog.id}`}>
            <Button className="w-full pt-3 sm:w-[152px] text-sm rounded-[12px] h-[48px]">
              გაიგე მეტი
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
