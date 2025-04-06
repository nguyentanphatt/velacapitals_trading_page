"use client";
import HeroSection from "@/sections/HeroSection";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
/*   const [showHero, setShowHero] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []); */
  return (
    <div className="font-ppmori">
{/*       <div className="relative w-full h-screen overflow-hidden">
        
        motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showHero ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full h-screen"
        >
          
        </motion.div>
        
      </div> */}
      <HeroSection />
    </div>
  );
}
