import React from "react";
import { LETTER_TO_BACKERS } from "@/content/reports/q1-2026-data";

// Short standalone sentences are rendered as pull quotes for visual rhythm
function isPullQuote(text: string) {
  return text.length < 100;
}

export default function LetterSection() {
  return (
    <div className="max-w-[720px] flex flex-col gap-0">
      {/* Greeting */}
      <p className="text-xs font-medium uppercase tracking-widest text-[#1A1A1A66] mb-8">
        {LETTER_TO_BACKERS.greeting}
      </p>

      {/* Body paragraphs */}
      <div className="flex flex-col">
        {LETTER_TO_BACKERS.paragraphs.map((para, i) =>
          isPullQuote(para) ? (
            <blockquote
              key={i}
              className="my-6 pl-4 border-l-2 border-[#12FF80] text-lg md:text-xl font-medium leading-snug text-[#1A1A1A]"
            >
              {para}
            </blockquote>
          ) : (
            <p
              key={i}
              className="text-base leading-relaxed text-[#1A1A1A] mt-5 first:mt-0"
            >
              {para}
            </p>
          )
        )}
      </div>

      {/* Signature */}
      <div className="mt-10 pt-6 border-t border-[#E5E5E5] flex items-start gap-4">
        <span className="mt-1 inline-block w-1 h-10 bg-[#12FF80] rounded-full flex-shrink-0" />
        <div>
          <div className="text-base font-medium text-[#1A1A1A]">
            {LETTER_TO_BACKERS.signature}
          </div>
          <div className="text-sm text-[#1A1A1A66] mt-1">
            {LETTER_TO_BACKERS.signatureTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
