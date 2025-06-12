"use client";

import { useEffect } from "react";
import { Button } from "../components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Enhanced error logging
    console.error("Global error caught:", {
      message: error?.message,
      stack: error?.stack,
      name: error?.name,
      cause: error?.cause,
      timestamp: new Date().toISOString(),
      userAgent:
        typeof window !== "undefined" ? window.navigator.userAgent : "unknown",
      url: typeof window !== "undefined" ? window.location.href : "unknown",
    });

    // Send error to monitoring service (if available)
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "exception", {
        description: error?.message || "Unknown error",
        fatal: false,
      });
    }
  }, [error]);

  return (
    <div className="container max-w-[95%] mx-auto px-4 py-10 mt-[128px]">
      <div className="bg-white h-[475px] rounded-[20px] p-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-secondary-500 mb-4">
          რაღაც შეცდომა მოხდა
        </h1>
        <p className="text-secondary-400 mb-6 max-w-md">
          ვწუხვართ, გვერდის ჩატვირთვაში მოხდა შეცდომა. გთხოვთ სცადოთ ხელახლა.
        </p>

        {/* Show error details in development */}
        {process.env.NODE_ENV === "development" && error?.message && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-lg">
            <p className="text-red-800 text-sm font-mono">{error.message}</p>
          </div>
        )}

        <div className="flex gap-4">
          <Button onClick={() => reset()} className="px-6 py-2">
            ხელახლა ცდა
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2"
          >
            მთავარ გვერდზე დაბრუნება
          </Button>
        </div>
      </div>
    </div>
  );
}
