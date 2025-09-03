import React from "react";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinkSectionProps {
  title: string;
  links: FooterLink[];
}

export default function FooterLinkSection({
  title,
  links,
}: FooterLinkSectionProps) {
  return (
    <div>
      <h3 className="text-[#1A1A1A] font-medium text-sm mb-3">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a99] text-base"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
