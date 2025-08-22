import React from "react";

export default function SectionTag({ text }: { text: string }) {
  return (
    <div className="w-full">
      <div className="text-[#1A1A1A] text-xl md:text-2xl font-medium">
        */ {text}
      </div>
    </div>
  );
}
