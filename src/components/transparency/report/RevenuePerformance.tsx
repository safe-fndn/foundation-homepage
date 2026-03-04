import ReportSection from "./ReportSection";
import MetricBox from "./MetricBox";
import type { QuarterlyReport } from "@/content/quarterlyReports";

const RevenuePerformance = ({ report }: { report: QuarterlyReport }) => {
  const rev = report.report.revenue;

  return (
    <ReportSection id="revenue-performance" title="Revenue & Financial Performance">
      {/* Headline revenue numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8">
        <MetricBox label="Quarterly Revenue" value={rev.total} />
        <MetricBox label="Annualized Run Rate" value={rev.annualizedRunRate} />
      </div>

      {/* Revenue by stream table */}
      <div className="mb-8">
        <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] mb-4">
          Revenue by Stream
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-black/[0.2]">
                <th scope="col" className="text-sm font-medium text-[#1A1A1A] py-3 pr-4">
                  Stream
                </th>
                <th scope="col" className="text-sm font-medium text-[#1A1A1A] py-3 pr-4">
                  Amount
                </th>
                <th scope="col" className="text-sm font-medium text-[#1A1A1A] py-3 pr-4">
                  % of Total
                </th>
                <th scope="col" className="text-sm font-medium text-[#1A1A1A] py-3">
                  QoQ
                </th>
              </tr>
            </thead>
            <tbody>
              {rev.streams.map((stream, i) => (
                <tr key={i} className="border-b border-black/[0.1]">
                  <td className="text-sm md:text-base text-[#1A1A1A] py-3 pr-4">
                    {stream.name}
                  </td>
                  <td className="text-sm md:text-base font-medium text-[#1A1A1A] py-3 pr-4">
                    {stream.amount}
                  </td>
                  <td className="text-sm md:text-base text-[#1a1a1a99] py-3 pr-4">
                    {stream.percentage}
                  </td>
                  <td className="text-sm md:text-base text-[#12FF80] py-3">
                    {stream.qoqChange}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue narrative */}
      {rev.narrative && (
        <div className="mb-8">
          {rev.narrative.map((p, i) => (
            <p key={i} className="text-sm md:text-base text-[#1a1a1acc] mb-3">
              {p}
            </p>
          ))}
        </div>
      )}

      {/* Treasury summary */}
      {rev.treasurySummary && (
        <div>
          <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] mb-4">
            Treasury & Balance Sheet
          </h3>
          <div className="bg-[#12ff8014] border border-black/[0.1] rounded-[10px] p-5">
            {rev.treasurySummary.map((p, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-[#1a1a1acc] mb-3 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      )}
    </ReportSection>
  );
};

export default RevenuePerformance;
