"use client";

import React, { useRef } from "react";
import { useScroll } from "motion/react";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";
import AnimatedWord from "../ui/AnimatedWord";

export default function MeetSafeFoundation() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end 0.4"],
  });

  const fullText =
    "A non-profit for accelerating permissionless access to self-custody infrastructure for the world's GDP.";
  const words = fullText.split(" ");

  return (
    <div ref={containerRef} className="px-[16px] max-w-[1002px] mx-auto">
      <SectionTag text="Meet Safe Foundation" />
      <div className="pt-5 md:pt-[40px] text-[#1A1A1A] text-[52px] md:text-[82px] leading-[120%]">
        {words.map((word, wordIndex) => (
          <AnimatedWord
            key={wordIndex}
            word={word}
            scrollYProgress={scrollYProgress}
            wordIndex={wordIndex}
            totalWords={words.length}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <a
          href="https://docs.safe.global"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="mt-[60px] w-full max-w-[530px] text-lg md:text-[32px] px-[30px]"
            variant="secondary"
            icon="/images/common/arrow-right-light.svg"
            iconAlt="arrow right"
            iconHeight={24}
            iconWidth={24}
          >
            Start building
          </Button>
        </a>
      </div>
    </div>
  );
}
