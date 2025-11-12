"use client";

import React, { useRef } from "react";
import { useScroll } from "motion/react";
import SectionTag from "../ui/SectionTag";
import AnimatedWord from "../ui/AnimatedWord";

export default function WhatIsSafe() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end 0.4"],
  });

  const fullText =
    "The SAFE token distributes ownership to govern Safe and tap into a diverse ecosystem powering over 50M onchain accounts.";
  const words = fullText.split(" ");

  return (
    <div ref={containerRef} className="px-[16px] max-w-[1002px] mx-auto">
      <SectionTag text="What is SAFE token?" />
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
    </div>
  );
}
