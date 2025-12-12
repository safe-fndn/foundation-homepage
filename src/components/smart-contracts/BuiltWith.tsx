import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";

const data = [
  {
    image: "/images/smart-contracts/cometh.png",
    name: "Cometh",
    tags: ["Custody", "Onramp", "Offramp"],
    desc: "Cometh offers a DeFi-native Banking-as-a-Service infrastructure for Europe: Full Account Abstration stack built on Safe, one API to integrate DeFi custody, staking, trading and payments.",
    twitter: "",
    web: "",
  },
  // {
  //   image: "/images/smart-contracts/gnosis-pay.png",
  //   name: "Gnosis Pay",
  //   tags: ["SDK", "Utility"],
  //   desc: "Spend directly from your Safe with Gnosis Pay card infrastructure",
  //   twitter: "",
  //   web: "",
  // },
  {
    image: "/images/smart-contracts/openfort.png",
    name: "Openfort",
    tags: [
      "Recovery",
      "Passkeys",
      "Onramp",
      "gas sponsorship",
      "spend permissions",
    ],
    desc: "An open-source alternative to wallet infrastructure solutions. Supercharge your project with authentication, user management and payments.",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/pimlico.png",
    name: "Pimlico",
    tags: ["Bundler", "Paymaster", "Authentication"],
    desc: "Pimlico is the most advanced smart account infrastructure platform, providing developer APIs and tooling to build with smart accounts.",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/rhinestone.png",
    name: "Rhinestone",
    tags: ["Crosschain Intents", "Gas sponsorship", "Session keys"],
    desc: "Rhinestone enables developers to achieve the endgame onchain UX with one simple API. Intent-powered, smart account-based.",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/candide.png",
    name: "Candide Lab",
    tags: ["Passkeys", "Recovery", "Spend permissions"],
    desc: "Developers from across the globe use Candide to build secure non-custodial safe digital wallets without the hassle of seed phrases or gas management to ultimately supercharge their user growth",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/brahma.png",
    name: "Brahma",
    tags: ["Payments", "Automation", "Accounts"],
    desc: "Powering autonomous systems that manage capital and automate actions across chains and into the real world.",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/safe-labs.png",
    name: "Safe Labs API & SDK",
    tags: ["Self Custody", "Passkeys", "Multichain"],
    desc: "The most secure and robust tooling and infrastructure to integrate Safe Smart Account and leverage account abstraction into your product.",
    twitter: "",
    web: "",
  },
];

export default function BuiltWith() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Build with:" />
      <div className="text-black/[0.6] font-light text-sm pt-2 pb-5">
        Easy ways to integrate the Safe smart account using SDKs and other
        tooling stacks
      </div>
      <div className="p-4 rounded-[16px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#E4EDE6] justify-items-center">
        {data.map((item) => (
          <div
            key={item.name}
            className="p-5 bg-[#FFF] border h-fit md:h-[420px] max-w-[390px] w-fit border-white/50 rounded-[10px] flex gap-[145px] md:gap-0 flex-col justify-between"
          >
            <div className="">
              <Image src={item.image} alt={item.name} width={72} height={72} />
              <div className="pt-5 text-2xl leading-[120%]">{item.name}</div>
              <div className="py-1 flex flex-row flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <div
                    key={tag}
                    className="text-[#1a1a1a66] font-medium text-sm px-[14px] rounded-[6px] bg-[#1a1a1a0a] py-1"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="text-[#1a1a1a99] text-lg font-light">
                {item.desc}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/images/smart-contracts/x.svg"
                alt="x"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <Image
                src="/images/smart-contracts/web.svg"
                alt="web"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
