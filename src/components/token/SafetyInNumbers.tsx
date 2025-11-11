"use client";

import React from "react";
import SectionTag from "../ui/SectionTag";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const statsData = [
  {
    ratio: [3, 2],
    cards: [
      {
        label: "Value Stored",
        value: "$100B+",
      },
      {
        label: "SAFE ACCOUNTS DEPLOYED",
        value: "8M+",
      },
    ],
  },
  {
    ratio: [2, 3],
    cards: [
      {
        label: "TOTAL TRANSACTIONS",
        value: "40M+",
      },
      {
        label: "Partners",
        value: "200+",
      },
    ],
  },
  {
    ratio: [2, 1],
    cards: [
      {
        label: "Value Stored",
        value: "$100B+",
      },
      {
        label: "fundraised",
        value: "$100M",
      },
    ],
  },
];

export default function SafetyInNumbers() {
  const getFlexBasis = (ratio: number[], cardIndex: number) => {
    const total = ratio.reduce((sum, part) => sum + part, 0);
    const percentage = (ratio[cardIndex] / total) * 100;
    return `${percentage}%`;
  };

  const getCardIndex = (rowIndex: number, cardIndex: number) => {
    let index = 0;
    for (let i = 0; i < rowIndex; i++) {
      index += statsData[i].cards.length;
    }
    return index + cardIndex;
  };

  const animationDuration = 1;

  return (
    <div className="px-[16px] max-w-[1002px] mx-auto">
      <SectionTag text="Safety in Numbers" />
      <div className="pt-1 md:pt-4 pb-4 lg:pb-[64px] text-[36px] italic md:not-italic md:text-[64px]">
        The new standard of ownership
      </div>

      <div className="space-y-5">
        {statsData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row gap-5">
            {row.cards.map((card, cardIndex) => {
              const globalIndex = getCardIndex(rowIndex, cardIndex);
              const delay = globalIndex * animationDuration;

              return (
                <div
                  key={cardIndex}
                  className={cn(
                    "rounded-[10px] p-5 h-[200px] md:p-8 bg-[#12ff800f] flex flex-col justify-end border border-[#12ff8038] relative overflow-hidden"
                  )}
                  style={{
                    flexBasis: getFlexBasis(row.ratio, cardIndex),
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#12ff8038] rounded-[10px]"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{
                      clipPath: "inset(0 0% 0 0)",
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: animationDuration,
                      delay: delay,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="text-[18px]">{card.label}</div>
                    <div className="text-[64px] font-medium">{card.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
