import React from "react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import ShareIcons from "./ShareIcons";
import calendar from "../../../public/calendar.svg";
import { getBlog, getBlogs } from "../../services/apiBlogs";
import HeadTop from "../_components/HeadTop";
import BlogClient from "./_components/BlogClient";

// Generate static params for all blog pages
export async function generateStaticParams() {
  try {
    const blogs = await getBlogs();

    if (!blogs || !Array.isArray(blogs)) {
      console.warn("No blogs found for static generation");
      return [];
    }

    return blogs.map((blog) => ({
      blogId: blog.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params for blogs:", error);
    return [];
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  try {
    const blogId = params.blogId;
    const blog = await getBlog(parseInt(blogId));

    if (!blog) {
      return {
        title: "ბლოგი ვერ მოიძებნა",
        description: "მოთხოვნილი ბლოგი ვერ მოიძებნა",
      };
    }

    // Extract description from blog text
    const description = blog.text
      ? blog.text.split(" ").slice(0, 25).join(" ") + "..."
      : "იდეარუმის აკადემიის ბლოგი - ისწავლე ახალი ინფორმაცია ციფრული მარკეტინგის შესახებ";

    // Ensure image URL is absolute
    const imageUrl = blog.image?.startsWith("http")
      ? blog.image
      : blog.image?.startsWith("/")
      ? `https://academy.idearoom.ge${blog.image}`
      : blog.image
      ? `https://academy.idearoom.ge/${blog.image}`
      : "https://academy.idearoom.ge/coverweb.webp"; // fallback image

    return {
      title: blog.title,
      description: description,
      openGraph: {
        title: blog.title,
        description: description,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        type: "article",
        locale: "ka_GE",
        url: `https://academy.idearoom.ge/blog/${blogId}`,
        siteName: "იდეარუმის აკადემია",
        publishedTime: blog.created_at,
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: description,
        images: [imageUrl],
      },
      robots: {
        follow: true,
        index: true,
      },
    };
  } catch (error) {
    console.error("Error generating blog metadata:", error);
    return {
      title: "ბლოგი",
      description: "იდეარუმის აკადემიის ბლოგები",
    };
  }
}

// Main component for the blog page
export default async function BlogPage({ params }) {
  try {
    const blogId = parseInt(params.blogId);
    const blog = await getBlog(blogId);

    if (!blog) {
      return (
        <div className="container max-sm:max-w-[95%] mx-auto py-10 mt-[128px]">
          <HeadTop headText="ბლოგი" />
          <div className="bg-white h-[475px] rounded-[20px] p-8">
            <h1 className="text-2xl font-bold">ბლოგი ვერ მოიძებნა</h1>
            <Link href="/blog">
              <Button className="mt-4">უკან დაბრუნება</Button>
            </Link>
          </div>
        </div>
      );
    }

    return <BlogClient blog={blog} blogId={params.blogId} />;
  } catch (error) {
    console.error("Error loading blog:", error);
    return (
      <div className="container max-sm:max-w-[95%] mx-auto py-10 mt-[128px]">
        <HeadTop headText="ბლოგი" />
        <div className="bg-white h-[475px] rounded-[20px] p-8">
          <h1 className="text-2xl font-bold">
            ბლოგის ჩატვირთვაში მოხდა შეცდომა
          </h1>
          <Link href="/blog">
            <Button className="mt-4">უკან დაბრუნება</Button>
          </Link>
        </div>
      </div>
    );
  }
}
