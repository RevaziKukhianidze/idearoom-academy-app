"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import arrowRight from "../../public/arrowRight.svg";
import sliderBg from "../../public/sliderBg.webp";
import rightSlider from "../../public/rightSlider.svg";
import leftSlider from "../../public/leftSlider.svg";
import { Button } from "../../components/ui/button";
import { createClient } from "@supabase/supabase-js";

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Simple in-memory cache
const cache = {
  data: {},
  timeouts: {},

  // Cache duration in milliseconds (1 hour)
  DEFAULT_TTL: 3600000,

  set(key, value, ttl = this.DEFAULT_TTL) {
    this.data[key] = value;

    // Clear any existing timeout
    if (this.timeouts[key]) {
      clearTimeout(this.timeouts[key]);
    }

    // Set expiration timeout
    this.timeouts[key] = setTimeout(() => {
      delete this.data[key];
      delete this.timeouts[key];
    }, ttl);

    return value;
  },

  get(key) {
    return this.data[key];
  },

  has(key) {
    return key in this.data;
  },

  invalidate(key) {
    delete this.data[key];
    if (this.timeouts[key]) {
      clearTimeout(this.timeouts[key]);
      delete this.timeouts[key];
    }
  },

  invalidateAll() {
    Object.keys(this.timeouts).forEach((key) => {
      clearTimeout(this.timeouts[key]);
    });
    this.data = {};
    this.timeouts = {};
  },
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from Supabase with caching
  useEffect(() => {
    let isMounted = true;
    const cacheKey = "hero_slider_data";

    const fetchSlides = async () => {
      try {
        // Check cache first
        if (cache.has(cacheKey)) {
          const cachedData = cache.get(cacheKey);
          if (isMounted) {
            setSlides(cachedData);
            setLoading(false);
            return;
          }
        }

        // If not in cache, fetch from Supabase
        const { data, error } = await supabase
          .from("slider")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (isMounted && data) {
          // Prepare data for rendering
          const formattedSlides = data.map((item) => ({
            image: sliderBg,
            imageRight: item.image,
            title: item.title,
            description: item.text,
            buttonLink: item.button_link || "#",
          }));

          // Store in cache and set state
          cache.set(cacheKey, formattedSlides);
          setSlides(formattedSlides);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error fetching slider data:", err);
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchSlides();

    // Cleanup function to prevent memory leaks
    return () => {
      isMounted = false;
    };
  }, []);

  // Check for mobile screen - client-side only
  useEffect(() => {
    // Avoid window reference during SSR
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  // Memoized slider navigation functions
  const nextSlide = useMemo(
    () => () => {
      if (slides.length > 0) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    },
    [slides.length]
  );

  const prevSlide = useMemo(
    () => () => {
      if (slides.length > 0) {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    },
    [slides.length]
  );

  const handleDotClick = useMemo(
    () => (index) => {
      setCurrentSlide(index);
    },
    []
  );

  const handleSwipe = useMemo(
    () => () => {
      const diff = startX - endX;
      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
      setStartX(0);
      setEndX(0);
    },
    [startX, endX, nextSlide, prevSlide]
  );

  // Auto-slider
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => clearInterval(interval);
  }, [slides.length, nextSlide]);

  // Memoized touch events
  const touchEvents = useMemo(() => {
    if (!isMobile) return {};

    return {
      onTouchStart: (e) => setStartX(e.touches[0].clientX),
      onTouchMove: (e) => setEndX(e.touches[0].clientX),
      onTouchEnd: handleSwipe,
      onMouseDown: (e) => setStartX(e.clientX),
      onMouseMove: (e) => setEndX(e.clientX),
      onMouseUp: handleSwipe,
    };
  }, [isMobile, handleSwipe]);

  // Show loading state
  if (loading) {
    return (
      <main className="relative max-lg:bg-secondary-50 max-lg:rounded-[20px] max-lg:px-5 max-lg:py-10 max-sm:py-5 max-lg:max-w-[95%] container mt-[128px]">
        <div className="flex justify-center items-center h-[300px]">
          <div className="spinner"></div>
        </div>
      </main>
    );
  }

  // Show error state
  if (error) {
    return (
      <main className="relative max-lg:bg-secondary-50 max-lg:rounded-[20px] max-lg:px-5 max-lg:py-10 max-sm:py-5 max-lg:max-w-[95%] container mt-[128px]">
        <div className="flex justify-center items-center h-[300px]">
          <p className="caps-text text-red-500">დაფიქსირდა შეცდომა!</p>
        </div>
      </main>
    );
  }

  // Show when no slides are available
  if (slides.length === 0) {
    return (
      <main className="relative max-lg:bg-secondary-50 max-lg:rounded-[20px] max-lg:px-5 max-lg:py-10 max-sm:py-5 max-lg:max-w-[95%] container mt-[128px]">
        <div className="flex justify-center items-center h-[300px]">
          <p className="caps-text">არ არის კონტენტი!</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative max-lg:bg-secondary-50 max-lg:rounded-[20px] max-lg:px-5 max-lg:py-10 max-sm:py-5 max-lg:max-w-[95%] container mt-[128px]">
      {/* Background image - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={sliderBg}
            alt="Background"
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <div className="relative w-full overflow-hidden" {...touchEvents}>
        {/* Navigation arrows - desktop only */}
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute max-xl:left-4 left-7 top-[55%] -translate-y-1/2 z-10 bg-[#EFF2F580] hover:bg-white/80 rounded-full transition-all duration-300"
              aria-label="Previous slide"
            >
              <Image
                className="max-xl:w-[36px] max-xl:h-[36px]"
                src={leftSlider}
                alt="left-slider"
                width={48}
                height={48}
              />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-7 max-xl:right-4 top-[55%] -translate-y-1/2 z-10 bg-[#EFF2F580] hover:bg-white/80 rounded-full transition-all duration-300"
              aria-label="Next slide"
            >
              <Image
                className="max-xl:w-[36px] max-xl:h-[36px]"
                src={rightSlider}
                alt="right-slider"
                width={48}
                height={48}
              />
            </button>
          </>
        )}

        {/* Slider container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="grid max-xl:pt-[50px] pt-[85px] max-sm:pt-[50px] md:px-[70px] xl:px-[100px] grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[32px] xl:gap-[64px] justify-between items-center">
                {/* Text and button */}
                <div className="left order-2 text-secondary-800 lg:text-white max-sm:ml-2 lg:order-1">
                  <p className="text-2xl sm:text-[30px] md:text-[32px] lg:text-[30px] xl:text-[39px] max-sm:mt-6 max-lg:mt-9 max-sm:mb-[10px] max-sm:text-[22px] mb-[24px] caps-text font-bold">
                    {slide.title}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-[15px] xl:text-[18px] font-regular leading-[1.5] sm:leading-[1.6] md:leading-[1.7] max-w-full sm:max-w-[95%] md:max-w-[90%] mt-2">
                    {slide.description}
                  </p>
                  <Button
                    className="caps-text max-sm:mb-5 md:h-[48px] max-xl:h-[45px] px-7 max-sm:mt-8 flex items-center gap-3 sm:gap-2 pt-3 h-[48px] mt-4 sm:mt-6 md:mt-8 lg:mt-9 text-sm sm:text-[15px]"
                    onClick={() =>
                      (window.location.href = slide.buttonLink || "#")
                    }
                  >
                    გაიგე მეტი{" "}
                  </Button>
                </div>

                {/* Slide image */}
                <div className="order-1 lg:order-2">
                  <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-none mx-auto lg:mx-0 overflow-hidden rounded-md">
                    <img
                      src={slide.imageRight}
                      alt="slider-image"
                      width={582}
                      height={425}
                      className="w-full mx-auto h-auto object-cover rounded-md max-sm:mt-4"
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 582px"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      {!isMobile && (
        <div className="absolute duration-300 transition-all max-lg:bottom-[-5%] bottom-[-20px] left-0 right-0 flex justify-center gap-4 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-[11px] h-[11px] rounded-full cursor-pointer ${
                currentSlide === index
                  ? "bg-[#fdb927]"
                  : "border-2 border-[#fdb927]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </main>
  );
}
