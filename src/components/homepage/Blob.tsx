import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Blob = ({
  content,
  className = "",
}: {
  content: React.ReactNode;
  className?: string;
}) => {
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
        "absolute top-0 left-0 rounded-xl bg-[#12FF80] font-light py-[10px] px-[20px] text-center text-sm z-10",
        className
      )}
    >
      {content}
    </motion.div>
  );
};
