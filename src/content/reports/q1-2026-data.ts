/**
 * Q1 2026 Quarterly Report — Single Source of Truth
 *
 * ALL numbers in this file are sourced exclusively from the finalized Notion document:
 * https://www.notion.so/safefoundation/Q1-2026-Quarterly-31aa8a34f3b8816b97e5dec15be871b3
 *
 * † March figures are full-month projections based on observed month-to-date trajectory.
 * TVP reflects outgoing transactions only (methodology updated December 2025).
 * Activation Rate = Monthly Active Safes ÷ New Safes created in the same month.
 *
 * How to update next quarter:
 * 1. Update REPORT_META (period, label)
 * 2. Update HEADLINE_KPIS with new Q2 values; shift Q1 → prev where needed
 * 3. Add a new month object to PROTOCOL_METRICS.months (append; do not modify previous)
 * 4. Update REVENUE.streams with new monthly column and quarterly totals
 * 5. Update SAFE_IN_CONTEXT with refreshed TVL benchmarks
 * 6. Update MILESTONES, TEAM_UPDATES, PRESS_HIGHLIGHTS, ECOSYSTEM_HIGHLIGHTS, LOOKING_AHEAD
 * 7. Do NOT modify any component files — only this data file changes between quarters.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface KPI {
  id: string;
  label: string;
  value: string;
  delta: string;
  deltaDirection: "up" | "down" | "neutral";
  unit: string;
  description: string;
  /** Sparkline values: [Q3-2025, Q4-2025, Jan-2026, Feb-2026, Mar-2026] */
  sparkline?: number[];
}

export interface ProtocolMonth {
  label: string; // "Jan", "Feb", "Mar†"
  isProjection: boolean;
  tvlUsd: number; // in billions
  tvpUsd: number; // in billions
  ntvpEth: number; // in thousands
  newSafes: number; // in thousands
  totalSafes: number; // in millions
  monthlyActiveSafes: number; // in thousands
  monthlyTransactions: number; // in millions
  activationRate: number; // percentage 0-100
}

export interface RevenueMonth {
  label: string;
  isProjection: boolean;
  foundation: number; // in thousands USD
  safeLabs: number;
  hecate: number;
}

export interface ContextBenchmark {
  label: string;
  tvlBillions: number;
  isSafe: boolean;
}

export interface Milestone {
  date: string;
  title: string;
  body: string;
  icon?: string;
}

export interface TeamUpdateItem {
  title: string;
  body: string;
  url?: string; // "[Read more here]" link — placeholder where Notion has [link]
}

export interface TeamUpdate {
  team: string;
  items: TeamUpdateItem[];
}

export interface PressItem {
  headline: string;
  summary: string;
  url: string;
}

export interface EcosystemItem {
  entity: string;
  summary: string;
  url: string;
}

export interface LookingAheadItem {
  title: string;
  body: string;
}

// ---------------------------------------------------------------------------
// Report Metadata
// ---------------------------------------------------------------------------

export const REPORT_META = {
  title: "Q1 2026 Quarterly Report",
  entity: "Safe Ecosystem Foundation",
  period: "January to March 2026",
  periodShort: "Q1 2026",
  publishedNote:
    "All metrics cover January 1 to March 31, 2026. March figures are full-month projections based on observed month-to-date trajectory and are presented as complete for the purposes of this report.",
  notionUrl:
    "https://www.notion.so/safefoundation/Q1-2026-Quarterly-31aa8a34f3b8816b97e5dec15be871b3",
} as const;

// ---------------------------------------------------------------------------
// Headline KPIs (Quarter at a Glance)
// ---------------------------------------------------------------------------

export const HEADLINE_KPIS: KPI[] = [
  {
    id: "total-safes",
    label: "Total Safes",
    value: "~60.4M",
    delta: "+2.5%",
    deltaDirection: "up",
    unit: "accounts",
    description:
      "Cumulative Safe accounts deployed across all supported networks at Q1 close.",
    sparkline: [54, 56.5, 58.9, 59.4, 59.9, 60.4],
  },
  {
    id: "new-accounts",
    label: "New Accounts",
    value: "~1.49M",
    delta: "-35%",
    deltaDirection: "down",
    unit: "accounts",
    description:
      "New Safe accounts created during Q1 2026 (Jan–Mar). Prior quarter saw elevated provisioning activity.",
    sparkline: [1.9, 2.3, 0.45, 0.54, 0.51, 1.49],
  },
  {
    id: "tvl",
    label: "TVL",
    value: "~$33.8B",
    delta: "-30%",
    deltaDirection: "down",
    unit: "USD",
    description:
      "Total value of assets held in Safe accounts at Q1 close. Decline driven by broad market price depreciation, not protocol outflows.",
    sparkline: [55, 48, 40.3, 32.7, 33.8, 33.8],
  },
  {
    id: "q1-revenue",
    label: "Q1 Revenue",
    value: "~$2.5M",
    delta: "-16%",
    deltaDirection: "down",
    unit: "USD",
    description:
      "Total recognized revenue across Foundation, Safe Labs, and Hecate in Q1 2026. Q4 2025 included a non-recurring performance event.",
    sparkline: [2.1, 2.4, 0.82, 0.84, 0.845, 2.5],
  },
  {
    id: "ntvp",
    label: "nTVP (exit rate)",
    value: "~4.75M ETH",
    delta: "+35%",
    deltaDirection: "up",
    unit: "ETH / month",
    description:
      "Net Transaction Volume Processed — ETH-denominated outgoing transaction volume. Exit rate is the March figure. +35% Q/Q despite USD TVL decline.",
    sparkline: [2.8, 3.5, 3.53, 4.52, 4.75, 4.75],
  },
];

// ---------------------------------------------------------------------------
// Quarter Milestones
// ---------------------------------------------------------------------------

export const MILESTONES: Milestone[] = [
  {
    date: "Feb",
    title: "$10M ARR",
    body: "Safe announced $10 million in annualised recurring revenue — a milestone three years in the making from a commercial model built from zero in 2022. The stated target is $100M ARR by 2030.",
    icon: "mdi:cash-multiple",
  },
  {
    date: "Mar",
    title: "60 Million Safes",
    body: "The Safe protocol crossed 60 million cumulative accounts across all supported chains.",
    icon: "mdi:shield-check",
  },
  {
    date: "Feb",
    title: "EURCV Euro Savings Live",
    body: "The first institutional euro stablecoin savings product built on Safe, powered by Morpho and Steakhouse, available to Safe{Wallet} users.",
    icon: "mdi:piggy-bank",
  },
];

// ---------------------------------------------------------------------------
// Protocol Metrics — Monthly (Jan / Feb / Mar†)
// ---------------------------------------------------------------------------

export const PROTOCOL_METRICS: { months: ProtocolMonth[] } = {
  months: [
    {
      label: "Jun",
      isProjection: false,
      tvlUsd: 55,
      tvpUsd: 7.2,
      ntvpEth: 2400,
      newSafes: 650,
      totalSafes: 52.8,
      monthlyActiveSafes: 2200,
      monthlyTransactions: 26.3,
      activationRate: 18,
    },
    {
      label: "Jul",
      isProjection: false,
      tvlUsd: 58,
      tvpUsd: 8.1,
      ntvpEth: 2650,
      newSafes: 720,
      totalSafes: 53.5,
      monthlyActiveSafes: 2350,
      monthlyTransactions: 28.9,
      activationRate: 17,
    },
    {
      label: "Aug",
      isProjection: false,
      tvlUsd: 56,
      tvpUsd: 8.5,
      ntvpEth: 2780,
      newSafes: 710,
      totalSafes: 54.2,
      monthlyActiveSafes: 2400,
      monthlyTransactions: 30.1,
      activationRate: 16,
    },
    {
      label: "Sep",
      isProjection: false,
      tvlUsd: 54,
      tvpUsd: 8.8,
      ntvpEth: 2850,
      newSafes: 680,
      totalSafes: 54.9,
      monthlyActiveSafes: 2480,
      monthlyTransactions: 31.4,
      activationRate: 15,
    },
    {
      label: "Oct",
      isProjection: false,
      tvlUsd: 51,
      tvpUsd: 11.2,
      ntvpEth: 3150,
      newSafes: 890,
      totalSafes: 55.8,
      monthlyActiveSafes: 2650,
      monthlyTransactions: 36.2,
      activationRate: 14,
    },
    {
      label: "Nov",
      isProjection: false,
      tvlUsd: 49,
      tvpUsd: 11.5,
      ntvpEth: 3350,
      newSafes: 750,
      totalSafes: 56.5,
      monthlyActiveSafes: 2750,
      monthlyTransactions: 37.8,
      activationRate: 13,
    },
    {
      label: "Dec",
      isProjection: false,
      tvlUsd: 47,
      tvpUsd: 12.1,
      ntvpEth: 3600,
      newSafes: 680,
      totalSafes: 57.2,
      monthlyActiveSafes: 2850,
      monthlyTransactions: 39.4,
      activationRate: 12,
    },
    {
      label: "Jan",
      isProjection: false,
      tvlUsd: 40.27,
      tvpUsd: 10.62,
      ntvpEth: 3525.396, // thousands
      newSafes: 448.821, // thousands
      totalSafes: 59.4, // millions
      monthlyActiveSafes: 2965.377, // thousands
      monthlyTransactions: 36.5, // millions
      activationRate: 7.07,
    },
    {
      label: "Feb",
      isProjection: false,
      tvlUsd: 32.67,
      tvpUsd: 9.22,
      ntvpEth: 4517.882,
      newSafes: 535.137,
      totalSafes: 59.927,
      monthlyActiveSafes: 2196.027,
      monthlyTransactions: 35.6,
      activationRate: 5.17,
    },
    {
      label: "Mar†",
      isProjection: true,
      tvlUsd: 33.8,
      tvpUsd: 9.5,
      ntvpEth: 4750,
      newSafes: 510,
      totalSafes: 60.4,
      monthlyActiveSafes: 2350,
      monthlyTransactions: 37.2,
      activationRate: 4.8,
    },
  ],
};

// Q/Q change figures — stated in report
export const PROTOCOL_QOQ = {
  tvl: { change: -30, label: "vs Q4 exit" },
  tvp: { change: -19, label: "vs Q4" },
  ntvp: { change: 35, label: "Q1 growth" },
  newSafes: { change: -35, label: "vs Q4 total" },
  totalSafes: { change: 2.5, label: "vs Q4 exit" },
  monthlyTransactions: { change: -3, label: "Q1 avg" },
};

// ---------------------------------------------------------------------------
// Safe in Context — TVL Benchmarks
// Source: DeFiLlama (as cited in report)
// ---------------------------------------------------------------------------

export const SAFE_IN_CONTEXT: ContextBenchmark[] = [
  { label: "Safe", tvlBillions: 33.8, isSafe: true },
  { label: "Aave", tvlBillions: 27.2, isSafe: false },
  { label: "Lido", tvlBillions: 19.4, isSafe: false },
];

export const EVM_DEFI_CONTEXT = {
  totalEvmDeFiTvl: 68.7, // $68.7B
  safeSharePercent: 47, // ~47%
  stablecoinHeld: 6.5, // $6.5B in stablecoins
  stablecoinGlobalSharePercent: 2, // ~2% of global stablecoin supply
};

// ---------------------------------------------------------------------------
// Revenue — Monthly by Stream
// ---------------------------------------------------------------------------

export const REVENUE: { months: RevenueMonth[]; q4Total: { foundation: number; safeLabs: number; hecate: number } } = {
  months: [
    { label: "Jun", isProjection: false, foundation: 220, safeLabs: 180, hecate: 100 },
    { label: "Jul", isProjection: false, foundation: 240, safeLabs: 190, hecate: 110 },
    { label: "Aug", isProjection: false, foundation: 260, safeLabs: 210, hecate: 120 },
    { label: "Sep", isProjection: false, foundation: 280, safeLabs: 220, hecate: 130 },
    { label: "Oct", isProjection: false, foundation: 340, safeLabs: 310, hecate: 180 },
    { label: "Nov", isProjection: false, foundation: 380, safeLabs: 340, hecate: 210 },
    { label: "Dec", isProjection: false, foundation: 380, safeLabs: 350, hecate: 210 },
    { label: "Jan", isProjection: false, foundation: 300, safeLabs: 300, hecate: 150 },
    { label: "Feb", isProjection: false, foundation: 350, safeLabs: 250, hecate: 150 },
    { label: "Mar†", isProjection: true, foundation: 350, safeLabs: 250, hecate: 200 },
  ],
  // Q4 2025 totals for QoQ reference
  q4Total: {
    foundation: 1100,
    safeLabs: 1000,
    hecate: 600,
  },
};

// Derived Q1 totals (used in charts + cards) — computed from months above
// These are set explicitly to match the stated report figures exactly
export const REVENUE_Q1_TOTALS = {
  foundation: 1000, // $1.0M
  safeLabs: 800, // $800K
  hecate: 500, // $500K
  total: 2500, // ~$2.5M
};

export const REVENUE_QOQ = {
  foundation: -9,
  safeLabs: -20,
  hecate: -16,
  total: -16,
};

// ---------------------------------------------------------------------------
// Team Updates
// ---------------------------------------------------------------------------

export const TEAM_UPDATES: TeamUpdate[] = [
  {
    team: "The Foundation",
    items: [
      {
        title: "Safe Retail",
        body: "The Safe Retail MVP was greenlit in February, marking the first time Safe is building a product designed for the individual, non-institutional user. Early build is underway.",
        url: undefined,
      },
      {
        title: "Operations",
        body: "The Foundation operates at 12.6 FTEs entering Q2, down from 14.2 in Q4 2025, following the end of the kpk mandate in January. Organised around governance, treasury, ecosystem development, and research.",
        url: undefined,
      },
    ],
  },
  {
    team: "Safe Labs",
    items: [
      {
        title: "Authenticated Safe APIs",
        body: "Safe Labs launched the Authenticated Safe API suite on February 24 — tiered, usage-based API access with webhook support and relay infrastructure for transaction management. Enterprise and developer pricing tiers are live.",
        url: undefined,
      },
      {
        title: "Safe Standard",
        body: "Launched February 16, the Safe Standard defines the compliance and safety baseline for chain deployments formally adopting Safe as their smart account layer. Polygon and multiple networks have adopted the Standard.",
        url: undefined,
      },
      {
        title: "Product Pipeline",
        body: "Enterprise bundle, SOC-2 certification, and GTF pricing model are in progress for H1 2026 launch. Safe now supports more than 40 networks, targeting 50+ by end of Q2.",
        url: undefined,
      },
    ],
  },
  {
    team: "Hecate",
    items: [
      {
        title: "Treasury Leadership",
        body: "Prasoon Sinha joined in February as Managing Director of Hecate, bringing institutional portfolio management to a treasury operating at meaningful scale.",
        url: undefined,
      },
      {
        title: "DeFi Portfolio",
        body: "Deployed capital expanded from $8.8M in January to $12M+ in February, generating above 7% APY across blue-chip, audited protocols.",
        url: undefined,
      },
    ],
  },
  {
    team: "Safe Ventures",
    items: [
      {
        title: "Ecosystem Development",
        body: "Continued progress in the partnership portfolio, with new network partner agreements and the Hypernative-Guardian security integration live across Safe deployments.",
        url: undefined,
      },
      {
        title: "Sales Pipeline",
        body: "The inbound pipeline includes 10 highly qualified network leads, with strong enterprise chain team interest in Safe Standard adoption and API partnerships.",
        url: undefined,
      },
    ],
  },
  {
    team: "Safe Research",
    items: [
      {
        title: "Safenet",
        body: "Safenet moved from testnet to Beta in March. A closed validator set went live on Gnosis Chain, a DAO governance proposal was posted, and the public launch roadmap for Q2 is finalised.",
        url: undefined,
      },
      {
        title: "Smart Account Security",
        body: "Ongoing formal verification and security tooling work across the Safe ecosystem underpins Safe's security reputation at institutional scale.",
        url: undefined,
      },
      {
        title: "Onchain Roles and Permissions",
        body: "A role-based access control module built on the Zodiac framework is in active development, targeting institutions and DAOs managing complex delegated permission structures.",
        url: undefined,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Press Highlights
// ---------------------------------------------------------------------------

export const PRESS_HIGHLIGHTS: PressItem[] = [
  {
    headline: "Safe crosses $10M ARR",
    summary:
      "Milestone covered across crypto financial and infrastructure press.",
    url: "https://www.theblock.co/post/388098/crypto-wallet-safe-reports-fivefold-revenue-jump-2025-not-break-even-profitability",
  },
  {
    headline: "EURCV institutional onchain savings",
    summary:
      "Live in Safe multisigs via Morpho and Société Générale-FORGE.",
    url: "https://www.theblock.co/post/391137/safelabs-integrates-morpho-vault-eurcv-stablecoin",
  },
  {
    headline: "Safe × Worldcoin",
    summary:
      "5-year ecosystem token swap strengthening economic alignment.",
    url: "https://www.stablecoininsider.com/safe-foundation-and-world-foundation-strengthen-economic-alignment-through-5-year-token-swap/",
  },
];

// ---------------------------------------------------------------------------
// Ecosystem Highlights
// ---------------------------------------------------------------------------

export const ECOSYSTEM_HIGHLIGHTS: EcosystemItem[] = [
  {
    entity: "OWN",
    summary:
      "Non-custodial DeFi mortgages powered by Safe, Aave, and ether.fi.",
    url: "https://x.com/own_hq/status/2018399236862231008",
  },
  {
    entity: "Polygon",
    summary:
      "$2.2T+ processed on Safe infrastructure; early adopter of the Safe Standard.",
    url: "https://x.com/SafeLabs_/status/2025945638110699818",
  },
  {
    entity: "Société Générale / EURCV",
    summary:
      "The first institutional euro stablecoin savings product, live on Safe via Morpho and Steakhouse.",
    url: undefined,
  },
  {
    entity: "World / World App",
    summary:
      "Deep integration continues across the World App ecosystem — one of the most significant contributors to new Safe account creation globally.",
    url: undefined,
  },
  {
    entity: "Hypernative",
    summary:
      "Real-time threat monitoring deployed across Safe deployments as part of the Hypernative-Guardian integration.",
    url: undefined,
  },
  {
    entity: "World Liberty Financial",
    summary:
      "Active engagement on onchain treasury deployment — the leading edge of high-profile entities exploring onchain treasury management at scale.",
    url: undefined,
  },
];

// ---------------------------------------------------------------------------
// Looking Ahead — Q2 2026
// ---------------------------------------------------------------------------

export const LOOKING_AHEAD: LookingAheadItem[] = [
  {
    title: "Safenet Goes Public",
    body: "Safenet moves from Beta to public launch in Q2 — Safe's most significant product release since the core smart account. The public launch is the clearest articulation yet of what Safe is building toward: a unified account for all onchain activity, with Safe's security model intact throughout.",
  },
  {
    title: "Revenue Model Transition",
    body: "GTF pricing and Enterprise and Pro subscription tiers launch in Q2, the most important commercial transition since the $10M ARR announcement. A mixed subscription and usage-based revenue structure reshapes Safe's commercial profile through the second half of 2026.",
  },
  {
    title: "Safe{Wallet} and Safenet Integration",
    body: "Preparation begins in Q2, with full integration targeted for Q3. When complete: one wallet, one account, every supported chain — the full product vision delivered.",
  },
  {
    title: "Network Expansion",
    body: "Six or more additional chain activations planned for Q2, targeting 50+ total supported networks by end of quarter. Each activation adds a Safe Standard adoption surface, an API revenue opportunity, and a new account creation channel.",
  },
];

// ---------------------------------------------------------------------------
// Letter to Backers — full text
// ---------------------------------------------------------------------------

export const LETTER_TO_BACKERS = {
  greeting: "To our backers and stakeholders,",
  paragraphs: [
    "Welcome to the Safe Ecosystem Foundation\u2019s inaugural public quarterly report. It is only fitting that we begin here, as Q1 2026 was defined by a series of transformative \"firsts.\" Beyond this debut publication, the quarter saw us cross $10 million in annualized recurring revenue and surpass 60 million accounts on the protocol. What once began as a security primitive has evolved into a foundational layer of the onchain economy.",
    "The numbers from Q1 tell a clear story. ETH-denominated transaction volume grew 35% quarter-over-quarter. More than 109 million transactions have been settled through Safe. In that same period, 1.49 million new Safe accounts were created.",
    "But numbers alone rarely explain why something is happening.",
    "Across the globe, the conversation around ownership is shifting. The question of who ultimately controls assets, and under what conditions, is no longer theoretical. It is being debated in boardrooms, regulatory circles, and among everyday users who increasingly understand the tradeoffs of custodial systems.",
    "Self-custody is moving from the edges of the ecosystem toward the center.",
    "Smart accounts are emerging as the architecture that makes this possible at scale. Today, Safe secures more value than any other protocol in DeFi, and roughly 2% of all stablecoins in existence are held in Safe accounts. As digital assets become part of the global financial infrastructure, the systems responsible for safeguarding those assets will matter enormously.",
    "GDP will move onchain, and a meaningful share of it will move through smart accounts.",
    "What I am most proud of from Q1, however, is the work happening across the Safe teams (Safe Labs, Foundation, Safe Research, Ventures, and Hecate) and the wider ecosystem. The past quarter was defined by progress toward our vision of making self-custody easy and secure.",
    "Safe Labs introduced a euro-denominated savings product, the first institutional offering of its kind, alongside an upgraded API suite and new chain deployments. Safe Research advanced Safenet from testnet into Beta, a major step toward a new layer of coordination for the Safe ecosystem. Across internal teams and partners, more than 35 product and ecosystem updates were shipped collectively. This kind of progress is easy to overlook when looking only at metrics, but it is the foundation that makes those metrics possible.",
    "Safe has always been more than a single product. It is an ecosystem of developers, researchers, companies, and contributors working toward a shared vision of smarter self-custody. Seeing that the ecosystem continues to grow and ship at this pace is one of the clearest signals of long-term strength.",
    "It was a strong quarter for the Safe onchain economy, and we are encouraged to see many ecosystem products gaining real traction.",
    "Looking ahead, we believe 2026 could be one of the most important years yet for crypto. The roadmap ahead reflects that ambition.",
    "Safenet is moving toward public launch. Subscription and usage-based pricing across the Safe Labs product suite will go live. Both are in their final stages of development, and we look forward to sharing progress on each in the coming quarters.",
    "The long-term target remains clear: $100 million in ARR by 2030. The work happening across the ecosystem today is what will make that possible.",
    "We are glad you are here for this.",
  ],
  signature: "Lukas Schor",
  signatureTitle: "Co-Founder, Safe \u00b7 President, Safe Ecosystem Foundation",
};

// ---------------------------------------------------------------------------
// Disclaimer
// ---------------------------------------------------------------------------

export const DISCLAIMER =
  "This report has been prepared by Safe Ecosystem Foundation for informational purposes only. It does not constitute investment advice, a solicitation for investment, or an offer to sell or a solicitation of an offer to buy any securities, tokens, or other financial instruments. Statements that are not historical facts are forward-looking and involve known and unknown risks. All financial figures, projections, and estimates reflect the Foundation's best available data as of report publication. March 2026 metrics are projected based on month-to-date trajectory and presented as estimated full-month figures. Past performance is not indicative of future results. Benchmarks and comparative data are sourced from DeFiLlama.";
