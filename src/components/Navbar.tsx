"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "./ui/Button";
import DropdownMenu from "./ui/DropdownMenu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/Accordion";
import { menuItems, MenuItem } from "@/content/navbar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.dropdown) {
      return (
        <AccordionItem key={item.name}>
          <AccordionTrigger id={item.name} className="py-3 px-4">
            {item.name}
          </AccordionTrigger>
          <AccordionContent id={item.name}>
            <div className="space-y-0">
              {item.dropdown.map((dropdownItem) => (
                <a
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  className="flex items-center py-3 pl-4 text-base"
                  {...(dropdownItem.target && { target: dropdownItem.target })}
                  {...(dropdownItem.rel && { rel: dropdownItem.rel })}
                >
                  {dropdownItem.icon && (
                    <Image
                      src={dropdownItem.icon}
                      alt={dropdownItem.name}
                      width={18}
                      height={18}
                      className="mr-2"
                    />
                  )}
                  {dropdownItem.name}
                </a>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className="block px-4 py-3"
        {...(item.target && { target: item.target })}
        {...(item.rel && { rel: item.rel })}
      >
        {item.name}
      </a>
    );
  };

  return (
    <nav className="z-50 w-full bg-white border-b border-black/[0.1]">
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
            <button
              type="button"
              className="p-2"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Image
                src={
                  isMobileMenuOpen
                    ? "./images/common/close.svg"
                    : "./images/navbar/menu.svg"
                }
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[61px] bg-white w-full">
          <div className="w-full rounded-2xl shadow-md">
            <div className="py-5">
              <Accordion allowMultiple={false}>
                {menuItems.map(renderMobileMenuItem)}
              </Accordion>
            </div>

            {/* Mobile CTA Button */}
            <div className="py-6 border-t border-[#E9EAEB]">
              <a
                href="http://docs.safe.global"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4"
              >
                <Button
                  icon="./images/common/arrow-right.svg"
                  iconAlt="Arrow Right"
                  iconHeight={18}
                  iconWidth={18}
                  className="w-full justify-center"
                >
                  Build on Safe
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
