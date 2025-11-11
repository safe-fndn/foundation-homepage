import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";

const content = [
  {
    image: "/images/token/safe.png",
    title: "A Call to Build Smarter Self-Custody",
    href: "",
  },
  {
    image: "/images/token/yahoo.png",
    title: "Gnosis Safe rebrands to Safe, Raises $100M",
    href: "",
  },
  {
    image: "/images/token/decrypt.png",
    title: "Gnosis Safe launches SafeDAO and Safe Token",
    href: "",
  },
];

export default function SafeInMedia() {
  return (
    <div className="px-[16px] max-w-[1002px] mx-auto">
      <SectionTag text="News" />
      <div className="pt-1 md:pt-4 pb-4 lg:pb-[64px] text-[36px] italic md:not-italic md:text-[64px]">
        Safe in the Media
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {content.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#12ff800f] cursor-pointer group overflow-hidden relative h-[360px] border border-[#12ff8038] rounded-[10px] p-5 block"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={42}
              height={42}
              className="h-[24px] w-auto mb-4"
            />
            <h3 className="text-xl font-medium">{item.title}</h3>
            <div className="absolute bottom-0 w-full left-0 h-[50%] md:h-[16px] md:group-hover:h-[50%] transition-all duration-300 bg-[#12FF80] flex items-end justify-between">
              <div className="font-medium pl-5 pb-5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                Read more
              </div>
              <div className="md:opacity-0 pr-5 pb-5 md:group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/common/arrow-right-bold.svg"
                  alt="arrow right"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
