import { cn } from "@/lib/utils";
import Image from "next/image";

interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
  name: string;
}

export const Checkbox = ({
  checked,
  disabled = false,
  onChange,
  label,
  name,
}: CheckboxProps) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only"
        />
        <div
          className={cn(
            "w-6 h-6 border-2 rounded-sm transition-all duration-200",
            checked
              ? "bg-[#12FF80] border-[#12FF80]"
              : "bg-white border-[#1A1A1A]",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {checked && (
            <Image
              src="/images/common/check.svg"
              alt="Check"
              width={16}
              height={16}
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
      <span className={cn("text-base", disabled && "opacity-50")}>{label}</span>
    </label>
  );
};
