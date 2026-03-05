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
        "relative bg-white border border-[#E5E5E5] rounded-2xl p-5 md:p-6 flex flex-col gap-4",
        "hover:border-[#12ff8060] hover:shadow-[0_0_0_1px_#12ff8020] transition-all duration-200",
        "focus-within:border-[#12FF80] focus-within:ring-2 focus-within:ring-[#12FF80] focus-within:ring-offset-2",
        className
      )}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-medium text-[#1A1A1A99]">{kpi.label}</span>

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
          className="text-xs text-[#1A1A1A99] bg-[#F5F5F5] rounded-lg p-3 -mt-2"
          role="tooltip"
        >
          {kpi.description}
        </motion.div>
      )}

      {/* Value */}
      <div>
        <div className="text-[32px] md:text-[36px] font-medium text-[#1A1A1A] leading-none tracking-tight">
          {kpi.value}
        </div>
        {kpi.unit && (
          <div className="text-xs text-[#1A1A1A66] mt-1">{kpi.unit}</div>
        )}
      </div>

      {/* Delta + Sparkline */}
      <div className="flex items-center justify-between gap-2">
        <span className={cn("inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full", deltaColor)}>
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
