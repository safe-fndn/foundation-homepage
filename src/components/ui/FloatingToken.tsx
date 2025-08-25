"use client";

import { motion } from "motion/react";
import Image from "next/image";

const FloatingToken = ({ image }: { image: string }) => (
  <motion.div
    animate={{ y: ["0%", "-5%", "0%"], rotateY: [0, -35, 0] }}
    transition={{
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    }}
    className="w-fit"
  >
    <Image src={image} alt="floating token" width={248} height={248} />
  </motion.div>
);

export default FloatingToken;
