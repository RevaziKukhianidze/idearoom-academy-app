"use client";
import Image from "next/image";
import Headline from "./Headline";
import { Button } from "../../components/ui/button";
import SeeAllButton from "./SeeAllButton";
import React, { useState, useEffect } from "react";
import { getBlogsLimited } from "../services/apiBlogs";
import Link from "next/link";
import BlogCard from "./shared/BlogCard";
import { useParams } from "next/navigation";

// BlogLoader კომპონენტი, რომელიც ხელახლა ავრცელებს spinner-ს მხოლოდ ბლოგის კონტეინერში
function BlogLoader() {
  return (
    <div className="absolute inset-0 bg-white flex items-center justify-center z-50">
      <div className="spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("h");

  const params = useParams();

  useEffect(() => {
    async function fetchBlog() {
      const data = await getBlogsLimited();
      setBlog(data);
      setIsLoading(false);
    }
    fetchBlog();
  }, []);

  return (
    <section className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-[72px]">
      <Headline text="ბლოგი" />
      <div className="relative container mx-auto max-sm:max-w-[95%] mt-8 sm:mt-10 md:mt-[36px] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading && <BlogLoader />}
        {!isLoading &&
          blog.map((singleBlog, blogIndex) => (
            <BlogCard key={blogIndex} blog={singleBlog} blogIndex={blogIndex} />
          ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <Link className="max-sm:w-[85%]" href={`/blog`}>
          <SeeAllButton buttonText="ყველას ნახვა" />
        </Link>
      </div>
    </section>
  );
}
