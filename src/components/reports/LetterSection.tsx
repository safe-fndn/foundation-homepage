import React from "react";
import { LETTER_TO_BACKERS } from "@/content/reports/q1-2026-data";

export default function LetterSection() {
  return (
    <div className="max-w-[720px] flex flex-col gap-6">
      <p className="text-base text-[#1A1A1A99]">{LETTER_TO_BACKERS.greeting}</p>
      <div className="flex flex-col gap-4">
        {LETTER_TO_BACKERS.paragraphs.map((para, i) => (
          <p key={i} className="text-base leading-relaxed text-[#1A1A1A]">
            {para}
          </p>
        ))}
      </div>
      <div className="pt-4 border-t border-[#E5E5E5]">
        <div className="text-base font-medium text-[#1A1A1A]">{LETTER_TO_BACKERS.signature}</div>
        <div className="text-sm text-[#1A1A1A66] mt-1">{LETTER_TO_BACKERS.signatureTitle}</div>
      </div>
    </div>
  );
}
