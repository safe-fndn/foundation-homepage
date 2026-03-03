import React from "react";
import SectionTag from "../ui/SectionTag";

const strategicPillars = [
  {
    title: "Foster a Vibrant Ecosystem",
    desc: "Supporting projects and teams that build on Safe infrastructure to expand the ecosystem.",
  },
  {
    title: "Resilience Through Decentralization",
    desc: "Advancing technical, economic, and organizational decentralization of critical infrastructure.",
  },
  {
    title: "Align Value Creation",
    desc: "Establishing mechanisms that connect ecosystem growth to the utility of the SAFE token.",
  },
];

const foundationPurpose = [
  {
    title: "Technology Development",
    desc: "Managing and advancing Safe technology to ensure security, reliability, and innovation.",
  },
  {
    title: "Ecosystem Applications",
    desc: "Promoting technologies and applications built on Safe infrastructure.",
  },
  {
    title: "Ecosystem Growth",
    desc: "Developing and fostering the broader Safe ecosystem and its community.",
  },
  {
    title: "Education & Training",
    desc: "Providing training and education in the field of Safe technology and secure digital asset management.",
  },
  {
    title: "Public Awareness",
    desc: "Promoting public understanding of secure digital asset management and open-source infrastructure.",
  },
  {
    title: "Asset Stewardship",
    desc: "Responsibly holding and managing assets in service of these purposes.",
  },
];

export default function MissionPurpose() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Mission & Purpose" />

      <div className="mt-[40px] md:mt-[60px]">
        <div className="text-[#1A1A1A] text-2xl md:text-4xl leading-[120%] max-w-[800px]">
          Mission
        </div>
        <blockquote className="mt-4 md:mt-6 border-l-4 border-[#12FF80] pl-5 md:pl-8">
          <p className="text-[#1A1A1A] text-xl md:text-2xl leading-[140%] font-light italic">
            To establish smart accounts as the default means for managing
            digital assets — through open-source technology, ecosystem support,
            and community governance.
          </p>
        </blockquote>
        <p className="text-[#1a1a1a99] text-base md:text-lg mt-3 font-light">
          Adopted by the SafeDAO community through SEP-4 (SafeDAO Constitution,
          2023).
        </p>
      </div>

      <div className="mt-[40px] md:mt-[60px]">
        <div className="text-[#1A1A1A] text-xl md:text-2xl leading-[120%]">
          Strategic Pillars
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          {strategicPillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-[#1a1a1a1a] pt-5">
              <div className="text-[#1A1A1A] text-lg md:text-xl leading-[130%]">
                {pillar.title}
              </div>
              <div className="text-[#1a1a1a99] text-base leading-[150%] mt-2 font-light">
                {pillar.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[60px] md:mt-[80px]">
        <div className="text-[#1A1A1A] text-2xl md:text-4xl leading-[120%] max-w-[800px]">
          Foundation Purpose{" "}
          <span className="text-[#1a1a1a99] text-base md:text-lg font-light">
            (Stiftungszweck)
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-8">
          {foundationPurpose.map((item) => (
            <div
              key={item.title}
              className="bg-[#f5f5f5] rounded-lg p-5 md:p-6"
            >
              <div className="text-[#1A1A1A] text-lg md:text-xl leading-[130%]">
                {item.title}
              </div>
              <div className="text-[#1a1a1a99] text-base leading-[150%] mt-2 font-light">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
