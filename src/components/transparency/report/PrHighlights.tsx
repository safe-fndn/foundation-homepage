import ReportSection from "./ReportSection";
import type { QuarterlyReport } from "@/content/quarterlyReports";

const PrHighlights = ({ report }: { report: QuarterlyReport }) => {
  const { mediaMentions, partnerships } = report.report.prHighlights;

  return (
    <ReportSection id="pr-highlights" title="PR & Ecosystem Highlights">
      {/* Media mentions */}
      <div className="mb-8">
        <h3 className="text-base md:text-lg font-medium text-[#1A1A1A] mb-4">
          Media Coverage
        </h3>
        <div className="space-y-3">
          {mediaMentions.map((mention, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-black/[0.1] last:border-0"
            >
              <span className="text-sm md:text-base text-[#1A1A1A]">
                {mention.title}
              </span>
              {mention.outlet && (
                <span className="text-sm text-[#1a1a1a99] flex-shrink-0 ml-4">
                  {mention.outlet}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Partnerships */}
      <div>
        <h3 className="text-base md:text-lg font-medium text-[#1A1A1A] mb-4">
          Partnerships & Ecosystem
        </h3>
        <ul className="space-y-2">
          {partnerships.map((partnership, i) => (
            <li
              key={i}
              className="text-sm md:text-base text-[#1a1a1acc] flex items-start gap-2"
            >
              <span className="text-[#12FF80] mt-1.5 flex-shrink-0">•</span>
              {partnership}
            </li>
          ))}
        </ul>
      </div>
    </ReportSection>
  );
};

export default PrHighlights;
