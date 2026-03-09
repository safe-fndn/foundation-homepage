"use client";

import React from "react";
import Image from "next/image";
import {
  navigationCards,
  socialLinks,
  legalLinks,
  companyLinks,
} from "@/content/footer";
import { COMMS_EMAIL } from "@/constants";
import SafenetButton from "./Button";

const DITHER_TEXT =
  "9F3B2A1C7D88E4A0B1CFF29E4418A2C8EA884D9910FF2A71C3E8B11F90C2D4410BBCC9910AF2818C8E31FF04C1D7A8B22FF2198AC4410E77A02B4D8813E91AC0BC8E4410A99F20D88A12B7C03E11FA8CAA91F2E04C8D71BB3E91A0F8822D441AEE29C8A4410D9910FF2B71C3E8B11F90CD4410C8E99AF20B8812C7D03E11FA8C2BB9910A77C2E88F1C3D4410FF2198ACA12E8C9910B4D71C3E8822F04A1B9C8DE91F0A8822C4410BB9910AF2818C8E31FF04C1D7A8B22FF2198AC4410E77A02B4D8813E91AC0BC8E4410A99F20D88A12B7C03E11FA8C2BB9910A77C2E88F1C3D4A91F0B8822C441BB9910AF2818C8E31FF04C1D7A8B22FF2198AC4410E77A02B4D8813E91AC0BC8E4410A99F20D88A12B7C03E11FA8C2BB9910A77C2E88";

const companyFooterLinks = [
  companyLinks.find((l) => l.name === "About"),
  legalLinks.find((l) => l.name === "Terms"),
  legalLinks.find((l) => l.name === "Privacy"),
].filter(Boolean) as { name: string; href: string }[];

const websiteFooterLinks = navigationCards
  .filter((c) => c.title !== "Blog")
  .map((c) => ({ name: c.title, href: c.href, openInNewTab: c.openInNewTab }));

function FooterLink({
  name,
  href,
  openInNewTab,
}: {
  name: string;
  href: string;
  openInNewTab?: boolean;
}) {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className="flex items-center justify-between py-1 border-b border-dashed border-black/30 text-sm font-light sn-mono-sm uppercase"
    >
      <span>{name}</span>
      <Image
        src="/images/common/arrow-external.svg"
        alt=""
        width={18}
        height={18}
      />
    </a>
  );
}

const SafenetFooter = () => {
  return (
    <footer className="w-full bg-safenet-green border-t border-safenet-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[46px]">
        <div className="flex flex-col md:flex-row w-full">
          <div className="py-6 px-4 border w-full border-safenet-black border-t-0">
            <div className="flex items-start justify-between">
              <p className="text-base md:text-[20px] font-light">Safenet &copy; {new Date().getFullYear()}</p>
              <Image
                src="/images/common/safe-logo.svg"
                alt="Safe"
                width={28}
                height={28}
                className="w-[28px] md:w-[52px] h-[28px] md:h-[52px]"
              />
            </div>
            <p className="sn-body-sm text-sm md:text-base font-light pt-3 max-w-[230px] md:max-w-[264px]">
              {"{"}Your last line of defence against Web3 security threats{"}"}
            </p>
          </div>

          <div className="flex p-3 md:p-6 flex-col w-full border border-safenet-black border-t-0 md:border-l-0 md:flex-row gap-8">
            <div className="flex-1 pb-4">
              <p className="text-sm md:text-base font-medium pb-1">Company:</p>
              {companyFooterLinks.map((link) => (
                <FooterLink key={link.name} name={link.name} href={link.href} />
              ))}
            </div>

            <div className="flex-1 pb-4">
              <p className="text-sm md:text-base font-medium pb-1">Website:</p>
              {websiteFooterLinks.map((link) => (
                <FooterLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  openInNewTab={link.openInNewTab}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border border-safenet-black border-t-0">
          <div className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[auto_auto_auto] items-stretch">
            <a
              href={`mailto:${COMMS_EMAIL}`}
              className="flex items-center md:hidden gap-2 sn-mono-md justify-between text-sm uppercase py-[10px] px-4"
            >
              Reach out to us
              <Image
                src="/images/common/arrow-external.svg"
                alt=""
                width={16}
                height={16}
              />
            </a>
            <div className="md:p-4 hidden md:block">
              <SafenetButton
                icon="/images/safenet/arrow-external-dark.svg"
                iconAlt="Arrow External"
                iconHeight={16}
                iconWidth={16}
                variant="outline"
                className="sn-mono-md max-w-[261px] w-full"
              >
                Reach out to us
              </SafenetButton>
            </div>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-[24px] py-[10px] border-l border-safenet-black"
              >
                <Image
                  src={`/images/common/${link.name.toLowerCase()}.svg`}
                  alt={link.name}
                  width={22}
                  height={22}
                  className="w-[22px] md:w-[40px] h-[22px] md:h-[40px]"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="border border-safenet-black border-t-0">
          <div className="flex items-center gap-1 justify-center px-3 py-[14px]">
            <Image
              src="/images/safenet/bracket.svg"
              alt="bracket"
              width={20}
              height={75}
              className="w-[20px] md:w-[40px] h-[75px] md:h-[143px] inline shrink-0"
            />
            <div
              className="relative text-[70px] md:text-[152px] font-medium"
              style={{ fontWeight: 500 }}
            >
              Safenet
              <p className="absolute text-[10px] md:text-xl sn-mono-sm right-0 bottom-0 md:bottom-5">BETA</p>
            </div>
            <Image
              src="/images/safenet/bracket.svg"
              className="w-[20px] md:w-[40px] h-[75px] md:h-[143px] rotate-180 inline shrink-0"
              alt="bracket"
              width={20}
              height={75}
            />
          </div>
        </div>

        <div className="relative border border-safenet-black border-t-0 overflow-hidden h-[124px] md:h-[164px]">
          <p
            aria-hidden
            className="absolute inset-0 break-all select-none pointer-events-none"
            style={{
              color: "#04BE5A",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "110%",
              letterSpacing: "-0.28px",
            }}
          >
            {DITHER_TEXT.repeat(4)}
          </p>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 md:-bottom-[24px]">
            <Image
              src="/images/safenet/safe-footer-box.png"
              alt="Safe Box"
              width={219}
              height={164}
              className="w-[219px] md:w-[319px] h-[164px] md:h-[184px] object-contain"
            />
          </div>
        </div>

        <div className="border border-safenet-black border-y-0">
          <div className="px-4 py-[13px] flex items-center justify-between">
            <Image
              src="/images/common/safe-logo.svg"
              alt="Safe"
              width={28}
              height={28}
              className="w-[28px] md:w-[31px] h-[28px] md:h-[31px]"
            />
            <a
              href="https://safefoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-light sn-mono-sm text-base uppercase"
            >
              Safe Foundation
              <Image
                src="/images/common/arrow-external.svg"
                alt=""
                width={18}
                height={18}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SafenetFooter;
