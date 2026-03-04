import ReportSection from "./ReportSection";
import type { QuarterlyReport } from "@/content/quarterlyReports";

const LookingAhead = ({ report }: { report: QuarterlyReport }) => {
  const { priorities } = report.report.lookingAhead;

  return (
    <ReportSection id="looking-ahead" title="Looking Ahead">
      <p className="text-sm md:text-base text-[#1a1a1acc] mb-6">
        Key priorities and milestones for the upcoming quarter:
      </p>
      <div className="space-y-3">
        {priorities.map((priority, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 bg-[#12ff8014] border border-black/[0.1] rounded-[10px]"
          >
            <span className="text-[#12FF80] font-medium mt-0.5 flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm md:text-base text-[#1A1A1A]">
              {priority}
            </span>
          </div>
        ))}
      </div>
    </ReportSection>
  );
};

export default LookingAhead;
