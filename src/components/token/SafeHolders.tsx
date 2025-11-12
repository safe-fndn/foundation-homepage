import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";

const content = [
  {
    image: "/images/token/future-stakes.svg",
    title: "Future Stakes",
    description:
      "Take your stake in future utility initiatives driven by the community.",
  },
  {
    image: "/images/token/governance.svg",
    title: "Governance",
    description:
      "Be a part of Safe{DAO} and shape the next evolution of ownership on Ethereum/EVM through smart accounts.",
  },
];

export default function SafeHolders() {
  return (
    <div className="pt-[100px] md:pt-[160px] px-[16px] max-w-[1002px] mx-auto">
      <SectionTag text="Token utility" />
      <div className="pt-1 md:pt-4 leading-[110%] pb-5 lg:pb-[64px] text-[36px] italic md:not-italic md:text-[64px]">
        Decentralized governance in Safe empowers Safe holders.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {content.map((item) => (
          <div
            key={item.title}
            className="bg-[#12ff800f] overflow-hidden border p-5 h-[386px] border-[#12ff8038] rounded-[10px] relative group md:cursor-pointer transition-all duration-300"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={42}
              height={42}
              className="mb-4"
            />
            <div className="mt-0 md:mt-[228px] md:group-hover:mt-0 transition-all duration-300">
              <h3 className="text-3xl font-medium mb-5">{item.title}</h3>
              <p className="text-black/60 pt-0 md:pt-5 md:group-hover:pt-0 text-xl transition-all duration-100">
                {item.description}
              </p>
            </div>
            <div className="h-full md:h-[48px] md:group-hover:h-full bg-[#12ff801a] absolute bottom-0 w-full left-0 transition-all duration-300"></div>
            <div className="h-[32px] bg-[#12ff804d] absolute bottom-0 w-full left-0"></div>
            <div className="h-[16px] bg-[#12FF80] absolute bottom-0 w-full left-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
