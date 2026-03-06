"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Sparkline from "./Sparkline";
import type { KPI } from "@/content/reports/q1-2026-data";

interface MetricCardProps {
  kpi: KPI;
  index?: number;
  className?: string;
}

export default function MetricCard({ kpi, index = 0, className }: MetricCardProps) {
  const [showInfo, setShowInfo] = useState(false);

  const deltaColor =
    kpi.deltaDirection === "up"
      ? "text-[#12FF80] bg-[#12ff800f] border border-[#12ff8040]"
      : kpi.deltaDirection === "down"
      ? "text-[#1A1A1A99] bg-[#1a1a1a0d] border border-[#1a1a1a1a]"
      : "text-[#1A1A1A66] bg-[#1a1a1a08] border border-[#1a1a1a0d]";

  const deltaIcon = kpi.deltaDirection === "up" ? "↑" : kpi.deltaDirection === "down" ? "↓" : "→";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "relative bg-transparent rounded-xl p-3 flex flex-col gap-3",
        "hover:shadow-[0_0_12px_rgba(18,255,128,0.3)] transition-all duration-300 ease-out",
        "focus-within:ring-2 focus-within:ring-[#12FF80] focus-within:ring-offset-2",
        className
      )}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-medium text-[#1A1A1A99]">{kpi.label}</span>

        {/* Info toggle */}
        <button
          onClick={() => setShowInfo((v) => !v)}
          aria-label={`Definition of ${kpi.label}`}
          aria-expanded={showInfo}
          className={cn(
            "w-5 h-5 rounded-full border text-[10px] font-bold flex items-center justify-center flex-shrink-0 transition-colors duration-150",
            showInfo
              ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
              : "border-[#1a1a1a40] text-[#1A1A1A66] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
          )}
        >
          i
        </button>
      </div>

      {/* Info popover */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="text-[10px] text-[#1A1A1A99] bg-[#F5F5F5] rounded-lg p-2 -mt-2"
          role="tooltip"
        >
          {kpi.description}
        </motion.div>
      )}

      {/* Value */}
      <div>
        <div className="text-[28px] md:text-[32px] font-medium text-[#1A1A1A] leading-none tracking-tight">
          {kpi.value}
        </div>
        {kpi.unit && (
          <div className="text-[10px] text-[#1A1A1A66] mt-1">{kpi.unit}</div>
        )}
      </div>

      {/* Delta + Sparkline */}
      <div className="flex items-center justify-between gap-2">
        <span className={cn("inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full", deltaColor)}>
          {deltaIcon} {kpi.delta} vs Q4
        </span>
        {kpi.sparkline && (
          <Sparkline
            data={kpi.sparkline}
            color={kpi.deltaDirection === "up" ? "#12FF80" : "#1a1a1a40"}
          />
        )}
      </div>
    </motion.div>
  );
}
