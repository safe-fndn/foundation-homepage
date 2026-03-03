import type { Metadata } from "next";
import HeroSection from "@/components/transparency/HeroSection";
import QuarterlyReportCards from "@/components/transparency/QuarterlyReportCards";
import AnnualSummaries from "@/components/transparency/AnnualSummaries";
import ExternalDataSources from "@/components/transparency/ExternalDataSources";

export const metadata: Metadata = {
  title: "Foundation Transparency — Safe Ecosystem Foundation",
  description:
    "Quarterly reports, annual summaries, and external data sources for the Safe Ecosystem Foundation.",
};

export default function Transparency() {
  return (
    <div>
      <HeroSection />
      <div className="pt-[100px] md:pt-[160px]">
        <QuarterlyReportCards />
      </div>
      <div className="py-[100px] md:py-[160px]">
        <AnnualSummaries />
      </div>
      <div className="pb-[100px] md:pb-[160px]">
        <ExternalDataSources />
      </div>
    </div>
  );
}
