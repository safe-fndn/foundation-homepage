"use client";

import React from "react";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";
import Image from "next/image";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-[#12ff8014] border border-black/[0.1] rounded-[10px] p-5 relative ${className}`}
    >
      {children}
    </div>
  );
};

export default function Governance() {
  return (
    <div className="px-[16px] max-w-[953px] w-full text-left mx-auto">
      <SectionTag text="Governance" />
      <div className="pt-4 md:pt-10">
        <Card className="flex flex-col justify-center items-center mb-[10px]">
          <Image
            src="/images/common/safe-engraved.png"
            alt="safe logo"
            width={220}
            height={220}
            className="pb-4"
          />
          <div className="text-[#1A1A1A] text-xl font-medium pb-1">
            Safe Token
          </div>
          <div className="text-[#1a1a1a99] max-w-[631px] text-sm leading-[120%] text-center pb-7">
            SAFE Token acts as your key to participate in Web3&apos;s transition
            to smart accounts. Token holders tap into a diverse and
            ever-evolving ecosystem and govern the future of <i>Safe.</i>
          </div>
          <a
            href="https://safe.global/token"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className=""
              variant="link"
              icon="/images/common/arrow-right.svg"
              iconAlt="arrow right"
              iconHeight={18}
              iconWidth={18}
            >
              Learn More
            </Button>
          </a>
        </Card>
        <div className="flex flex-col md:flex-row gap-[10px]">
          <Card className="flex-1 flex justify-between flex-col">
            <Image
              src="/images/homepage/governance/governance.svg"
              alt="hub"
              width={32}
              height={32}
              className="mb-2"
            />
            <div className="text-[#1A1A1A] text-xl font-medium pb-1">
              Governance hub
            </div>
            <div className="text-[#1a1a1a99] text-sm leading-[120%] pb-[110px]">
              {`This hub is designed to provide you with easy access to essential resources dedicated to different aspects of SafeDAO's governance and operations.`}
            </div>
            <a
              href="https://gov.safefoundation.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="pl-0 w-fit"
                variant="link"
                icon="/images/common/arrow-right.svg"
                iconAlt="arrow right"
                iconHeight={18}
                iconWidth={18}
              >
                Go to Hub
              </Button>
            </a>
          </Card>
          <Card className="flex-1 flex justify-between flex-col">
            <Image
              src="/images/homepage/governance/proposal.svg"
              alt="hub"
              width={32}
              height={32}
              className="mb-2"
            />
            <div className="text-[#1A1A1A] text-xl font-medium pb-1">
              Latest Proposals
            </div>
            <div className="text-[#1a1a1a99] text-sm leading-[120%] pb-[110px]">
              {`Get involved in the latest proposals or write one of your own and let your voice be heard.`}
            </div>
            <a
              href="https://snapshot.box/#/s:safe.eth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="pl-0 w-fit"
                variant="link"
                icon="/images/common/arrow-right.svg"
                iconAlt="arrow right"
                iconHeight={18}
                iconWidth={18}
              >
                View Proposals
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
