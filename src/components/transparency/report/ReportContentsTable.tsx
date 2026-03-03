"use client";

import { type MouseEvent } from "react";
import Link from "next/link";
import { scrollToElement } from "@/lib/scrollSmooth";
import type { ReportSectionDef } from "@/content/quarterlyReports";

const ReportContentsTable = ({
  sections,
}: {
  sections: ReportSectionDef[];
}) => {
  const handleClick = (
    e: MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    scrollToElement(`#${target}`, 100);
  };

  return (
    <div className="border-y border-[#1A1A1A1A] py-8">
      <p className="text-sm font-medium uppercase tracking-wide text-[#1A1A1A] mb-4">
        Table of contents
      </p>
      <ol className="space-y-2">
        {sections.map((section, index) => (
          <li
            key={section.id}
            className="flex items-center text-base gap-2"
          >
            <span className="text-[#1a1a1a66] min-w-[1.5rem]">
              {index + 1}.
            </span>
            <Link
              onClick={(e) => handleClick(e, section.id)}
              href={`#${section.id}`}
              className="text-base text-[#1a1a1a66] hover:text-[#1A1A1A] transition-colors"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ReportContentsTable;
