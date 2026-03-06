# Q1 2026 Quarterly Report — Build Notes

> How the report page was built, what decisions were made, and how to replicate the pattern for future quarters.
> Branch: `feat/q1-2026-quarterly-report`

---

## What was built

A full-page quarterly investor report at `/reports/q1-2026` on the Safe Foundation homepage. It is a long-scroll, section-based page — not a PDF — with interactive charts, a sticky nav, animated KPI cards, and data sourced entirely from a single TypeScript file.

---

## Architecture: Single Source of Truth

The most important design decision is that **all numbers live in exactly one file**:

```
src/content/reports/q1-2026-data.ts
```

Every component imports from here. No numbers are hardcoded anywhere in JSX. To update the report for Q2, you edit `q1-2026-data.ts` only — no component changes required.

The file exports typed constants for every data category:

| Export | What it contains |
|---|---|
| `REPORT_META` | Title, period, entity, published note, Notion URL |
| `HEADLINE_KPIS` | 5 KPI objects (value, delta, direction, sparkline array) |
| `MILESTONES` | 3 milestone objects (date, title, body) |
| `PROTOCOL_METRICS` | Monthly array: TVL, TVP, nTVP, new safes, total safes, active safes, txns, activation rate |
| `PROTOCOL_QOQ` | Q/Q change figures for each metric |
| `SAFE_IN_CONTEXT` | TVL benchmarks for Safe vs Aave vs Lido |
| `EVM_DEFI_CONTEXT` | EVM DeFi share %, stablecoin held, global stablecoin share |
| `REVENUE` | Monthly breakdown by stream (Foundation / Safe Labs / Hecate) + Q4 totals |
| `REVENUE_Q1_TOTALS` | Derived Q1 totals (explicitly set to match stated figures) |
| `REVENUE_QOQ` | Q/Q % change per stream |
| `TEAM_UPDATES` | Array of teams, each with items array (title, body, optional URL) |
| `PRESS_HIGHLIGHTS` | Headline, summary, URL |
| `ECOSYSTEM_HIGHLIGHTS` | Entity, summary, optional URL |
| `LOOKING_AHEAD` | Q2 outlook items (title, body) |
| `LETTER_TO_BACKERS` | Greeting, paragraphs array, signature, signatureTitle |
| `DISCLAIMER` | Legal disclaimer string |

All numeric units are documented in comments (billions, thousands, millions, etc.).

---

## File Structure

```
src/
├── content/reports/
│   └── q1-2026-data.ts          ← ONLY file that changes each quarter
│
├── app/reports/q1-2026/
│   └── page.tsx                  ← Page shell: imports all sections, defines nav
│
└── components/reports/
    ├── ReportHero.tsx            ← Full-screen cover + headline KPI strip
    ├── InPageNav.tsx             ← Sticky scroll-tracking nav (desktop tabs / mobile dropdown)
    ├── ReportSectionWrapper.tsx  ← Consistent section layout (tag, h2, subtitle, children)
    ├── MetricCard.tsx            ← Individual KPI card with sparkline + info toggle
    ├── Sparkline.tsx             ← Pure SVG sparkline, zero dependencies
    ├── DataToggle.tsx            ← Chart / Table toggle (accessible, keyboard-navigable)
    ├── LetterSection.tsx         ← Letter to backers with auto pull-quote detection
    ├── MilestoneCards.tsx        ← 3-column milestone grid
    ├── ProtocolMetricsChart.tsx  ← 2×2 chart grid: nTVP line, TVL line, accounts bar, txns bar
    ├── ContextChart.tsx          ← Horizontal bar: Safe vs Aave vs Lido + 3 callout stats
    ├── RevenueChart.tsx          ← Stacked bar chart + Q1 totals row + full data table
    ├── TeamUpdatesSection.tsx    ← Accordion cards per team with motion animations
    ├── EcosystemSection.tsx      ← 2-column: Press links + Ecosystem entity cards
    └── LookingAheadSection.tsx   ← 2×2 dark cards for Q2 outlook
```

---

## Page Structure (top to bottom)

1. **Hero** — full-viewport, white background, WarpDitherCanvas animation in Safe green (`#12FF80`). Centered title/period/note. Fades to white at bottom.
2. **KPI Strip** — 5 headline KPI cards in a responsive grid (2 col → 3 col → 5 col). Each card has value, delta badge, sparkline, info tooltip.
3. **Sticky Nav** — locks below the site header at `top-64px`. Desktop: horizontal tab strip. Mobile: collapsed dropdown showing active section label.
4. **Letter to Backers** — long-form text, max 720px wide. Short paragraphs (<100 chars) automatically render as pull quotes with a green left border.
5. **Quarter Milestones** — 3-col grid, green-tinted cards.
6. **Protocol Metrics** — 2×2 grid of Chart.js charts (nTVP line, TVL line, account bar, transactions bar). Each has Chart/Table toggle for accessibility.
7. **Safe in Context** — horizontal bar chart (Safe vs peers) + 3 callout stat boxes.
8. **Revenue** — stacked bar chart by stream, Q1 totals summary row, Chart/Table toggle.
9. **Team Updates** — accordion cards per team (Foundation / Safe Labs / Hecate / Safe Ventures / Safe Research). First item open by default.
10. **PR & Ecosystem** — 2-col: Press links + Ecosystem entity cards. Items with URLs are interactive links; items without URL render as plain cards.
11. **Looking Ahead** — dark section (`#1A1A1A` background), 2×2 card grid for Q2 outlook.
12. **Disclaimer** — small text, max 820px, white background.

---

## Key Technical Decisions

### Charts: Chart.js via react-chartjs-2
- All chart components are **dynamically imported** (`next/dynamic`, `ssr: false`) to avoid SSR issues with ChartJS globals registering on the server.
- Loading state uses a `ChartSkeleton` component (animated pulse placeholder).
- Each chart component registers only the ChartJS modules it needs.
- Tooltip `callbacks` use `TooltipItem<"line">` / `TooltipItem<"bar">` generic typing. **The TypeScript error in CI is here** — the `ctx.parsed` property is typed as `unknown` in strict mode, requiring an explicit cast `(ctx.parsed as {y: number}).y`. The pattern is correct and renders fine locally; it's a strictness issue in the CI build config.

### Accessibility
- `DataToggle` uses `role="group"`, `aria-pressed` on each button.
- All chart containers have `aria-label` describing the data.
- `InPageNav` uses `IntersectionObserver` to track active section — offset `-20% 0px -60% 0px` so sections activate near the top of the viewport.
- Tables have `<caption className="sr-only">` for screen readers.
- `MetricCard` info button uses `aria-expanded` + `aria-label`.
- `Sparkline` is `aria-hidden="true"` (decorative only).

### Animations
- `motion/react` (Framer Motion) used for staggered entry animations on KPI cards, milestone cards, team update cards, and looking ahead cards.
- Hero title and KPI strip have fade-in-up with slight delays.
- All animations use `initial/animate` (not scroll-triggered) to keep things simple.

### Color System
All report components use these raw hex values directly (not Tailwind theme variables) to match Safe brand:
- `#12FF80` — Safe green (positive deltas, highlights, borders, sparklines)
- `#1A1A1A` — Near-black text and dark section background
- `#F5F5F5` — Light gray backgrounds
- `#E5E5E5` — Borders
- `#1A1A1A66` / `#1A1A1A99` — Muted text (40% / 60% opacity)

### Letter Pull Quotes
`LetterSection` applies a simple heuristic: any paragraph with fewer than 100 characters renders as a `<blockquote>` with a green left border. This catches short standalone sentences like *"Self-custody is moving from the edges of the ecosystem toward the center."* without requiring manual markup.

### Projection Indicator
March data is a projection. The `isProjection: boolean` field on `ProtocolMonth` and `RevenueMonth` controls:
- The `†` suffix on the axis label (`Mar†`)
- The footnote rendered below each chart
- The "Yes/No" column in the accessible data tables

---

## Data Structure Evolution: Quarterly to Monthly

**Initial Approach (Discarded):** Charts were originally designed as 3-point quarterly view:
- Q3 2025 (single entry, grey)
- Q4 2025 (single entry, grey)  
- Q1 2026 (three months Jan/Feb/Mar, green)

**Problem Identified:** "Charts with only 3 points are rather pointless" (Lukas feedback). The sparse visualization was not compelling for investor communication.

**Final Implementation (Current):** Restructured to 10-point monthly view:
- **Prior Period (Jun-Dec 2025):** 7 months of context showing market conditions leading into Q1
- **Current Quarter (Jan-Mar 2026):** Q1 metrics

**Data Structure Details:**
- All PROTOCOL_METRICS and REVENUE data stored as `.months` array with 10 entries
- Indices 0-6 represent Jun-Dec 2025 (prior context, grey/muted colors)
- Indices 7-9 represent Jan-Mar 2026 (current quarter, full color saturation)

**Color Differentiation Implementation:**
In `ProtocolMetricsChart.tsx`, `RevenueChart.tsx`, and all chart components:
```ts
const color = i < 7 ? MUTED_GREY : SAFE_GREEN;  // Grey prior months, full color Q1
```

**Rationale:** Monthly granularity matches reporting frequency and creates visually interesting charts with sufficient data density. Prior period context (Jun-Dec) provides continuity without overwhelming the current quarter focus. The color legend is explicitly stated in chart descriptions: *"(grey = prior months, full color = Q1)"*.

**Chart Descriptions Updated:** All chart components now reference the full timeframe:
- "Jun 2025 to Mar 2026 (grey = prior months, full color = Q1)"

---

## How to Update for Q2

1. Duplicate `q1-2026-data.ts` → `q2-2026-data.ts` (or update in place if you want a single file)
2. Create `src/app/reports/q2-2026/page.tsx` — copy `q1-2026/page.tsx`, update the import path
3. In the data file:
   - Update `REPORT_META` (title, period, periodShort, publishedNote)
   - Update `HEADLINE_KPIS` — new Q2 values; shift old Q1 → prev quarter for sparklines
   - Append a new month object to `PROTOCOL_METRICS.months` (do not modify Jan/Feb/Mar)
   - Update `REVENUE.months` with Q2 monthly columns; update `q4Total` → `q1Total`
   - Update all narrative sections: `MILESTONES`, `TEAM_UPDATES`, `PRESS_HIGHLIGHTS`, `ECOSYSTEM_HIGHLIGHTS`, `LOOKING_AHEAD`, `LETTER_TO_BACKERS`
   - Update `SAFE_IN_CONTEXT` with refreshed DeFiLlama benchmarks
4. No component files need to change.

---

## Known Issue (CI Build Failure)

The TypeScript CI build fails on the tooltip callback type assertions in `ProtocolMetricsChart.tsx` and `RevenueChart.tsx`. The pattern used is:

```ts
label: (ctx: TooltipItem<"line">) => ` ${(ctx.parsed as {y: number}).y.toFixed(2)}K ETH`,
```

ChartJS's `TooltipItem.parsed` is typed as `unknown` in strict mode. The cast is correct at runtime — `ctx.parsed` is always `{x, y}` for Cartesian charts — but the CI tsconfig is stricter than local. The fix is either to add a type guard or configure the tsconfig to match. **This is the only blocker for merging.**

---

## External Dependencies Added

- `react-chartjs-2` + `chart.js` — for all charts
- `motion/react` (Framer Motion) — already in the site; used here for entry animations

No new UI primitives were added. The report reuses:
- `SectionTag` from `@/components/ui/SectionTag`
- `Accordion` from `@/components/ui/Accordion`
- `cn` from `@/lib/utils`
- `WarpDitherCanvas` from `@/components/WrapDitherCanvas` (existing site animation)
