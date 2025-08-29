"use client";

import React from "react";
import Image from "next/image";
import {
  additionalLinks,
  companyLinks,
  legalLinks,
  navigationCards,
  socialLinks,
} from "@/content/footer";
import FooterLinkSection from "@/components/ui/FooterLinkSection";
import Button from "./ui/Button";

export default function Footer() {
  return (
    <footer className="bg-[#12FF80] w-full">
      <div className="px-4 max-w-[953px] w-full text-left mx-auto pb-[60px] md:pb-[80px] pt-[60px] md:pt-[80px]">
        <div className="text-[#1A1A1A] text-[48px] leading-[120%] md:text-[82px] pb-10 font-medium">
          Champion Usable Self Custody with Safe
        </div>
        <div className="flex justify-end">
          <Button
            className="w-full max-w-[340px] text-lg md:text-[32px] px-5 md:px-[30px] text-[#12FF80] font-medium"
            variant="secondary"
            icon="./images/common/arrow-right-primary.svg"
            iconAlt="arrow right"
            iconHeight={24}
            iconWidth={24}
            onClick={() => window.open("http://docs.safe.global", "_blank")}
          >
            Build with Safe
          </Button>
        </div>
      </div>

      <div className="px-4 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-15 md:gap-10 pb-15 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[10px] max-w-[940px]">
          {navigationCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="bg-[#1a1a1a1c] rounded-[10px] p-3 flex flex-col w-[168px] h-fit md:w-[180px]"
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={24}
                height={24}
                className="mb-[30px]"
              />
              <div className="text-[#1A1A1A] text-sm whitespace-nowrap">
                {card.title}
              </div>
            </a>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
          <FooterLinkSection title="Company" links={companyLinks} />
          <FooterLinkSection title="Socials" links={socialLinks} />
          <FooterLinkSection title="Company" links={additionalLinks} />
        </div>
      </div>

      <div className="w-full h-px bg-[#1a1a1a33]"></div>

      <div className="px-4 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 md:gap-3 pt-3 justify-between pb-15 md:pb-5">
        <div className="flex flex-row flex-wrap gap-5 md:gap-8">
          {legalLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-[#1a1a1a66]">
              {link.name}
            </a>
          ))}
        </div>
        <div className="text-[#1a1a1a66]">
          &copy;{new Date().getFullYear()} Safe Ecosystem Foundation
        </div>
      </div>
    </footer>
  );
}
