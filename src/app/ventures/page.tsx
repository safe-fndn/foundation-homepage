import GetInTouch from "@/components/ventures/GetInTouch";
import HeroSection from "@/components/ventures/HeroSection";
import Mandate from "@/components/ventures/Mandate";
import Projects from "@/components/ventures/Projects";
import React from "react";

export default function Ventures() {
  return (
    <div>
      <div className="h-screen w-full relative">
        <HeroSection />
      </div>
      <div className="pt-15 md:pt-[160px]">
        <Mandate />
      </div>
      <div className="pt-[160px]">
        <Projects />
      </div>
      <div className="py-[160px]">
        <GetInTouch />
      </div>
    </div>
  );
}
