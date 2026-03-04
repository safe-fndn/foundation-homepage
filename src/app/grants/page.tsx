import HeroSection from "@/components/grants/HeroSection";
import WhatWeFund from "@/components/grants/WhatWeFund";
import ActivePrograms from "@/components/grants/ActivePrograms";
import PastInitiatives from "@/components/grants/PastInitiatives";
import CTASection from "@/components/grants/CTASection";
import React from "react";

export default function Grants() {
  return (
    <div>
      <div className="h-screen w-full relative">
        <HeroSection />
      </div>
      <div className="pt-15 md:pt-[160px]">
        <WhatWeFund />
      </div>
      <div className="pt-[160px]">
        <ActivePrograms />
      </div>
      <div className="pt-[160px]">
        <PastInitiatives />
      </div>
      <div className="py-[160px]">
        <CTASection />
      </div>
    </div>
  );
}
