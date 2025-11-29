import BuildOnSafe from "@/components/smart-contracts/BuildOnSafe";
import HeroSection from "@/components/smart-contracts/HeroSection";
import SafeInNumbers from "@/components/smart-contracts/SafeInNumbers";
import React from "react";

export default function SmartContracts() {
  return (
    <div>
      <div className="pb-[104px]">
        <HeroSection />
      </div>
      <div>
        <SafeInNumbers />
      </div>
      <div className="py-[160px]">
        <BuildOnSafe />
      </div>
    </div>
  );
}
