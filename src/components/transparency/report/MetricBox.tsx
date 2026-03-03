import { cn } from "@/lib/utils";

const MetricBox = ({
  label,
  value,
  change,
  changeDirection,
  className,
}: {
  label: string;
  value: string;
  change?: string;
  changeDirection?: "up" | "down" | "neutral";
  className?: string;
}) => (
  <div
    className={cn(
      "bg-[#12ff8014] border border-black/[0.1] rounded-[10px] p-5",
      className
    )}
  >
    <div className="text-sm text-[#1a1a1a99]">{label}</div>
    <div className="text-[28px] md:text-[36px] font-medium text-[#1A1A1A] leading-tight mt-1">
      {value}
    </div>
    {change && (
      <div
        className={cn(
          "text-sm mt-1",
          changeDirection === "up"
            ? "text-[#12FF80]"
            : changeDirection === "down"
              ? "text-red-500"
              : "text-[#1a1a1a99]"
        )}
      >
        {changeDirection === "up"
          ? "\u2191 "
          : changeDirection === "down"
            ? "\u2193 "
            : ""}
        {change}
      </div>
    )}
  </div>
);

export default MetricBox;
