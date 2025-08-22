"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconPosition?: "left" | "right";
}

const Button = ({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
  icon,
  iconAlt = "",
  iconWidth = 16,
  iconHeight = 16,
  iconPosition = "right",
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-full text-base flex items-center gap-[4px] justify-between cursor-pointer transition-all duration-200";

  const variantStyles = {
    primary: "bg-[#12FF80]",
    secondary: "bg-[#1A1A1A] text-white",
    outline: "bg-transparent border border-[#1A1A1A] text-[#1A1A1A]",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        disabled && disabledStyles,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <Image src={icon} alt={iconAlt} width={iconWidth} height={iconHeight} />
      )}
      {children}
      {icon && iconPosition === "right" && (
        <Image src={icon} alt={iconAlt} width={iconWidth} height={iconHeight} />
      )}
    </button>
  );
};

export default Button;
