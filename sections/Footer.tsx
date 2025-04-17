"use client";
import GroupHover from "@/components/GroupHover";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div>
        <div style={{ padding: "0 6.3281vw" }} className="hidden lg:block bg-[#f85a3e]">
        <motion.div
          className="block w-full bg-[#f85a3e] z-50 py-8"
        >
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col">
              <GroupHover
                number="(01)"
                title="About"
                initialColor="#000"
                hoveredColor="#fff"
                textClassName="text-white"
                numberClassName="text-black"
                className="flex"
              />
              <div className="w-full h-1 bg-white/50">
                <motion.div
                  className="h-full origin-left bg-white-cream"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <GroupHover
                number="(02)"
                title="Values"
                initialColor="#000"
                hoveredColor="#fff"
                textClassName="text-white"
                numberClassName="text-black"
                className="flex"
              />
              <div className="w-full h-1 bg-white/50">
                <motion.div
                  className="h-full origin-left bg-white-cream"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <GroupHover
                number="(03)"
                title="Products"
                initialColor="#000"
                hoveredColor="#fff"
                textClassName="text-white"
                numberClassName="text-black"
                className="flex"
              />
              <div className="w-full h-1 bg-white/50">
                <motion.div
                  className="h-full origin-left bg-white-cream"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <GroupHover
                number="(04)"
                title="Target Markets"
                initialColor="#000"
                hoveredColor="#fff"
                textClassName="text-white"
                numberClassName="text-black"
                className="flex"
              />
              <div className="w-full h-1 bg-white/50">
                <motion.div
                  className="h-full origin-left bg-white-cream"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    <div
      className="bg-[#f85a3e] h-auto"
      style={{ padding: "calc(.785rem + 3.3vw) 0" }}
    >
      
      <div
        className="flex flex-col lg:flex-row lg:justify-between gap-5"
        style={{ padding: "0 6.3281vw" }}
      >
        <div>
          <h1 className="text-[1.5em] font-bold font-ppmori text-black">
            Headquarter
          </h1>
          <p className=" text-black font-ppmori font-light">
            Office No.42 <br />
            Level 42, Emirates Towers <br />
            Sheikh Zayed Road <br />
            Dubai <br />
            United Arab Emirates
          </p>
        </div>
        <div>
          <h1 className="text-[1.5em] font-bold font-ppmori text-black">
            Legal address
          </h1>
          <p className=" text-black font-ppmori font-light">
            Office No.1809 - 1812 <br />
            Bayswater Bay By Omniyat <br />
            Busines Bay <br />
            Dubai <br />
            United Arab Emirates
          </p>
        </div>
        <div>
          <h1 className="text-[1.5em] font-bold font-ppmori text-black">
            General Enquiries
          </h1>
          <p className=" text-black font-ppmori font-light">
            email@velacapitals.com
            <br />
            +971 4 3132 002
            <br />
          </p>
        </div>
      </div>
      <div className="z-0">
        <div className="py-[0.25em]">
          <div className="flex">
            <div className="flex overflow-hidden ">
              <div className="flex animate-move-left [animation-duration:40s] whitespace-nowrap">
                {[...new Array(4)].map((_, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex items-center justify-center px-4">
                      <span
                        className="text-white-cream text-h1"
                      >
                        Relationships over Transactions
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col font-ppmori font-light"
        style={{ padding: "0 6.3281vw" }}
      >
        <p>© Copyright 2025 Vela Capitals Limited.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
