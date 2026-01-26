import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

export const data = [
  {
    label: "Contracts",
    value: "Safe Account Deployments",
    externalLink: "https://github.com/safe-fndn/safe-smart-account",
  },
  {
    label: "Latest release",
    value: "v1.5.0",
    externalLink:
      "https://github.com/safe-fndn/safe-smart-account/releases/tag/v1.5.0",
  },
  {
    label: "Latest compatible with Safe{Wallet}",
    value: "v1.4.1",
    externalLink:
      "https://github.com/safe-fndn/safe-smart-account/releases/tag/v1.4.1",
  },
  {
    label: "Audits",
    value: "Over 10 Audits",
    externalLink:
      "https://safefoundation.notion.site/Safe-Contract-Audits-286a8a34f3b881979c7ce07089814ea8",
  },
  {
    label: "Release process",
    value:
      "New contracts are only used in Safe{Wallet} after a rigorous developer review period has passed.",
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
              <Info
                key={item.label}
                label={item.label}
                value={item.value}
                externalLink={item.externalLink}
              />
            ))}
          </div>
          <a
            href={`${SAFE_DOCS_LINK}/smart-account/overview`}
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

const Info = ({
  label,
  value,
  externalLink,
}: {
  label: string;
  value: string;
  externalLink: string | undefined;
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-black/[0.6] text-sm break-words">{label}</div>
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("flex flex-row items-center w-fit gap-1")}
      >
        <div
          className={cn(
            "text-xl break-words max-w-[425px]",
            externalLink && "hover:underline underline-offset-2"
          )}
        >
          {value}
        </div>
        {externalLink && (
          <Image
            src="/images/common/arrow-external.svg"
            alt="arrow right"
            width={20}
            height={20}
          />
        )}
      </a>
    </div>
  );
};
