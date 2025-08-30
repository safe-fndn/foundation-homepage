"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Button from "./ui/Button";
import DropdownMenu from "./ui/DropdownMenu";
import { menuItems, MenuItem } from "@/content/navbar";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderMenuItem = (item: MenuItem) => {
    if (item.dropdown) {
      return (
        <DropdownMenu
          key={item.name}
          trigger={
            <span className="px-3 py-1 text-sm cursor-pointer">
              {item.name}
            </span>
          }
          items={item.dropdown}
          offsetTop={32}
        />
      );
    }

    return (
      <a
        href={item.href}
        key={item.name}
        className="px-3 py-1 text-sm"
        {...(item.target && { target: item.target })}
        {...(item.rel && { rel: item.rel })}
      >
        {item.name}
      </a>
    );
  };

  return (
    <>
      {/* Sentinel element - when this goes out of view, navbar becomes sticky */}
      <div
        ref={sentinelRef}
        className="absolute top-0 left-0 w-full h-px pointer-events-none"
      />

      {/* Spacer to maintain layout when navbar becomes fixed */}
      {isSticky && <div className="h-16 md:h-20" />}

      <nav
        ref={navbarRef}
        className={cn(
          "w-full transition-all duration-300 z-50 bg-[#fff] border-b border-black/[0.1]",
          isSticky ? "fixed top-0 left-0 right-0" : "relative"
        )}
      >
        <div className="px-[16px] md:px-[50px] py-[10px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-row gap-1">
              <Image
                src="./images/common/safe-logo.svg"
                alt="Safe Logo"
                width={24}
                height={24}
                className="md:w-[34px] md:h-[34px]"
              />
              <div className="text-[#1A1A1A] text-sm md:text-lg font-medium leading-[120%]">
                Safe
                <br /> Foundation
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button type="button" className="p-2" aria-label="Toggle menu">
                <Image
                  src="./images/navbar/menu.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-[2px]">
              {menuItems.map(renderMenuItem)}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="http://docs.safe.global"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  icon="./images/common/arrow-right.svg"
                  iconAlt="Arrow Right"
                  iconHeight={18}
                  iconWidth={18}
                >
                  Build on Safe
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
