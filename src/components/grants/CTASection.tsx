import React from "react";
import Button from "../ui/Button";
import { GRANTS_EMAIL } from "@/constants";

export default function CTASection() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4">
      <div className="text-[#1a1a1a] text-[36px] leading-[120%] font-medium pb-4 max-w-[600px]">
        Have an idea that advances the Safe ecosystem?
      </div>
      <div className="max-w-[550px] text-[#1a1a1a99] text-xl pb-8 leading-[150%]">
        We&apos;re always looking for exceptional builders and researchers.
        Whether your project fits an active program or not, reach out — we&apos;re
        happy to explore how we can support your work.
      </div>
      <a href={`mailto:${GRANTS_EMAIL}`} target="_blank" rel="noreferrer">
        <Button variant="secondary" className="w-fit">
          Get in touch
        </Button>
      </a>
    </div>
  );
}
