"use client";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import DataToggle from "./DataToggle";
import {
  SAFE_IN_CONTEXT,
  EVM_DEFI_CONTEXT,
} from "@/content/reports/q1-2026-data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const SAFE_GREEN = "#12FF80";
const DARK = "#1A1A1A";
const GRID = "#1a1a1a0f";

export default function ContextChart() {
  const [view, setView] = useState<"chart" | "table">("chart");

  const data = {
    labels: SAFE_IN_CONTEXT.map((d) => d.label),
    datasets: [
      {
        label: "TVL (USD billions)",
        data: SAFE_IN_CONTEXT.map((d) => d.tvlBillions),
        backgroundColor: SAFE_IN_CONTEXT.map((d) =>
          d.isSafe ? SAFE_GREEN : "#1a1a1a20"
        ),
        borderRadius: 6,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: DARK,
        titleColor: "#fff",
        bodyColor: "#ffffff99",
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (ctx: { parsed: { x: number } }) => ` $${ctx.parsed.x.toFixed(1)}B TVL`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: GRID },
        ticks: {
          color: DARK,
          font: { family: "Citerne, sans-serif", size: 12 },
          callback: (v: number | string) => `$${v}B`,
        },
        border: { color: "#1a1a1a40" },
      },
      y: {
        grid: { display: false },
        ticks: { color: DARK, font: { family: "Citerne, sans-serif", size: 13 } },
        border: { display: false },
      },
    },
  };

  return (
    <div className="bg-white border border-[#E5E5E5] rounded-2xl p-5 md:p-6 flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-base font-medium text-[#1A1A1A]">Safe vs DeFi Peers</div>
          <div className="text-sm text-[#1A1A1A66]">TVL comparison at Q1 2026 close (USD billions)</div>
        </div>
        <DataToggle view={view} onChange={setView} />
      </div>

      {view === "chart" ? (
        <div
          className="h-[160px] w-full"
          aria-label="Horizontal bar chart: Safe $33.8B, Aave $27.2B, Lido $19.4B TVL"
        >
          <Bar data={data} options={options} />
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[#E5E5E5]">
          <table className="w-full text-sm text-[#1A1A1A]">
            <caption className="sr-only">TVL comparison — Safe vs peers</caption>
            <thead>
              <tr className="bg-[#F5F5F5]">
                {["Protocol", "TVL (USD)"].map((h) => (
                  <th key={h} scope="col" className="text-left px-4 py-3 font-medium text-[#1A1A1A99] border-b border-[#E5E5E5]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SAFE_IN_CONTEXT.map((d) => (
                <tr key={d.label} className="hover:bg-[#12ff800a] border-b border-[#E5E5E5] last:border-0 transition-colors">
                  <td className="px-4 py-3 font-medium">{d.label}</td>
                  <td className="px-4 py-3">${d.tvlBillions.toFixed(1)}B</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Context callouts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 bg-[#12ff800f] border border-[#12ff8030] rounded-xl">
          <div className="text-xs text-[#1A1A1A66] mb-1">Share of EVM DeFi TVL</div>
          <div className="text-2xl font-medium text-[#1A1A1A]">~{EVM_DEFI_CONTEXT.safeSharePercent}%</div>
          <div className="text-xs text-[#1A1A1A66]">of ~${EVM_DEFI_CONTEXT.totalEvmDeFiTvl}B total</div>
        </div>
        <div className="p-3 bg-[#F5F5F5] rounded-xl">
          <div className="text-xs text-[#1A1A1A66] mb-1">Stablecoins in Safe</div>
          <div className="text-2xl font-medium text-[#1A1A1A]">${EVM_DEFI_CONTEXT.stablecoinHeld}B</div>
          <div className="text-xs text-[#1A1A1A66]">at Q1 close</div>
        </div>
        <div className="p-3 bg-[#F5F5F5] rounded-xl">
          <div className="text-xs text-[#1A1A1A66] mb-1">Global stablecoin share</div>
          <div className="text-2xl font-medium text-[#1A1A1A]">~{EVM_DEFI_CONTEXT.stablecoinGlobalSharePercent}%</div>
          <div className="text-xs text-[#1A1A1A66]">of all stablecoins</div>
        </div>
      </div>
      <p className="text-xs text-[#1A1A1A66]">
        Source: DeFiLlama. Benchmarks as of Q1 2026 close. Safe's TVL includes all assets in Safe accounts; Aave and Lido are listed protocols.
      </p>
    </div>
  );
}
