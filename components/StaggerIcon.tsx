import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const StaggerSVG = ({ children }: { children: ReactNode }) => {
  return (
    <motion.g
      initial="initial"
      whileHover="hovered"
      className="overflow-visible"
    >
      {/* Original position */}
      <motion.g
        variants={{
          initial: { x: 0 },
          hovered: { x: "100%" },
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER,
        }}
      >
        {children}
      </motion.g>

      {/* Slide-in copy */}
      <motion.g
        variants={{
          initial: { x: "-100%" },
          hovered: { x: 0 },
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER,
        }}
      >
        {children}
      </motion.g>
    </motion.g>
  );
};
