import ReportSection from "./ReportSection";
import MetricBox from "./MetricBox";
import type { QuarterlyReport } from "@/content/quarterlyReports";

const QuarterInFocus = ({ report }: { report: QuarterlyReport }) => {
  const { openingLetter, signatory, headlineMetrics, milestones } =
    report.report;

  return (
    <ReportSection id="quarter-in-focus" title="Quarter in Focus">
      {/* Opening letter */}
      <div className="mb-8">
        {openingLetter.map((paragraph, i) => (
          <p key={i} className="text-base md:text-lg text-[#1a1a1acc] mb-4">
            {paragraph}
          </p>
        ))}
        <p className="text-sm text-[#1a1a1a99] italic mt-6">
          — {signatory}
        </p>
      </div>

      {/* Headline metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
        {headlineMetrics.map((metric) => (
          <MetricBox
            key={metric.label}
            label={metric.label}
            value={metric.value}
            change={metric.change}
            changeDirection={metric.changeDirection}
          />
        ))}
      </div>

      {/* Milestones */}
      <div>
        <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] mb-4">
          Quarter Milestones
        </h3>
        <div className="space-y-3">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-[#12ff8014] border border-black/[0.1] rounded-[10px]"
            >
              <span className="text-[#12FF80] font-medium mt-0.5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="text-sm md:text-base font-medium text-[#1A1A1A]">
                  {milestone.title}
                </div>
                {milestone.description && (
                  <div className="text-sm text-[#1a1a1a99] mt-1">
                    {milestone.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ReportSection>
  );
};

export default QuarterInFocus;
