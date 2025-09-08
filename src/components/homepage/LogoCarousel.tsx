"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Logo {
  name: string;
  src: string;
  url: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  duration?: number;
}

export default function LogoCarousel({
  logos,
  duration = 30,
}: LogoCarouselProps) {
  const logoWidth = 320;

  // Create enough copies to ensure seamless scrolling
  const copies = 4;
  const duplicatedLogos = Array.from({ length: copies }, (_, copyIndex) =>
    logos.map((logo, logoIndex) => ({
      ...logo,
      id: `${copyIndex}-${logoIndex}`, // Unique key for each logo instance
    }))
  ).flat();

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-5"
        animate={{
          x: [0, -logoWidth * 10],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo) => (
          <a
            key={logo.id}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[300px] h-[150px] bg-[#12ff8038] rounded-[10px] flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={180}
              height={42}
              className="w-[80%] h-auto"
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
}
