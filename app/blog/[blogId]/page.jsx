import React from "react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import ShareIcons from "./ShareIcons";
import calendar from "../../../public/calendar.svg";
import { getBlogs } from "../../services/apiBlogs";
import HeadTop from "../_components/HeadTop";

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

// Fixed signature and ensuring static generation
export async function generateMetadata({ params }) {
  try {
    const blogId = params.blogId;
    const blogs = await getBlogs();
    const blog = blogs.find((item) => item.id === parseInt(blogId));

    if (!blog) {
      return {
        title: "ბლოგი ვერ მოიძებნა",
        description: "მოთხოვნილი ბლოგი არ არსებობს ან წაშლილია",
      };
    }

    // Extract clean description from blog text
    const description = blog.text
      ? blog.text.replace(/<[^>]*>/g, "").substring(0, 160) + "..."
      : "იდეარუმის აკადემიის ბლოგი - ისწავლე ახალი ინფორმაცია ციფრული მარკეტინგისა და განვითარების შესახებ";

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
      description: "იდეარუმის აკადემიის ბლოგი",
    };
  }
}

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

export default async function BlogPage({ params }) {
  try {
    const blogs = await getBlogs();

    if (!blogs || !Array.isArray(blogs)) {
      throw new Error("Failed to load blogs");
    }

    const blog = blogs.find((b) => b.id === parseInt(params.blogId));

    // Loading component
    if (!blog) {
      return (
        <div className="container max-sm:max-w-[95%] mx-auto py-10">
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

    // Create the absolute URL for sharing
    const blogUrl = `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://academy.idearoom.ge"
    }/blog/${params.blogId}`;

    return (
      <section className="container max-sm:max-w-[90%] mt-[128px] mx-auto">
        <div className="max-sm:mb-12">
          <HeadTop headText="ბლოგი" blogTitle={blog.title} />
        </div>
        <div className="bg-white relative rounded-[20px] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between min-h-[475px]">
          <div className="w-full  md:w-auto md:mt-[-40px] mb-6 md:mb-0">
            <h1 className="text-lg sm:text-xl text-secondary-500 font-bold caps-text max-w-[500px] mb-3 sm:mb-5">
              {blog.title}
            </h1>
            <div className="text-secondary-500 flex items-center gap-2 mb-4 text-[14px] max-sm:mb-8">
              <Image src={calendar} alt="calendar-icon" />{" "}
              {formatDateGeorgian(blog.created_at)}
            </div>
            <div className="flex md:absolute md:bottom-[30px] gap-4 items-center mt-4 md:mt-0">
              <ShareIcons url={blogUrl} quote={blog.title} />
            </div>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <img
              className="w-full h-auto md:h-[403px] md:w-[539px] object-cover rounded-[12px]"
              src={blog.image}
              width={539}
              quality={100}
              height={403}
              alt={blog.title}
            />
          </div>
        </div>
        <div className="my-6 sm:my-10 max-sm:mt-12">
          <div className="prose max-w-none">
            <p className="text-base max-sm:text-sm text-secondary-500">
              {blog.text.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
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
            {blog.tags &&
              blog.tags.map((tag, i) => (
                <div className="mb-1" key={i}>
                  <p className="text-[12px] text-secondary-500 bg-[#EAEFF4] p-1 px-3 pt-2 rounded-[4px]">
                    {tag}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading blog page:", error);
    return (
      <div className="container max-sm:max-w-[95%] mx-auto py-10">
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
