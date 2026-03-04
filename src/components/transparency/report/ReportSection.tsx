import { type ReactNode } from "react";

const ReportSection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <section id={id} className="pt-[60px] md:pt-[80px] first:pt-0">
    <h2 className="text-[24px] md:text-[36px] font-medium text-[#1A1A1A] mb-6">
      {title}
    </h2>
    {children}
  </section>
);

export default ReportSection;
