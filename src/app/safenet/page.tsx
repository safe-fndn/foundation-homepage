import Defenders from "@/components/safenet/Defenders";
import HeroSection from "@/components/safenet/HeroSection";
import HowItWorks from "@/components/safenet/HowItWorks";
import LearnMore from "@/components/safenet/LearnMore";
import NativeToken from "@/components/safenet/NativeToken";
import NetworkStats from "@/components/safenet/NetworkStats";
import Problem from "@/components/safenet/Problem";
import Solution from "@/components/safenet/Solution";
import StakeSafe from "@/components/safenet/StakeSafe";
import WhoIsItFor from "@/components/safenet/WhoIsItFor";
import React from "react";

export default function SafenetPage() {
  return (<main className="">
    <div className="bg-safenet-green">
      <HeroSection />
    </div>
    <div className="sn-side-borders max-w-[1440px] mx-auto">
      <div className="pt-[66px] ">
        <Problem />
      </div>
      <div className="pt-[25px] md:pt-[70px]">
        <Solution />
      </div>
      <div className="pt-[72px] md:pt-[80px]">
        <Defenders />
      </div>
      <div className="pt-[72px] md:pt-[80px]">
        <HowItWorks />
      </div>
      <div className="pt-[108px] md:pt-[180px]">
        <WhoIsItFor />
      </div>
    </div>
    <div className="bg-safenet-green">
      <NativeToken />
    </div>
    <div className="sn-side-borders max-w-[1440px] mx-auto">
      <StakeSafe />
      <div className="pt-[183px] md:pt-[197px] px-[20px] md:px-[48px]">
        <NetworkStats />
      </div>
      <LearnMore />
    </div>
  </main>)
}
