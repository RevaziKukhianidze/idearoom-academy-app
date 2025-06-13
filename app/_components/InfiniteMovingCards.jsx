"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";

import Headline from "./Headline";
import { getAllLecturers } from "../services/apiLecturer";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const [lecturers, setLecturers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // For carousel functionality
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Add mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate total number of pages based on 4 cards per view
  const getPageCount = () => {
    if (!lecturers.length) return 0;
    return Math.ceil(lecturers.length / 4);
  };

  // Fetch lecturers data from API
  useEffect(() => {
    async function fetchLecturers() {
      try {
        setLoading(true);
        const data = await getAllLecturers();
        // Sort lecturers by creation date (newest first) so new lecturers appear at the beginning
        const sortedData = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setLecturers(sortedData);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch lecturers:", err);
        setError("Failed to load lecturers");
        setLoading(false);
      }
    }
    fetchLecturers();
  }, []);

  // Function to handle card click - disabled popup
  const handleCardClick = (item, e) => {
    e.stopPropagation();
    // Popup functionality removed - only cursor pointer remains
  };

  // Handle carousel navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (!isMobile && containerRef.current) {
      const slideWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  };

  // Mouse and touch event handlers for manual sliding
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    document.body.style.cursor = "grabbing";
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
      containerRef.current.style.userSelect = "none";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    document.body.style.cursor = "";
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.userSelect = "";
    }
    setIsDragging(false);
    if (!containerRef.current) return;

    // Determine which slide is most visible
    const slideWidth = containerRef.current.offsetWidth;
    const scrollPosition = containerRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / slideWidth);

    const pageCount = getPageCount();
    if (pageCount === 0) return;

    // Snap to the nearest slide
    setCurrentIndex(Math.max(0, Math.min(newIndex, pageCount - 1)));
    goToSlide(Math.max(0, Math.min(newIndex, pageCount - 1)));
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = "";
      if (containerRef.current) {
        containerRef.current.style.cursor = "grab";
        containerRef.current.style.userSelect = "";
      }
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);

    if (containerRef.current) {
      const walk = (touchStart - e.targetTouches[0].clientX) * 2;
      containerRef.current.scrollLeft += walk / 10;
    }
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      const pageCount = getPageCount();
      if (pageCount === 0) return;
      const newIndex = Math.min(currentIndex + 1, pageCount - 1);
      goToSlide(newIndex);
    } else if (touchStart - touchEnd < -75) {
      // Swipe right
      const newIndex = Math.max(currentIndex - 1, 0);
      goToSlide(newIndex);
    } else {
      // Small movement, snap to current slide
      goToSlide(currentIndex);
    }
  };

  // Handle scroll event to update current index
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isDragging) return;

      const slideWidth = containerRef.current.offsetWidth;
      const scrollPosition = containerRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / slideWidth);

      const pageCount = getPageCount();
      if (newIndex !== currentIndex && pageCount > 0) {
        setCurrentIndex(Math.max(0, Math.min(newIndex, pageCount - 1)));
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentIndex, isDragging]);

  if (loading) {
    return (
      <section className="relative z-50 w-full h-screen">
        <div className="absolute spinner top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"></div>
      </section>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-8">{error}</div>;
  }

  if (lecturers.length === 0) {
    return <div className="text-center p-8">ვერ მოიძებნა ლექტორები</div>;
  }

  // Create groups of 4 cards for pagination
  const cardGroups = [];
  for (let i = 0; i < lecturers.length; i += 4) {
    cardGroups.push(lecturers.slice(i, i + 4));
  }

  return (
    <>
      <div className="mb-[35px] mt-[-50px]">
        <Headline text="ლექტორები" />
      </div>
      <div className="relative container max-sm:max-w-[95%] mx-auto">
        <div
          ref={containerRef}
          className={cn(
            "relative z-20 overflow-hidden rounded-[10px]",
            !isMobile &&
              "scroll-smooth no-scrollbar flex snap-x snap-mandatory",
            className
          )}
          style={{
            ...(!isMobile && {
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
              cursor: "grab",
              overflowX: "hidden",
            }),
          }}
          onMouseDown={!isMobile ? handleMouseDown : undefined}
          onMouseMove={!isMobile ? handleMouseMove : undefined}
          onMouseUp={!isMobile ? handleMouseUp : undefined}
          onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          onTouchStart={!isMobile ? handleTouchStart : undefined}
          onTouchMove={!isMobile ? handleTouchMove : undefined}
          onTouchEnd={!isMobile ? handleTouchEnd : undefined}
        >
          {cardGroups.map((group, groupIdx) => (
            <div
              key={`group-${groupIdx}`}
              className={`grid transition-opacity duration-300 ${
                isMobile
                  ? currentIndex === groupIdx
                    ? "opacity-100"
                    : "opacity-0 hidden"
                  : "min-w-full flex-shrink-0 grid snap-center"
              } grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}
              style={{
                gap: "16px",
                width: "100%",
                ...(!isMobile && {
                  flex: "0 0 100%",
                  marginRight: groupIdx === 0 ? "32px" : "0",
                }),
              }}
            >
              {group.map((lecturer, idx) => (
                <div
                  key={lecturer.fullName + idx}
                  className="relative justify-center text-center items-center flex h-[400px] rounded-[16px] shrink-0 bg-white duration-300 transition-all cursor-pointer"
                  onClick={(e) => handleCardClick(lecturer, e)}
                >
                  <div className="flex group relative justify-center items-center w-full h-full">
                    <img
                      className="w-full h-full rounded-[12px] object-cover"
                      src={lecturer.lecturer_image}
                      alt="lecturer_image"
                    />
                    <div className="bg-[#fff] group-hover:bg-[#8471D9E5] w-full h-[98px] rounded-bl-[12px] rounded-br-[12px] flex flex-col items-center text-center absolute bottom-0 group-hover:text-white">
                      <h4 className="text-base text-[#282525] mt-[30px] text-center group-hover:text-white justify-center items-center caps-text font-bold">
                        {lecturer.fullName}
                      </h4>
                      <p className="regular-text text-sm group-hover:text-white text-[#434A53]">
                        {lecturer.field}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Dots navigation - show all dots for navigation */}
        <div className="flex justify-center mt-9 space-x-4">
          {cardGroups.map((_, idx) => (
            <div
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-primary-orange"
                  : "border-2 border-primary-orange"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
