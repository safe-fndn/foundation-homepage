import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";

function italicizeSafe(text: string) {
  return text
    .split(/(\bSafe\b)/g)
    .map((part, idx) => (part === "Safe" ? <i key={idx}>Safe</i> : part));
}

const chains = [
  {
    icon: "/images/smart-contracts/arbitrum.png",
    title: "Arbitrum (coming soon)",
    description:
      "Spend directly from your Safe with Gnosis Pay card infrastructure.",
  },
  {
    icon: "/images/smart-contracts/avalanche.png",
    title: "Avalanche L1 stack",
    description:
      "Spend directly from your Safe with Gnosis Pay card infrastructure.",
  },
  {
    icon: "/images/smart-contracts/op.png",
    title: "OP Stack",
    description:
      "Spend directly from your Safe with Gnosis Pay card infrastructure.",
  },
  {
    icon: "/images/smart-contracts/surge.png",
    title: "Surge Rollups (coming soon)",
    description:
      "Spend directly from your Safe with Gnosis Pay card infrastructure.",
  },
  {
    icon: "/images/smart-contracts/zksync.png",
    title: "zkSync Elastic Chain",
    description:
      "Spend directly from your Safe with Gnosis Pay card infrastructure.",
  },
  {
    icon: "/images/smart-contracts/custom-network.svg",
    title: "Deploy on custom network",
    showExternalIcon: true,
  },
];

export default function ChainStack() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Safe Pre-deployments" />
      <div className="text-[#1A1A1A] text-[32px] leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px] md:text-[64px]">
        Use <i>Safe</i> out-of-the-box on any chain stack
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {chains.map((feature, index) => (
          <div
            key={index}
            className="bg-[#12ff800f] cursor-pointer hover:bg-[#12ff8080] rounded-[10px] flex h-fit p-5 flex-col transition-colors duration-200 border border-transparent hover:border-[#12ff8038]"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={60}
              height={60}
            />
            <div className="flex flex-row items-center pt-15 justify-between">
              <h3 className="text-[#1A1A1A] text-2xl font-normal mb-1">
                {italicizeSafe(feature.title)}
              </h3>
              {feature.showExternalIcon && (
                <Image
                  src="/images/common/arrow-right.svg"
                  alt="arrow right"
                  width={32}
                  height={32}
                />
              )}
            </div>
            {/* <p className="text-black/[0.6] text-lg font-light leading-relaxed">
              {italicizeSafe(feature.description)}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
