import { useResponsive } from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Blob = ({
  content,
  className = "",
  position = {
    desktop: { top: "0", left: "0" },
    mobile: { top: "0", left: "0" },
  },
}: {
  content: React.ReactNode;
  className?: string;
  position?: {
    desktop: { top: string; left: string };
    mobile: { top: string; left: string };
  };
}) => {
  const { isMobile } = useResponsive();

  const currentPosition = isMobile ? position.mobile : position.desktop;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -10 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={cn(
        "absolute rounded-xl bg-[#12FF80] font-light py-[10px] px-[20px] text-center text-sm z-10",
        className
      )}
      style={{
        top: currentPosition.top,
        left: currentPosition.left,
      }}
    >
      {content}
    </motion.div>
  );
};
