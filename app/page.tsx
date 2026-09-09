"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const collection = [
  {
    ref: "01",
    brand: "ROLEX",
    model: "Datejust 126234",
    movement: "VS3235 / VR3235",
    case: "36 MM / OYSTERSTEEL",
    img: "/rolex-dj.png"
  },
  {
    ref: "02",
    brand: "PATEK PHILIPPE",
    model: "Nautilus 5711/1A",
    movement: "CALIBER 324 SC",
    case: "40 MM / STAINLESS STEEL",
    img: "/patek-nautilus.png"
  },
  {
    ref: "03",
    brand: "AUDEMARS PIGUET",
    model: "Royal Oak 15510ST",
    movement: "CALIBER 4302",
    case: "41 MM / STAINLESS STEEL",
    img: "/ap-royal-oak.png"
  },
  {
    ref: "04",
    brand: "CARTIER",
    model: "Panthère",
    movement: "SWISS QUARTZ",
    case: "SMALL / STAINLESS STEEL",
    img: "/cartier-panthere.png"
  }
];

export default function LuxuryHomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    // Only bind mouse events on desktop devices
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", updateMouse);
    }
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  const handleHoverStart = () => setIsHovering(true);
  const handleHoverEnd = () => setIsHovering(false);

  const cinematicEase = [0.25, 1, 0.5, 1];

  return (
    <main ref={containerRef} className="bg-[#050505] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* Hyper-Responsive Custom Cursor (Disabled on Mobile) */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference rounded-full"
        animate={{
          x: mousePos.x - (isHovering ? 24 : 4),
          y: mousePos.y - (isHovering ? 24 : 4),
          width: isHovering ? 48 : 8,
          height: isHovering ? 48 : 8,
          borderWidth: isHovering ? 1 : 0,
          borderColor: "#D4AF37",
          backgroundColor: isHovering ? "transparent" : "#D4AF37",
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.1 }}
      />

      {/* Cinematic Hero */}
      <section className="relative h-[100dvh] min-h-[600px] w-full flex flex-col items-center justify-center">
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="z-10 flex flex-col items-center text-center w-full px-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: cinematicEase }}
          >
            <h1 className="text-[clamp(3rem,12vw,8rem)] leading-[0.9] font-serif tracking-tight text-[#EAEAEA]">
              Precision
            </h1>
            <h1 className="text-[clamp(3rem,12vw,8rem)] leading-[0.9] font-serif tracking-tight text-[#D4AF37] italic mt-1 md:mt-2">
              Uncompromised.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: cinematicEase }}
            className="mt-8 max-w-lg text-[#888] text-[0.8rem] md:text-[0.85rem] leading-[1.7] font-light tracking-wide px-4 md:px-0"
          >
            Engineered for those who know the difference. Anonymous settlement. Flawless execution. Access 1:1 factory builds without retail friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: cinematicEase }}
            className="mt-12 flex gap-8 w-full md:w-auto px-5 md:px-0"
          >
            <a 
              href="https://wa.me/yourwhatsappnumber" 
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="relative w-full md:w-auto px-8 py-4 border border-[#D4AF37] md:border-[#D4AF37]/40 md:hover:border-[#D4AF37] overflow-hidden group transition-colors duration-700 flex justify-center items-center"
            >
              <span className="relative z-10 text-[0.65rem] uppercase tracking-[0.25em] text-[#D4AF37] md:group-hover:text-black transition-colors duration-700 delay-100">
                Secure Allocation
              </span>
              <div className="absolute inset-0 bg-[#D4AF37] w-0 md:group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-0 hidden md:block" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Horizontal Carousel Collection (Rolex Style - Touch Native) */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="px-5 md:px-20 mb-12 md:mb-16 flex justify-between items-end">
          <h2 className="text-[clamp(2rem,6vw,4rem)] text-white font-serif leading-tight">The Collection.</h2>
          <span className="text-[#D4AF37] text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono mb-2">Swipe</span>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:gap-10 px-5 md:px-20 pb-10">
          {collection.map((watch, i) => (
            <motion.div 
              key={watch.ref}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: cinematicEase }}
              className="snap-center snap-always min-w-[85vw] md:min-w-[450px] flex flex-col group md:cursor-none"
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
            >
              <div className="w-full h-[350px] md:h-[550px] relative flex items-center justify-center bg-transparent mb-6 md:mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000 z-0" />
                <div className="relative z-10 w-full h-full border border-white/10 md:border-white/5 flex items-center justify-center text-xs text-[#333] md:group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]">
                  [TRANSPARENT WATCH ASSET]
                </div>
              </div>

              <div className="flex flex-col items-start w-full">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <span className="w-6 h-[1px] bg-[#D4AF37]" />
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-mono">REF. {watch.ref}</span>
                </div>
                <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#888] font-mono mb-1">{watch.brand}</h4>
                <h3 className="text-2xl md:text-3xl text-white font-serif mb-6">{watch.model}</h3>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col">
                    <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-[#555] font-mono mb-1">Movement</span>
                    <span className="text-[10px] md:text-xs text-[#EAEAEA] font-mono tracking-wide">{watch.movement}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-[#555] font-mono mb-1">Case</span>
                    <span className="text-[10px] md:text-xs text-[#EAEAEA] font-mono tracking-wide">{watch.case}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Edge-to-Edge Typography Banner */}
      <section className="py-24 md:py-40 bg-[#111] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl text-white font-serif leading-[1.1] mb-8">
              Absolute security. <br/> Zero retail friction.
            </h2>
            <a 
              href="/terms" 
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="inline-flex items-center gap-4 text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] group"
            >
              Read Operating Terms
              <span className="transform md:group-hover:translate-x-2 transition-transform duration-500 ease-out">→</span>
            </a>
          </div>
          
          <div className="flex flex-col gap-10 md:gap-12">
            {[
              { title: "Sourcing", desc: "Every asset is individually sourced, validated for weight and dimension, and photographically verified before you authorize dispatch." },
              { title: "Logistics", desc: "We utilize established European routing corridors to bypass regional scrutiny. 10 to 20 business days to clear and deliver." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.2, ease: cinematicEase }}
                className="flex flex-col"
              >
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-[#EAEAEA] mb-2 md:mb-3">{item.title}</div>
                <div className="text-[#888] text-[0.8rem] md:text-[0.85rem] leading-[1.7] font-light">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
