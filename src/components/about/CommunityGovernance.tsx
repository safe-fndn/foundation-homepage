import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";
import {
  SAFEDAO_FORUM_LINK,
  SNAPSHOT_LINK,
  SEP22_LINK,
} from "@/constants";

const features = [
  {
    title: "Community-Adopted Constitution",
    desc: "The SafeDAO Constitution (SEP-4) was adopted by the community in 2023, defining the mission, goals, and principles that guide the Foundation.",
  },
  {
    title: "OBRA",
    desc: "The Onchain Budget & Resource Allocation (OBRA) framework enables the DAO to allocate budgets and resources to initiatives through transparent, onchain governance processes.",
  },
  {
    title: "DAO Commissions",
    desc: "DAO commissions can be entrusted with specific tasks and budgets, enabling community-driven initiatives within a governed framework.",
  },
  {
    title: "On-Chain Governance",
    desc: "Governance decisions via Snapshot can be executed onchain without active support of the Foundation, as demonstrated by the SAFE token transferability proposal.",
    href: SEP22_LINK,
    linkText: "View SEP-22",
  },
];

export default function CommunityGovernance() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Community Governance" />
      <p className="text-[#1a1a1a99] text-base md:text-lg mt-3 font-light max-w-[700px]">
        The SafeDAO provides SAFE token holders with formal participation rights
        in the governance of the Foundation, ensuring community voice in
        strategic decisions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[40px] md:mt-[60px]">
        {features.map((item) => (
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
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a1a1a99] text-sm mt-2 font-light underline hover:text-[#1A1A1A] inline-block"
              >
                {item.linkText}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        <a
          href={SAFEDAO_FORUM_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">SafeDAO Forum</Button>
        </a>
        <a
          href={SNAPSHOT_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">Snapshot Governance</Button>
        </a>
      </div>
    </div>
  );
}
