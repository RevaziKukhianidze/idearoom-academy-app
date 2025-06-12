import Link from "next/link";
import { Button } from "../../components/ui/button";
import HeadTop from "./_components/HeadTop";
import { getBlogs } from "../services/apiBlogs";

export const metadata = {
  title: "ბლოგი",
  description:
    "იდეარუმის აკადემიის ბლოგი - სასარგებლო ინფორმაცია ციფრულ სფეროში, ახალი ტექნოლოგიები და განვითარების რჩევები",
  openGraph: {
    title: "ბლოგი - იდეარუმის აკადემია",
    description:
      "იდეარუმის აკადემიის ბლოგი - სასარგებლო ინფორმაცია ციფრულ სფეროში",
    type: "website",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function BlogPage() {
  try {
    const blogs = await getBlogs();

    // Check if blogs is null or empty
    if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
      return (
        <section className="container max-sm:max-w-[95%] mt-[128px] mx-auto">
          <HeadTop headText="ბლოგი" />
          <div className="bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center">
            <h1 className="text-xl font-bold">
              ბლოგები ჯერ არ არის დამატებული
            </h1>
          </div>
        </section>
      );
    }

    return (
      <section className="container max-sm:max-w-[95%] mt-[128px] mx-auto">
        <HeadTop headText="ბლოგი" />
        <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => {
            return (
              <div
                className="bg-white transition-all duration-200 blog-shadow p-4 sm:p-5 rounded-[20px]"
                key={blog.id}
              >
                <img
                  className="rounded-[12px] object-cover h-[284px] w-full"
                  src={blog.image}
                  alt={blog.title}
                />
                <h4 className="font-bold caps-text mt-4 max-sm:pr-6 max-sm:mt-6 sm:mt-5 mb-3 sm:mb-4 text-[15px] sm:text-base">
                  {blog.title}
                </h4>
                <p className="text-[13px] sm:text-sm text-secondary-500">
                  {blog.text.split(" ").slice(0, 15).join(" ") + "..."}
                </p>
                <div className="flex justify-end mt-3 sm:mt-4">
                  <Link className="w-full sm:w-auto" href={`/blog/${blog.id}`}>
                    <Button className="text-[13px] mt-4 sm:text-sm font-medium w-full sm:w-[152px] h-[40px] max-lg:h-[40px] max-lg:mt-6 lg:h-[48px] pt-2 sm:pt-3">
                      გაიგე მეტი
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading blogs:", error);
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
}
