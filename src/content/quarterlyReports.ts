// --- Shared Types ---
export interface MetricWithChange {
  label: string;
  value: string;
  change?: string;
  changeDirection?: "up" | "down" | "neutral";
}

export type OverviewMetric = MetricWithChange;
export type HeadlineMetric = MetricWithChange;

export interface OverviewHighlight {
  title: string;
  description: string;
  tag: string;
}

// --- Full Report Types ---

export interface Milestone {
  title: string;
  description?: string;
}

export interface RevenueStream {
  name: string;
  amount: string;
  percentage?: string;
  qoqChange?: string;
}

export interface OrgUpdate {
  team: string;
  highlights: string[];
}

export interface ReportSectionDef {
  id: string;
  title: string;
}

// --- Main Report Type ---
export interface QuarterlyReport {
  slug: string;
  quarter: string;
  year: number;
  quarterNumber: number;
  publishDate: string;
  status: "published" | "draft";

  overview: {
    headlineMetrics: OverviewMetric[];
    highlights: OverviewHighlight[];
  };

  report: {
    openingLetter: string[];
    signatory: string;
    headlineMetrics: HeadlineMetric[];
    milestones: Milestone[];

    protocolMetrics: {
      tvl: string;
      tvlBreakdown: { label: string; value: string }[];
      tvp: string;
      monthlyActiveSafes: string;
      transactions: string;
      totalAccounts: string;
      newAccounts: string;
      deepDiveTitle?: string;
      deepDiveContent?: string[];
    };

    revenue: {
      total: string;
      annualizedRunRate: string;
      streams: RevenueStream[];
      narrative?: string[];
      treasurySummary?: string[];
    };

    orgUpdates: OrgUpdate[];

    prHighlights: {
      mediaMentions: { title: string; outlet?: string; href?: string }[];
      partnerships: string[];
    };

    lookingAhead: {
      priorities: string[];
    };

    disclaimer: string;
  };
}

export const reportSections: ReportSectionDef[] = [
  { id: "quarter-in-focus", title: "Quarter in Focus" },
  { id: "protocol-metrics", title: "Protocol Metrics" },
  { id: "revenue-performance", title: "Revenue & Financial Performance" },
  { id: "organizational-updates", title: "Organizational Updates" },
  { id: "pr-highlights", title: "PR & Ecosystem Highlights" },
  { id: "looking-ahead", title: "Looking Ahead" },
  { id: "disclaimer", title: "Disclaimer" },
];

export const quarterlyReports: QuarterlyReport[] = [
  {
    slug: "q1-2026",
    quarter: "Q1 2026",
    year: 2026,
    quarterNumber: 1,
    publishDate: "2026-04-25",
    status: "published",

    overview: {
      headlineMetrics: [
        {
          label: "Total Value Locked",
          value: "$100B+",
          change: "+15% QoQ",
          changeDirection: "up",
        },
        {
          label: "Volume Processed",
          value: "$1.2T",
          change: "+8% QoQ",
          changeDirection: "up",
        },
        {
          label: "Monthly Active Safes",
          value: "1.2M",
          change: "+22% QoQ",
          changeDirection: "up",
        },
        {
          label: "Revenue",
          value: "$2.4M",
          change: "+18% QoQ",
          changeDirection: "up",
        },
        {
          label: "Total Accounts",
          value: "55M+",
          change: "+10% QoQ",
          changeDirection: "up",
        },
      ],
      highlights: [
        {
          tag: "Launch",
          title: "Safenet Mainnet Launch",
          description:
            "Safe's transaction infrastructure layer went live, enabling cross-chain execution and gas abstraction for the entire ecosystem.",
        },
        {
          tag: "Milestone",
          title: "$100B TVL Crossed",
          description:
            "Total Value Locked in Safe accounts surpassed $100 billion for the first time, driven by institutional adoption.",
        },
        {
          tag: "Expansion",
          title: "300+ Networks Supported",
          description:
            "Safe smart accounts are now deployed across more than 300 EVM-compatible networks, with Base and Arbitrum leading L2 growth.",
        },
        {
          tag: "Product",
          title: "Safe{Wallet} Mobile v2",
          description:
            "Redesigned mobile experience with native Safenet features, biometric signing, and streamlined multi-sig approvals.",
        },
      ],
    },

    report: {
      openingLetter: [
        "Q1 2026 marked a defining quarter for the Safe ecosystem. With the mainnet launch of Safenet, Safe has taken its most significant architectural step since the original multi-sig contract — evolving from a smart account standard into a full transaction infrastructure layer.",
        "Across every metric that matters — value secured, active usage, revenue, and ecosystem breadth — Safe continued to accelerate. Total Value Locked crossed $100 billion for the first time, driven by institutional adoption and the growing recognition that self-custody infrastructure is not optional but essential.",
        "This report is the first in a new quarterly series. Our goal is simple: to give the community, token holders, and the broader public a clear, honest view of where Safe stands and where it is going.",
      ],
      signatory: "Lukas Schor, President of the Foundation Council",

      headlineMetrics: [
        {
          label: "Total Value Locked",
          value: "$100B+",
          change: "+15% QoQ",
          changeDirection: "up",
        },
        {
          label: "Total Volume Processed",
          value: "$1.2T",
          change: "+8% QoQ",
          changeDirection: "up",
        },
        {
          label: "Monthly Active Safes (avg)",
          value: "1.2M",
          change: "+22% QoQ",
          changeDirection: "up",
        },
        {
          label: "Revenue Run Rate",
          value: "$9.6M",
          change: "+18% QoQ",
          changeDirection: "up",
        },
        {
          label: "Total Safe Accounts",
          value: "55M+",
          change: "+10% QoQ",
          changeDirection: "up",
        },
      ],

      milestones: [
        {
          title: "Safenet mainnet launch",
          description:
            "Safe's transaction infrastructure layer went live on mainnet, enabling cross-chain execution and gas abstraction.",
        },
        {
          title: "Crossed $100B TVL",
          description:
            "Total Value Locked in Safe accounts surpassed $100 billion for the first time.",
        },
        {
          title: "300+ networks supported",
          description:
            "Safe smart accounts are now deployed across more than 300 EVM-compatible networks.",
        },
        {
          title: "Quarterly reporting launched",
          description:
            "Inaugural edition of the Safe Quarterly Report, establishing public-company-grade transparency.",
        },
      ],

      protocolMetrics: {
        tvl: "$100B+",
        tvlBreakdown: [
          { label: "ERC-20 Tokens (excl. stablecoins)", value: "$52B" },
          { label: "Stablecoins", value: "$28B" },
          { label: "Native Tokens (ETH, etc.)", value: "$20B" },
        ],
        tvp: "$1.2T",
        monthlyActiveSafes: "1.2M",
        transactions: "45M",
        totalAccounts: "55M+",
        newAccounts: "5.2M",
        deepDiveTitle: "TVL by Chain & Vertical",
        deepDiveContent: [
          "Ethereum mainnet continues to account for the majority of TVL at approximately 65%, but L2 chains collectively grew their share from 18% to 24% quarter-over-quarter. Base and Arbitrum led L2 growth.",
          "By vertical, lending protocols represent the largest share of Safe-secured value (32%), followed by liquid staking (22%) and treasury management (18%). The fastest-growing vertical was RWA tokenization, up 45% QoQ from a smaller base.",
        ],
      },

      revenue: {
        total: "$2.4M",
        annualizedRunRate: "$9.6M",
        streams: [
          {
            name: "Network Revenue (Safe Labs)",
            amount: "$1.1M",
            percentage: "46%",
            qoqChange: "+22%",
          },
          {
            name: "License Fees (Foundation)",
            amount: "$0.8M",
            percentage: "33%",
            qoqChange: "+12%",
          },
          {
            name: "Treasury Management (Hecate)",
            amount: "$0.3M",
            percentage: "13%",
            qoqChange: "+5%",
          },
          {
            name: "Other Revenue",
            amount: "$0.2M",
            percentage: "8%",
            qoqChange: "+30%",
          },
        ],
        narrative: [
          "Total quarterly revenue reached $2.4M, a new record driven primarily by network revenue growth as Safe{Wallet} swap and bridge volumes increased significantly following Safenet integration.",
          "License fees continued their steady growth trajectory, reflecting increasing adoption of Safe smart accounts by third-party platforms and protocols.",
        ],
        treasurySummary: [
          "The Foundation maintains a diversified treasury position across stablecoins, ETH, SAFE tokens, and DeFi yield strategies managed by Hecate.",
          "Stablecoin reserves provide over 24 months of operational runway at current burn rates.",
        ],
      },

      orgUpdates: [
        {
          team: "Safe Labs",
          highlights: [
            "Launched native bridging within Safe{Wallet}, reducing friction for cross-chain operations",
            "Integrated Safenet transaction infrastructure into the wallet experience",
            "Expanded enterprise pipeline with three new institutional custody partnerships",
            "Safe{Wallet} monthly active users grew 28% QoQ",
          ],
        },
        {
          team: "Safe Research",
          highlights: [
            "Safenet mainnet launch — the culmination of 18 months of research and development",
            "Published research on cross-chain account abstraction standards",
            "Completed security audit of Safenet core contracts with two independent auditors",
            "Began formal verification process for Safenet state transition logic",
          ],
        },
        {
          team: "Safe Ventures",
          highlights: [
            "Distributed $1.5M in ecosystem grants across 28 projects",
            "Completed two strategic token swaps with ecosystem partners",
            "Launched Grants Program Wave 2 with expanded focus on Safenet-native applications",
            "Gas Station Program extended to cover 15 additional networks",
          ],
        },
      ],

      prHighlights: {
        mediaMentions: [
          {
            title: "Safe crosses $100B in assets secured",
            outlet: "The Block",
          },
          {
            title: "Safenet launch positions Safe as infrastructure layer",
            outlet: "Bankless",
          },
          {
            title: "The rise of smart account infrastructure",
            outlet: "CoinDesk",
          },
        ],
        partnerships: [
          "Strategic integration with major L2 network for native Safe deployment",
          "Partnership with institutional custody provider for Safe-based infrastructure",
          "Collaboration with RWA platform for tokenized asset management",
        ],
      },

      lookingAhead: {
        priorities: [
          "Scale Safenet adoption: target 50+ applications building on Safenet infrastructure by end of Q2",
          "Launch Safe{Wallet} mobile v2 with Safenet-native features",
          "Expand to 350+ networks with focus on emerging L2 ecosystems",
          "Grow monthly active Safes to 1.5M by end of Q2",
          "Achieve $3M quarterly revenue target",
        ],
      },

      disclaimer:
        "This report is published by the Safe Ecosystem Foundation for informational purposes only. It does not constitute investment advice, a solicitation, or an offer to buy or sell any securities or financial instruments. The information contained herein is based on sources believed to be reliable but is not guaranteed as to its accuracy or completeness. Forward-looking statements are subject to risks and uncertainties that could cause actual results to differ materially. Past performance is not indicative of future results. The SAFE token is a governance token and should not be considered an investment. This report complements, but does not replace, the Foundation's confidential annual reporting to the Swiss Federal Foundation Supervisory Authority (ESA).",
    },
  },
];

export const getReportBySlug = (slug: string) =>
  quarterlyReports.find((r) => r.slug === slug);

export const getPublishedReports = () =>
  quarterlyReports.filter((r) => r.status === "published");
