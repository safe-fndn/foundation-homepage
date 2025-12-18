import React from "react";
import SectionTag from "../ui/SectionTag";
import { projects } from "@/content/projects";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/HoverCard";

export default function Projects() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Portfolio" />
      <div className="text-[#1a1a1a99] text-xl pb-[40px]">
        Projects backed by Safe Ventures
      </div>
      <div className="flex flex-row flex-wrap gap-4 md:gap-[26px]">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="max-w-[160px] md:max-w-[180px] group cursor-pointer"
          >
            <div className="relative pb-[10px] w-full h-[170px] rounded-[10px] bg-[#12ff800f] flex justify-center items-center">
              {false && (
                <HoverCard openDelay={300}>
                  <HoverCardTrigger asChild>
                    <div className="absolute rounded-full top-2 right-2">
                      <Image
                        src="/images/ventures/safe-fndn-logo.svg"
                        alt="logo"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="top"
                    className="bg-[#1A1A1A] w-fit rounded-lg p-2 px-4 text-white text-xs font-medium z-10"
                  >
                    Safe token alligned
                  </HoverCardContent>
                </HoverCard>
              )}
              <Image
                src={project.image}
                alt={project.name}
                width={55}
                height={55}
                className="rounded-[10px]"
              />
              <Button
                variant="secondary"
                className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
                icon="/images/common/arrow-right-light.svg"
                iconAlt="arrow right"
                iconHeight={18}
                iconWidth={18}
              >
                View Website
              </Button>
            </div>
            <div className="text-[#1a1a1a99] text-sm font-medium pb-1">
              {project.name}
            </div>
            <div className="text-black/[0.6] text-xs font-light">
              {project.desc}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
