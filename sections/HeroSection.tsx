"use client";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import React, { Fragment, useEffect, useState } from "react";
const SECTION_HEIGHT = 1500;
const HeroSection = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  const [showHero, setShowHero] = useState(false);
  return (
    <div className="bg-[#191810] relative">
      {
        <AnimatePresence>
          {!showHero && (
            <>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-screen bg-[#f85a3e] z-30"
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-0 left-0 w-full h-screen bg-[#191810] z-30"
              />
            </>
          )}
        </AnimatePresence>
      }
      <Hero />
    </div>
  );
};
const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full bg-[#191810]"
    >
      <CenterImage />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 " />
    </div>
  );
};
const CenterImage = () => {
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = windowWidth * 0.25;
  const baseHeight = windowHeight * 0.25;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 300],
    [1, 0]
  );
  const scale = useTransform(
    scrollY,
    [0, SECTION_HEIGHT],
    [1, windowWidth / baseWidth]
  );
  return (
    <motion.div
      className="sticky top-0 flex items-center justify-center w-full h-screen"
    >
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        <div className="z-0">
          <div className="px-[6.3281vw]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{
                padding: `calc(.76875rem + 1.76786vw) 0`,
                lineHeight: 1.2,
              }}
              className="flex items-center md:justify-between gap-8 w-full"
            >
              <p
                className="text-[#f4ecd7] font-ppmori-light w-[340px]"
                style={{ fontSize: `calc(.7525rem + .23571vw)` }}
              >
                <span className="font-semibold">Vela Capitals</span> is a
                trading and brokerage firm specializing in Agricultural and
                Industrial Commodities
              </p>
              <p
                style={{ fontSize: `calc(.7575rem + .70714vw)` }}
                className="text-red-600"
              >
                EN
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full z-30">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-[#f4ecd7]"
            style={{ fontSize: `calc(.8175rem + 6.36429vw)` }}
          >
            Relationships
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-[#f4ecd7] "
            style={{ fontSize: `calc(.8175rem + 6.36429vw)` }}
          >
            over
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-[#f4ecd7]"
            style={{ fontSize: `calc(.8175rem + 6.36429vw)` }}
          >
            Transactions
          </motion.span>
        </div>

        <div className="z-0">
          <div className="px-[6.3281vw]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{
                padding: `calc(.76875rem + 1.76786vw) 0`,
              }}
              className="flex flex-none justify-end w-full  text-base"
            >
              <div className=" w-[20%] md:w-[8.3%] flex overflow-hidden">
                <div className="flex animate-move-left [animation-duration:3s] whitespace-nowrap">
                  {[...new Array(4)].map((_, idx) => (
                    <Fragment key={idx}>
                      <div className="inline-flex items-center justify-center">
                        <span className="text-[#f4ecd7]">Scroll</span>
                        <span className="text-[#f4ecd7] mx-2">•</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.video
        src="https://velacapitals.com/_nuxt/hero.DsBaArry.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="shadow-2xl object-cover"
        initial={{ y: "20px", opacity: 0 }}
        animate={{ y: "0px", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{
          scale,
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
        }}
      />
    </motion.div>
  );
};
export default HeroSection;
