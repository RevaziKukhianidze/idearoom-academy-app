"use client";
import { useState, useEffect } from "react";
import CourseClient from "./CourseClient";

export default function CourseClientWrapper(props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="container max-w-[95%] mx-auto px-4 py-10">
        <div className="bg-white mt-5 h-[475px] rounded-[20px] p-8 flex items-center justify-center">
          <h1 className="text-2xl font-bold">კურსი იტვირთება...</h1>
        </div>
      </div>
    );
  }

  return <CourseClient {...props} />;
}
