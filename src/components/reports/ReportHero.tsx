"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { REPORT_META, HEADLINE_KPIS } from "@/content/reports/q1-2026-data";
import MetricCard from "./MetricCard";

const WarpDitherCanvas = dynamic(
  () =>
    import("@/components/WrapDitherCanvas").then((m) => ({
      default: m.WarpDitherCanvas,
    })),
  { ssr: false }
);

export default function ReportHero() {
  return (
    <>
      {/* Full-viewport cover — white with green dither animation */}
      <div className="relative h-screen w-full overflow-hidden bg-white">
        <WarpDitherCanvas />

        {/* Gradient fade to white at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.00) 25.16%, #FFF 75.56%)",
          }}
        />

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#12FF80] text-sm font-medium mb-5 flex items-center gap-2"
          >
            <span className="inline-block w-4 h-px bg-[#12FF80]" />
            {REPORT_META.entity}
            <span className="inline-block w-4 h-px bg-[#12FF80]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="max-w-[860px] px-0 md:px-8 lg:px-12"
          >
            <h1 className="text-[36px] md:text-[60px] font-medium leading-[1.1] tracking-tight text-[#1A1A1A] mb-4"
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
              {REPORT_META.title}
            </h1>
            <p className="text-[#1A1A1A99] text-base mb-2">
              {REPORT_META.period}
            </p>
            <p className="text-[#1A1A1A80] text-sm max-w-[520px] leading-relaxed mx-auto">
              {REPORT_META.publishedNote}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Headline KPI strip — sits directly below the full-screen hero */}
      <div className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1242px] mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {HEADLINE_KPIS.map((kpi, i) => (
              <MetricCard
                key={kpi.id}
                kpi={kpi}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
