"use client";
import CourseClient from "./CourseClient";
import { Suspense } from "react";

export default function CourseClientWrapper(props) {
  return (
    <Suspense fallback={<div>Loading course...</div>}>
      <CourseClient {...props} />
    </Suspense>
  );
}
