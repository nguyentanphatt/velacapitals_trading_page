"use client";
import { useRef, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ValuesSection from "@/sections/ValuesSection";
import GroupHover from "@/components/GroupHover";
import ProductsSection from "@/sections/ProductsSection";
import AText from "@/public/icon/a.svg";
import TargetSection from "@/sections/TargetSection";
import Footer from "@/sections/Footer";
export default function Home() {
  const aboutRef = useRef(null);
  const valuesRef = useRef(null);
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const targetRef = useRef(null);

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
  const { scrollYProgress: productProgress } = useScroll({
    target: productsRef,
    offset: ["start center", "end center"],
  });
  const { scrollYProgress: targetProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });
  const progressBarOpacity = useTransform(heroProgress, [0, 0.9], [0, 1]);
  const targetFadeOut = useTransform(targetProgress, [0.95, 1], [1, 0]);
  const combinedOpacity = useTransform(
    [progressBarOpacity, targetFadeOut],
    ([p1, p2]: number[]) => p1 * p2
  );
  const [isProductsActive, setIsProductstActive] = useState(false);

  useMotionValueEvent(productProgress, "change", (latest) => {
    setIsProductstActive(latest > 0.1);
  });

  return (
    <div className="font-ppmori bg-white-cream relative">
      <section ref={heroRef}>
        <HeroSection />
      </section>
      <Header isProductsInView={isProductsActive} />

      {/* Progress Bar */}
      <motion.div
        style={{
          opacity: combinedOpacity,
        }}
        className="hidden lg:block fixed bottom-0 left-0 w-full bg-transparent hover:bg-[#f54f32] z-50 py-8 group"
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
            <GroupHover number="(03)" title="Products" />
            <div className="w-full h-1 bg-white/50">
              <motion.div
                style={{ scaleX: productProgress }}
                className="h-full origin-left bg-[#f54f32] group-hover:bg-white"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <GroupHover number="(04)" title="Target Markets" />
            <div className="w-full h-1 bg-white/50">
              <motion.div
                style={{ scaleX: targetProgress }}
                className="h-full origin-left bg-[#f54f32] group-hover:bg-white"
              />
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
      <section ref={productsRef}>
        <ProductsSection />
      </section>
      <section ref={targetRef}>
        <TargetSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
