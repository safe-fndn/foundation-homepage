import { motion, MotionValue, useTransform } from "motion/react";

interface AnimatedWordProps {
  word: string;
  scrollYProgress: MotionValue<number>;
  wordIndex: number;
  totalWords: number;
}

export default function AnimatedWord({
  word,
  scrollYProgress,
  wordIndex,
  totalWords,
}: AnimatedWordProps) {
  const wordProgress = useTransform(
    scrollYProgress,
    [wordIndex / totalWords, (wordIndex + 1) / totalWords],
    [0, 1]
  );

  const backgroundSize = useTransform(
    wordProgress,
    [0, 1],
    ["0% 100%", "100% 100%"]
  );

  return (
    <motion.span
      className="inline-block py-[2px] px-[8px] md:px-[12px]"
      style={{
        backgroundPosition: "left",
        backgroundSize,
        backgroundImage: "linear-gradient(#12FF80, #12FF80)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {word}
    </motion.span>
  );
}
