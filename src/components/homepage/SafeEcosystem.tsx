import React from "react";
import Button from "../ui/Button";
import { logos } from "@/content/safeEcosystem";
import LogoCarousel from "./LogoCarousel";

export default function SafeEcosystem() {
  return (
    <div>
      <div className="max-w-[953px] px-[16px] mx-auto flex flex-row justify-between items-end gap-2 pb-5">
        <div className="max-w-[170px] md:max-w-full">
          <div className="text-[#1A1A1A] text-lg md:text-2xl font-medium pb-2 md:pb-5">
            The Safe Ecosystem:
          </div>
          <div className="text-black/[0.6] text-sm font-light">
            200+ ecosystem project are built on the <i>Safe</i> smart account
            standard
          </div>
        </div>
        <a
          href="https://safe.global/ecosystem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="w-full max-w-[188px] whitespace-nowrap text-[14px]"
            variant="secondary"
            icon="/images/common/arrow-right-light.svg"
            iconAlt="arrow right"
            iconHeight={18}
            iconWidth={18}
          >
            Explore Ecosystem
          </Button>
        </a>
      </div>

      <LogoCarousel logos={logos} duration={30} />
    </div>
  );
}
