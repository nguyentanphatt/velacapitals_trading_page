import { motion } from "framer-motion";
import React from "react";
import StaggerText from "./StaggerText";
import { twMerge } from "tailwind-merge";

const GroupHover = ({
  number,
  title,
  className,
  textClassName,
  numberClassName,
  initialColor = "#000",
  hoveredColor = "#fff",
}: {
  number: string;
  title: string;
  className?:string
  textClassName?:string
  numberClassName?:string
  initialColor?: string;
  hoveredColor?: string;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      variants={{}}
      className={twMerge("items-center hidden group-hover:flex ", className)}
    >
      <div className="relative flex items-center justify-center w-[2rem]">
        {""}
        <motion.span
          variants={{
            initial: { opacity: 1 },
            hovered: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
          className={twMerge("absolute text-black font-medium", numberClassName)}
        >
          {number}
        </motion.span>

        <motion.span
          variants={{
            initial: { opacity: 0 },
            hovered: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute text-white text-3xl leading-none"
        >
          ●
        </motion.span>
      </div>
      <StaggerText className={twMerge("text-black font-medium", textClassName)} initialColor={initialColor} hoveredColor={hoveredColor} >{title}</StaggerText>
    </motion.div>
  );
};

export default GroupHover;
