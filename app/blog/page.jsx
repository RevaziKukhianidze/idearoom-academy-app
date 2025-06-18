import { getBlogs } from "../services/apiBlogs";
import BlogPageClient from "./_components/BlogPageClient";

// Add metadata for the blog page
export const metadata = {
  title: "ბლოგი",
  description:
    "იდეარუმის აკადემიის ბლოგი - ისწავლე ახალი ინფორმაცია ციფრული მარკეტინგის, SEO, SMM და სხვა თანამედროვე ტექნოლოგიების შესახებ",
  openGraph: {
    title: "ბლოგი - იდეარუმის აკადემია",
    description:
      "იდეარუმის აკადემიის ბლოგი - ისწავლე ახალი ინფორმაცია ციფრული მარკეტინგის, SEO, SMM და სხვა თანამედროვე ტექნოლოგიების შესახებ",
    images: [
      {
        url: "https://academy.idearoom.ge/coverweb.webp",
        width: 1200,
        height: 630,
        alt: "იდეარუმის აკადემიის ბლოგი",
      },
    ],
    type: "website",
    locale: "ka_GE",
    url: "https://academy.idearoom.ge/blog",
    siteName: "იდეარუმის აკადემია",
  },
  twitter: {
    card: "summary_large_image",
    title: "ბლოგი - იდეარუმის აკადემია",
    description:
      "იდეარუმის აკადემიის ბლოგი - ისწავლე ახალი ინფორმაცია ციფრული მარკეტინგის, SEO, SMM და სხვა თანამედროვე ტექნოლოგიების შესახებ",
    images: ["https://academy.idearoom.ge/coverweb.webp"],
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function BlogPage() {
  try {
    const blogs = await getBlogs();
    return <BlogPageClient blogs={blogs || []} />;
  } catch (error) {
    console.error("Error loading blogs:", error);
    return <BlogPageClient blogs={[]} error={error} />;
  }
}
