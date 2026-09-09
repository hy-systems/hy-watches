"use client";

import React, { useEffect, useState } from "react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const lineY = useTransform(scrollY, [0, 300], [0, 50]);
  const lineOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const ease = [0.76, 0, 0.24, 1];

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black">
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-[#D4AF37] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="z-10 flex flex-col items-center text-center px-6 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease }}
          >
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] font-serif tracking-tight text-[#EAEAEA]">
              Precision
            </h1>
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] font-serif tracking-tight text-[#D4AF37] italic mt-4 md:mt-2">
              Uncompromised.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease }}
            className="mt-12 max-w-md text-[#888] text-[0.85rem] leading-loose font-light tracking-wide uppercase"
          >
            Anonymous settlement. Flawless execution. Access 1:1 factory builds without retail friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8, ease }}
            className="mt-16 flex items-center gap-12"
          >
            <a href="https://wa.me/yourwhatsappnumber" className="group relative px-10 py-4 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-700 ease-out">
              <span className="relative z-10 text-[0.65rem] uppercase tracking-[0.3em] font-medium text-[#D4AF37]">Secure Allocation</span>
              <div className="absolute inset-0 bg-[#D4AF37] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-[0.65rem] uppercase tracking-[0.3em] font-medium text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Secure Allocation</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ opacity: lineOpacity, y: lineY }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#555] rotate-90 mb-6">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </section>

      <section className="py-56 px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-40">
          <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.4em] mb-8">The Collection</span>
          <h2 className="text-[clamp(2rem,5vw,4rem)] text-white font-serif leading-tight">Mastery in replication.</h2>
        </div>

        <div className="flex flex-col gap-40 md:gap-56">
          {collection.map((watch, i) => (
            <motion.div 
              key={watch.ref}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.5, ease }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}
            >
              <div className="w-full md:w-1/2 flex justify-center relative group">
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 rounded-full blur-[100px] transition-colors duration-1000" />
                <div className="w-64 h-64 md:w-96 md:h-96 border border-white/5 rounded-full flex items-center justify-center text-[#333] text-xs relative z-10 group-hover:scale-105 transition-transform duration-[1.5s] ease-out">
                  [WATCH ASSET {watch.ref}]
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-[1px] bg-[#D4AF37]" />
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">REF. {watch.ref}</span>
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#888] mb-2">{watch.brand}</h4>
                <h3 className="text-4xl md:text-5xl text-white font-serif mb-12">{watch.model}</h3>
                
                <div className="grid grid-cols-1 gap-8 w-full border-t border-white/10 pt-8">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#555] mb-2">Movement</span>
                    <span className="text-sm text-[#EAEAEA] font-light tracking-wide">{watch.movement}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#555] mb-2">Architecture</span>
                    <span className="text-sm text-[#EAEAEA] font-light tracking-wide">{watch.case}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-40 bg-[#020202]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="md:w-1/3 sticky top-40">
              <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.4em] mb-6 block">Acquisition</span>
              <h2 className="text-4xl md:text-5xl text-white font-serif leading-tight">
                Secure logistics.
              </h2>
            </div>
            
            <div className="md:w-1/2 flex flex-col gap-24 relative">
              <div className="absolute left-[3px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37]/50 via-white/10 to-transparent hidden md:block" />
              
              {[
                { label: "QUALITY CONTROL", value: "Factory Validation", desc: "Every timepiece undergoes rigorous movement regulation, water resistance testing, and microscopic aesthetic inspection before leaving the assembly facility." },
                { label: "ROUTING", value: "Triangular Transit", desc: "Shipments are routed through low-risk European intermediate hubs to ensure absolute clearance and anonymity upon final delivery." },
                { label: "DELIVERY", value: "10-20 Business Days", desc: "A calculated timeline designed strictly for security, ensuring your asset arrives without friction or retail exposure." }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: i * 0.15, ease }}
                  className="relative md:pl-12"
                >
                  <div className="absolute left-[-2px] top-1.5 w-3 h-3 bg-[#050505] border border-[#D4AF37] rounded-full hidden md:block" />
                  <div className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4">{stat.label}</div>
                  <div className="text-2xl md:text-3xl text-white font-serif mb-4">{stat.value}</div>
                  <div className="text-[#888] text-sm leading-relaxed font-light">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
