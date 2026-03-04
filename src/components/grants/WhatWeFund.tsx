import React from "react";
import SectionTag from "../ui/SectionTag";

const focusAreas = [
  {
    title: "Protocol & Infrastructure",
    description:
      "Core smart account improvements, module development, standards work (e.g., ERC-4337), and interoperability.",
  },
  {
    title: "Security",
    description:
      "Audits, formal verification, vulnerability research, and defensive tooling that hardens the Safe stack.",
  },
  {
    title: "Developer Tooling & SDKs",
    description:
      "Libraries, SDKs, APIs, and integrations that make it easier to build on Safe.",
  },
  {
    title: "Research",
    description:
      "Academic and applied research on account abstraction, governance, key management, and related topics.",
  },
  {
    title: "Ecosystem Growth",
    description:
      "Educational content, documentation, community events, and adoption campaigns.",
  },
  {
    title: "Applications",
    description:
      "Products and services built on Safe that demonstrate novel use cases for smart accounts.",
  },
];

export default function WhatWeFund() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="What We Fund" />
      <div className="text-[#1a1a1a99] text-xl max-w-[800px] mt-4 mb-[60px] leading-[150%]">
        The Safe Ecosystem Foundation funds work that strengthens the Safe smart
        account ecosystem. We look for projects that expand the utility,
        security, and adoption of Safe accounts — whether that means core
        protocol improvements, new tooling, applied research, or community
        growth.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusAreas.map((area, index) => (
          <div
            key={index}
            className="bg-[#12ff800f] rounded-[16px] p-6"
          >
            <div className="text-[#1A1A1A] text-xl font-medium pb-2">
              {area.title}
            </div>
            <div className="text-[#1a1a1a99] text-base leading-[150%] font-light">
              {area.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
