import React from "react";
import { motion } from "motion/react";
import { MILESTONES } from "@/content/reports/q1-2026-data";

// Icon emoji mapping
const iconMap: Record<string, string> = {
  "mdi:cash-multiple": "💰",
  "mdi:shield-check": "✓",
  "mdi:piggy-bank": "🏦",
};

export default function MilestoneCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {MILESTONES.map((m, i) => (
        <motion.div
          key={m.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="flex flex-col gap-3 p-4 bg-[#12ff800f] border border-[#12ff8030] rounded-2xl hover:bg-[#12ff801a] hover:border-[#12FF80] transition-all duration-200"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-[#1A1A1A66]">{m.date}</span>
            {m.icon && <span className="text-lg">{iconMap[m.icon] || m.icon}</span>}
          </div>
          <h3 className="text-lg font-medium text-[#1A1A1A] leading-snug">{m.title}</h3>
          <p className="text-sm text-[#1A1A1A99] leading-relaxed line-clamp-2">{m.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
