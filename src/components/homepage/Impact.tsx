"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionTag from "../ui/SectionTag";
import { stats } from "@/content/impact";

export default function Impact() {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  return (
    <div className="px-[16px] max-w-[953px] w-full text-left mx-auto">
      <SectionTag text="Impact" />
      <div className="text-[#1A1A1A] text-[36px] max-w-[408px] md:max-w-full leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px] md:text-[64px]">
        <span className="italic">Safe</span> Smart Accounts underpin onchain
        value
      </div>
      <svg viewBox="0 0 953 874" fill="none" className="w-full">
        {stats.map((stat) => (
          <motion.g
            key={stat.title}
            onMouseEnter={() => setHoveredStat(stat.title)}
            onMouseLeave={() => setHoveredStat(null)}
            style={{ cursor: "pointer" }}
            onClick={() => window.open(stat.href, "_blank")}
          >
            <motion.path
              d={stat.d}
              fill="#12FF80"
              fillOpacity={hoveredStat === stat.title ? 1 : stat.fillOpacity}
            />
            <text x={stat.labelPosition.x} y={stat.labelPosition.y} fill="#000">
              <tspan fontSize="64" fontWeight={500} x={stat.labelPosition.x}>
                {stat.title}
              </tspan>
              <tspan
                fontSize="18"
                fontWeight={400}
                x={stat.labelPosition.x}
                dy="36"
              >
                {stat.subtitle}
              </tspan>
            </text>
            <AnimatePresence>
              {hoveredStat === stat.title && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="hidden md:block"
                  style={{ mixBlendMode: "luminosity" }}
                >
                  {stat.descComponent()}
                </motion.g>
              )}
            </AnimatePresence>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
