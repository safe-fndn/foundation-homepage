import Link from "next/link";
import Image from "next/image";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";
import {
  getPublishedReports,
  type QuarterlyReport,
  type OverviewMetric,
  type OverviewHighlight,
} from "@/content/quarterlyReports";

const ChangeIndicator = ({
  change,
  direction,
}: {
  change: string;
  direction?: "up" | "down" | "neutral";
}) => (
  <span
    className={
      direction === "up"
        ? "text-[#12FF80]"
        : direction === "down"
          ? "text-red-400"
          : "text-[#1a1a1a99]"
    }
  >
    {direction === "up" ? "\u2191 " : direction === "down" ? "\u2193 " : ""}
    {change}
  </span>
);

const HeadlineMetric = ({ metric }: { metric: OverviewMetric }) => (
  <div>
    <div className="text-xs md:text-sm text-[#1a1a1a99] mb-1">
      {metric.label}
    </div>
    <div className="text-[24px] md:text-[32px] font-medium text-[#1A1A1A] leading-tight">
      {metric.value}
    </div>
    {metric.change && (
      <div className="text-xs md:text-sm mt-0.5">
        <ChangeIndicator
          change={metric.change}
          direction={metric.changeDirection}
        />
      </div>
    )}
  </div>
);

const tagColors: Record<string, string> = {
  Launch: "bg-[#12FF80] text-[#1A1A1A]",
  Milestone: "bg-[#1A1A1A] text-white",
  Expansion: "bg-[#12ff8033] text-[#1A1A1A]",
  Product: "bg-[#12ff8033] text-[#1A1A1A]",
};

const HighlightCard = ({ highlight }: { highlight: OverviewHighlight }) => (
  <div className="bg-[#12ff8014] border border-black/[0.1] rounded-[10px] p-5 flex flex-col gap-3">
    <span
      className={`text-xs font-medium px-2.5 py-1 rounded-full w-fit ${tagColors[highlight.tag] || "bg-[#12ff8033] text-[#1A1A1A]"}`}
    >
      {highlight.tag}
    </span>
    <div className="text-base md:text-lg font-medium text-[#1A1A1A]">
      {highlight.title}
    </div>
    <div className="text-xs md:text-sm text-[#1a1a1a99] leading-[140%]">
      {highlight.description}
    </div>
  </div>
);

const ReportOverviewCard = ({ report }: { report: QuarterlyReport }) => (
  <div className="border border-black/[0.1] rounded-[10px] overflow-hidden">
    {/* Header */}
    <div className="bg-[#12FF80] px-5 md:px-8 py-6 md:py-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-[#1A1A1A]/60 mb-1">
            Quarterly Report
          </div>
          <div className="text-[36px] md:text-[48px] font-medium text-[#1A1A1A] leading-tight">
            {report.quarter}
          </div>
        </div>
        <Image
          src="/images/common/safe-logo.svg"
          alt="Safe"
          width={40}
          height={40}
          className="opacity-30"
        />
      </div>
    </div>

    {/* Headline metrics */}
    <div className="px-5 md:px-8 py-5 md:py-6 border-b border-black/[0.1]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {report.overview.headlineMetrics.map((metric) => (
          <HeadlineMetric key={metric.label} metric={metric} />
        ))}
      </div>
    </div>

    {/* Key announcements */}
    {report.overview.highlights.length > 0 && (
      <div className="px-5 md:px-8 py-5 md:py-6">
        <div className="text-sm font-medium text-[#1a1a1a99] mb-3">
          Key Announcements
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {report.overview.highlights.map((highlight) => (
            <HighlightCard key={highlight.title} highlight={highlight} />
          ))}
        </div>
      </div>
    )}

    {/* CTA */}
    <div className="px-5 md:px-8 pb-5 md:pb-6">
      <Link href={`/transparency/${report.slug}`}>
        <Button variant="secondary" icon="/images/common/arrow-right-light.svg">
          Read Full Report
        </Button>
      </Link>
    </div>
  </div>
);

const QuarterlyReportCards = () => {
  const reports = getPublishedReports();

  return (
    <div className="px-[16px] max-w-[953px] w-full mx-auto">
      <SectionTag text="Quarterly Reports" />
      <div className="text-[#1A1A1A] text-[28px] md:text-[48px] leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px]">
        Performance at a glance
      </div>

      <div className="space-y-8">
        {reports.map((report) => (
          <ReportOverviewCard key={report.slug} report={report} />
        ))}
      </div>
    </div>
  );
};

export default QuarterlyReportCards;
