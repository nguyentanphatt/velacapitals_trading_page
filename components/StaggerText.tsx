import { div } from "motion/react-client";
import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";
const DURATION = 0.25;
const STAGGER = 0.025;
const StaggerText = ({
  children,
  className,
  initialColor = "#000",
  hoveredColor = "#fff",
}: {
  children: string;
  className?: string;
  initialColor?: string;
  hoveredColor?: string;
}) => {
  return (
    <motion.a
      //initial="initial"
      //whileHover="hovered"
      className={twMerge(
        "relative block overflow-hidden whitespace-nowrap",
        className
      )}
    >
      <div>
        <motion.span
          variants={{
            initial: {
              y: 0,
              color: initialColor,
            },
            hovered: {
              y: "100%",
              color: hoveredColor,
            },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER,
          }}
          className="inline-block"
        >
          {children}
        </motion.span>
      </div>
      <div className="absolute inset-0">
        <motion.span
          variants={{
            initial: {
              y: "-100%",
              color: initialColor,
            },
            hovered: {
              y: 0,
              color: hoveredColor,
            },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER,
          }}
          className="inline-block"
        >
          {children}
        </motion.span>
      </div>
    </motion.a>
  );
};

export default StaggerText;
