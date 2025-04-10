import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export const RevealLinks02 = () => {
  return (
    <section className="grid place-content-center gap-2 bg-blue-300 px-8 py-20 text-black">
      <FlipLink href="#">{">"}</FlipLink>
      <FlipLink href="#">{"<"}</FlipLink>
      <FlipLink href="#">{")"}</FlipLink>
      <FlipLink href="#">{"("}</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: {children: string, href: string}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 1,
      }}
    >
      <div>
          <motion.span
            variants={{
              initial: {
                x: 0,
              },
              hovered: {
                x: "100%",
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
                x: "-100%",
              },
              hovered: {
                x: 0,
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