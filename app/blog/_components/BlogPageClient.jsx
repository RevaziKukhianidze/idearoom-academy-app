"use client";
import { useState, useEffect } from "react";
import HeadTop from "./HeadTop";
import BlogCard from "../../_components/shared/BlogCard";
import { useBlogRealtime } from "../../../hooks/useBlogRealtime";

// BlogLoader კომპონენტი, რომელიც ხელახლა ავრცელებს spinner-ს მხოლოდ ბლოგის კონტეინერში
function BlogLoader() {
  return (
    <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
      <div className="spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default function BlogPageClient({
  blogs: initialBlogs,
  error: initialError,
}) {
  const [error, setError] = useState(initialError);

  useEffect(() => {
    // Set document title
    document.title = "ბლოგი - იდეარუმის აკადემია";
  }, []);

  // Use the shared realtime hook with all blogs
  const { blogs, isLoading, refreshBlogs, pendingChanges } = useBlogRealtime(
    initialBlogs,
    false
  );

  // Force refresh on mount to ensure fresh data
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("🔄 BlogPageClient: Force refresh on mount");
      refreshBlogs();
    }, 500);

    return () => clearTimeout(timer);
  }, [refreshBlogs]);

  // Additional stability check - refresh if blogs disappear
  useEffect(() => {
    if (
      blogs &&
      blogs.length === 0 &&
      initialBlogs &&
      initialBlogs.length > 0
    ) {
      console.log("⚠️ BlogPageClient: Blogs disappeared, refreshing...");
      const timer = setTimeout(() => {
        refreshBlogs();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [blogs, initialBlogs, refreshBlogs]);

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
      <div
        className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-10 md:mt-[36px] transition-opacity duration-300 ${
          pendingChanges ? "opacity-90" : "opacity-100"
        }`}
      >
        {blogs.map((blog, blogIndex) => (
          <BlogCard key={blog.id} blog={blog} blogIndex={blogIndex} />
        ))}
      </div>
    </section>
  );
}
