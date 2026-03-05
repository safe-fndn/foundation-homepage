"use client";

import React from "react";
import { motion } from "motion/react";
import { REPORT_META, HEADLINE_KPIS } from "@/content/reports/q1-2026-data";
import MetricCard from "./MetricCard";

export default function ReportHero() {
  return (
    <div className="bg-[#1A1A1A] text-white pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-[1242px] mx-auto px-4">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[#12FF80] text-sm font-medium mb-4 flex items-center gap-2"
        >
          <span className="inline-block w-4 h-px bg-[#12FF80]" />
          {REPORT_META.entity}
        </motion.div>

        {/* Title + period */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <h1 className="text-[40px] md:text-[64px] font-medium leading-[1.1] tracking-tight text-white mb-3">
            {REPORT_META.title}
          </h1>
          <p className="text-[#ffffff60] text-base mb-2">{REPORT_META.period}</p>
          <p className="text-[#ffffff50] text-sm max-w-[580px] leading-relaxed">
            {REPORT_META.publishedNote}
          </p>
        </motion.div>

        {/* KPI summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {HEADLINE_KPIS.map((kpi, i) => (
            <MetricCard
              key={kpi.id}
              kpi={kpi}
              index={i}
              className="bg-[#ffffff08] border-[#ffffff15] hover:border-[#12ff8060]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
