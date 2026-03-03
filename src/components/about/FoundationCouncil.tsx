import React from "react";
import SectionTag from "../ui/SectionTag";

const councilMembers = [
  {
    name: "Lukas Schor",
    role: "President of the Foundation Council",
    since: "Member since founding (2022)",
    description:
      "Founder of the Safe Ecosystem Foundation and leader of its strategic direction since inception. Lukas spearheaded the development of the Safe ecosystem from its Gnosis spin-off to an independent foundation. Under his leadership, Safe reached significant milestones including over $60B in total value secured and market leadership in smart accounts.",
    expertise: "Ecosystem Growth, Operations",
  },
  {
    name: "Stefan George",
    role: "Vice President of the Foundation Council",
    since: "Member since founding (2022)",
    description:
      "Co-founder of Gnosis (2015) and author of the original multi-signature wallet code (2017) that evolved into Safe. Stefan brings strategic vision and a long-term perspective in digital asset security, self-custody, and Ethereum infrastructure. He is widely recognized in the early Ethereum community, DAOs, and infrastructure projects.",
    expertise: "Business Strategy, Technical",
  },
  {
    name: "Richard Meissner",
    role: "Member of the Foundation Council",
    since: "Member since February 2026",
    description:
      "Co-founder of Safe and author of the original Safe smart contracts. Richard is the most experienced maintainer of the smart contract codebase and leads the Safe Research initiative. He brings comprehensive insight spanning contracts, product, and infrastructure, along with strong ties to the Ethereum security community and audit networks.",
    expertise: "Technical, Protocol",
  },
];

export default function FoundationCouncil() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Foundation Council" />
      <p className="text-[#1a1a1a99] text-base md:text-lg mt-3 font-light max-w-[700px]">
        The Foundation Council (Stiftungsrat) is the supreme governing body of
        the Safe Ecosystem Foundation, responsible for strategic oversight and
        ensuring adherence to the foundation purpose.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[40px] md:mt-[60px]">
        {councilMembers.map((member) => (
          <div key={member.name}>
            <div className="text-[#1A1A1A] text-xl md:text-2xl leading-[120%]">
              {member.name}
            </div>
            <div className="text-[#12FF80] text-base mt-1 font-medium">
              {member.role}
            </div>
            <p className="text-[#1a1a1a99] text-base leading-[150%] mt-3 font-light">
              {member.description}
            </p>
            <div className="text-[#1a1a1a66] text-sm mt-2 font-light">
              Expertise: {member.expertise}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
