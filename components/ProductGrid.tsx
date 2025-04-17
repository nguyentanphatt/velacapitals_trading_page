'use client'
import React, { useState } from 'react'
import {motion } from "motion/react";
import GroupHover from './GroupHover';
import Image from 'next/image';
import { productData } from '@/constants/data';

const ProductGrid = () => {
      const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="relative w-full hidden lg:block">
        <div className="grid grid-rows-[repeat(produceData.length,_auto)] ml-[100px]">
          {productData.map((item, index) => (
            <div key={item.id} className="grid grid-cols-2 w-full">
              <div className="col-span-1"></div>
              <div
                className={`col-span-1 w-full py-2 border-b border-[#f4ecd71a] ${
                  index !== 0 ? "mt-5" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <GroupHover
                  number={item.number}
                  title={item.title}
                  textClassName="text-[#f85a3e] md:font-bold md:text-lg lg:text-3xl lg:ml-5"
                  numberClassName="text-[#f85a3e] md:font-bold md:text-lg lg:text-3xl"
                  className="flex"
                  initialColor="#f85a3e"
                  hoveredColor="#fff"
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute z-10 top-0 left-[calc(50%-20px)] w-20 h-full"
          onMouseEnter={() => setHoveredIndex(hoveredIndex)}
          onMouseLeave={() => setHoveredIndex(null)}
        ></div>
        <div
          className="absolute z-10 top-0 left-0 w-1/2 h-auto overflow-hidden transition-all duration-300"
          onMouseEnter={() => setHoveredIndex(hoveredIndex)} // giữ nguyên index
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {productData.map((item, index) => {
            const isOpen = hoveredIndex === index;
            return (
              <div
                key={index}
                className={` col-span-1 order-1 overflow-hidden transition-all duration-300 bg-[#f85a3e] ${
                  isOpen ? "max-h-screen" : "max-h-0 "
                }`}
              >
                <div className="text-black font-dm-sans text-base/6 px-28 py-14">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className=""
                    style={{
                      fontSize: "calc(.7575rem + .70714vw);",
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
                      className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ fontSize: "calc(.87375rem + 11.66786vw)" }}
                    >
                      {item.number}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default ProductGrid