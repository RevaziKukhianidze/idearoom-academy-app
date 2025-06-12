import React from "react";
import { getCourses, getCourseById } from "../../services/apiCourses";
import CourseClientWrapper from "./_components/CourseClientWrapper";

// Generate static params for all course pages
export async function generateStaticParams() {
  try {
    const courses = await getCourses();

    if (!courses || !Array.isArray(courses)) {
      console.warn("No courses found for static generation");
      return [];
    }

    return courses.map((course) => ({
      courseId: course.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params for courses:", error);
    return [];
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  try {
    const courseId = params.courseId;
    const course = await getCourseById(parseInt(courseId));

    if (!course) {
      return {
        title: "კურსი არ მოიძებნა !",
        description: "მოთხოვნილი კურსი ვერ მოიძებნა",
      };
    }

    // Extract description from course details
    const description =
      Array.isArray(course.course_details) && course.course_details.length > 0
        ? course.course_details[0]
        : course.text ||
          "ისწავლე ახალი უნარები იდეარუმის აკადემიაში - გამოცდილ მენტორებთან ერთად";

    // Ensure image URL is absolute
    const imageUrl = course.image?.startsWith("http")
      ? course.image
      : course.image?.startsWith("/")
      ? `https://academy.idearoom.ge${course.image}`
      : course.image
      ? `https://academy.idearoom.ge/${course.image}`
      : "https://academy.idearoom.ge/coverweb.webp"; // fallback image

    return {
      title: course.title,
      description: description,
      openGraph: {
        title: course.title,
        description: description,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: course.title,
          },
        ],
        type: "website",
        locale: "ka_GE",
        url: `https://academy.idearoom.ge/courses/${courseId}`,
        siteName: "იდეარუმის აკადემია",
      },
      twitter: {
        card: "summary_large_image",
        title: course.title,
        description: description,
        images: [imageUrl],
      },
      robots: {
        follow: true,
        index: true,
      },
    };
  } catch (error) {
    console.error("Error generating course metadata:", error);
    return {
      title: "კურსი",
      description: "იდეარუმის აკადემიის კურსები",
    };
  }
}

// Main component for the course page
export default async function CoursePage({ params }) {
  try {
    const courseId = params.courseId;
    // Default to 'details' tab for static generation
    const activeTab = "details";

    // Fetch course data
    const courseData = await getCourseById(parseInt(courseId));

    if (!courseData) {
      return (
        <div className="container max-w-[95%] mx-auto px-4 py-10 mt-[128px]">
          <div className="bg-white h-[475px] rounded-[20px] p-8">
            <h1 className="text-2xl font-bold">კურსი ვერ მოიძებნა</h1>
          </div>
        </div>
      );
    }

    // Get related courses
    const allCourses = await getCourses();
    const relatedCourses = allCourses
      .filter((c) => c.id !== parseInt(courseId))
      .slice(0, 4);

    // Process syllabus data
    const processData = (data) => {
      if (Array.isArray(data)) return data;
      if (data == null) return [];
      if (typeof data === "string") {
        try {
          const trimmedData = data.trim();
          if (
            (trimmedData.startsWith("[") && trimmedData.endsWith("]")) ||
            (trimmedData.startsWith("{") && trimmedData.endsWith("}"))
          ) {
            return JSON.parse(trimmedData);
          }
          return [trimmedData];
        } catch (e) {
          console.error("Failed to parse JSON:", e);
          return [];
        }
      }
      return [];
    };

    const validateSyllabusContent = (content) => {
      if (!Array.isArray(content)) return [String(content)];
      return content.map((item) => String(item));
    };

    let syllabusItems = [];
    const titles = processData(courseData.syllabus_title);
    const contents = processData(courseData.syllabus_content);

    if (Array.isArray(titles) && titles.length > 0) {
      syllabusItems = titles.map((title, index) => {
        let contentArray = [];
        if (Array.isArray(contents) && contents.length > index) {
          contentArray = validateSyllabusContent(contents[index]);
        }
        return {
          title: `ლექცია ${index + 1}: ${title}`,
          content: contentArray,
        };
      });
    } else if (Array.isArray(contents) && contents.length > 0) {
      syllabusItems = contents.map((contentArray, index) => ({
        title: `ლექცია ${index + 1}`,
        content: validateSyllabusContent(contentArray),
      }));
    }

    if (syllabusItems.length === 0) {
      syllabusItems = [
        {
          title: "ლექცია 1",
          content: ["შინაარსი 1", "შინაარსი 2"],
        },
      ];
    }

    return (
      <CourseClientWrapper
        courseData={courseData}
        relatedCourses={relatedCourses}
        syllabusItems={syllabusItems}
        activeTab={activeTab}
        courseId={courseId}
      />
    );
  } catch (error) {
    console.error("Error in CoursePage:", error);
    return (
      <div className="container max-w-[95%] mx-auto px-4 py-10 mt-[128px]">
        <div className="bg-white h-[475px] rounded-[20px] p-8">
          <h1 className="text-2xl font-bold">
            შეცდომა მონაცემების ჩატვირთვაში
          </h1>
        </div>
      </div>
    );
  }
}
