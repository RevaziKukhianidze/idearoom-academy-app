"use client";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import Logo from "../_components/Logo";
import cancel from "../../public/cancel.svg";
import { usePathname } from "next/navigation";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import signUpPic from "../../public/sign-upPic.png";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import Image from "next/image";
import { createUser } from "../services/apiUsers";
import { getCourses } from "../services/apiCourses";
import RegistrationForm from "./RegistrationForm";

// VisuallyHidden component for accessibility
const VisuallyHidden = ({ children }) => (
  <span className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden clip-[rect(0,0,0,0)] border-0">
    {children}
  </span>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isCoursesLoading, setIsCoursesLoading] = useState(false);
  const fullscreenChecked = useRef(false);
  const pathname = usePathname();

  // Handle fullscreen check on initial render and window resize
  useEffect(() => {
    const checkViewportWidth = () => {
      const isMobile = window.innerWidth < 1024;
      if (isFullscreen !== isMobile) {
        setIsFullscreen(isMobile);
      }
    };

    if (!fullscreenChecked.current) {
      checkViewportWidth();
      fullscreenChecked.current = true;
    }

    window.addEventListener("resize", checkViewportWidth);
    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, [isFullscreen]);

  // Fetch courses when the registration dialog opens
  useEffect(() => {
    if (isRegistrationOpen && courses.length === 0) {
      fetchCourses();
    }
  }, [isRegistrationOpen]);

  // Function to fetch courses from Supabase
  const fetchCourses = async () => {
    setIsCoursesLoading(true);
    try {
      const coursesData = await getCourses();
      if (coursesData && coursesData.length > 0) {
        setCourses(coursesData);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsCoursesLoading(false);
    }
  };

  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // ბეზოპასნი ფუნქცია მენიუს გასახსნელად, იყენებს setTimeout-ს რომ მოხდეს ახალი ციკლში
  const safelyToggleMobileMenu = () => {
    setTimeout(() => {
      setMobileMenuOpen((prev) => !prev);
    }, 0);
  };

  // ბეზოპასნი ფუნქცია რეგისტრაციის დიალოგის გასახსნელად
  const safelySetRegistrationOpen = (open) => {
    setTimeout(() => {
      setIsRegistrationOpen(open);
    }, 0);
  };

  // Modal content style based on screen size
  const getDialogContentStyle = () => {
    return isFullscreen
      ? {
          border: "none",
          borderRadius: "0px",
          maxHeight: "100vh",
          overflowY: "auto",
        }
      : {
          maxHeight: "90vh",
          height: "auto",
          borderRadius: "20px",
          border: "none",
          overflowY: "hidden",
        };
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <nav className="container max-sm:max-w-[95%] mx-auto flex items-center justify-between py-4 pl-7 pr-5 nav-shadow rounded-[16px] bg-white mt-6">
        <Logo />

        <ul className="hidden lg:flex caps-text gap-[36px] font-medium max-xl:text-[14px] text-base items-center">
          <li className="mt-[4px]">
            <Link
              href="/courses"
              className={`leading-[24px] hover:text-primary-500 duration-300 transition-all ${
                pathname === "/courses" ? "text-primary-500" : ""
              }`}
            >
              კურსები
            </Link>
          </li>
          <li className="mt-[4px]">
            <Link
              href="/offer"
              className={`leading-[24px] hover:text-primary-500 duration-300 transition-all ${
                pathname === "/offer" ? "text-primary-500" : ""
              }`}
            >
              შეთავაზება{" "}
            </Link>
          </li>
          <li className="mt-[4px]">
            <Link
              href="/blog"
              className={`leading-[24px] hover:text-primary-500 duration-300 transition-all ${
                pathname === "/blog" ? "text-primary-500" : ""
              }`}
            >
              ბლოგი
            </Link>
          </li>
          <li className="mt-[4px]">
            <Link
              href="/about"
              className={`leading-[24px] hover:text-primary-500 duration-300 transition-all ${
                pathname === "/about" ? "text-primary-500" : ""
              }`}
            >
              ჩვენს შესახებ
            </Link>
          </li>
          <li className="mt-[4px]">
            <Link
              href="/contact"
              className={`leading-[24px] hover:text-primary-500 duration-300 transition-all ${
                pathname === "/contact" ? "text-primary-500" : ""
              }`}
            >
              კონტაქტი
            </Link>
          </li>
          <li>
            <AlertDialog
              open={isRegistrationOpen}
              onOpenChange={safelySetRegistrationOpen}
            >
              <AlertDialogTrigger asChild>
                <Button className="w-[156px] h-[48px] pt-[11px]">
                  რეგისტრაცია
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent
                className={`p-0 overflow-hidden ${
                  isFullscreen
                    ? "rounded-none w-screen h-screen max-w-none max-h-none"
                    : "rounded-[20px] w-[95vw] max-w-[1220px]"
                } bg-white shadow-none animate-in fade-in-0 zoom-in-95 duration-300`}
                style={getDialogContentStyle()}
              >
                <AlertDialogTitle className="sr-only text-[#434A53]">
                  კურსზე რეგისტრაცია
                </AlertDialogTitle>
                <RegistrationForm
                  onCancel={() => setIsRegistrationOpen(false)}
                  isFullscreen={isFullscreen}
                  courses={courses}
                  isCoursesLoading={isCoursesLoading}
                />
              </AlertDialogContent>
            </AlertDialog>
          </li>
        </ul>

        <div className="lg:hidden">
          <button onClick={safelyToggleMobileMenu} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden max-sm:max-w-[95%] mx-auto container mt-2 bg-white rounded-[16px] nav-shadow p-4 animate-in slide-in-from-top duration-300">
          <ul className="flex caps-text flex-col gap-3 font-medium">
            <li>
              <Link
                href="/courses"
                className={`block py-2 text-[14px] leading-[20px] ${
                  pathname === "/courses" ? "text-primary-500" : ""
                }`}
                onClick={handleLinkClick}
              >
                კურსები
              </Link>
            </li>
            <li>
              <Link
                href="/offer"
                className={`block py-2 text-[14px] leading-[20px] ${
                  pathname === "/offer" ? "text-primary-500" : ""
                }`}
                onClick={handleLinkClick}
              >
                შეთავაზება
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block py-2 text-[14px] leading-[20px] ${
                  pathname === "/blog" ? "text-primary-500" : ""
                }`}
                onClick={handleLinkClick}
              >
                ბლოგი
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 text-[14px] leading-[20px] ${
                  pathname === "/about" ? "text-primary-500" : ""
                }`}
                onClick={handleLinkClick}
              >
                ჩვენს შესახებ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 text-[14px] leading-[20px] ${
                  pathname === "/contact" ? "text-primary-500" : ""
                }`}
                onClick={handleLinkClick}
              >
                კონტაქტი
              </Link>
            </li>
            <li className="py-2">
              <AlertDialog
                open={isRegistrationOpen}
                onOpenChange={safelySetRegistrationOpen}
              >
                <AlertDialogTrigger asChild>
                  <Button className="w-full text-[14px]">რეგისტრაცია</Button>
                </AlertDialogTrigger>
                <AlertDialogContent
                  className={`p-0 overflow-hidden ${
                    isFullscreen
                      ? "rounded-none w-screen h-screen max-w-none max-h-none"
                      : "rounded-[20px] w-[95vw] max-w-[1220px]"
                  } animate-in fade-in-0 zoom-in-95 duration-300`}
                  style={getDialogContentStyle()}
                >
                  <AlertDialogTitle className="sr-only">
                    კურსზე რეგისტრაცია
                  </AlertDialogTitle>
                  <RegistrationForm
                    onCancel={() => setIsRegistrationOpen(false)}
                    isFullscreen={isFullscreen}
                    courses={courses}
                    isCoursesLoading={isCoursesLoading}
                  />
                </AlertDialogContent>
              </AlertDialog>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
