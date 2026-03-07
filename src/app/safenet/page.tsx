import HeroSection from "@/components/safenet/HeroSection";
import Problem from "@/components/safenet/Problem";
import Solution from "@/components/safenet/Solution";
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
    </div>
  </main>)
}
