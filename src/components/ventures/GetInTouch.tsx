import React from "react";
import Button from "../ui/Button";
import { INVESTMENT_EMAIL } from "@/constants";

export default function GetInTouch() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="text-[#1a1a1a] text-[36px] leading-[120%] font-medium pb-8">
        Got a winning product? Let&apos;s talk.
      </div>
      {/* <div className="max-w-[496px] text-[#1a1a1a99] text-xl pb-8 leading-[150%]">
        Build with the ecosystem powering the next generation of apps.
      </div> */}
      <a href={`mailto:${INVESTMENT_EMAIL}`} target="_blank" rel="noreferrer">
        <Button variant="secondary" className="w-fit">
          Get in touch
        </Button>
      </a>
    </div>
  );
}
