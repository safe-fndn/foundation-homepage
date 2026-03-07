"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MenuItem, menuItems } from "@/content/navbar";
import DropdownMenu from "../ui/DropdownMenu";
import Accordion, { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";
import Button from "../ui/Button";

const SafenetNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderMenuItem = (item: MenuItem) => {
    if (item.dropdown) {
      return (
        <DropdownMenu
          key={item.id}
          trigger={
            <div className="px-3 py-1 cursor-pointer sn-body-sm font-light">{item.title}</div>
          }
          items={item.dropdown}
          offsetTop={32}
        />
      );
    }

    return (
      <a
        href={item.href}
        key={item.id}
        className="px-3 py-1 flex flex-row items-center gap-1 sn-body-sm font-light"
        {...(item.target && { target: item.target })}
        {...(item.rel && { rel: item.rel })}
      >
        {item.title}
        {item.showExternalIcon && (
          <Image
            src="/images/common/arrow-external.svg"
            alt="External Link"
            width={16}
            height={16}
          />
        )}
      </a>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.dropdown) {
      return (
        <AccordionItem key={item.id}>
          <AccordionTrigger id={item.id} className="py-3 px-4">
            {item.title}
          </AccordionTrigger>
          <AccordionContent id={item.id}>
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
        key={item.id}
        href={item.href}
        className="block px-4 py-3"
        {...(item.target && { target: item.target })}
        {...(item.rel && { rel: item.rel })}
      >
        {item.title}
      </a>
    );
  };

  return (
    <nav className="z-50 w-full bg-safenet-green">
      <div className="px-4 lg:px-10 py-3 border-b border-safenet-black/10">
        <div className="flex justify-between items-center">
          <Link href="/safenet" className="cursor-pointer">
            <Image
              src="/images/safenet/logo.svg"
              alt="Safenet Logo"
              width={162}
              height={32}
            />
          </Link>

          <div className="lg:hidden">
            <button
              type="button"
              className="p-2"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Image
                src={
                  isMobileMenuOpen
                    ? "/images/common/close.svg"
                    : "/images/navbar/menu.svg"
                }
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-[2px]">
            {menuItems.map(renderMenuItem)}
          </div>

          <div className="hidden lg:flex items-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button
                icon="/images/common/arrow-external.svg"
                iconAlt="Arrow External"
                iconHeight={18}
                iconWidth={18}
                variant="link"
                className="sn-mono-sm"
              >
                STAKE SAFE
              </Button>
            </a>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[61px] bg-white w-full">
          <div className="w-full rounded-2xl shadow-md">
            <div className="py-5">
              <Accordion allowMultiple={false}>
                {menuItems.map(renderMobileMenuItem)}
              </Accordion>
            </div>

            <div className="py-6 border-t border-[#E9EAEB]">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4"
              >
                <Button
                  icon="/images/common/arrow-external.svg"
                  iconAlt="Arrow External"
                  iconHeight={18}
                  iconWidth={18}
                  variant="link"
                  className="pl-0 sn-mono-sm"
                >
                  STAKE SAFE
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SafenetNavbar;