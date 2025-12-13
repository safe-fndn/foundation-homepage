import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-[1242px] mx-auto h-full flex gap-[60px] flex-col-reverse md:flex-row justify-between items-center">
      <div className="z-10 max-w-[600px] text-center md:text-left px-4">
        <div className="text-4xl md:text-7xl pb-2 md:pb-5">
          Integrate the <i>Safe</i> Smart Account
        </div>
        <div className="text-[#1a1a1acc]">
          The most trusted and battle-tested smart account contracts, built for
          scale, flexibility and security
        </div>
        <a
          href="https://docs.safe.global/home/what-is-safe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="secondary"
            className="mx-auto mt-10 md:float-left"
            icon="/images/common/arrow-right-light.svg"
          >
            Build on Safe
          </Button>
        </a>
      </div>
      <div>
        <Image
          src="/images/smart-contracts/hero.png"
          alt="Safe Smart Account"
          width={403}
          height={596}
        />
      </div>
    </div>
  );
};

export default HeroSection;
