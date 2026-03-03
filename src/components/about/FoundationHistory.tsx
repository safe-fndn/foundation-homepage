import SectionTag from "../ui/SectionTag";

const milestones = [
  {
    year: "2018",
    title: "Gnosis Safe Launches",
    desc: "Safe launches as an open-source project within Gnosis, laying the groundwork for programmable, secure digital asset management.",
  },
  {
    year: "2022",
    title: "Independent Foundation Established",
    desc: "Safe Ecosystem Foundation is incorporated in Zug, Switzerland, gaining independence from Gnosis as a sovereign entity.",
  },
  {
    year: "2023",
    title: "Governance Framework",
    desc: "Organizational Regulations adopted. SafeDAO Constitution (SEP-4) ratified by the community. Grants Program launched.",
  },
  {
    year: "2024",
    title: "SAFE Token Transferability",
    desc: "SAFE token transferability approved via onchain governance, opening the door to broader ecosystem participation and decentralized coordination.",
  },
  {
    year: "2024",
    title: "Hecate Ventures AG Established",
    desc: "Hecate Ventures AG established as a subsidiary to manage the foundation\u2019s treasury and investment activities.",
  },
  {
    year: "2025",
    title: "Safe Labs Established",
    desc: "Safe Labs founded as a for-profit subsidiary to commercialize Safe technology and drive enterprise adoption.",
  },
];

export default function FoundationHistory() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Foundation History" />

      <div className="mt-[40px] md:mt-[60px] relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[#1a1a1a1a]" />

        <div className="flex flex-col gap-8 md:gap-0">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className="relative md:pl-10 md:pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-[-4px] top-1 w-[9px] h-[9px] rounded-full bg-[#12FF80]" />

              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="text-[#12FF80] text-2xl md:text-3xl font-medium shrink-0 md:w-[80px]">
                  {milestone.year}
                </div>
                <div className={index < milestones.length - 1 ? "border-b border-[#1a1a1a1a] pb-8 md:border-0 md:pb-0" : ""}>
                  <div className="text-[#1A1A1A] text-lg md:text-xl leading-[130%] mt-1 md:mt-0">
                    {milestone.title}
                  </div>
                  <div className="text-[#1a1a1a99] text-base leading-[150%] mt-1 font-light max-w-[600px]">
                    {milestone.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
