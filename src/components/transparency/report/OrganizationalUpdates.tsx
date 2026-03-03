import ReportSection from "./ReportSection";
import type { QuarterlyReport } from "@/content/quarterlyReports";

const OrganizationalUpdates = ({ report }: { report: QuarterlyReport }) => {
  const { orgUpdates } = report.report;

  return (
    <ReportSection id="organizational-updates" title="Organizational Updates">
      <div className="space-y-6">
        {orgUpdates.map((update) => (
          <div
            key={update.team}
            className="border border-black/[0.1] rounded-[10px] p-5"
          >
            <h3 className="text-base md:text-lg font-medium text-[#1A1A1A] mb-3">
              {update.team}
            </h3>
            <ul className="space-y-2">
              {update.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm md:text-base text-[#1a1a1acc] flex items-start gap-2"
                >
                  <span className="text-[#12FF80] mt-1.5 flex-shrink-0">
                    •
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ReportSection>
  );
};

export default OrganizationalUpdates;
