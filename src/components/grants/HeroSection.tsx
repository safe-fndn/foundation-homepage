import React from "react";
import { WarpDitherCanvas } from "../WrapDitherCanvas";
import Button from "../ui/Button";
import { GRANTS_EMAIL } from "@/constants";

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
        <div className="text-4xl md:text-7xl pb-2 md:pb-5">
          Funding the Future of Smart Accounts
        </div>
        <div className="text-[#1a1a1acc] max-w-[700px] mx-auto">
          The Safe Ecosystem Foundation supports builders, researchers, and
          communities advancing the adoption and security of smart account
          infrastructure.
        </div>
        <a href={`mailto:${GRANTS_EMAIL}`} target="_blank" rel="noreferrer">
          <Button variant="secondary" className="mx-auto mt-5">
            Apply for a grant
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
