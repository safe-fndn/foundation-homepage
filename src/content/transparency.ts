export interface AnnualSummary {
  id: string;
  year: string;
  highlights: string[];
  ecosystemFunding: string[];
  daoActivity: string[];
}

export const annualSummaries: AnnualSummary[] = [
  {
    id: "2024",
    year: "2024",
    highlights: [
      "Safe{Con} Berlin — second edition of the ecosystem conference",
      "SAFE Token Transferability Event (April 2024)",
      "Expansion to 12+ blockchains",
      "Launch of Safenet",
      "Strategic partnerships and integrations",
    ],
    ecosystemFunding: [
      "Safe Grants Program Wave 1 and Gas Station Program",
      "All grant recipients underwent KYC/KYB screening (Synaps SAS, Paris)",
      "Milestone-based monitoring for all grants",
      "Hackathon sponsoring and community initiatives",
    ],
    daoActivity: [
      "Governance process: Forum discussion → Snapshot vote → Implementation",
      "SafeDAO Constitution (SEP-4) as governing framework",
      "Multiple SEPs (Safe Enhancement Proposals) voted on by token holders via Snapshot",
      "Resource Allocation proposals (OBRA) for ecosystem-wide budget planning",
      "Active delegate programme with 50+ registered delegates",
      "Governance forum averaging 200+ monthly active participants",
      "SafeDAO operational budget approved via community vote",
      "Cross-functional governance working groups established (Treasury, Grants, Strategy)",
    ],
  },
  {
    id: "2023",
    year: "2023",
    highlights: [
      "First Safe{Con} Berlin — inaugural ecosystem conference",
      "Continued growth in Safe Smart Account adoption",
      "Ecosystem development and partnership expansion",
      "Community governance framework development",
    ],
    ecosystemFunding: [
      "Initial ecosystem support programmes launched",
      "Community grant initiatives established",
    ],
    daoActivity: [
      "SafeDAO governance processes formalised with SEP framework",
      "Community proposals and voting mechanisms established via Snapshot",
      "Delegate programme launched, enabling token holder representation",
      "Governance forum established as primary discussion venue",
      "First resource allocation proposals defining DAO spending priorities",
      "Foundation–DAO relationship framework clarified through community discussion",
    ],
  },
  {
    id: "2022",
    year: "2022",
    highlights: [
      "Establishment of the Safe Ecosystem Foundation",
      "Initial organisational structures and governance framework",
      "Foundation of the Safe token ecosystem",
    ],
    ecosystemFunding: [],
    daoActivity: [
      "SafeDAO framework initiated with SAFE token claim launch",
      "Initial governance infrastructure set up (Snapshot space, forum)",
      "First community discussions on governance structure and token utility",
      "Foundational SEPs proposed to define governance processes",
    ],
  },
];
