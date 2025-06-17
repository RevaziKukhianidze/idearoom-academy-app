"use client";
import Headline from "./Headline";
import SeeAllButton from "./SeeAllButton";
import React, { useState, useEffect } from "react";
import { getBlogsLimited } from "../services/apiBlogs";
import Link from "next/link";
import BlogCard from "./shared/BlogCard";
import { useParams } from "next/navigation";
import { useBlogRealtime } from "../../hooks/useBlogRealtime";

function BlogLoader() {
  return (
    <div className="absolute inset-0 bg-white flex items-center justify-center z-50">
      <div className="spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default function Blog() {
  const [initialBlogs, setInitialBlogs] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  const params = useParams();

  // Initial data fetch
  useEffect(() => {
    async function fetchInitialBlogs() {
      try {
        console.log("🔄 Fetching initial blogs for home page...");
        const data = await getBlogsLimited();
        console.log("✅ Initial blogs fetched:", data?.length || 0);
        setInitialBlogs(data || []);
      } catch (error) {
        console.error("❌ Error fetching initial blogs:", error);
        setInitialBlogs([]);
      } finally {
        setInitialLoading(false);
      }
    }
    fetchInitialBlogs();
  }, []);

  // Use the shared realtime hook with limited blogs
  const { blogs, isLoading, refreshBlogs, pendingChanges } = useBlogRealtime(
    initialBlogs,
    true
  );

  // Combined blogs state - use initialBlogs if hook hasn't loaded yet
  const displayBlogs = blogs && blogs.length > 0 ? blogs : initialBlogs;

  // Force refresh if blogs disappear
  useEffect(() => {
    if (
      !initialLoading &&
      (!blogs || blogs.length === 0) &&
      initialBlogs &&
      initialBlogs.length > 0
    ) {
      console.log("⚠️ Home Blog: Blogs disappeared, refreshing...");
      const timer = setTimeout(() => {
        refreshBlogs();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [blogs, initialBlogs, initialLoading, refreshBlogs]);

  // Periodic refresh for stability - less frequent to avoid flickering
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        !initialLoading &&
        (!displayBlogs || displayBlogs.length === 0) &&
        !pendingChanges
      ) {
        console.log("🔄 Home Blog: Periodic refresh for empty state");
        refreshBlogs();
      }
    }, 10000); // every 10 seconds - less frequent

    return () => clearInterval(interval);
  }, [displayBlogs, initialLoading, refreshBlogs, pendingChanges]);

  console.log("🏠 Home Blog Component Debug:", {
    initialLoading,
    initialBlogsCount: initialBlogs?.length || 0,
    hookBlogsCount: blogs?.length || 0,
    displayBlogsCount: displayBlogs?.length || 0,
    isLoading,
  });

  return (
    <section className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-[72px]">
      <Headline text="ბლოგი" />
      <div
        className={`relative container mx-auto max-sm:max-w-[95%] mt-8 sm:mt-10 md:mt-[36px] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${
          pendingChanges ? "opacity-90" : "opacity-100"
        }`}
      >
        {initialLoading && <BlogLoader />}
        {!initialLoading &&
          displayBlogs &&
          displayBlogs.length > 0 &&
          displayBlogs.map((singleBlog, blogIndex) => (
            <BlogCard
              key={singleBlog.id || blogIndex}
              blog={singleBlog}
              blogIndex={blogIndex}
            />
          ))}
        {!initialLoading && (!displayBlogs || displayBlogs.length === 0) && (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">ბლოგები ჯერ არ არის დამატებული</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mt-4">
        <Link className="max-sm:w-[95%]" href={`/blog`}>
          <SeeAllButton buttonText="ყველას ნახვა" />
        </Link>
      </div>
    </section>
  );
}
