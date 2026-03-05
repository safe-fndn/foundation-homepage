import React, { ReactNode } from "react";
import SectionTag from "@/components/ui/SectionTag";
import { cn } from "@/lib/utils";

interface ReportSectionWrapperProps {
  id: string;
  tag?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

/**
 * Consistent section wrapper for all report sections.
 * Uses the site's SectionTag + spacing conventions.
 */
export default function ReportSectionWrapper({
  id,
  tag,
  title,
  subtitle,
  children,
  className,
  dark = false,
}: ReportSectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-20 py-16 md:py-24",
        dark ? "bg-[#1A1A1A] text-white" : "bg-white text-[#1A1A1A]",
        className
      )}
    >
      <div className="max-w-[1242px] mx-auto px-4">
        {tag && (
          <div className={dark ? "[&_div]:text-white [&_div]:text-opacity-70" : ""}>
            <SectionTag text={tag} />
          </div>
        )}
        <h2
          id={`${id}-heading`}
          className={cn(
            "text-[32px] md:text-[48px] font-medium leading-[1.15] mt-3 mb-2",
            dark ? "text-white" : "text-[#1A1A1A]"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={cn("text-base md:text-lg mb-8 max-w-[640px]", dark ? "text-[#ffffff99]" : "text-[#1A1A1A99]")}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
