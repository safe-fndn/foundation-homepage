"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";
import Button from "../ui/Button";
import { gridPattern, blobContent } from "@/content/safeSmartAccounts";
import { Blob } from "./Blob";
import { useResponsive } from "@/hooks/useResponsive";

export default function SafeSmartAccounts() {
  const [showBlobs, setShowBlobs] = useState(true);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBlobs(true);

      setTimeout(() => {
        setShowBlobs(false);
      }, 3500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const blobShieldIndices = [0, 15, 9, 18];

  const renderIcon = (type: number, index: number) => {
    const blobIndex = blobShieldIndices.indexOf(index);
    const shouldShowBlob = showBlobs && blobIndex !== -1;

    const blobData = blobContent[blobIndex];
    const shouldShowOnMobile = !isMobile || (blobData && blobData.showOnMobile);

    if (type === 0) {
      return (
        <div
          key={index}
          className="relative w-[72px] h-[72px] md:w-[100px] md:h-[100px]"
        />
      );
    }

    const src =
      type === 1
        ? "./images/homepage/safe-smart-accounts/defence-black.svg"
        : "./images/homepage/safe-smart-accounts/defence-gray.svg";

    return (
      <div
        key={index}
        className="relative w-[72px] h-[72px] md:w-[100px] md:h-[100px]"
      >
        <Image
          src={src}
          alt="Defense icon"
          width={100}
          height={100}
          className="w-full h-full"
        />
        <AnimatePresence>
          {shouldShowBlob && shouldShowOnMobile && (
            <Blob
              content={blobContent[blobIndex].content}
              position={blobContent[blobIndex].position}
              className="text-xl whitespace-nowrap md:text-[42px]"
            />
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="px-[16px] max-w-[953px] w-full text-left mx-auto">
      <SectionTag text="Safe Smart Accounts" />
      <div className="text-[#1A1A1A] text-[36px] max-w-[408px] md:max-w-full leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px] md:text-[64px]">
        Most audited and battle tested smart contracts
      </div>

      <div className="grid grid-cols-5 justify-center mx-auto w-fit pb-15 md:pb-10 relative">
        {gridPattern.map((row, rowIndex) =>
          row.map((cellType, colIndex) =>
            renderIcon(cellType, rowIndex * 5 + colIndex)
          )
        )}
      </div>

      <div className="flex flex-row justify-end gap-1 md:gap-3">
        <Button
          className="w-full max-w-[274px] text-lg md:text-[32px] px-5 md:px-[30px]"
          variant="outline"
          icon="./images/common/arrow-right.svg"
          iconAlt="arrow right"
          iconHeight={24}
          iconWidth={24}
        >
          View Audits
        </Button>
        <Button
          className="w-full max-w-[340px] text-lg md:text-[32px] px-5 md:px-[30px]"
          variant="secondary"
          icon="./images/common/arrow-right-light.svg"
          iconAlt="arrow right"
          iconHeight={24}
          iconWidth={24}
        >
          <span className="hidden md:inline-block">Start</span> Bug Bounty
        </Button>
      </div>
    </div>
  );
}
