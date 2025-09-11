import type { ReactNode } from "react";
import type { UrlObject } from "url";
import Link from "next/link";
import Image from "next/image";

type BreadcrumbsType = {
  category: string;
  title: string;
};

const createBreadcrumb = (
  key: string,
  text: ReactNode,
  linkProps: string | UrlObject
) => (
  <Link key={key} href={linkProps}>
    <span className="text-[15px] text-[#A1A3A7] whitespace-nowrap">{text}</span>
  </Link>
);

const BreadcrumbsNav = ({ category, title }: BreadcrumbsType) => {
  const breadcrumbs = [
    createBreadcrumb("1", "Blog", "/blog"),
    createBreadcrumb("2", category, {
      pathname: "/blog",
      query: { category },
    }),
    <span
      key="3"
      className="text-[15px] text-[#A1A3A7] w-[150px] md:w-72 overflow-hidden whitespace-nowrap text-ellipsis"
    >
      {title}
    </span>,
  ];

  return (
    <nav
      className="flex items-center space-x-1 gap-2 w-full"
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <div
          key={index}
          className="flex gap-2 shrink-0 justify-center items-center"
        >
          {breadcrumb}
          {index < breadcrumbs.length - 1 && (
            <Image
              src="/images/common/chevron-down.svg"
              alt="chevron right"
              width={12}
              height={12}
              className="-rotate-90"
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default BreadcrumbsNav;
