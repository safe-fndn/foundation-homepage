import HeroSection from "@/components/safenet/HeroSection";
import Problem from "@/components/safenet/Problem";
import React from "react";

export default function SafenetPage() {
  return (<main className="">
    <div className="bg-safenet-green">
      <HeroSection />
    </div>
    <div className="pt-[66px] max-w-[1440px] mx-auto sn-side-borders">
      <Problem />
    </div>
  </main>)
}
