"use client";

import { useEffect } from "react";
import { Button } from "../components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error caught:", error);
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
