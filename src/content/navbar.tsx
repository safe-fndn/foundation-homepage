"use client";

import { DropdownItem } from "@/components/ui/DropdownMenu";

export interface MenuItem {
  id: string;
  title: string;
  href?: string;
  target?: string;
  rel?: string;
  dropdown?: DropdownItem[];
  showExternalIcon?: boolean;
}

const communityDropdownItems: DropdownItem[] = [
  // {
  //   name: "Governance",
  //   icon: "/images/navbar/governance.svg",
  //   href: "https://safe.global/governance",
  //   target: "_blank",
  //   rel: "noopener noreferrer",
  // },
  {
    name: "Safe Token",
    icon: "/images/navbar/safe-token.svg",
    href: "/token",
  },
];

const fundingDropdownItems: DropdownItem[] = [
  {
    name: "Grants",
    icon: "/images/navbar/grants.svg",
    href: "/grants",
  },
  {
    name: "Ventures",
    icon: "/images/navbar/ventures.svg",
    href: "/ventures",
  },
];

const resourcesDropdownItems: DropdownItem[] = [
  {
    name: "About",
    icon: "/images/navbar/about.svg",
    href: "/about",
  },
  {
    name: "Blog",
    icon: "/images/navbar/blog.svg",
    href: "/blog",
  },
  {
    name: "Transparency",
    icon: "/images/navbar/transparency.svg",
    href: "/transparency",
  },
  {
    name: "Forum",
    icon: "/images/navbar/chat.svg",
    href: "https://forum.safefoundation.org/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  // {
  //   name: "Careers",
  //   icon: "/images/navbar/career.svg",
  //   href: "https://safe.global/careers",
  //   target: "_blank",
  //   rel: "noopener noreferrer",
  // },
  // {
  //   name: "Press Room",
  //   icon: "/images/navbar/press.svg",
  //   href: "https://safe.global/press",
  //   target: "_blank",
  //   rel: "noopener noreferrer",
  // },
  // {
  //   name: "Data Room",
  //   icon: "/images/navbar/data-room.svg",
  //   href: "https://safe.global/dataroom",
  //   target: "_blank",
  //   rel: "noopener noreferrer",
  // },
];

export const menuItems: MenuItem[] = [
  // {
  //   id: "ecosystem",
  //   title: "Ecosystem",
  //   href: "https://safe.global/ecosystem",
  //   target: "_blank",
  //   rel: "noopener noreferrer",
  // },
  {
    id: "resources",
    title: "Resources",
    dropdown: resourcesDropdownItems,
  },
  {
    id: "build",
    title: "Build",
    href: "/smart-contracts",
  },
  {
    id: "funding",
    title: "Funding",
    dropdown: fundingDropdownItems,
  },
  {
    id: "research",
    title: "Research",
    href: "https://safe.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "community",
    title: "Community",
    dropdown: communityDropdownItems,
  },
  {
    id: "safe labs",
    title: "Safe Labs",
    href: "https://safe.global",
    target: "_blank",
    rel: "noopener noreferrer",
    showExternalIcon: true,
  },
];
