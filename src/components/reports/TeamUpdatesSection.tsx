"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { TEAM_UPDATES } from "@/content/reports/q1-2026-data";
import { cn } from "@/lib/utils";

const TEAM_ICONS: Record<string, string> = {
  "The Foundation": "◆",
  "Safe Labs": "⬡",
  "Hecate": "◈",
  "Safe Ventures": "◇",
  "Safe Research": "⬢",
};

const TEAM_COLORS: Record<string, { bg: string; border: string; accent: string }> = {
  "The Foundation": {
    bg: "#12ff800a",
    border: "#12ff8030",
    accent: "#12FF80",
  },
  "Safe Labs": {
    bg: "#3b82f60a",
    border: "#3b82f630",
    accent: "#3b82f6",
  },
  "Hecate": {
    bg: "#a855f70a",
    border: "#a855f730",
    accent: "#a855f7",
  },
  "Safe Ventures": {
    bg: "#f97316Ff0a",
    border: "#f9731630",
    accent: "#f97316",
  },
  "Safe Research": {
    bg: "#ec48560a",
    border: "#ec485630",
    accent: "#ec4856",
  },
};

export default function TeamUpdatesSection() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {TEAM_UPDATES.map((team, teamIdx) => (
        <motion.div
          key={team.team}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: teamIdx * 0.07, duration: 0.35 }}
          className={cn(
            "border rounded-2xl overflow-hidden",
            `bg-white border-[#E5E5E5]`,
            `ring-2 ring-offset-0`,
            `ring-[${TEAM_COLORS[team.team]?.accent || "#12FF80"}]`
          )}
          style={{
            boxShadow: `0 0 0 1px ${TEAM_COLORS[team.team]?.border || "#12ff8030"}`,
          }}
        >
          {/* Team header with colored accent */}
          <div
            className="flex items-center gap-3 px-5 py-4 border-b border-[#E5E5E5] bg-[#F5F5F5]"
            style={{
              borderLeftWidth: "4px",
              borderLeftColor: TEAM_COLORS[team.team]?.accent || "#12FF80",
            }}
          >
            <span
              className="text-lg"
              style={{ color: TEAM_COLORS[team.team]?.accent || "#12FF80" }}
              aria-hidden="true"
            >
              {TEAM_ICONS[team.team] ?? "◆"}
            </span>
            <h3 className="text-base font-medium text-[#1A1A1A]">{team.team}</h3>
            <span className="ml-auto text-xs text-[#1A1A1A66]">
              {team.items.length} update{team.items.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Updates */}
          <div className="px-5 py-1">
            <Accordion allowMultiple defaultOpen={[`${team.team}-0`]}>
              {team.items.map((item, itemIdx) => {
                const accordionId = `${team.team}-${itemIdx}`;
                return (
                  <AccordionItem key={accordionId} className="border-b border-[#E5E5E5] last:border-0">
                    <AccordionTrigger
                      id={accordionId}
                      className={cn(
                        "py-4 font-medium text-[#1A1A1A] hover:text-[#1A1A1A] text-sm",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12FF80] focus-visible:ring-inset rounded"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#12FF80] flex-shrink-0" />
                        {item.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent id={accordionId} className="pb-4">
                      <div className="text-sm text-[#1A1A1A99] leading-relaxed pl-4">
                        {item.body}
                        {item.url && (
                          <>
                            {" "}
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#1A1A1A] underline underline-offset-2 hover:text-[#1A1A1A99] transition-colors"
                            >
                              Read more
                            </a>
                          </>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
