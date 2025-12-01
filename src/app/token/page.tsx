import BackedBy from "@/components/token/BackedBy";
import Governance from "@/components/token/Governance";
import HeroSection from "@/components/token/HeroSection";
import NoGas from "@/components/token/NoGas";
import SafeHolders from "@/components/token/SafeHolders";
import SafeInMedia from "@/components/token/SafeInMedia";
import SafetyInNumbers from "@/components/token/SafetyInNumbers";
import Tokenomics from "@/components/token/Tokenomics";
import WhatIsSafe from "@/components/token/WhatIsSafe";
import Button from "@/components/ui/Button";

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
        <NoGas />
        <Tokenomics />
        <SafeHolders />
      </div>
      <div className="pt-[160px]">
        <SafetyInNumbers />
      </div>
      <div className="py-[160px]">
        <BackedBy />
      </div>
      <div className="pb-[160px]">
        <SafeInMedia />
      </div>
      <div className="pb-[160px]">
        <Governance />
      </div>
      <div className="mt-0 md:mt-[160px] max-w-[1312px] mx-auto flex flex-col gap-2 px-4 pb-[10px] md:pb-5">
        <div className="text-sm font-medium uppercase leading-[24px] tracking-[2.1px]">
          Legal Disclaimer
        </div>
        <div className="text-[15px] font-light text-[#A1A3A7]">
          This is not an offer to sell or the solicitation of an offer to
          purchase any safe, and is not an offering, advertisement,
          solicitation, confirmation, statement or any financial promotion that
          can be construed as an invitation or inducement to engage in any
          investment activity or similar. you should not rely on the content
          herein for advice of any kind, including legal, investment, financial,
          tax or other professional advice, and such content is not a substitute
          for advice from a qualified professional.
        </div>
        <div className="pt-2">
          <a
            href="/docs/whitepaper.xlsx"
            download="SAFE-Token-MiCA-White-Paper.xlsx"
          >
            <Button variant="outline">SAFE Token MiCA White Paper</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
