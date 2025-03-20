"use client";
import {DollarSign} from "lucide-react"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaQuestionCircle, FaRocket, FaSpinner } from "react-icons/fa";
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = [
      "High-Level Web Projects",
      "At Prices That Fit Your Budget!",
    ];
    setMounted(true);
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      const currentText = texts[currentTextIndex];
      const shouldDelete = isDeleting;
      const speed = isDeleting ? 50 : 100;

      if (!shouldDelete && typedText === currentText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return;
      }

      if (shouldDelete && typedText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((current) => (current + 1) % texts.length);
        return;
      }

      const newText = shouldDelete
        ? currentText.substring(0, typedText.length - 1)
        : currentText.substring(0, typedText.length + 1);

      setTypedText(newText);
      timeout = setTimeout(typeWriter, speed);
    };

    timeout = setTimeout(typeWriter, 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex, isDeleting]);

  if (!mounted) {
    return (
      <div className="flex w-size justify-center items-center h-screen">
        <FaSpinner className="animate-spin justify-center
         text-primary text-4xl" />
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 background-color">
        <div className="text-center">

          <h1 className="text-5xl relative sm:text-7xl font-extrabold bg-gradient-to-r from-red-500 to-red-900  dark:bg-gradient-to-r dark:from-red.500 dark:to-red-950 bg-clip-text text-transparent tracking-tight mb-8 leading-24">
            {typedText}
            <span className="inline-block w-1 h-12 bg-logo-red animate-blink"></span>
            <span className="absolute w-8 bottom-0 rigth-12  h-1 bg-gradient-to-r from-blue-600/50 to-blue-500/50 blur-sm"></span>
          </h1>
          <FadeInWhenVisible>
          <p className="max-w-4xl font-bold mx-auto text-xl text-primary mb-10">
          <p>At Syti, we transform your ideas into powerful and efficient digital solutions. Specializing in web development, we create custom websites and systems, combining modern design, advanced functionality, and cutting-edge technology.</p>
          </p>
          </FadeInWhenVisible>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16">
          <FadeInWhenVisible>
            <Link
              href="/register/sign-up"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-red-950 rounded-xl hover:bg-primary/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">get in touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaRocket className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <Link
              href="#recursos"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-background rounded-xl border-2 border-red-600 hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span>Learn More</span>
              <FaQuestionCircle className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            </FadeInWhenVisible>
          </div>
        </div>
        </div>
      </div>
  );
};

export default HeroSection;