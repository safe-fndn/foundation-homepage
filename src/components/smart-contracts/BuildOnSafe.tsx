import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";

function italicizeSafe(text: string) {
  return text
    .split(/(\bSafe\b)/g)
    .map((part, idx) => (part === "Safe" ? <i key={idx}>Safe</i> : part));
}

const features = [
  {
    icon: "/images/smart-contracts/build-icon1.svg",
    title: "Native Multisig Capability",
    description:
      "Safe contracts come with built-in multisig feature, making it easy to secure assets with multiple signers out-of-the-box",
  },
  {
    icon: "/images/smart-contracts/build-icon2.svg",
    title: "400+ EVM Networks",
    description:
      "Safe is one of the most widely deployed smart contracts across the EVM ecosystem, trusted across hundreds of chains",
  },
  {
    icon: "/images/smart-contracts/build-icon3.svg",
    title: "Modular Architecture",
    description:
      "Customize your Safe account with optional modules and guard contracts, enabling features like spending limits, recovery, and more",
  },
  {
    icon: "/images/smart-contracts/build-icon4.svg",
    title: "Live Since 2019",
    description:
      "Battle-tested over years and audited before every release. Safe has secured billions over 6+ years",
  },
  {
    icon: "/images/smart-contracts/build-icon5.svg",
    title: "Formally Verified and Audited",
    description:
      "All core contracts and key components are audited and formally verified. Safe is built for secure deployment across rollups and L1 stacks",
  },
  {
    icon: "/images/smart-contracts/build-icon6.svg",
    title: "EVM Smart Account",
    description:
      "Full support for modern smart account features like sponsored gas, ERC-4337, passkey logins, and more.",
  },
];

export default function BuildOnSafe() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Why Build on Safe ?" />
      <div className="text-[#1A1A1A] text-[32px] leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px] md:text-[64px]">
        The <i>Safe</i> smart account is the gold standard of wallet
        infrastructure
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8">
        {features.map((feature, index) => (
          <div key={index} className="flex h-fit md:h-[360px] p-5 flex-col">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={60}
              height={60}
            />
            <h3 className="text-[#1A1A1A] text-2xl font-normal pt-10 mb-2 md:mb-4">
              {italicizeSafe(feature.title)}
            </h3>
            <p className="text-black/[0.6] text-lg font-light leading-relaxed">
              {italicizeSafe(feature.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
