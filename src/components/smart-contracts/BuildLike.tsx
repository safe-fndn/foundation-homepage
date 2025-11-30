import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";

const data = [
  {
    image: "/images/smart-contracts/gnosis-pay.png",
    name: "Gnosis Pay",
    tags: [
      "Payments",
      "Onramp",
      "Offramp",
      "Gassless Payments",
      "Shareable KYC",
      "IBAN",
    ],
    desc: "Spend directly from your Safe with Gnosis Pay card infrastructure",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/safe-labs.png",
    name: "Safe {Wallet}",
    tags: ["Wallet", "Yield", "Enterprise"],
    desc: "Enterprise grade mutli-sig with cypherpunk values for all of Ethereum",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/world.png",
    name: "World",
    tags: ["Indentity", "Wallet", "Yield"],
    desc: "Proof of personhood & universal basic income",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/fileverse.png",
    name: "Fileverse",
    tags: [
      "Privacy",
      "Decentralised storage",
      "Account Abstraction",
      "Decentralised Storage",
      "ZK Access Controls",
      "Collaboration",
    ],
    desc: "G**gle Docs, Sheets and more in a decentralised, censorship resistant manner",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/picnic.png",
    name: "Picnic",
    tags: [
      "Offramp",
      "Onramp",
      "Stablecoin",
      "Debit Card",
      "Self Custody",
      "Swaps",
    ],
    desc: "Web2 like experience for the Latam market",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/defi-saver.png",
    name: "Defi Saver",
    tags: [
      "Lending/borrowing",
      "Liquidation Protection",
      "Yield",
      "Looping",
      "Stablecoin",
    ],
    desc: "One-stop dashboard for creating, managing and tracking your DeFi positions",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/bitpanda.png",
    name: "BitPanda",
    tags: ["Wallet", "Yield"],
    desc: "Stablecoin first, exchange connected wallets for everyone",
    twitter: "",
    web: "",
  },
  {
    image: "/images/smart-contracts/fluidkey.png",
    name: "Fluidkey",
    tags: ["Privacy", "Wallet", "Yield", "IBAN"],
    desc: "Privacy first wallets through stealth addresses for crypto power users",
    twitter: "",
    web: "",
  },
];

export default function BuiltLike() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Build like:" />
      <div className="text-black/[0.6] font-light text-sm pt-2 pb-5">
        Get inspired by the best that build on the Safe smart account
        infrastructure.
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
