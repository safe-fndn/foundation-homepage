import BreadcrumbNav from "./BreadcrumbNav";
import ReportContentsTable from "./ReportContentsTable";
import QuarterInFocus from "./QuarterInFocus";
import ProtocolMetrics from "./ProtocolMetrics";
import RevenuePerformance from "./RevenuePerformance";
import OrganizationalUpdates from "./OrganizationalUpdates";
import PrHighlights from "./PrHighlights";
import LookingAhead from "./LookingAhead";
import ReportDisclaimer from "./ReportDisclaimer";
import {
  type QuarterlyReport as QuarterlyReportType,
  reportSections,
} from "@/content/quarterlyReports";

const QuarterlyReport = ({ report }: { report: QuarterlyReportType }) => {
  return (
    <div className="pt-[40px] md:pt-[58px] max-w-[1100px] mx-auto px-[16px] pb-[100px] md:pb-[160px]">
      <BreadcrumbNav quarter={report.quarter} />

      <h1 className="text-[32px] md:text-[56px] text-[#1A1A1A] leading-[120%] mb-2">
        {report.quarter} Quarterly Report
      </h1>
      <p className="text-sm text-[#1a1a1a99] mb-8 md:mb-12">
        Published{" "}
        {new Date(report.publishDate + "T12:00:00").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-[220px] md:flex-shrink-0">
          <div className="md:sticky md:top-[80px]">
            <ReportContentsTable sections={reportSections} />
          </div>
        </aside>

        {/* Main content */}
        <div className="w-full min-w-0">
          <QuarterInFocus report={report} />
          <ProtocolMetrics report={report} />
          <RevenuePerformance report={report} />
          <OrganizationalUpdates report={report} />
          <PrHighlights report={report} />
          <LookingAhead report={report} />
          <ReportDisclaimer report={report} />
        </div>
      </div>
    </div>
  );
};

export default QuarterlyReport;
