import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";

const sources = [
  {
    title: "Messari Reports",
    description:
      "Independent research and third-party validation of Safe's ecosystem significance, protocol metrics, and competitive positioning.",
    href: "https://messari.io/project/safe/research",
    cta: "View Reports",
  },
  {
    title: "Dune Dashboard",
    description:
      "Live on-chain analytics covering deployed accounts, TVL across 12+ chains, transaction volume, and market share — sourced directly from blockchain data.",
    href: "https://dune.com/safe/smart-accounts",
    cta: "View Dashboard",
  },
  {
    title: "Token Terminal",
    description:
      "Financial and business metrics for Safe including revenue, fees, active users, and protocol fundamentals.",
    href: "https://tokenterminal.com/explorer/projects/safe",
    cta: "View Metrics",
  },
  {
    title: "DeFiLlama",
    description:
      "DeFi-focused analytics tracking Safe's TVL, chain distribution, and protocol ranking across the ecosystem.",
    href: "https://defillama.com/protocol/safe",
    cta: "View Analytics",
  },
];

const ExternalDataSources = () => {
  return (
    <div className="px-[16px] max-w-[953px] w-full mx-auto">
      <SectionTag text="External Data Sources" />
      <div className="text-[#1A1A1A] text-[28px] md:text-[48px] leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px]">
        Third-party validation
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        {sources.map((source) => (
          <div
            key={source.title}
            className="bg-[#12ff8014] border border-black/[0.1] rounded-[10px] p-5 flex flex-col justify-between"
          >
            <div>
              <div className="text-[#1A1A1A] text-xl font-medium pb-1">
                {source.title}
              </div>
              <div className="text-[#1a1a1a99] text-sm leading-[120%] pb-[40px]">
                {source.description}
              </div>
            </div>
            <a href={source.href} target="_blank" rel="noopener noreferrer">
              <Button
                className="pl-0 w-fit"
                variant="link"
                icon="/images/common/arrow-right.svg"
                iconAlt="arrow right"
                iconHeight={18}
                iconWidth={18}
              >
                {source.cta}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExternalDataSources;
