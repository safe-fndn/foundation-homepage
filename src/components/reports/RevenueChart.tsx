"use client";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type TooltipItem,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import DataToggle from "./DataToggle";
import {
  REVENUE,
  REVENUE_Q1_TOTALS,
  REVENUE_QOQ,
} from "@/content/reports/q1-2026-data";
import { cn } from "@/lib/utils";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SAFE_GREEN = "#12FF80";
const DARK = "#1A1A1A";
const GRID = "#1a1a1a0f";
const Q4_GREY = "#1A1A1A40"; // Prior quarter (muted)

export default function RevenueChart() {
  const [view, setView] = useState<"chart" | "table">("chart");

  const labels = REVENUE.months.map((m) => m.label);
  
  // Color Q4 bars muted (grey), Q1 bars at full saturation (green/dark)
  const foundationColors = REVENUE.months.map((_, i) => (i < 7 ? "#12ff8060" : SAFE_GREEN)); // Jun-Dec muted; Jan-Mar full green
  const labsColors = REVENUE.months.map((_, i) => (i < 7 ? "#1a1a1a30" : "#1A1A1A")); // Jun-Dec muted; Jan-Mar full dark
  const hecateColors = REVENUE.months.map((_, i) => (i < 7 ? "#1a1a1a20" : "#1a1a1a50")); // Jun-Dec lighter; Jan-Mar darker

  const data = {
    labels,
    datasets: [
      {
        label: "Foundation",
        data: REVENUE.months.map((m) => m.foundation),
        backgroundColor: foundationColors,
        borderRadius: 4,
        stack: "revenue",
      },
      {
        label: "Safe Labs",
        data: REVENUE.months.map((m) => m.safeLabs),
        backgroundColor: labsColors,
        borderRadius: 0,
        stack: "revenue",
      },
      {
        label: "Hecate",
        data: REVENUE.months.map((m) => m.hecate),
        backgroundColor: hecateColors,
        borderRadius: 0,
        stack: "revenue",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: DARK,
          font: { family: "Citerne, sans-serif", size: 12 },
          boxWidth: 12,
          padding: 16,
        },
      },
      tooltip: {
        backgroundColor: DARK,
        titleColor: "#fff",
        bodyColor: "#ffffff99",
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (ctx: TooltipItem<"bar">) =>
            ` ${ctx.dataset.label}: $${(ctx.parsed as {y: number}).y}K`,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { color: GRID },
        ticks: { color: DARK, font: { family: "Citerne, sans-serif", size: 12 } },
        border: { color: "#1a1a1a40" },
      },
      y: {
        stacked: true,
        grid: { color: GRID },
        ticks: {
          color: DARK,
          font: { family: "Citerne, sans-serif", size: 12 },
          callback: (v: number | string) => `$${v}K`,
        },
        border: { color: "#1a1a1a40" },
        title: { display: true, text: "USD (thousands)", color: "#1A1A1A99", font: { size: 11 } },
      },
    },
  };

  const qoqBadge = (pct: number) => (
    <span
      className={cn(
        "text-xs font-medium px-2 py-0.5 rounded-full",
        pct >= 0
          ? "text-[#12FF80] bg-[#12ff800f] border border-[#12ff8040]"
          : "text-[#1A1A1A99] bg-[#1a1a1a0d] border border-[#1a1a1a1a]"
      )}
    >
      {pct >= 0 ? "↑" : "↓"} {Math.abs(pct)}% vs Q4
    </span>
  );

  return (
    <div className="bg-white border border-[#E5E5E5] rounded-2xl p-5 md:p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-base font-medium text-[#1A1A1A]">Revenue by Stream</div>
          <div className="text-sm text-[#1A1A1A66]">Monthly breakdown across Foundation, Safe Labs, and Hecate from Jun 2025 to Mar 2026 (grey = prior months, full color = Q1)</div>
        </div>
        <DataToggle view={view} onChange={setView} />
      </div>

      {/* Q1 totals row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Foundation", value: "$1.0M", qoq: REVENUE_QOQ.foundation },
          { label: "Safe Labs", value: "$800K", qoq: REVENUE_QOQ.safeLabs },
          { label: "Hecate", value: "$500K", qoq: REVENUE_QOQ.hecate },
          { label: "Total Q1", value: "~$2.5M", qoq: REVENUE_QOQ.total },
        ].map((item) => (
          <div key={item.label} className="flex flex-col gap-1 p-3 bg-[#F5F5F5] rounded-xl">
            <span className="text-xs text-[#1A1A1A66]">{item.label}</span>
            <span className="text-lg font-medium text-[#1A1A1A]">{item.value}</span>
            {qoqBadge(item.qoq)}
          </div>
        ))}
      </div>

      {/* Chart / Table */}
      {view === "chart" ? (
        <div
          className="h-[260px] w-full"
          aria-label="Stacked bar chart showing monthly revenue breakdown by stream across Q1 2026"
        >
          <Bar data={data} options={options} />
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[#E5E5E5]">
          <table className="w-full text-sm text-[#1A1A1A]">
            <caption className="sr-only">Revenue by stream — Q1 2026</caption>
            <thead>
              <tr className="bg-[#F5F5F5]">
                {["Stream", "Jan", "Feb", "Mar†", "Q1 Total", "Q4 2025", "QoQ"].map((h) => (
                  <th key={h} scope="col" className="text-left px-4 py-3 font-medium text-[#1A1A1A99] border-b border-[#E5E5E5]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Foundation", jan: 300, feb: 350, mar: 350, q1: REVENUE_Q1_TOTALS.foundation, q4: REVENUE.q4Total.foundation, qoq: REVENUE_QOQ.foundation },
                { label: "Safe Labs", jan: 300, feb: 250, mar: 250, q1: REVENUE_Q1_TOTALS.safeLabs, q4: REVENUE.q4Total.safeLabs, qoq: REVENUE_QOQ.safeLabs },
                { label: "Hecate", jan: 150, feb: 150, mar: 200, q1: REVENUE_Q1_TOTALS.hecate, q4: REVENUE.q4Total.hecate, qoq: REVENUE_QOQ.hecate },
                { label: "Total", jan: 820, feb: 835, mar: 845, q1: REVENUE_Q1_TOTALS.total, q4: 2990, qoq: REVENUE_QOQ.total },
              ].map((row, i) => (
                <tr
                  key={row.label}
                  className={cn(
                    "hover:bg-[#12ff800a] transition-colors",
                    i === 3 ? "font-medium bg-[#F5F5F5]" : "border-b border-[#E5E5E5]"
                  )}
                >
                  <td className="px-4 py-3">{row.label}</td>
                  <td className="px-4 py-3">${row.jan}K</td>
                  <td className="px-4 py-3">${row.feb}K</td>
                  <td className="px-4 py-3">${row.mar}K</td>
                  <td className="px-4 py-3">{i === 3 ? "~$2.5M" : `$${(row.q1 / 1000).toFixed(1)}M`}</td>
                  <td className="px-4 py-3">{i === 3 ? "$2.99M" : `$${(row.q4 / 1000).toFixed(1)}M`}</td>
                  <td className="px-4 py-3">{row.qoq}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="text-xs text-[#1A1A1A66]">
        † March figures are projections. Q4 2025 total included a non-recurring performance event.
      </p>

      {/* Unaudited Disclaimer */}
      <div className="p-3 bg-[#12ff800a] border border-[#12ff8030] rounded-lg">
        <p className="text-xs text-[#1A1A1A99]">
          <span className="font-medium">Note:</span> All revenue figures presented are approximations and have not been independently audited. These figures are provided for illustrative purposes only. Actual results may differ materially.
        </p>
      </div>
    </div>
  );
}
