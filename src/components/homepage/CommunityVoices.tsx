"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";
import { testimonials } from "@/content/communityVoices";

export default function CommunityVoices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleManualNavigation = (direction: "prev" | "next") => {
    setHasInteracted(true);
    if (direction === "prev") {
      goToPrevious();
    } else {
      goToNext();
    }
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set timer based on interaction state
    const interval = hasInteracted ? 7000 : 5000;

    intervalRef.current = setInterval(() => {
      goToNext();
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hasInteracted]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="px-[16px] max-w-[953px] w-full text-left mx-auto">
      <div className="flex flex-row justify-between items-center">
        <SectionTag text="Community voices" />
        <div className="flex flex-row gap-[10px] items-center">
          <Button
            icon="/images/common/arrow-right-bold.svg"
            iconAlt="Previous"
            iconHeight={24}
            iconWidth={24}
            variant="link"
            className="p-0 rotate-180"
            onClick={() => handleManualNavigation("prev")}
          />
          <Button
            icon="/images/common/arrow-right-bold.svg"
            iconAlt="Next"
            iconHeight={24}
            iconWidth={24}
            variant="link"
            className="p-0"
            onClick={() => handleManualNavigation("next")}
          />
        </div>
      </div>
      <div className="pt-4 md:pt-10">
        <svg viewBox="0 0 953 534" fill="none" className="w-full">
          <defs>
            <clipPath id="roundedImageClip">
              <rect x="686" y="264" width="270" height="270" rx="20" ry="20" />
            </clipPath>
          </defs>

          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H933C944.046 0 953 8.9543 953 20V230C953 241.046 944.046 250 933 250H0V20Z"
            fill="#12FF80"
            fillOpacity="0.22"
          />
          <path
            d="M0 250H673V355C673 366.046 664.046 375 653 375H20C8.95431 375 0 366.046 0 355V250Z"
            fill="#12FF80"
            fillOpacity="0.22"
          />
          <rect
            width={26}
            height={26}
            transform="translate(699 250) rotate(90)"
            fill="#12FF80"
            fillOpacity="0.22"
          />
          <path
            d="M699 250L699 276L673 276L673 270C673 258.954 681.954 250 693 250L699 250Z"
            fill="white"
          />
          <path
            d="M791.328 72.2388V154.42C791.316 166.304 786.589 177.699 778.186 186.103C769.782 194.507 758.387 199.233 746.503 199.246C744.521 199.246 742.621 198.458 741.22 197.057C739.819 195.656 739.032 193.756 739.032 191.775C739.032 189.793 739.819 187.893 741.22 186.492C742.621 185.091 744.521 184.304 746.503 184.304C754.428 184.304 762.029 181.155 767.634 175.551C773.238 169.946 776.386 162.345 776.386 154.42V146.949H720.354C716.391 146.949 712.591 145.374 709.789 142.572C706.986 139.77 705.412 135.97 705.412 132.007V72.2388C705.412 68.276 706.986 64.4754 709.789 61.6733C712.591 58.8711 716.391 57.2969 720.354 57.2969H776.386C780.349 57.2969 784.15 58.8711 786.952 61.6733C789.754 64.4754 791.328 68.276 791.328 72.2388ZM884.716 57.2969H828.683C824.721 57.2969 820.92 58.8711 818.118 61.6733C815.316 64.4754 813.741 68.276 813.741 72.2388V132.007C813.741 135.97 815.316 139.77 818.118 142.572C820.92 145.374 824.721 146.949 828.683 146.949H884.716V154.42C884.716 162.345 881.567 169.946 875.963 175.551C870.359 181.155 862.758 184.304 854.832 184.304C852.85 184.304 850.95 185.091 849.549 186.492C848.148 187.893 847.361 189.793 847.361 191.775C847.361 193.756 848.148 195.656 849.549 197.057C850.95 198.458 852.85 199.246 854.832 199.246C866.717 199.233 878.111 194.507 886.515 186.103C894.919 177.699 899.645 166.304 899.658 154.42V72.2388C899.658 68.276 898.084 64.4754 895.281 61.6733C892.479 58.8711 888.679 57.2969 884.716 57.2969Z"
            fill="#1A1A1A"
          />
          <rect
            y={387}
            width={673}
            height={147}
            rx={20}
            fill="#12FF80"
            fillOpacity="0.4"
          />
          <foreignObject x={20} y={20} width={680} height={400}>
            <div className="text-[40px] md:text-[29px] font-medium text-[#1a1a1acc] transition-all duration-300">
              {currentTestimonial.title}
            </div>
            <div className="text-[26px] md:text-[18px] font-light text-[#1a1a1acc] mt-0 md:mt-2 max-w-[620px] transition-all duration-300">
              {currentTestimonial.subtitle}
            </div>
          </foreignObject>
          <foreignObject x={20} y={410} width={380} height={100}>
            <div className="text-[40px] font-semibold transition-all duration-300">
              {currentTestimonial.name}
            </div>
            {currentTestimonial.professionalTitle && (
              <div className="text-[26px] md:text-[18px] font-light text-[#1a1a1acc] transition-all duration-300">
                {currentTestimonial.professionalTitle}
              </div>
            )}
          </foreignObject>
          <image
            x="686"
            y="264"
            width="270"
            height="270"
            href={currentTestimonial.imageUrl}
            className="transition-all duration-300"
            clipPath="url(#roundedImageClip)"
          />
        </svg>
      </div>
    </div>
  );
}
