"use client";
import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import ArrowLeft from "@/public/icon/arrow-left.svg";
import ArrowRight from "@/public/icon/arrow-right.svg";
import china from '@/public/image/china.png'
import india from '@/public/image/india.png'
import europe from '@/public/image/europe.png'
import { text } from "stream/consumers";
const marketData = [
    {
        id: 1,
        number: "01",
        video: "https://velacapitals.com/_nuxt/market-eu.C6KoyQJG.mp4",
        title: "Europe",
        description:
            "Vela Capitals is adept at navigating the exacting standards of European clientele. Our approach is defined by precision and an unwavering commitment to meeting the sophisticated needs of this market with expertly tailored services",
        image: china,
        text: "China"
    },
    {
        id: 2,
        number: "02",
        video: "https://velacapitals.com/_nuxt/market-zh.DY3m0nVM.mp4",
        title: "China",
        description:
            "As the Chinese market evolves, so does our engagement, mirroring the rapid growth and dynamic changes in its commodities sector. Vela Capitals is strategically positioned to welcome new clients and expand our presence in this vibrant market with responsive and forward-thinking solutions.",
        image: india,
        text:"India"
    },
    {
        id: 3,
        number: "03",
        video: "https://velacapitals.com/_nuxt/market-in.B13lhf97.mp4",
        title: "India",
        description:
            "The Indian market is emerging from the global backdrop as a standalone force in commodities, diversifying its sources and expanding its reach. Vela Capitals supports this shift, offering strategic guidance to channel commodities effectively, with special expertise in navigating supplies from Russia and Belarus.",
        image: europe,
        text: "Europe"
    }
]
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
  return (
    <div className="h-auto bg-[#191810]" style={{padding: "calc(.8275rem + 7.30714vw) 0px"}}>
      <div
        className="pt-[50px]"
        style={{ paddingTop: `calc(0.8275rem + 7.30714vw) 0px` }}
      >
        <div ref={ref} className="w-full" style={{ padding: `0px 6.3281vw;` }}>
          <div className="lg:hidden grid auto-rows-auto gap-1">
            <div className="flex flex-col lg:col-span-12 lg:row-span-1">
              <motion.span
                className=" text-white-cream"
                style={{
                  y: slowY,
                  fontSize: `calc(0.87375rem + 11.6679vw)`,
                  lineHeight: 1,
                }}
              >
                04
              </motion.span>

              <motion.span
                className=" text-white-cream"
                style={{
                  y: slowY,
                  fontSize: `calc(0.87375rem + 11.6679vw)`,
                  lineHeight: 1,
                }}
              >
                Targets Markets
              </motion.span>
            </div>
            <div className="lg:col-span-5 lg:grid lg:grid-rows-4 lg:row-span-3">
              <p
                className="font-ppmori text-white-cream lg:col-span-5 lg:row-start-1 lg:row-end-5"
                style={{ fontSize: `calc(.76125rem + 1.06071vw)` }}
              >
                We excel in regions with strong sourcing networks that afford
                seamless integration with global supply chains, ensuring
                efficient market access.
              </p>
            </div>
          </div>
          <div className="hidden lg:grid lg:auto-rows-auto lg:gap-1 lg:grid-cols-12 lg:gap-x-[20px]">
            <div className="lg:col-span-7">
              <motion.span
                className=" text-white-cream"
                style={{
                  y: slowY,
                  fontSize: `calc(0.87375rem + 11.6679vw)`,
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
                  className=" text-white-cream"
                  style={{
                    y: slowY,
                    fontSize: `calc(0.87375rem + 11.6679vw)`,
                    lineHeight: 1,
                  }}
                >
                  04
                </motion.span>
                <p
                  className="font-ppmori text-white-cream lg:col-span-5 lg:row-start-1 lg:row-end-5"
                  style={{ fontSize: `calc(.75188rem + .17679vw)` }}
                >
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
          ></div>
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-[20px]" style={{paddingTop:"calc(.8275rem + 7.30714vw);"}}>
            <div className="flex flex-col lg:col-span-5" style={{paddingTop: "calc(.785rem + 3.3vw);"}}>
              <div className="w-[328px] h-full md:w-full">
                <video
                  src={currentInfo?.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div style={{ paddingTop: "calc(.785rem + 3.3vw);" }}>
                <h3 className="text-[1.167em] text-white-cream">{currentInfo?.title}</h3>
                <p
                  className="mt-[1em] text-white-cream"
                  style={{ fontSize: "calc(.7575rem + .70714vw)" }}
                >
                  {currentInfo?.description}
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-4" />
            <div className="lg:col-span-3">
              <div className="lg:flex lg:flex-col-reverse">
                <div className="flex items-center gap-2 w-full h-[77px]">
                  <div
                  onClick={() => prevInfo()}
                  >
                    <ArrowLeft className="w-[37px] h-[37px] text-[#f85a3e] overflow-visible" />
                  </div>
                  <p
                    className="text-white-cream font-light"
                    style={{ fontSize: `calc(.75375rem + .35357vw);` }}
                  >
                    {currentInfo?.number} / 03
                  </p>
                  <div
                  onClick={() => nextInfo()}
                  >
                    <ArrowRight className="w-[37px] h-[37px] text-[#f85a3e] overflow-visible" />
                  </div>
                </div>
                <div className=" w-full" style={{backgroundImage: `url(${currentInfo?.image.src})`, backgroundSize: "cover", backgroundPosition: "center"}}> 
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
                        style={{ fontSize: "calc(.7575rem + .70714vw)" }}
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
