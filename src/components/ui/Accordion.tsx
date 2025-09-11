"use client";

import React, { useState, ReactNode, createContext, useContext } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

interface AccordionProps {
  children: ReactNode;
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export const Accordion = ({
  children,
  allowMultiple = false,
  defaultOpen = [],
  className = "",
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={cn("space-y-0", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  children: ReactNode;
  className?: string;
}

export const AccordionItem = ({
  children,
  className = "",
}: AccordionItemProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

interface AccordionTriggerProps {
  id: string;
  children: ReactNode;
  icon?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  showChevron?: boolean;
  className?: string;
}

export const AccordionTrigger = ({
  id,
  children,
  showChevron = true,
  className = "",
}: AccordionTriggerProps) => {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.has(id);

  return (
    <button
      onClick={() => toggleItem(id)}
      className={cn("w-full flex items-center justify-between py-3", className)}
      aria-expanded={isOpen}
    >
      <div className="text-base">{children}</div>
      {showChevron && (
        <Image
          src="/images/common/chevron-down.svg"
          alt="Toggle"
          width={18}
          height={18}
          className={cn(
            "transition-transform duration-200 flex-shrink-0",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      )}
    </button>
  );
};

interface AccordionContentProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const AccordionContent = ({
  id,
  children,
  className = "",
}: AccordionContentProps) => {
  const { openItems } = useAccordion();
  const isOpen = openItems.has(id);

  if (!isOpen) return null;

  return <div className={cn("", className)}>{children}</div>;
};

export default Accordion;
