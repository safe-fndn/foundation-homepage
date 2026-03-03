import ReportSection from "./ReportSection";
import type { QuarterlyReport } from "@/content/quarterlyReports";

const ReportDisclaimer = ({ report }: { report: QuarterlyReport }) => {
  return (
    <ReportSection id="disclaimer" title="Disclaimer">
      <div className="bg-[#f5f5f5] rounded-[10px] p-5">
        <p className="text-xs md:text-sm text-[#1a1a1a99] leading-relaxed">
          {report.report.disclaimer}
        </p>
      </div>
    </ReportSection>
  );
};

export default ReportDisclaimer;
