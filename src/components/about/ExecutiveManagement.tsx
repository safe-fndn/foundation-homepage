import React from "react";

const executives = [
  { name: "Lukas Schor", role: "CEO" },
  { name: "Patrick Nick", role: "General Counsel" },
  { name: "Hinrich Pfeifer", role: "COO / CFO" },
];

export default function ExecutiveManagement() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <div className="text-[#1A1A1A] text-2xl md:text-4xl leading-[120%]">
        Executive Management
      </div>
      <p className="text-[#1a1a1a99] text-base md:text-lg mt-3 font-light max-w-[700px]">
        The Foundation Council delegates operational management to the Executive
        Management in accordance with Art. 11 of the Foundation Charter and the
        Organizational Regulations.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-8">
        {executives.map((exec) => (
          <div key={exec.name} className="border-l-2 border-[#1a1a1a1a] pl-5">
            <div className="text-[#1A1A1A] text-lg md:text-xl leading-[130%]">
              {exec.name}
            </div>
            <div className="text-[#1a1a1a99] text-base font-light">
              {exec.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
