import React from "react";
import SectionTag from "../ui/SectionTag";

const stats = [
  {
    value: "60B+",
    label: "Assets Secured",
  },
  {
    value: "750M+",
    label: "Transactions",
  },
  {
    value: "400+",
    label: "Networks",
  },
  {
    value: "56M+",
    label: "Accounts Deployed",
  },
];

export default function SafeInNumbers() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Safe Smart Account at Scale" />
      <div className="text-black/[0.6] font-light text-sm pt-2 pb-5">
        Safe smart accounts are deployed widely, making them one of the most
        used stacks on the EVM.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#12ff8038] rounded-[10px] flex flex-col items-center justify-center h-[150px] min-w-0 px-2 text-center"
            style={{ flex: 1 }}
          >
            <div className="text-[32px] md:text-[48px] font-medium text-[#1A1A1A]">
              {stat.value}
            </div>
            <div className="text-black/[0.6] text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
