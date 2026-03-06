"use client";

/**
 * Q1 2026 Quarterly Report — Page
 *
 * All numbers rendered on this page are sourced exclusively from:
 *   src/content/reports/q1-2026-data.ts
 *
 * To update for Q2: edit q1-2026-data.ts only — no changes needed here.
 */

import React from "react";
import dynamic from "next/dynamic";
import ReportHero from "@/components/reports/ReportHero";
import InPageNav from "@/components/reports/InPageNav";
import ReportSectionWrapper from "@/components/reports/ReportSectionWrapper";
import LetterSection from "@/components/reports/LetterSection";
import MilestoneCards from "@/components/reports/MilestoneCards";
import TeamUpdatesSection from "@/components/reports/TeamUpdatesSection";
import EcosystemSection from "@/components/reports/EcosystemSection";
import LookingAheadSection from "@/components/reports/LookingAheadSection";
import { DISCLAIMER } from "@/content/reports/q1-2026-data";

// Lazy-load chart components (they register ChartJS globals and shouldn't SSR)
const ProtocolMetricsChart = dynamic(
  () => import("@/components/reports/ProtocolMetricsChart"),
  { ssr: false, loading: () => <ChartSkeleton rows={2} /> }
);
const RevenueChart = dynamic(
  () => import("@/components/reports/RevenueChart"),
  { ssr: false, loading: () => <ChartSkeleton rows={1} /> }
);
const ContextChart = dynamic(
  () => import("@/components/reports/ContextChart"),
  { ssr: false, loading: () => <ChartSkeleton rows={1} /> }
);

function ChartSkeleton({ rows = 1 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-[300px] rounded-2xl bg-[#1a1a1a08] animate-pulse" />
      ))}
    </div>
  );
}

const NAV_SECTIONS = [
  { id: "letter", label: "Letter to Backers" },
  { id: "milestones", label: "Quarter Milestones" },
  { id: "protocol", label: "Protocol Metrics" },
  { id: "context", label: "Safe in Context" },
  { id: "revenue", label: "Revenue" },
  { id: "team", label: "Team Updates" },
  { id: "ecosystem", label: "PR & Ecosystem" },
  { id: "outlook", label: "Looking Ahead" },
  { id: "disclaimer", label: "Disclaimer" },
];

export default function Q1ReportPage() {
  return (
    <>
      {/* Hero / Cover */}
      <ReportHero />

      {/* Sticky In-Page Nav */}
      <InPageNav sections={NAV_SECTIONS} />

      {/* ── Letter to Backers ── */}
      <ReportSectionWrapper
        id="letter"
        title="Letter to Backers"
        className="bg-white"
      >
        <LetterSection />
      </ReportSectionWrapper>

      {/* ── Quarter Milestones ── */}
      <ReportSectionWrapper
        id="milestones"
        tag="Q1 2026"
        title="Quarter Milestones"
        subtitle="Three headline moments that defined Q1."
        className="bg-[#E4EDE6]"
      >
        <MilestoneCards />
      </ReportSectionWrapper>

      {/* ── Protocol Metrics ── */}
      <ReportSectionWrapper
        id="protocol"
        tag="Protocol Metrics"
        title="Safe delivered transaction volume growth of 35% Q/Q to 4.75 million ETH despite a softer TVL market."
        subtitle="Jan–Mar 2026 · † March figures are full-month projections."
        className="bg-white"
      >
        <ProtocolMetricsChart />
      </ReportSectionWrapper>

      {/* ── Safe in Context (Subsection) ── */}
      <ReportSectionWrapper
        id="context"
        tag="Within Protocol Metrics"
        title="Infrastructure beneath DeFi"
        subtitle="At ~$33.8B, Safe's TVL at Q1 close exceeds Aave and Lido individually. Safe is not a protocol within DeFi — it is infrastructure beneath much of it."
        className="bg-[#F5F5F5] py-12 md:py-16 border-t border-[#12FF80]/20"
      >
        <ContextChart />
      </ReportSectionWrapper>

      {/* ── Revenue ── */}
      <ReportSectionWrapper
        id="revenue"
        tag="Financial Performance"
        title="Q1 2026 revenue totalled approximately $2.5M, down 16% Q/Q."
        subtitle="Breakdown across Foundation, Safe Labs, and Hecate. Q4 2025 included a non-recurring performance event."
        className="bg-white"
      >
        <RevenueChart />
      </ReportSectionWrapper>

      {/* ── Team Updates ── */}
      <ReportSectionWrapper
        id="team"
        tag="Team Updates"
        title="Q1 across Safe teams"
        subtitle="35+ product and ecosystem updates shipped across Foundation, Safe Labs, Hecate, Safe Ventures, and Safe Research."
        className="bg-[#E4EDE6]"
      >
        <TeamUpdatesSection />
      </ReportSectionWrapper>

      {/* ── PR & Ecosystem ── */}
      <ReportSectionWrapper
        id="ecosystem"
        tag="PR & Ecosystem"
        title="Press and ecosystem highlights"
        className="bg-white"
      >
        <EcosystemSection />
      </ReportSectionWrapper>

      {/* ── Looking Ahead ── */}
      <ReportSectionWrapper
        id="outlook"
        tag="Looking Ahead"
        title="Q2 2026"
        dark
        className="bg-[#1A1A1A]"
      >
        <LookingAheadSection />
      </ReportSectionWrapper>

      {/* ── Disclaimer ── */}
      <section
        id="disclaimer"
        aria-labelledby="disclaimer-heading"
        className="scroll-mt-20 py-12 bg-white border-t border-[#E5E5E5]"
      >
        <div className="max-w-[1242px] mx-auto px-4">
          <h2
            id="disclaimer-heading"
            className="text-xs font-medium text-[#1A1A1A66] uppercase tracking-widest mb-4"
          >
            Disclaimer
          </h2>
          <p className="text-xs text-[#1A1A1A66] leading-relaxed max-w-[820px]">
            {DISCLAIMER}
          </p>
        </div>
      </section>
    </>
  );
}
