import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";
import Button from "../ui/Button";

export const data = [
  {
    label: "Contracts",
    value: "Safe Account Deployments",
  },
  {
    label: "Latest release",
    value: "v1.5.0",
  },
  {
    label: "Audit",
    value: "latest 4 months ago",
  },
  {
    label: "Usage",
    value: "Smart Accounts Infrastructure, Account Abstraction ",
  },
];

export default function SafeContracts() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto w-full">
      <SectionTag text="Safe Smart Contracts" />
      <div className="text-[#1A1A1A] text-[32px] leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px] md:text-[64px]">
        The <i>Safe</i> Smart Account
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-5">
        <div>
          <Image
            src="/images/smart-contracts/building.png"
            alt="building"
            width={619}
            height={423}
          />
        </div>
        <div>
          <div className="flex flex-col gap-6">
            {data.map((item) => (
              <Info key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
          <a
            href="https://safefoundation.org/blog/safe-tokenomics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="mt-[30px] w-full max-w-[530px] text-lg md:text-[32px] px-[30px]"
              variant="secondary"
              icon="/images/common/arrow-right-light.svg"
              iconAlt="arrow right"
              iconHeight={24}
              iconWidth={24}
            >
              Build on Safe
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

const Info = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col">
      <div className="text-black/[0.6] text-sm break-words">{label}</div>
      <div className="text-xl break-words">{value}</div>
    </div>
  );
};
