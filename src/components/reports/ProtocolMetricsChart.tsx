"use client";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type TooltipItem,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import DataToggle from "./DataToggle";
import { PROTOCOL_METRICS } from "@/content/reports/q1-2026-data";
import { cn } from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LABELS = PROTOCOL_METRICS.months.map((m) => m.label);
const SAFE_GREEN = "#12FF80";
const DARK = "#1A1A1A";
const MUTED = "#1a1a1a40";
const GRID = "#1a1a1a0f";
const Q4_GREY = "#1A1A1A40"; // Prior quarter (muted)

const baseChartOptions = {
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
      displayColors: true,
    },
  },
  scales: {
    x: {
      grid: { color: GRID },
      ticks: { color: DARK, font: { family: "Citerne, sans-serif", size: 12 } },
      border: { color: MUTED },
    },
    y: {
      grid: { color: GRID },
      ticks: { color: DARK, font: { family: "Citerne, sans-serif", size: 12 } },
      border: { color: MUTED },
    },
  },
} as const;

// ─── nTVP Line Chart ──────────────────────────────────────────────────────────

function NtvpChart() {
  const [view, setView] = useState<"chart" | "table">("chart");
  const pointColors = PROTOCOL_METRICS.months.map((_, i) => (i < 7 ? Q4_GREY : SAFE_GREEN)); // Jun-Dec grey; Jan-Mar green
  const data = {
    labels: LABELS,
    datasets: [
      {
        label: "nTVP (ETH, thousands)",
        data: PROTOCOL_METRICS.months.map((m) => +(m.ntvpEth / 1000).toFixed(2)),
        borderColor: SAFE_GREEN,
        backgroundColor: "#12ff8018",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: pointColors,
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      tooltip: {
        ...baseChartOptions.plugins.tooltip,
        callbacks: {
          label: (ctx: TooltipItem<"line">) => ` ${(ctx.parsed as {y: number}).y.toFixed(2)}K ETH`,
        },
      },
    },
    scales: {
      ...baseChartOptions.scales,
      y: {
        ...baseChartOptions.scales.y,
        title: { display: true, text: "Thousands of ETH", color: "#1A1A1A99", font: { size: 11 } },
      },
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-base font-medium text-[#1A1A1A]">Transaction Volume (nTVP)</div>
          <div className="text-sm text-[#1A1A1A66]">Monthly ETH-denominated throughput — Jun 2025 to Mar 2026 (grey = prior months, green = Q1)</div>
        </div>
        <DataToggle view={view} onChange={setView} />
      </div>

      {view === "chart" ? (
        <div className="h-[240px] w-full" aria-label="nTVP line chart showing monthly ETH throughput from June 2025 to March 2026">
          <Line data={data} options={options} />
        </div>
      ) : (
        <AccessibleTable
          caption="nTVP — monthly ETH throughput"
          headers={["Month", "nTVP (ETH)", "Projected"]}
          rows={PROTOCOL_METRICS.months.map((m) => [
            m.label,
            (m.ntvpEth * 1000).toLocaleString(),
            m.isProjection ? "Yes" : "No",
          ])}
        />
      )}
      <p className="text-xs text-[#1A1A1A66]">
        † March is a full-month projection. nTVP = outgoing ETH-denominated transactions.
      </p>
    </div>
  );
}

// ─── TVL Line Chart ───────────────────────────────────────────────────────────

function TvlChart() {
  const [view, setView] = useState<"chart" | "table">("chart");
  const pointColors = PROTOCOL_METRICS.months.map((_, i) => (i < 7 ? Q4_GREY : DARK)); // Jun-Dec grey; Jan-Mar dark
  const data = {
    labels: LABELS,
    datasets: [
      {
        label: "TVL (USD billions)",
        data: PROTOCOL_METRICS.months.map((m) => m.tvlUsd),
        borderColor: DARK,
        backgroundColor: "#1a1a1a10",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: pointColors,
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      tooltip: {
        ...baseChartOptions.plugins.tooltip,
        callbacks: {
          label: (ctx: TooltipItem<"line">) => ` $${(ctx.parsed as {y: number}).y.toFixed(2)}B`,
        },
      },
    },
    scales: {
      ...baseChartOptions.scales,
      y: {
        ...baseChartOptions.scales.y,
        title: { display: true, text: "USD Billions", color: "#1A1A1A99", font: { size: 11 } },
      },
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-base font-medium text-[#1A1A1A]">Total Value Locked (TVL)</div>
          <div className="text-sm text-[#1A1A1A66]">USD value of assets in Safe accounts — Jun 2025 to Mar 2026 (grey = prior months, dark = Q1)</div>
        </div>
        <DataToggle view={view} onChange={setView} />
      </div>

      {view === "chart" ? (
        <div className="h-[240px] w-full" aria-label="TVL line chart showing asset value from June 2025 to March 2026">
          <Line data={data} options={options} />
        </div>
      ) : (
        <AccessibleTable
          caption="TVL — monthly USD value"
          headers={["Month", "TVL (USD)", "Projected"]}
          rows={PROTOCOL_METRICS.months.map((m) => [
            m.label,
            `$${m.tvlUsd.toFixed(2)}B`,
            m.isProjection ? "Yes" : "No",
          ])}
        />
      )}
      <p className="text-xs text-[#1A1A1A66]">† March is a full-month projection. TVL decline driven by market price depreciation, not outflows.</p>
    </div>
  );
}

// ─── New Safes + Active Safes Bar Chart ───────────────────────────────────────

function AccountsChart() {
  const [view, setView] = useState<"chart" | "table">("chart");
  const newSafesColors = PROTOCOL_METRICS.months.map((_, i) => (i < 7 ? Q4_GREY : SAFE_GREEN)); // Jun-Dec grey; Jan-Mar green
  const activeColors = PROTOCOL_METRICS.months.map((_, i) => (i < 7 ? "#1a1a1a15" : "#1a1a1a20")); // Jun-Dec light; Jan-Mar darker
  const data = {
    labels: LABELS,
    datasets: [
      {
        label: "New Safes (thousands)",
        data: PROTOCOL_METRICS.months.map((m) => m.newSafes),
        backgroundColor: newSafesColors,
        borderRadius: 4,
      },
      {
        label: "Monthly Active Safes (thousands)",
        data: PROTOCOL_METRICS.months.map((m) => +(m.monthlyActiveSafes / 1000).toFixed(2)),
        backgroundColor: activeColors,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      legend: { display: true, labels: { color: DARK, font: { family: "Citerne, sans-serif", size: 12 }, boxWidth: 12 } },
      tooltip: {
        ...baseChartOptions.plugins.tooltip,
        callbacks: {
          label: (ctx: TooltipItem<"bar">) =>
            ` ${ctx.dataset.label}: ${(ctx.parsed as {y: number}).y.toFixed(0)}K`,
        },
      },
    },
    scales: {
      ...baseChartOptions.scales,
      y: {
        ...baseChartOptions.scales.y,
        title: { display: true, text: "Thousands of accounts", color: "#1A1A1A99", font: { size: 11 } },
      },
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-base font-medium text-[#1A1A1A]">Account Activity</div>
          <div className="text-sm text-[#1A1A1A66]">New Safes created and monthly active Safes — Jun 2025 to Mar 2026 (grey = prior months, green = Q1)</div>
        </div>
        <DataToggle view={view} onChange={setView} />
      </div>

      {view === "chart" ? (
        <div className="h-[240px] w-full" aria-label="Bar chart showing new and active Safe accounts per month in Q1 2026">
          <Bar data={data} options={options} />
        </div>
      ) : (
        <AccessibleTable
          caption="Account activity — monthly"
          headers={["Month", "New Safes", "Monthly Active Safes", "Activation Rate", "Projected"]}
          rows={PROTOCOL_METRICS.months.map((m) => [
            m.label,
            (m.newSafes * 1000).toLocaleString(),
            (m.monthlyActiveSafes * 1000).toLocaleString(),
            `${m.activationRate}%`,
            m.isProjection ? "Yes" : "No",
          ])}
        />
      )}
      <p className="text-xs text-[#1A1A1A66]">
        Activation Rate = Monthly Active Safes ÷ New Safes created in the same month.
      </p>
    </div>
  );
}

// ─── Monthly Transactions Chart ───────────────────────────────────────────────

function TransactionsChart() {
  const [view, setView] = useState<"chart" | "table">("chart");
  const transactionColors = PROTOCOL_METRICS.months.map((_, i) => {
    if (i < 7) return Q4_GREY; // Jun-Dec muted grey
    return SAFE_GREEN; // Jan-Mar full green
  });
  const data = {
    labels: LABELS,
    datasets: [
      {
        label: "Monthly Transactions (millions)",
        data: PROTOCOL_METRICS.months.map((m) => m.monthlyTransactions),
        backgroundColor: transactionColors,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      tooltip: {
        ...baseChartOptions.plugins.tooltip,
        callbacks: {
          label: (ctx: TooltipItem<"bar">) => ` ${(ctx.parsed as {y: number}).y.toFixed(1)}M transactions`,
        },
      },
    },
    scales: {
      ...baseChartOptions.scales,
      y: {
        ...baseChartOptions.scales.y,
        min: 30,
        title: { display: true, text: "Millions of transactions", color: "#1A1A1A99", font: { size: 11 } },
      },
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-base font-medium text-[#1A1A1A]">Monthly Transactions</div>
          <div className="text-sm text-[#1A1A1A66]">Transactions settled through Safe — Jun 2025 to Mar 2026 (grey = prior months, green = Q1)</div>
        </div>
        <DataToggle view={view} onChange={setView} />
      </div>

      {view === "chart" ? (
        <div className="h-[240px] w-full" aria-label="Bar chart showing monthly transaction volume from June 2025 to March 2026">
          <Bar data={data} options={options} />
        </div>
      ) : (
        <AccessibleTable
          caption="Monthly transactions"
          headers={["Month", "Transactions", "Projected"]}
          rows={PROTOCOL_METRICS.months.map((m) => [
            m.label,
            `${m.monthlyTransactions}M`,
            m.isProjection ? "Yes" : "No",
          ])}
        />
      )}
    </div>
  );
}

// ─── Accessible Table Helper ──────────────────────────────────────────────────

interface AccessibleTableProps {
  caption: string;
  headers: string[];
  rows: string[][];
}

function AccessibleTable({ caption, headers, rows }: AccessibleTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E5E5]">
      <table className="w-full text-sm text-[#1A1A1A]">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-[#F5F5F5]">
            {headers.map((h) => (
              <th key={h} scope="col" className="text-left px-4 py-3 font-medium text-[#1A1A1A99] border-b border-[#E5E5E5]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={cn("hover:bg-[#12ff800a] transition-colors", i < rows.length - 1 && "border-b border-[#E5E5E5]")}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function ProtocolMetricsChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white border border-[#E5E5E5] rounded-2xl p-5 md:p-6">
        <NtvpChart />
      </div>
      <div className="bg-white border border-[#E5E5E5] rounded-2xl p-5 md:p-6">
        <TvlChart />
      </div>
      <div className="bg-white border border-[#E5E5E5] rounded-2xl p-5 md:p-6">
        <AccountsChart />
      </div>
      <div className="bg-white border border-[#E5E5E5] rounded-2xl p-5 md:p-6">
        <TransactionsChart />
      </div>
    </div>
  );
}
