import HeroSection from "@/components/about/HeroSection";
import MissionPurpose from "@/components/about/MissionPurpose";
import WhatAreSafeAccounts from "@/components/about/WhatAreSafeAccounts";
import EcosystemImpact from "@/components/about/EcosystemImpact";
import FoundationCouncil from "@/components/about/FoundationCouncil";
import CommunityGovernance from "@/components/about/CommunityGovernance";
import AuditorAuthority from "@/components/about/AuditorAuthority";
import FoundationHistory from "@/components/about/FoundationHistory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Safe Ecosystem Foundation",
  description:
    "The Safe Ecosystem Foundation is a non-profit Swiss foundation advancing open-source technology for secure digital asset management, securing over $60B across hundreds of networks.",
};

export default function About() {
  return (
    <div>
      <HeroSection />
      <div className="pt-[60px] md:pt-[160px]">
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
