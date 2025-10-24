import BackedBy from "@/components/token/BackedBy";
import HeroSection from "@/components/token/HeroSection";
import SafeHolders from "@/components/token/SafeHolders";
import Tokenomics from "@/components/token/Tokenomics";
import WhatIsSafe from "@/components/token/WhatIsSafe";

export default async function Home() {
  return (
    <div>
      <div className="h-screen w-full relative">
        <HeroSection />
      </div>
      <div className="pt-15 md:pt-[160px]">
        <WhatIsSafe />
      </div>
      <div className="mt-[100px] md:mt-[160px] bg-[#E4EDE6] py-[100px] md:py-[160px]">
        <Tokenomics />
        <SafeHolders />
      </div>
      <div className="py-[160px]">
        <BackedBy />
      </div>
    </div>
  );
}
