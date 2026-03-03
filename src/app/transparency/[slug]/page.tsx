import React from "react";
import { notFound } from "next/navigation";
import QuarterlyReport from "@/components/transparency/report/QuarterlyReport";
import {
  quarterlyReports,
  getReportBySlug,
} from "@/content/quarterlyReports";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return quarterlyReports.map((report) => ({
    slug: report.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) {
    return { title: "Report Not Found" };
  }

  return {
    title: `${report.quarter} Quarterly Report — Safe Ecosystem Foundation`,
    description: `Safe Ecosystem Foundation ${report.quarter} Quarterly Report. Key metrics, protocol performance, revenue, and organizational updates.`,
  };
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) {
    notFound();
  }

  return <QuarterlyReport report={report} />;
}
