"use client";

import { DropdownItem } from "@/components/ui/DropdownMenu";

export interface MenuItem {
  name: string;
  href?: string;
  target?: string;
  rel?: string;
  dropdown?: DropdownItem[];
}

const communityDropdownItems: DropdownItem[] = [
  {
    name: "Governance",
    icon: "/images/navbar/governance.svg",
    href: "https://safe.global/governance",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Safe Token",
    icon: "/images/navbar/safe-token.svg",
    href: "https://safe.global/token",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const resourcesDropdownItems: DropdownItem[] = [
  {
    name: "Blogs",
    icon: "/images/navbar/blog.svg",
    href: "https://safe.global/blog",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Careers",
    icon: "/images/navbar/career.svg",
    href: "https://safe.global/careers",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Press Room",
    icon: "/images/navbar/press.svg",
    href: "https://safe.global/press",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Data Room",
    icon: "/images/navbar/data-room.svg",
    href: "https://safe.global/dataroom",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export const menuItems: MenuItem[] = [
  {
    name: "Safe {Wallet}",
    href: "http://app.safe.global",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Ecosystem",
    href: "https://safe.global/ecosystem",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Community",
    dropdown: communityDropdownItems,
  },
  {
    name: "Resources",
    dropdown: resourcesDropdownItems,
  },
  {
    name: "Research",
    href: "http://safe.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
