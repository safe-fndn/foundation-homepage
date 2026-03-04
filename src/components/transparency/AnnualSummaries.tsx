"use client";

import SectionTag from "../ui/SectionTag";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";
import { annualSummaries } from "@/content/transparency";

const SummaryCategory = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h4 className="text-base md:text-lg font-medium text-[#1A1A1A] mb-2">
        {title}
      </h4>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-sm md:text-base text-[#1a1a1acc] flex items-start gap-2"
          >
            <span className="text-[#12FF80] mt-1.5 flex-shrink-0">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AnnualSummaries = () => {
  return (
    <div className="px-[16px] max-w-[953px] w-full mx-auto">
      <SectionTag text="Annual Activity Summaries" />
      <div className="text-[#1A1A1A] text-[28px] md:text-[48px] leading-[120%] pt-2 pb-4 md:pt-5 md:pb-[40px]">
        Yearly Summaries
      </div>

      <Accordion allowMultiple defaultOpen={["2024"]}>
        {annualSummaries.map((summary) => (
          <AccordionItem
            key={summary.id}
            className="border-b border-black/[0.1]"
          >
            <AccordionTrigger
              id={summary.id}
              className="py-5 md:py-6"
            >
              <span className="text-xl md:text-2xl font-medium">
                {summary.year}
              </span>
            </AccordionTrigger>
            <AccordionContent id={summary.id} className="pb-6 md:pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <SummaryCategory title="Highlights" items={summary.highlights} />
                <SummaryCategory
                  title="DAO Activity"
                  items={summary.daoActivity}
                />
                <SummaryCategory
                  title="Ecosystem Funding"
                  items={summary.ecosystemFunding}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AnnualSummaries;
