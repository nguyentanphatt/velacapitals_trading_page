"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";
import ProductGrid from "@/components/ProductGrid";
import ProductList from "@/components/ProductList";
import ProductListHover from "@/components/ProductListHover";
import AText from "@/public/icon/a.svg";

const ProductsSection = () => {
  const ref = useRef(null);
  const scroll = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const slowY = useTransform(scroll.scrollYProgress, [0, 1], [0, -50]);
  return (
    <div className="h-auto bg-[#191810]">
      <div
        className="pt-[50px]"
        style={{ paddingTop: `calc(0.8275rem + 7.30714vw) 0px` }}
      >
        <div ref={ref} className="w-full" style={{ padding: `0px 6.3281vw;` }}>
          <div className="grid auto-rows-auto gap-1 lg:grid-cols-12 lg:gap-x-[20px] lg:grid-rows-4">
            <div className="lg:flex-row lg:items-center lg:justify-between flex flex-col lg:col-span-12 lg:row-span-1">
              <motion.span
                className=" text-white-cream text-h3"
                style={{
                  y: slowY,
                  lineHeight: 1,
                }}
              >
                03
              </motion.span>

              <motion.span
                className=" text-white-cream text-h3"
                style={{
                  y: slowY,
                  lineHeight: 1,
                }}
              >
                Products
              </motion.span>
            </div>
            <div className="lg:col-span-5 lg:grid lg:grid-rows-4 lg:row-span-3">
              <p
                className="text-h6 font-ppmori text-white-cream lg:col-span-5 lg:row-start-1 lg:row-end-5"
              >
                Our commitment to a client-focused approach ensures personalized
                and discreet services, while our strong relationships with key
                industry players enable us to navigate complex negotiations and
                logistics for optimal results. This suite of services is
                designed to empower our clients with strategic advantages in a
                dynamic global marketplace.
              </p>
            </div>
          </div>
          <div
            className="block lg:hidden"
            style={{ paddingTop: "calc(.8275rem + 7.30714vw)" }}
          >
            <ProductList />
            <ProductListHover />
          </div>
        </div>
      </div>
      <ProductGrid />

      <div className="mt-[100px] lg:mt-[200px]" style={{ padding: `0px 6.3281vw;` }}>
        <div
          className="text-white-cream font-bold text-p1"
        >
          Our process
        </div>
        <div className="relative overflow-x-auto">
          <div className="text-p1 absolute top-9.5 xl:top-8.5 z-0 flex items-center text-white-cream gap-[17px] ml-[40px]">
            <p
              className="w-[230px]"
            >
              Inquiry Submission
            </p>
            <p
              className="w-[230px]"
            >
              Inquiry Assessment
            </p>
            <p
              className="w-[230px]"
            >
              Options Presentation
            </p>
            <p
              className="w-[230px]"
            >
              Partnership Agreement
            </p>
          </div>
          <AText className=" relative h-[600px] bg-transparent max-w-[1400px]" />
          <div className="absolute bottom-48 xl:bottom-44 flex text-white-cream gap-[25px] ml-[40px] text-p4">
            <p
              className="w-[230px]"
            >
              (01) Define your business inquiry, specifying your sector’s
              concentration, product priorities, and target markets.
            </p>
            <p
              className="w-[230px]"
            >
              (02) In response to your detailed inquiry, we will compile a set
              of incisive questions to ensure alignment with your objectives and
              facilitate the formulation of a tailored proposal.
            </p>
            <p
              className="w-[230px]"
            >
              (03) Our proposition will include a conceptual framework of your
              supplier ecosystem and a delineation of ancillary services that
              could enhance your operational efficiency.
            </p>
            <p
              className="w-[230px]"
            >
              (04) In response to your detailed inquiry, we will compile a set
              of incisive questions to ensure alignment with your objectives and
              facilitate the formulation of a tailored proposal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
