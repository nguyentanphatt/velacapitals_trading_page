"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import GroupHover from "./GroupHover";
import Image from "next/image";
import { productData } from "@/constants/data";

const ProductListHover = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="hidden md:block lg:hidden">
      {productData.map((item, index) => {
        const isOpen = hoveredIndex === index;
        return (
          <div
            key={item.id}
            className={`w-full h-auto lg:grid lg:grid-cols-2 py-[0.5rem] border border-b-[#f4ecd71a] border-r-0 border-l-0 border-t-0 ${
              index !== 0 ? "mt-5" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <GroupHover
              number={item.number}
              title={item.title}
              textClassName="text-[#f85a3e] md:font-bold md:text-lg ml-[10px]"
              numberClassName="text-[#f85a3e] md:font-bold md:text-lg"
              className="flex lg:col-span-1 lg:order-2"
              initialColor="#f85a3e"
              hoveredColor="#fff"
            />
            <div
              className={` lg:col-span-1 lg:order-1 overflow-hidden transition-all duration-300 bg-[#f85a3e] ${
                isOpen ? "max-h-screen" : "max-h-0 "
              }`}
            >
              <div className="text-black font-dm-sans text-base/6 px-4 py-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="text-p1"
                  style={{
                    lineHeight: 1.4,
                  }}
                >
                  {item.content}
                </motion.p>
                <br />
                <motion.div
                  initial={{ y: 10 }}
                  animate={{
                    y: isOpen ? 0 : 10,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  className="relative"
                >
                  <motion.div>
                    <Image
                      src={item.image}
                      alt="Product"
                      width={600}
                      height={600}
                      className="relative w-full h-full"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: isOpen ? "100%" : 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    className="absolute z-10 top-0 left-0 w-full h-full bg-[#f85a3e]"
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="text-black text-h1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    {item.number}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListHover;
