import ReportSection from "./ReportSection";
import MetricBox from "./MetricBox";
import type { QuarterlyReport } from "@/content/quarterlyReports";

const ProtocolMetrics = ({ report }: { report: QuarterlyReport }) => {
  const pm = report.report.protocolMetrics;

  return (
    <ReportSection id="protocol-metrics" title="Protocol Metrics">
      {/* Key metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
        <MetricBox label="Total Value Locked" value={pm.tvl} />
        <MetricBox label="Total Volume Processed" value={pm.tvp} />
        <MetricBox label="Monthly Active Safes (avg)" value={pm.monthlyActiveSafes} />
        <MetricBox label="Transactions" value={pm.transactions} />
        <MetricBox label="Total Accounts" value={pm.totalAccounts} />
        <MetricBox label="New Accounts (this quarter)" value={pm.newAccounts} />
      </div>

      {/* TVL Breakdown */}
      <div className="mb-8">
        <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] mb-4">
          TVL Breakdown
        </h3>
        <div className="border border-black/[0.1] rounded-[10px] overflow-hidden">
          {pm.tvlBreakdown.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-5 py-3 ${
                i < pm.tvlBreakdown.length - 1
                  ? "border-b border-black/[0.1]"
                  : ""
              }`}
            >
              <span className="text-sm md:text-base text-[#1A1A1A]">
                {item.label}
              </span>
              <span className="text-sm md:text-base font-medium text-[#1A1A1A]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive */}
      {pm.deepDiveTitle && pm.deepDiveContent && (
        <div>
          <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] mb-4">
            {pm.deepDiveTitle}
          </h3>
          <div className="bg-[#12ff8014] border border-black/[0.1] rounded-[10px] p-5">
            {pm.deepDiveContent.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-[#1a1a1acc] mb-3 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </ReportSection>
  );
};

export default ProtocolMetrics;
