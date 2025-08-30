"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export interface DropdownItem {
  name: string;
  href: string;
  target?: string;
  rel?: string;
  icon?: string;
  description?: string;
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
  dropdownClassName?: string;
  offsetTop?: number;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items,
  className = "",
  dropdownClassName = "",
  offsetTop = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}

      {isOpen && (
        <>
          {offsetTop > 0 && (
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 z-40"
              style={{
                width: "100%",
                height: `${offsetTop}px`,
              }}
            />
          )}

          <div
            className={cn(
              "absolute left-1/2 transform -translate-x-1/2 z-50 min-w-[160px]",
              "bg-white rounded-2xl border border-[#E5E5E5] shadow-md overflow-hidden",
              dropdownClassName
            )}
            style={{
              top: `calc(100% + ${offsetTop}px)`,
            }}
          >
            <div className="grid">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  {...(item.target && { target: item.target })}
                  {...(item.rel && { rel: item.rel })}
                  className={cn(
                    "flex items-center gap-2 p-3 py-4",
                    "hover:bg-gray-50 transition-colors duration-200",
                    "group cursor-pointer"
                  )}
                >
                  {item.icon && (
                    <div className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={18}
                        height={18}
                      />
                    </div>
                  )}

                  <div className="text-base text-[#1A1A1A] leading-[120%]">
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
