"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DataToggleProps {
  view: "chart" | "table";
  onChange: (view: "chart" | "table") => void;
  className?: string;
}

/**
 * Accessible Chart / Table toggle for all chart components.
 * Allows keyboard navigation and screen reader access to underlying data.
 */
export default function DataToggle({ view, onChange, className }: DataToggleProps) {
  return (
    <div
      role="group"
      aria-label="Toggle chart or table view"
      className={cn("inline-flex rounded-lg border border-[#E5E5E5] overflow-hidden text-sm", className)}
    >
      {(["chart", "table"] as const).map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          aria-pressed={view === v}
          className={cn(
            "px-3 py-1.5 font-medium transition-colors duration-150 capitalize",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12FF80] focus-visible:ring-inset",
            view === v
              ? "bg-[#1A1A1A] text-white"
              : "bg-white text-[#1A1A1A99] hover:text-[#1A1A1A] hover:bg-[#F5F5F5]"
          )}
        >
          {v}
        </button>
      ))}
    </div>
  );
}
