import BuildLike from "@/components/smart-contracts/BuildLike";
import BuildOnSafe from "@/components/smart-contracts/BuildOnSafe";
import BuiltWith from "@/components/smart-contracts/BuiltWith";
import ChainStack from "@/components/smart-contracts/ChainStack";
import HeroSection from "@/components/smart-contracts/HeroSection";
import SafeContracts from "@/components/smart-contracts/SafeContracts";
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
      <div className="bg-[#E4EDE6] py-[160px] flex flex-col gap-[160px]">
        <ChainStack />
        <SafeContracts />
      </div>
      <div className="py-[160px]">
        <BuiltWith />
      </div>
      <div className="pb-[160px]">
        <BuildLike />
      </div>
    </div>
  );
}
