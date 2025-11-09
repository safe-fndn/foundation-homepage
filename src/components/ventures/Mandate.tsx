import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";

const content = [
  {
    title: "Smart Account Maximalism",
    desc: "We fundamentally believe in smart accounts as the default for self-custody. Our investments support teams building on this thesis across DeFi, infra, and consumer layers.",
  },
  {
    title: "Strategic Capital",
    desc: "We go beyond capital aligning via tokens and incentives that strengthen Safe's ecosystem. Over 20+ teams have partnered with us under this model.",
  },
  {
    title: "Economic Alignment",
    desc: "Our thesis includes creating economic exposure between Safe and the most impactful Web3 projects. We back primitives, not just applications.",
  },
  {
    title: "Operational Support",
    desc: "We bring distribution channels, smart account infra expertise, and foundational research to every founder we back — as true long-term partners.",
  },
];

export default function Mandate() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Our Mandate" />
      <div className="mt-[60px] flex flex-col md:flex-row gap-[40px]">
        <div>
          <Image
            src="/images/ventures/mandate.png"
            alt="Mandate"
            width={687}
            height={470}
            className="w-full h-auto md:w-[687px] md:h-[470px]"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          {content.map((item, index) => (
            <div key={index} className="max-w-[535px]">
              <div className="text-[#1A1A1A] text-[24px] leading-[120%]">
                {item.title}
              </div>
              <div className="text-[#1a1a1a99] text-xl leading-[140%] font-light">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
