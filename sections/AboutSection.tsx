"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";

const InfoSection = () => {
  const ref01 = useRef(null);

  const scroll01 = useScroll({
    target: ref01,
    offset: ["start end", "end start"],
  });
  const slowY01 = useTransform(scroll01.scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className=" bg-white-cream">
      <div style={{ padding: `calc(0.8275rem + 7.30714vw) 0px` }}>
        <div
          ref={ref01}
          className="w-full"
          style={{ padding: `0px 6.3281vw;` }}
        >
          <div className="grid auto-rows-auto gap-1 lg:grid-cols-12 lg:gap-x-[20px]">
            <div className="lg:col-span-5 lg:grid lg:grid-rows-4 flex flex-col">
              <motion.span
                className="row-span-1 text-h3"
                style={{
                  y: slowY01,
                  lineHeight: 1,
                }}
              >
                01
              </motion.span>
              <motion.span
                className="row-span-3 text-h3"
                style={{
                  y: slowY01,
                  lineHeight: 1,
                }}
              >
                About
              </motion.span>
            </div>
            <div className="hidden lg:block lg:col-span-2"></div>
            <div className="lg:col-span-5 lg:grid lg:grid-rows-4">
              <p
                className="text-h6 font-ppmori lg:col-span-5 lg:row-start-2 lg:row-end-5"
              >
                Vela Capitals stands as a leader in independent trading and
                brokerage, distinguished by over a decade of industry expertise.
                Our specialization lies in offering personalized, discreet
                services across diverse sectors, from essential commodities to
                critical industrial resources. Committed to delivering
                economically advantageous opportunities, we leverage our
                extensive market knowledge and negotiation prowess to benefit
                our clients globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
