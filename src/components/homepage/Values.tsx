import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";
import { valuesData } from "@/content/values";
import Button from "../ui/Button";

export default function Values() {
  return (
    <div className="px-[16px] max-w-[953px] w-full text-left mx-auto">
      <SectionTag text="Values" />
      <div className="text-[#1A1A1A] text-[36px] max-w-[408px] md:max-w-full leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[100px] md:text-[64px]">
        Protect and advance the right to self-custody.
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-15">
        <Image
          src="/images/homepage/values/safe-foundation.png"
          alt="foundation"
          width={297}
          height={530}
        />
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-5 h-fit pb-[60px] md:pb-0">
            {valuesData.map((value, index) => (
              <div key={index} className="max-w-[240px]">
                <div className="pb-[10px]">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="text-[#1A1A1A] text-sm pb-[2px]">
                  {value.title}
                </div>
                <div className="text-black/[0.6] text-sm">
                  {value.description}
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://safe.global/blog/safe-research-manifesto?utm_source=safe_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-end"
          >
            <Button
              className="w-full max-w-[530px] text-lg md:text-[32px] px-[30px]"
              variant="secondary"
              icon="/images/common/arrow-right-light.svg"
              iconAlt="arrow right"
              iconHeight={24}
              iconWidth={24}
            >
              Read More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
