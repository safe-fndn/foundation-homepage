# Safe Ecosystem Foundation Website

## Project Overview
Marketing website for the Safe Ecosystem Foundation. Built with Next.js 15 (App Router), Tailwind CSS v4, and deployed to Cloudflare Pages as a static export.

## Tech Stack
- **Framework**: Next.js 15 with App Router, `output: "export"` for static site generation
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **Package manager**: pnpm
- **CMS**: Contentful (for blog pages only — requires `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` and `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` env vars)
- **Deployment**: Cloudflare Pages via GitHub Actions (`.github/workflows/feature-previews.yml`)
- **Repo**: `safe-fndn/foundation-homepage`

## Commands
- `pnpm dev` — Start dev server (port 3000)
- `pnpm build` — Build static export to `./out`
- `pnpm lint` — Run ESLint

## Project Structure
```
src/app/              # Next.js App Router pages
  (footer)/           # Legal pages (terms, privacy, imprint, etc.)
  blog/               # Blog pages (Contentful-powered)
  grants/             # Grants page
  smart-contracts/    # Smart Contracts / Build page
  token/              # Safe Token page
  ventures/           # Safe Ventures page
src/components/       # React components organized by page
  ui/                 # Shared UI primitives (Button, SectionTag, Accordion, etc.)
  homepage/           # Homepage-specific components
  grants/             # Grants page components
  ventures/           # Ventures page components
  smart-contracts/    # Smart Contracts page components
  token/              # Token page components
  blog/               # Blog components
src/content/          # Static content data (navbar.tsx, footer.ts, etc.)
src/constants/        # Shared constants (emails, links, fallback stats)
src/lib/              # Utilities and Contentful client
src/hooks/            # Custom React hooks
public/images/        # Static images organized by page/section
```

## Adding a New Page
1. Create `src/app/<page>/layout.tsx` — wrap with `<Navbar />` + `<Footer />` (copy from `src/app/ventures/layout.tsx`)
2. Create `src/app/<page>/page.tsx` — assemble section components
3. Create `src/components/<page>/` directory for page-specific components
4. Add to navbar: edit `src/content/navbar.tsx` (add to appropriate dropdown array)
5. Add to footer: edit `src/content/footer.ts` (add to `companyLinks`)
6. Add navbar icon to `public/images/navbar/` (SVG, can copy from `public/images/footer/` if suitable)

## Design System
- **Primary green**: `#12FF80`
- **Dark text**: `#1A1A1A`
- **Muted text**: `#1a1a1a99` (60% opacity), `#1a1a1a66` (40% opacity)
- **Light section bg**: `#E4EDE6`
- **Subtle green tint bg**: `#12ff800f`
- **Section spacing**: `pt-[160px]` / `py-[160px]` between major sections
- **Max content width**: `max-w-[1242px] mx-auto` with `px-[16px]` padding
- **Fonts**: Citerne family (loaded from `/public/fonts/`)

## Reusable Components
- `SectionTag` — Green-bordered label above section headings
- `Button` — CTA button component with variants
- `WrapDitherCanvas` — Animated dither canvas background (used in hero sections)
- `Navbar` / `Footer` — Site-wide navigation

## Deployment & Previews
- **Production** (`safefoundation.org`): The `release` branch is deployed via `.github/workflows/release.yml` (also auto-triggered twice daily)
- **Staging**: https://main.foundation-homepage.pages.dev/ — every push to `main` auto-deploys here
- **Feature previews**: Pushes to `feat/*` branches trigger preview deployments (requires `feature-previews` environment with Contentful and Cloudflare secrets)
- **Workflow file**: `.github/workflows/feature-previews.yml` (line 1 `name:` is commented out but workflow is functional)
- **Static export**: Build uses `output: "export"` — all dynamic routes need `generateStaticParams()`

## Git Workflow
- Feature branches should be named `feat/<feature-name>`
- Push feature branches directly to `safe-fndn/foundation-homepage` for automatic Cloudflare preview deployments
- Create PRs from `feat/*` → `main` within the main repo
- To release: create a PR from `main` → `release` (include staging link https://main.foundation-homepage.pages.dev/ in PR description for reviewers)

## Contentful Build Notes
- Blog pages require Contentful credentials to build successfully
- The Contentful client (`src/lib/contentful/contentfulClient.ts`) has a noop proxy fallback when credentials are missing — this prevents build failures for non-blog pages
- When building without Contentful credentials, blog pages will have empty content but won't crash the build
