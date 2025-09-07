"use client";

import { DropdownItem } from "@/components/ui/DropdownMenu";
import Image from "next/image";
import { ReactNode } from "react";

export interface MenuItem {
  id: string;
  title: ReactNode;
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
    href: "/blog",
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
    id: "safe-wallet",
    title: (
      <span>
        Safe {"{Wallet}"}
        <Image
          src="/images/common/arrow-external.svg"
          alt="External link"
          className="inline ml-1"
          width={18}
          height={18}
        />
      </span>
    ),
    href: "http://app.safe.global",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "ecosystem",
    title: "Ecosystem",
    href: "https://safe.global/ecosystem",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "community",
    title: "Community",
    dropdown: communityDropdownItems,
  },
  {
    id: "resources",
    title: "Resources",
    dropdown: resourcesDropdownItems,
  },
  {
    id: "research",
    title: "Research",
    href: "http://safe.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
