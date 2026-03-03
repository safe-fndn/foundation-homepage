import HeroSection from "@/components/about/HeroSection";
import MissionPurpose from "@/components/about/MissionPurpose";
import WhatAreSafeAccounts from "@/components/about/WhatAreSafeAccounts";
import EcosystemImpact from "@/components/about/EcosystemImpact";
import FoundationCouncil from "@/components/about/FoundationCouncil";
// import ExecutiveManagement from "@/components/about/ExecutiveManagement";
import GovernanceFramework from "@/components/about/GovernanceFramework";

import CommunityGovernance from "@/components/about/CommunityGovernance";

import AuditorAuthority from "@/components/about/AuditorAuthority";
import FoundationHistory from "@/components/about/FoundationHistory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Safe Ecosystem Foundation",
  description:
    "The Safe Ecosystem Foundation is a Swiss foundation dedicated to advancing open-source technology for secure digital asset management.",
};

export default function About() {
  return (
    <div>
      <HeroSection />
      <div className="pt-15 md:pt-[160px]">
        <MissionPurpose />
      </div>
      <div className="pt-[100px] md:pt-[160px]">
        <WhatAreSafeAccounts />
      </div>
      <div className="pt-[100px] md:pt-[160px]">
        <EcosystemImpact />
      </div>
      <div className="pt-[100px] md:pt-[160px]">
        <FoundationCouncil />
      </div>
      {/* <div className="pt-[60px] md:pt-[100px]">
        <ExecutiveManagement />
      </div> */}
      <div className="pt-[100px] md:pt-[160px]">
        <GovernanceFramework />
      </div>
      <div className="pt-[100px] md:pt-[160px]">
        <CommunityGovernance />
      </div>
      <div className="pt-[100px] md:pt-[160px]">
        <AuditorAuthority />
      </div>
      <div className="py-[100px] md:py-[160px]">
        <FoundationHistory />
      </div>
    </div>
  );
}
