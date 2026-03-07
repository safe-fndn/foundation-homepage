"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SafenetButtonProps {
  children?: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
}

const SafenetButton = ({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
  icon,
  iconAlt = "",
  iconWidth = 18,
  iconHeight = 18,
}: SafenetButtonProps) => {
  const baseStyles =
    "sn-mono-sm uppercase cursor-pointer transition-colors duration-200 flex items-center";

  const variantStyles = {
    primary: "bg-safenet-black text-safenet-white hover:bg-safenet-black/85",
    outline:
      "border border-safenet-black/60 text-safenet-black hover:border-safenet-black hover:bg-safenet-black/5",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        icon ? "justify-between" : "justify-center",
        disabled && disabledStyles,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={cn("py-3", icon ? "px-5" : "px-8")}>
        {children}
      </span>
      {icon && (
        <span
          className={cn(
            "px-3 py-3 flex items-center",
          )}
        >
          <Image
            src={icon}
            alt={iconAlt}
            width={iconWidth}
            height={iconHeight}
          />
        </span>
      )}
    </button>
  );
};

export default SafenetButton;
