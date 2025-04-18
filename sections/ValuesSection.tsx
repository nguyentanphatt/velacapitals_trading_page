"use client";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import ArrowLeft from "@/public/icon/arrow-left.svg";
import ArrowRight from "@/public/icon/arrow-right.svg";
import Quotes from "@/public/icon/quotes.svg";
import { InfoData } from "@/constants/data";

const ValuesSection = () => {
  const ref = useRef(null);

  const scroll = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const slowY = useTransform(scroll.scrollYProgress, [0, 1], [0, -50]);

  const [isNext, setIsNext] = useState(1);

  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["center center", "end start"],
  });
  const [startY, setStartY] = useState(0);
  const [endY, setEndY] = useState(0);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    setStartY(screenHeight * 0.9); 
    setEndY(screenHeight * 0.2);
  }, []);
  const ellipseY = useTransform(scrollYProgress, [0, 1], [startY, endY]);

  const nextInfo = () => {
    setDirection(1);
    if (isNext === 7) {
      setIsNext(1);
    } else {
      setIsNext((prev) => prev + 1);
    }
  };

  const prevInfo = () => {
    setDirection(-1);
    if (isNext === 1) {
      setIsNext(7);
    } else {
      setIsNext((prev) => prev - 1);
    }
  };
  const currentInfo = InfoData.find((item) => item.id === isNext);
  const [direction, setDirection] = useState(0);
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };
  return (
    <div>
      <div style={{ paddingTop: `calc(0.8275rem + 7.30714vw) 0px` }}>
        <div ref={ref} className="w-full" style={{ padding: `0px 6.3281vw;` }}>
          <div className="grid auto-rows-auto gap-1 lg:grid-cols-12 lg:gap-x-[20px]">
            <div className="lg:col-span-5 lg:grid lg:grid-rows-4 flex flex-col order-1 lg:order-3">
              <motion.span
                className="row-span-1 lg:text-end text-h3"
                style={{
                  y: slowY,
                  lineHeight: 1,
                }}
              >
                02
              </motion.span>
              <motion.span
                className="row-span-3 text-h3"
                style={{
                  y: slowY,
                  lineHeight: 1,
                }}
              >
                Values
              </motion.span>
            </div>
            <div className="hidden lg:block lg:col-span-2 lg:order-2"></div>
            <div className="lg:col-span-5 lg:grid lg:grid-rows-4 order-2 lg:order-1">
              <p
                className="text-h6 font-ppmori  lg:col-span-5 lg:row-start-2 lg:row-end-5"
              >
                At Vela Capitals, our values are the guiding stars that
                illuminate our path towards excellence. They are not just
                principles we uphold; they are the essence of our identity.
                These core values shape our approach, drive our decisions, and
                form the foundation of our relationships with clients and
                partners. Here are the pillars that define us:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col"
        style={{
          padding: `0px 6.3281vw;`,
        }}
      >
        <div className="lg:grid lg:grid-cols-12 lg:lg:gap-x-[20px]">
          <div
            className="bg-[#191810] flex flex-col mb-[60px] md:mb-0 lg:col-span-5 lg:mt-[50px]"
            style={{
              padding: `calc(0.7875rem + 3.53571vw) calc(0.78rem + 2.82857vw);`,
            }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.h1
                key={currentInfo?.id + "-name"}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="text-[1.167em] text-white-cream"
                style={{ fontSize: "calc(.7575rem + .70714vw)" }}
              >
                {currentInfo?.name}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence custom={direction} mode="wait">
              <motion.p
                key={currentInfo?.id + "-content"}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="mt-[1em] text-white-cream font-light text-p1"
                style={{
                  lineHeight: 1.4,
                }}
              >
                {currentInfo?.content}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="lg:col-span-4"></div>
          <div className="lg:col-span-3">
            <div className="lg:flex lg:flex-col-reverse">
              <div className="flex items-center gap-2 w-full h-[77px]">
                <div onClick={() => prevInfo()}>
                  <ArrowLeft className="w-[37px] h-[37px] text-[#f85a3e] overflow-visible" />
                </div>
                <p
                  className="text-black font-light text-p2"
                >
                  {currentInfo?.number} / 07
                </p>
                <div onClick={() => nextInfo()}>
                  <ArrowRight className="w-[37px] h-[37px] text-[#f85a3e] overflow-visible" />
                </div>
              </div>
              <div className="bg-[#f85a3e] w-full">
                <div className="p-4">
                  <div className="text-white-cream flex items-center justify-center aspect-[5/1] lg:aspect-[1052/712] ">
                    <AnimatePresence custom={direction} mode="wait">
                      <motion.p
                        key={currentInfo?.id}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="text-p1"
                      >
                        {currentInfo?.title}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 size-[300px] md:size-[600px] lg:size-[1400px]"
          style={{
            y: ellipseY,
            backgroundColor: "#F95B3F",
            borderRadius: "50%",
            filter: "blur(5px)",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-x-[20px] bg-transparent">
          <div className="lg:col-span-3" />
          <div
            className="flex flex-col items-center lg:col-span-6"
            style={{ paddingTop: `calc(.8275rem + 7.30714vw)` }}
          >
            <Quotes className="size-4 lg:size-7" />
            <span
              ref={textRef}
              className="text-h5 mt-[0.5em] text-center md:w-[400px] lg:w-full"
              style={{
                lineHeight: 1.1,
              }}
            >
              Trust is built with consistency
            </span>
            <span
              className="text-p1 mt-[0.5em] text-center font-semibold"
              style={{
                lineHeight: 1.1,
              }}
            >
              Lincoln Chafee
            </span>
          </div>
          <div className="lg:col-span-3" />
        </div>

        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="1680"
          height="440"
          viewBox="0 0 1680 440"
          className="w-full z-20 relative h-auto  md:mt-[50px] lg:mt-[100px]"
        >
          <motion.ellipse cx="840" cy="730" rx="1250" ry="475" fill="#191810" />
        </svg>
      </div>
    </div>
  );
};

export default ValuesSection;
