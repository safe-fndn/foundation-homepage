import React from "react";
import SectionTag from "../ui/SectionTag";

type Initiative = {
  title: string;
  period: string;
  status: "concluded" | "paused" | "ongoing";
  description: string;
  stats: string | null;
  links: { label: string; href: string }[];
};

const initiatives: Initiative[] = [
  {
    title: "SafeDAO Grants Program — Wave 1",
    period: "Concluded (Aug 2023 – Jan 2024)",
    status: "concluded",
    description:
      "The first wave of the SafeDAO Grants Program funded 21 teams across four categories: Build, Growth, Research, and Govern. From 120 applications, the Grants Council selected projects ranging from smart account SDKs to wallet recovery infrastructure.",
    stats: "120 applications · 21 grants awarded · ~$500K deployed",
    links: [
      {
        label: "Read the Wave 1 Roundup",
        href: "https://safe.mirror.xyz/3pAcJAQsWVvWOlZglSaa3LwnlDOyvr876wXWaSBA_Dc",
      },
    ],
  },
  {
    title: "SafeDAO OBRA",
    period: "Temporarily paused",
    status: "paused",
    description:
      "OBRA introduced an outcomes-based funding model for the Safe ecosystem. Rather than funding proposals upfront, OBRA allocated resources — approximately $1.3M in stablecoins — to teams based on measurable outcomes aligned with SafeDAO's strategic priorities.",
    stats: "~$1.3M allocated · Outcomes-based model · Governed by SafeDAO",
    links: [
      {
        label: "Learn more on the SafeDAO Forum",
        href: "https://forum.safe.global/t/sep-8-outcomes-based-resource-allocation-framework-obra/4376",
      },
    ],
  },
  {
    title: "Bug Bounty Payouts",
    period: "Ongoing",
    status: "ongoing",
    description:
      "Since launch, Safe's bug bounty program has paid out rewards to security researchers who identified vulnerabilities in Safe smart contracts. The program has been a critical part of Safe's security posture and continues today.",
    stats: "Up to $1M up for grabs · 6 bounties worth $41,500 paid out",
    links: [
      {
        label: "Bug Bounty Program",
        href: "https://docs.safefoundation.org/security/bug-bounty?utm_source=foundation-homepage",
      },
      {
        label: "Past Bounties",
        href: "https://docs.safefoundation.org/security/past-bounties?utm_source=foundation-homepage",
      },
    ],
  },
  {
    title: "Hackathons",
    period: "Ongoing",
    status: "ongoing",
    description:
      "The Foundation sponsors prizes and mentorship at major Ethereum hackathons including ETHGlobal events, and runs its own online hackathons to encourage developers to build on Safe smart accounts. Hackathons have helped onboard new builders and led to several projects that later received full grants.",
    stats: "100+ winner teams · $250K prizes distributed",
    links: [
      {
        label: "March for Account Abstraction",
        href: "https://dorahacks.io/hackathon/safe/detail",
      },
      {
        label: "Safe Agentathon",
        href: "https://safe-agents.devfolio.co/",
      },
    ],
  },
  {
    title: "Safe Gas Station Program",
    period: "Concluded",
    status: "concluded",
    description:
      "The Foundation funded the development of the Ethereum Gas Station Network, an open protocol enabling gasless meta-transactions. GSN lets users interact with dApps without holding ETH for gas, removing a major onboarding barrier.",
    stats: "$250K gas credits available",
    links: [
      {
        label: "Read the blog post",
        href: "https://safefoundation.org/blog/making-every-app-gasless-launching-the-safe-core-multi-chain-gas-station",
      },
    ],
  },
  {
    title: "Other Ecosystem Funding",
    period: "Ongoing",
    status: "ongoing",
    description:
      "Beyond formal programs, the Foundation has provided ad-hoc funding for ecosystem needs including developer tooling, audit grants, documentation efforts, and community initiatives.",
    stats: null,
    links: [],
  },
];

export default function PastInitiatives() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="All Initiatives" />
      <div className="text-[#1a1a1a99] text-xl max-w-[800px] mt-4 mb-[60px] leading-[150%]">
        Since its founding, the Safe Ecosystem Foundation — alongside SafeDAO —
        has supported the ecosystem through a variety of funding mechanisms.
        These initiatives demonstrate the breadth of our commitment to ecosystem
        growth.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="bg-[#12ff800f] rounded-[16px] p-8 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 pb-2">
              <div className="text-[#1A1A1A] text-xl font-medium">
                {initiative.title}
              </div>
              {initiative.status === "concluded" && (
                <span className="shrink-0 text-xs font-medium text-[#1a1a1a66] bg-[#1a1a1a0d] rounded-full px-3 py-1">
                  Concluded
                </span>
              )}
              {initiative.status === "paused" && (
                <span className="shrink-0 text-xs font-medium text-[#b45309] bg-[#fef3c7] rounded-full px-3 py-1">
                  Paused
                </span>
              )}
              {initiative.status === "ongoing" && (
                <span className="shrink-0 text-xs font-medium text-[#166534] bg-[#dcfce7] rounded-full px-3 py-1">
                  Ongoing
                </span>
              )}
            </div>
            <div className="text-[#1a1a1a66] text-sm pb-4">
              {initiative.period}
            </div>
            <div className="text-[#1a1a1a99] text-base leading-[150%] font-light pb-4 flex-1">
              {initiative.description}
            </div>
            {initiative.stats && (
              <div className="text-[#1A1A1A] text-sm font-medium pb-4">
                {initiative.stats}
              </div>
            )}
            {initiative.links.length > 0 && (
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {initiative.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A1A1A] text-sm font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
