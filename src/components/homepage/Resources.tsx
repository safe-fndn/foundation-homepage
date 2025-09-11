import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";
import Button from "../ui/Button";
import { resourcesFeatures } from "../../content/resources";

export default function Resources() {
  return (
    <div className="px-[16px] max-w-[953px] w-full text-left mx-auto">
      <SectionTag text="Resources" />
      <div className="text-[#1A1A1A] text-[36px] max-w-[408px] md:max-w-full leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px] md:text-[64px]">
        The most secure smart accounts on Ethereum
      </div>
      <div className="flex flex-row items-end">
        <div className="px-4 md:px-[30px] py-[8px] md:py-[14px] font-medium text-sm md:text-base flex flex-row items-center gap-1 bg-[#12ff8014] rounded-t-[10px]">
          <Image
            src="/images/homepage/resources/frame.svg"
            alt="Safe Smart Accounts"
            width={20}
            height={20}
          />
          Account Infrastructure
        </div>
        <div className="h-[26px] w-[26px] bg-[#12ff8014] relative">
          <div className="h-full w-full bg-white absolute top-0 left-0 rounded-[0_0_0_20px]"></div>
        </div>
      </div>
      <div className="h-[600px] md:h-[532px] w-full bg-[#12ff8014] rounded-[0px_20px_20px_20px] flex flex-col md:flex-row justify-start md:justify-between items-end md:items-center overflow-hidden">
        <div className="px-4 md:px-[30px] pt-6 md:pt-0">
          <div className="text-[#1A1A1A] text-sm md:text-[32px] font-medium pb-1">
            Safe Smart Accounts
          </div>
          <div className="text-[#1a1a1acc] text-xl md:text-base font-light md:font-normal pb-[30px] md:pb-[50px] md:max-w-[304px]">
            The <i>Safe</i> smart contract accounts are the standard used by top
            projects like {`Safe{Wallet}`}, Worldcoin and Polymarket for
            multi-sig based self-custody and account abstraction.
          </div>
          <div className="grid grid-cols-2 gap-2 max-w-[280px]">
            {resourcesFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src="/images/common/check.svg"
                  alt="Checkmark"
                  width={18}
                  height={18}
                />
                <span className="text-[#1a1a1acc] text-sm md:text-base md:font-light">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image
            src="/images/homepage/resources/building.png"
            alt="building"
            width={373}
            height={598}
            className="w-[180px] md:w-[373px] h-auto"
          />
        </div>
      </div>
      <a
        href="https://docs.safe.global"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-end"
      >
        <Button
          className="mt-[60px] w-full max-w-[530px] text-lg md:text-[32px] px-[30px]"
          variant="secondary"
          icon="/images/common/arrow-right-light.svg"
          iconAlt="arrow right"
          iconHeight={24}
          iconWidth={24}
        >
          Start building
        </Button>
      </a>
    </div>
  );
}
