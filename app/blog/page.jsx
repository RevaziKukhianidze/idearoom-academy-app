"use client";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import HeadTop from "./_components/HeadTop";
import { getBlogs } from "../services/apiBlogs";
import BlogCard from "../_components/shared/BlogCard";
import { useState, useEffect } from "react";

// BlogLoader კომპონენტი, რომელიც ხელახლა ავრცელებს spinner-ს მხოლოდ ბლოგის კონტეინერში
function BlogLoader() {
  return (
    <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
      <div className="spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await getBlogs();
        setBlogs(data || []);
      } catch (err) {
        setError(err);
        console.error("Error loading blogs:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <section className="container max-sm:max-w-[95%] mt-[128px] mx-auto">
        <HeadTop headText="ბლოგი" />
        <BlogLoader />
      </section>
    );
  }

  if (error) {
    return (
      <section className="container max-sm:max-w-[95%] mt-[128px] mx-auto">
        <HeadTop headText="ბლოგი" />
        <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
          <h1 className="text-xl font-bold">
            ბლოგების ჩატვირთვაში მოხდა შეცდომა
          </h1>
        </div>
      </section>
    );
  }

  if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
    return (
      <section className="container max-sm:max-w-[95%] mt-[128px] mx-auto">
        <HeadTop headText="ბლოგი" />
        <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
          <h1 className="text-xl font-bold">ბლოგები ჯერ არ არის დამატებული</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="container max-sm:max-w-[95%] mt-[128px] mx-auto">
      <HeadTop headText="ბლოგი" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-10 md:mt-[36px]">
        {blogs.map((blog, blogIndex) => (
          <BlogCard key={blog.id} blog={blog} blogIndex={blogIndex} />
        ))}
      </div>
    </section>
  );
}
