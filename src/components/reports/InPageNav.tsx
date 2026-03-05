"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface NavSection {
  id: string;
  label: string;
}

interface InPageNavProps {
  sections: NavSection[];
}

/**
 * Sticky in-page nav for desktop; collapsible dropdown for mobile.
 * Tracks scroll position to highlight the active section.
 */
export default function InPageNav({ sections }: InPageNavProps) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setMobileOpen(false);
    }
  };

  const activeLabel = sections.find((s) => s.id === active)?.label ?? sections[0]?.label;

  return (
    <div className="sticky top-[64px] z-40 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-[1242px] mx-auto px-4">
        {/* Mobile: dropdown */}
        <div className="md:hidden flex items-center justify-between py-3">
          <span className="text-sm font-medium text-[#1A1A1A]">{activeLabel}</span>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle section navigation"
            className="text-sm text-[#1A1A1A66] flex items-center gap-1 hover:text-[#1A1A1A] transition-colors"
          >
            Jump to
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={cn("transition-transform duration-200", mobileOpen && "rotate-180")}
            >
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-3 flex flex-col gap-1">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={cn(
                  "text-left text-sm px-3 py-2 rounded-lg transition-colors duration-150",
                  active === id
                    ? "bg-[#12ff800f] text-[#1A1A1A] font-medium"
                    : "text-[#1A1A1A99] hover:bg-[#F5F5F5] hover:text-[#1A1A1A]"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Desktop: horizontal tabs */}
        <nav
          aria-label="Report sections"
          className="hidden md:flex items-center gap-1 overflow-x-auto py-0"
        >
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cn(
                "flex-shrink-0 text-sm px-3 py-3 border-b-2 transition-all duration-150 whitespace-nowrap",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12FF80] focus-visible:ring-inset",
                active === id
                  ? "border-[#1A1A1A] text-[#1A1A1A] font-medium"
                  : "border-transparent text-[#1A1A1A66] hover:text-[#1A1A1A] hover:border-[#1a1a1a40]"
              )}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
