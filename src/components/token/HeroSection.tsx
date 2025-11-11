import React from "react";
import { WarpDitherCanvas } from "../WrapDitherCanvas";
import Image from "next/image";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <WarpDitherCanvas />
      <div
        className="absolute bottom-0 left-0 right-0 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 25.16%, #FFF 75.56%)",
        }}
      />
      <div className="z-10 max-w-[408px] md:max-w-[860px] text-center px-4">
        <Image
          src="/images/common/safe-engraved.png"
          alt="safe logo"
          width={220}
          height={220}
          className="pb-4 mx-auto"
        />
        <div className="text-3xl md:text-7xl pb-2 md:pb-5 leading-[120%]">
          Participate in the Ownership Revolution
        </div>
        <div className="text-[#1a1a1acc] max-w-[522px] mx-auto">
          Govern the future of ownership and infrastructure that powers the Safe
          smart accounts
        </div>
        <Button variant="secondary" className="mt-[30px] mx-auto">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
