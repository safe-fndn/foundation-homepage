import React from "react";
import { PRESS_HIGHLIGHTS, ECOSYSTEM_HIGHLIGHTS } from "@/content/reports/q1-2026-data";

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="flex-shrink-0">
      <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function EcosystemSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Press */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-[#1A1A1A99] uppercase tracking-widest">Press</span>
          <div className="flex-1 h-px bg-[#E5E5E5]" />
        </div>
        {PRESS_HIGHLIGHTS.map((item) => (
          <a
            key={item.headline}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 p-4 bg-white border border-[#E5E5E5] rounded-xl hover:border-[#12ff8060] hover:shadow-[0_0_0_1px_#12ff8020] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12FF80]"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm font-medium text-[#1A1A1A] leading-snug group-hover:underline">
                {item.headline}
              </span>
              <ExternalIcon />
            </div>
            <span className="text-xs text-[#1A1A1A66]">{item.summary}</span>
          </a>
        ))}
      </div>

      {/* Ecosystem */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-[#1A1A1A99] uppercase tracking-widest">Ecosystem</span>
          <div className="flex-1 h-px bg-[#E5E5E5]" />
        </div>
        {ECOSYSTEM_HIGHLIGHTS.map((item) => (
          <div
            key={item.entity}
            className={
              item.url
                ? undefined
                : "flex flex-col gap-1 p-4 bg-white border border-[#E5E5E5] rounded-xl"
            }
          >
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 p-4 bg-white border border-[#E5E5E5] rounded-xl hover:border-[#12ff8060] hover:shadow-[0_0_0_1px_#12ff8020] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12FF80]"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-medium text-[#1A1A1A] group-hover:underline">{item.entity}</span>
                  <ExternalIcon />
                </div>
                <span className="text-xs text-[#1A1A1A66]">{item.summary}</span>
              </a>
            ) : (
              <>
                <span className="text-sm font-medium text-[#1A1A1A]">{item.entity}</span>
                <span className="text-xs text-[#1A1A1A66]">{item.summary}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
