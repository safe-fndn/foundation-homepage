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
    </div>
  );
}
