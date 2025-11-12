"use client";

import React, { useState, useEffect } from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "motion/react";

export default function NoGas() {
  const [cellAnimations, setCellAnimations] = useState<Array<{
    duration: number;
    delay: number;
  }> | null>(null);

  useEffect(() => {
    const generateAnimations = () => {
      return Array.from({ length: 35 }).map(() => {
        const shouldHaveNoDelay = Math.random() < 0.3;
        return {
          duration: Math.random() * 4 + 4,
          delay: shouldHaveNoDelay ? 0 : Math.random() * 4,
        };
      });
    };

    setCellAnimations(generateAnimations());
  }, []);

  return (
    <div className="px-[16px] pb-[100px] md:pb-[160px] max-w-[953px] w-full text-left mx-auto">
      <SectionTag text="No-Fees November" />
      <div className="text-[#1A1A1A] text-[36px] max-w-[408px] md:max-w-full leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px] md:text-[64px]">
        This November, Safe covers your ETH gas fees if you hold SAFE.
      </div>

      <div className="relative grid grid-cols-7 w-fit mx-auto">
        {cellAnimations &&
          cellAnimations.map((animation, index) => (
            <motion.div
              key={`${index}-${animation.duration}`}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: animation.duration,
                delay: animation.delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/common/safe-engraved.png"
                alt="Safe engraved"
                width={100}
                height={100}
                className="w-[42px] h-[42px] md:w-[100px] md:h-[100px]"
              />
            </motion.div>
          ))}
        <a
          href="https://app.safe.global/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Button
            className="w-[220px] md:w-[420px] text-sm md:text-[32px] md:px-[30px]"
            variant="secondary"
            icon="/images/common/arrow-right-light.svg"
            iconAlt="arrow right"
            iconHeight={24}
            iconWidth={24}
          >
            Try No-Fees November
          </Button>
        </a>
      </div>
    </div>
  );
}
