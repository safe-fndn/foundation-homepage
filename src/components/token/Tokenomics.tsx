import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";
import { tokenomicsData } from "@/content/tokenomics";
import Button from "../ui/Button";

export default function Tokenomics() {
  return (
    <div className="px-[16px] max-w-[1002px] mx-auto">
      <SectionTag text="Safe Token" />
      <div className="pt-1 md:pt-4 lg:pb-[64px] text-[36px] italic md:not-italic md:text-[64px]">
        Tokenomics
      </div>
      <div className="flex flex-col lg:flex-row gap-[60px]">
        <div>
          <Image
            src="/images/common/safe-engraved.png"
            alt="safe logo"
            width={340}
            height={340}
            className="mx-auto"
          />
        </div>
        <div>
          <div className="flex flex-col gap-6">
            {tokenomicsData.map((item) => (
              <Info key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Button
              className="mt-[30px] w-full max-w-[530px] text-lg md:text-[32px] px-[30px]"
              variant="secondary"
              icon="/images/common/arrow-right-light.svg"
              iconAlt="arrow right"
              iconHeight={24}
              iconWidth={24}
            >
              Read Tokenomics
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
