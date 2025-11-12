import { SAFE_DOCS_LINK } from "@/constants";

export const navigationCards = [
  {
    icon: "/images/footer/docs.svg",
    title: "Docs",
    href: SAFE_DOCS_LINK,
    openInNewTab: true,
  },
  {
    icon: "/images/footer/ecosystem.svg",
    title: "Safe Ventures",
    href: "/ventures",
    openInNewTab: false,
  },
  {
    icon: "/images/footer/safe-token.svg",
    title: "Safe Token",
    href: "/token",
    openInNewTab: false,
  },
  {
    icon: "/images/footer/scroll.svg",
    title: "Blog",
    href: "/blog",
    openInNewTab: false,
  },
];

export const companyLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Brand", href: "https://press.safefoundation.org" },
];

export const socialLinks = [
  { name: "X", href: "https://x.com/safefndn" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/safe-ecosystem/?originalSubdomain=de",
  },
];

export const legalLinks = [
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
  { name: "Cookie Policy", href: "/cookie" },
  { name: "Preferences", href: "#" },
  { name: "Imprint", href: "/imprint" },
  { name: "Trademark", href: "/trademark" },
  { name: "Disclaimer", href: "/disclaimer" },
];
