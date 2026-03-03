import React from "react";
import SectionTag from "../ui/SectionTag";


const stats = [
  {
    value: "50M+",
    label: "Deployed Smart Accounts",
    source: "Dune Analytics",
  },
  {
    value: "$60B+",
    label: "Total Value Secured",
    source: "Dune Analytics",
  },
  {
    value: "12+",
    label: "Supported Blockchains",
  },
  {
    value: "200+",
    label: "Ecosystem Applications",
  },
  {
    value: "250+",
    label: "Teams Funded",
    href: "/grants",
    linkText: "View grants program",
  },
];

export default function EcosystemImpact() {
  return (
    <div className="bg-[#E4EDE6]">
      <div className="px-[16px] max-w-[1242px] mx-auto py-[60px] md:py-[100px]">
        <SectionTag text="Ecosystem Impact" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-[40px] md:mt-[60px]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[#1A1A1A] text-4xl md:text-5xl leading-[110%] font-medium">
                {stat.value}
              </div>
              <div className="text-[#1A1A1A] text-base md:text-lg leading-[140%] mt-2">
                {stat.label}
              </div>
              {stat.source && (
                <div className="text-[#1a1a1a66] text-sm mt-1 font-light">
                  {stat.source}
                </div>
              )}
              {stat.href && (
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a1a1a99] text-sm mt-1 font-light underline hover:text-[#1A1A1A]"
                >
                  {stat.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
