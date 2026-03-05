import React from "react";
import { motion } from "motion/react";
import { LOOKING_AHEAD } from "@/content/reports/q1-2026-data";

export default function LookingAheadSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {LOOKING_AHEAD.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.35 }}
          className="flex flex-col gap-3 p-5 md:p-6 bg-[#1A1A1A] rounded-2xl border border-[#ffffff10] hover:border-[#12ff8040] transition-colors duration-200"
        >
          <span
            className="text-[#12FF80] text-xs font-medium uppercase tracking-widest"
            aria-hidden="true"
          >
            Q2 2026
          </span>
          <h3 className="text-base md:text-lg font-medium text-white leading-snug">{item.title}</h3>
          <p className="text-sm text-[#ffffff80] leading-relaxed">{item.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
