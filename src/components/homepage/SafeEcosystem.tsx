"use client";

import React from "react";
import { motion } from "motion/react";
import Button from "../ui/Button";
import Image from "next/image";
import { logos } from "@/content/safeEcosystem";

export default function SafeEcosystem() {
  return (
    <div>
      <div className="max-w-[953px] px-[16px] mx-auto flex flex-row justify-between items-end gap-2 pb-5">
        <div className="max-w-[170px] md:max-w-full">
          <div className="text-[#1A1A1A] text-lg md:text-2xl font-medium pb-2 md:pb-5">
            The Safe Ecosystem:
          </div>
          <div className="text-black/[0.6] text-sm font-light">
            200+ ecosystem project are built on the Safe smart account standard
          </div>
        </div>
        <a
          href="https://safe.global/ecosystem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="w-full max-w-[188px] whitespace-nowrap text-[14px]"
            variant="secondary"
            icon="/images/common/arrow-right-light.svg"
            iconAlt="arrow right"
            iconHeight={18}
            iconWidth={18}
          >
            Explore Ecosystem
          </Button>
        </a>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-5"
          animate={{
            x: [0, -320 * logos.length],
          }}
          transition={{
            duration: logos.length * 4,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {logos.map((logo, index) => (
            <a
              key={`first-${index}`}
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
          {logos.map((logo, index) => (
            <a
              key={`second-${index}`}
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
    </div>
  );
}
