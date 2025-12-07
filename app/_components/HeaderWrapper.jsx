"use client";
import { Suspense } from "react";
import Header from "./Header";

export default function HeaderWrapper() {
  return (
    <Suspense fallback={<div className="h-20 bg-white"></div>}>
      <Header />
    </Suspense>
  );
}

