"use client";

import { type Entry } from "contentful";
import type { TypeAuthorSkeleton } from "@/lib/contentful/types";
import useCurrentUrl from "@/hooks/useCurrentUrl";
import { xSharingUrl } from "@/lib/xSharingUrl";
import { linkedInSharingUrl } from "@/lib/linkedinSharingUrl";
import Image from "next/image";

const Socials = ({
  title,
  authors,
}: {
  title: string;
  authors: Entry<TypeAuthorSkeleton, undefined, string>[];
}) => {
  const currentUrl = useCurrentUrl();

  const sharingText = `${title} by @${authors
    .map((author) => author.fields.name)
    .join(", @")
    .toString()}`;

  const xUrl = xSharingUrl(currentUrl, sharingText);
  const linkedInUrl = linkedInSharingUrl(currentUrl);

  const socialItems = [
    {
      label: "X",
      url: xUrl,
      icon: "/images/common/x.svg",
    },
    {
      label: "LinkedIn",
      url: linkedInUrl,
      icon: "/images/common/linkedin.svg",
    },
  ];

  return (
    <div className="flex gap-3">
      {socialItems.map((item) => (
        <a
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-[10px] border border-[#1A1A1A1A] justify-center rounded-lg bg-white"
          aria-label={`Share on ${item.label}`}
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
