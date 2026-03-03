import React from "react";
import SectionTag from "../ui/SectionTag";

export default function AuditorAuthority() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Statutory Auditor & Supervisory Authority" />

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-[40px] md:mt-[60px]">
        <div className="flex-1 bg-[#f5f5f5] rounded-lg p-5 md:p-6">
          <div className="text-[#1a1a1a66] text-sm uppercase tracking-wider font-medium">
            Statutory Auditor (Revisionsstelle)
          </div>
          <div className="text-[#1A1A1A] text-lg md:text-xl leading-[130%] mt-2">
            Wadsack Zug AG, Zug
          </div>
          <div className="text-[#1a1a1a99] text-base font-light mt-1">
            Ordinary audit (ordentliche Revision)
          </div>
        </div>

        <div className="flex-1 bg-[#f5f5f5] rounded-lg p-5 md:p-6">
          <div className="text-[#1a1a1a66] text-sm uppercase tracking-wider font-medium">
            Supervisory Authority (Aufsichtsbehörde)
          </div>
          <div className="text-[#1A1A1A] text-lg md:text-xl leading-[130%] mt-2">
            Federal Supervisory Authority for Foundations (ESA), Bern
          </div>
          <div className="text-[#1a1a1a99] text-base font-light mt-1">
            Art. 84 ZGB — Annual reporting
          </div>
        </div>
      </div>
    </div>
  );
}
