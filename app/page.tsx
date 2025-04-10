"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ValuesSection from "@/sections/ValuesSection";
import { RevealLinks } from "@/components/test";
import { RevealLinks02 } from "@/components/test02";
import StaggerText from "@/components/StaggerText";
import HoverDots from "@/components/GroupHover";
import GroupHover from "@/components/GroupHover";
import ProductsSection from "@/sections/ProductsSection";

export default function Home() {
  const aboutRef = useRef(null);
  const valuesRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start center", "end center"],
  });

  const { scrollYProgress: valuesProgress } = useScroll({
    target: valuesRef,
    offset: ["start center", "end center"],
  });
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "end start"],
  });
  const progressBarOpacity = useTransform(heroProgress, [0, 0.9], [0, 1]);
  return (
    <div className="font-ppmori bg-white-cream relative">
      <section ref={heroRef}>
        <HeroSection />
      </section>
      <Header />

      {/* Progress Bar */}
      <motion.div
        style={{
          opacity: progressBarOpacity,
        }}
        className="fixed bottom-0 left-0 w-full bg-transparent hover:bg-[#f54f32] z-50 py-8 group"
      >
        {/* About Section */}
        <div className="py-0 px-[6.3281vw] grid grid-cols-4 gap-8">
          <div className="flex flex-col">
            <GroupHover number="(01)" title="About" />
            <div className="w-full h-1 bg-white/50">
              <motion.div
                style={{ scaleX: aboutProgress }}
                className="h-full origin-left bg-[#f54f32] group-hover:bg-white"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="flex flex-col">
            <GroupHover number="(02)" title="Values" />
            <div className="w-full h-1 bg-white/50">
              <motion.div
                style={{ scaleX: valuesProgress }}
                className="h-full origin-left bg-[#f54f32] group-hover:bg-white"
              />
            </div>
          </div>

          {/* Placeholder for future sections */}
          <div className="flex flex-col">
            <span className="text-black font-medium hidden group-hover:block">
              (03) Future
            </span>
            <div className="w-full h-1 bg-white/50">
              {/* Add motion.div when ready */}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-black font-medium hidden group-hover:block">
              (04) Last
            </span>
            <div className="w-full h-1 bg-white/50">
              {/* Add motion.div when ready */}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sections */}
      <section ref={aboutRef}>
        <AboutSection />
      </section>

      <section ref={valuesRef}>
        <ValuesSection />
      </section>
      <section>
        <ProductsSection />
      </section>
      <div className="h-[100vh]">

      </div>
    </div>
  );
}
