"use client";
import React, { useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import {
  product01,
  product02,
  product03,
  product04,
  product05,
  product06,
  product07,
} from "@/constants/image";
import GroupHover from "./GroupHover";
import Image from "next/image";
const produceData = [
  {
    id: 1,
    number: "(01)",
    title: "Rapeseed oil",
    content:
      "Our rapeseed oil is sourced to meet the rigorous standards of the food and manufacturing industries, offering a product that is renowned for its purity, stability, and consistent quality. Ideal for large-scale culinary and commercial applications, it provides a nutritious, versatile base for an extensive range of products.",
    image: product01,
  },
  {
    id: 2,
    number: "(02)",
    title: "Ammonia",
    content:
      "As a fundamental chemical in the agricultural and industrial sectors, our ammonia is produced to the highest safety and quality standards, ensuring it meets the stringent requirements for fertilizers and various chemical synthesis processes.",
    image: product02,
  },
  {
    id: 3,
    number: "(03)",
    title: "Sunflower oil",
    content:
      "Our sunflower oil is a high-quality product that serves the expansive needs of the food industry with its neutral flavor profile and nutritional value, making it a preferred choice for wholesalers and food processors.",
    image: product03,
  },
  {
    id: 4,
    number: "(04)",
    title: "Soya old",
    content:
      "Extracted from meticulously selected soybeans, our soya oil is a nutritionally rich ingredient known for its culinary flexibility and industrial applicability, particularly valued for its use in cooking, baking, and as a raw material in various chemical industries.",
    image: product04,
  },
  {
    id: 5,
    number: "(05)",
    title: "Feed meals",
    content:
      "Our feed meals provide a robust nutritional foundation for animal feed formulations. They are designed to optimize the health and productivity of livestock, meeting the demands of agricultural businesses for high-quality feed.",
    image: product05,
  },
  {
    id: 6,
    number: "(06)",
    title: "Methanol / Ethanol",
    content:
      "These fundamental industrial alcohols are supplied with a guarantee of purity and consistency, suitable for a wide range of applications, including as solvents, fuel additives, and in chemical manufacturing.",
    image: product06,
  },
  {
    id: 7,
    number: "(07)",
    title: "Mining materials",
    content:
      "We offer a comprehensive selection of mining materials, sourced to support the ongoing operations of the construction and manufacturing sectors. Our portfolio ensures a reliable supply of essential raw materials needed for production and infrastructure projects.",
    image: product07,
  },
];
const ProductList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="block md:hidden">
      {produceData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className={`w-full h-auto py-[0.5rem] border border-b-[#f4ecd71a] border-r-0 border-l-0 border-t-0 ${
              index !== 0 ? "mt-5" : ""
            }`}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <GroupHover
              number={item.number}
              title={item.title}
              textClassName="text-[#f85a3e] md:font-bold md:text-lg"
              numberClassName="text-[#f85a3e] md:font-bold md:text-lg"
              className="flex"
              initialColor="#f85a3e"
              hoveredColor="#fff"
            />
            <div
              className={` overflow-hidden transition-all duration-300 bg-[#f85a3e] ${
                isOpen ? "max-h-screen" : "max-h-0 "
              }`}
            >
              <div className="text-black font-dm-sans text-base/6 px-4 py-8">
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
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
