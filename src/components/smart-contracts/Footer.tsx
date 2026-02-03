import React from "react";
import Button from "../ui/Button";
import { SAFE_DOCS_LINK } from "@/constants";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4">
      <div className="text-[#1a1a1a] text-[36px] leading-[120%] font-medium pb-5">
        Start building with Safe Contracts
      </div>
      <div className="max-w-[496px] text-[#1a1a1a99] text-xl pb-8 leading-[150%]">
        Explore our tools, docs, and ecosystem to build apps trusted by
        thousands of teams
      </div>
      <div className="flex flex-row items-center gap-5">
        <a
          href="https://docs.safe.global/resource-hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="w-[140px] md:w-[200px] justify-center"
          >
            Learn
          </Button>
        </a>
        <a
          href={SAFE_DOCS_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="secondary"
            className="w-[140px] justify-center"
            icon="/images/smart-contracts/github.svg"
            iconAlt="github logo"
            iconHeight={24}
            iconWidth={24}
            iconPosition="left"
          >
            Build
          </Button>
        </a>
      </div>
    </div>
  );
}
