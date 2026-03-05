import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q1 2026 Quarterly Report — Safe Ecosystem Foundation",
  description:
    "Safe Ecosystem Foundation's inaugural public quarterly report covering January to March 2026. Protocol metrics, revenue performance, team updates, and the road ahead.",
  openGraph: {
    title: "Q1 2026 Quarterly Report — Safe Ecosystem Foundation",
    description:
      "$10M ARR, 60M+ accounts, 35% nTVP growth Q/Q. Safe Ecosystem Foundation's Q1 2026 report.",
    type: "article",
  },
};

export default function ReportLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
