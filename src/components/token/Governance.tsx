import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";
import Link from "next/link";

const content = [
  {
    title: "Forum",
    desc: "Be part of a community",
    link: "https://forum.safe.global/",
  },
  {
    title: "Latest Proposals",
    desc: "JOIN THE CONVERSATION",
    link: "https://snapshot.box/#/s:safe.eth",
  },
  {
    title: "Governance Hub",
    desc: "LEARN MORE",
    link: "http://gov.safefoundation.org",
  },
];

export default function Governance() {
  return (
    <div className="px-[16px] max-w-[1200px] mx-auto">
      <SectionTag text="Governance" />
      <div className="flex gap-[40px] flex-col lg:flex-row pt-1 md:pt-4 pb-[40px] lg:pb-[80px]">
        <div className="text-[36px] italic md:not-italic md:text-[64px] max-w-[570px]">
          <Image
            src="/images/token/safe.svg"
            alt="safe"
            width={128}
            height={44}
            className="inline-block w-[90px] h-[38px] md:w-[128px] md:h-[44px]"
          />
          &nbsp;
          <Image
            src="/images/token/dao.svg"
            alt="dao"
            width={158}
            height={60}
            className="inline-block w-[110px] h-[44px] md:w-[158px] md:h-[60px]"
          />{" "}
          governs the future of Safe
        </div>
        <div className="max-w-[570px] text-xl font-light leading-[28px]">
          Safe is governed by SafeDAO, a decentralized collective of token
          holders, core contributors, backers, GnosisDAO, users and ecosystem
          contributors including Safe Guardians.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {content.map((item) => (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.title}
            className="bg-[#12ff800f] cursor-pointer border h-[240px] flex flex-col relative justify-between border-[#12ff8038] rounded-[10px] p-4 md:p-8"
          >
            <div className="uppercase font-medium text-[#1A1A1A]/[0.6] text-sm leading-[24px] tracking-[2.1px]">
              {item.desc}
            </div>
            <div className="text-[32px]">{item.title}</div>
            <div className="absolute right-4 top-4 md:top-8">
              <Image
                src="/images/common/arrow-right-bold.svg"
                alt="arrow right"
                width={24}
                height={24}
                className="-rotate-45"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
