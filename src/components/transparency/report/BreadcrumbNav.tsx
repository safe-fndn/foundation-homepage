import Link from "next/link";
import Image from "next/image";

const BreadcrumbNav = ({ quarter }: { quarter: string }) => {
  return (
    <nav
      className="flex items-center gap-2 mb-6"
      aria-label="Breadcrumb"
    >
      <Link href="/transparency">
        <span className="text-[15px] text-[#A1A3A7] whitespace-nowrap">
          Transparency
        </span>
      </Link>
      <Image
        src="/images/common/chevron-down.svg"
        alt="chevron"
        width={12}
        height={12}
        className="-rotate-90"
      />
      <span className="text-[15px] text-[#A1A3A7] whitespace-nowrap">
        {quarter}
      </span>
    </nav>
  );
};

export default BreadcrumbNav;
