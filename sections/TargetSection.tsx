"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import ArrowLeft from "@/public/icon/arrow-left.svg";
import ArrowRight from "@/public/icon/arrow-right.svg";
import { marketData } from "@/constants/data";

const TargetSection = () => {
  const [isNext, setIsNext] = useState(1);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const scroll = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const slowY = useTransform(scroll.scrollYProgress, [0, 1], [0, -50]);
  const nextInfo = () => {
    setDirection(1);
    if (isNext === 3) {
      setIsNext(1);
    } else {
      setIsNext((prev) => prev + 1);
    }
  };

  const prevInfo = () => {
    setDirection(-1);
    if (isNext === 1) {
      setIsNext(3);
    } else {
      setIsNext((prev) => prev - 1);
    }
  };
  const currentInfo = marketData.find((item) => item.id === isNext);
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && currentInfo?.video) {
      videoRef.current.src = currentInfo.video;
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentInfo?.video]);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleChangeInfo = (direction: string) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      direction === "next" ? nextInfo() : prevInfo();
    }, 250);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };
  return (
    <div
      className="h-auto bg-[#191810]"
      style={{ padding: "calc(.8275rem + 7.30714vw) 0px" }}
    >
      <div
        className="pt-[50px]"
        style={{ paddingTop: `calc(0.8275rem + 7.30714vw) 0px` }}
      >
        <div ref={ref} className="w-full" style={{ padding: `0px 6.3281vw;` }}>
          <div className="lg:hidden grid auto-rows-auto gap-1">
            <div className="flex flex-col lg:col-span-12 lg:row-span-1">
              <motion.span
                className=" text-white-cream text-h3"
                style={{
                  y: slowY,
                  lineHeight: 1,
                }}
              >
                04
              </motion.span>

              <motion.span
                className=" text-white-cream text-h3"
                style={{
                  y: slowY,
                  lineHeight: 1,
                }}
              >
                Targets Markets
              </motion.span>
            </div>
            <div className="lg:col-span-5 lg:grid lg:grid-rows-4 lg:row-span-3">
              <p className="text-h6 font-ppmori text-white-cream lg:col-span-5 lg:row-start-1 lg:row-end-5">
                We excel in regions with strong sourcing networks that afford
                seamless integration with global supply chains, ensuring
                efficient market access.
              </p>
            </div>
          </div>
          <div className="hidden lg:grid lg:auto-rows-auto lg:gap-1 lg:grid-cols-12 lg:gap-x-[20px]">
            <div className="lg:col-span-7">
              <motion.span
                className=" text-white-cream text-h3"
                style={{
                  y: slowY,
                  lineHeight: 1,
                }}
              >
                Target Markets
              </motion.span>
            </div>
            <div className="lg:col-span-3" />
            <div className="lg:col-span-2">
              <div>
                <motion.span
                  className=" text-white-cream text-h3"
                  style={{
                    y: slowY,
                    lineHeight: 1,
                  }}
                >
                  04
                </motion.span>
                <p className="text-p4 font-ppmori text-white-cream lg:col-span-5 lg:row-start-1 lg:row-end-5">
                  We excel in regions with strong sourcing networks that afford
                  seamless integration with global supply chains, ensuring
                  efficient market access.
                </p>
              </div>
            </div>
          </div>
          <div
            className="block lg:hidden"
            style={{ paddingTop: "calc(.8275rem + 7.30714vw)" }}
          />
          <div
            className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-[20px]"
            style={{ paddingTop: "calc(.8275rem + 7.30714vw);" }}
          >
            <div
              className="flex flex-col lg:col-span-5"
              style={{ paddingTop: "calc(.785rem + 3.3vw);" }}
            >
              <div className="w-[328px] h-full md:w-full">
                <div className="relative">
                  <motion.div
                    initial={false}
                    animate={{ x: isAnimating ? "0%" : "100%" }}
                    //animate={{x:'100%'}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full bg-[#191810] z-30 pointer-events-none"
                  />
                  <video
                    //src={currentInfo?.video}
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="transition-opacity duration-300 opacity-100"
                  />
                </div>
              </div>
              <div style={{ paddingTop: "calc(.785rem + 3.3vw);" }}>
                <h3 className="text-[1.167em] text-white-cream">
                  {currentInfo?.title}
                </h3>
                <p className="text-p1 mt-[1em] text-white-cream">
                  {currentInfo?.description}
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-4" />
            <div className="lg:col-span-3">
              <div className="lg:flex lg:flex-col-reverse">
                <div className="z-50 flex items-center gap-2 w-full h-[77px]">
                  <div
                    onClick={() => handleChangeInfo("prev")}
                    className="cursor-pointer"
                  >
                    <ArrowLeft className="w-[37px] h-[37px] text-[#f85a3e] overflow-visible" />
                  </div>
                  <p className="text-p2 text-white-cream font-light">
                    {currentInfo?.number} / 03
                  </p>
                  <div onClick={() => handleChangeInfo("next")} className="cursor-pointer">
                    <ArrowRight className="w-[37px] h-[37px] text-[#f85a3e] overflow-visible" />
                  </div>
                </div>
                <div
                  className=" w-full z-50"
                  style={{
                    backgroundImage: `url(${currentInfo?.image.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
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
                          {currentInfo?.text}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSection;
