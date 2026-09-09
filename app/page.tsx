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
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const ease = [0.76, 0, 0.24, 1];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-[#D4AF37] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20 bg-[#050505]">
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="z-10 flex flex-col items-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, ease }}
          >
            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-white font-serif tracking-tight">
              Precision timepieces.
            </h1>
            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-[#888888] italic mt-2 font-serif tracking-tight">
              Uncompromised sourcing.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease }}
            className="mt-10 max-w-lg text-[#A0A0A0] text-base leading-relaxed font-light"
          >
            Engineered for those who know the difference. Anonymous settlement. Flawless execution. Access 1:1 factory builds without retail friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease }}
            className="mt-14 flex items-center gap-10"
          >
            <a href="https://wa.me/yourwhatsappnumber" className="group relative px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black overflow-hidden transition-all duration-500">
              <span className="relative z-10 text-[0.75rem] uppercase tracking-[0.2em] font-medium">WhatsApp Inquiry</span>
            </a>
            <a href="mailto:contact@hywatches.com.au" className="relative group text-[0.75rem] uppercase tracking-[0.2em] text-[#888888] hover:text-white transition-colors pb-1">
              Email Desk
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-8 border-y border-white/10 bg-[#0A0A0A] overflow-hidden ticker-mask">
        <div className="flex w-max animate-ticker">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#555] mx-8 font-mono">ROLEX</span>
              <span className="text-[#D4AF37] text-xs">♦</span>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#555] mx-8 font-mono">PATEK PHILIPPE</span>
              <span className="text-[#D4AF37] text-xs">♦</span>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#555] mx-8 font-mono">AUDEMARS PIGUET</span>
              <span className="text-[#D4AF37] text-xs">♦</span>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#555] mx-8 font-mono">CARTIER</span>
              <span className="text-[#D4AF37] text-xs">♦</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 px-6 max-w-[1400px] mx-auto bg-[#050505]">
        <div className="text-center mb-24">
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-mono">The Collection</span>
          <h2 className="text-4xl md:text-5xl mt-6 text-white font-serif">Four references. One standard.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collection.map((watch, i) => (
            <motion.div 
              key={watch.ref}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.1, ease }}
              className="group relative bg-[#0A0A0A] border border-white/5 p-12 overflow-hidden hover:border-[#D4AF37]/30 transition-colors duration-700"
            >
              <div className="flex justify-between items-center z-10 relative text-[10px] uppercase tracking-[0.2em] font-mono text-[#555]">
                <span>REF. {watch.ref}</span>
                <span>{watch.brand}</span>
              </div>

              <div className="h-[350px] w-full flex items-center justify-center my-12 relative z-10">
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 rounded-full blur-3xl transition-colors duration-1000" />
                <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center text-[#333] text-xs group-hover:scale-105 transition-transform duration-1000">[WATCH ASSET]</div>
              </div>

              <div className="relative z-10 border-t border-white/5 pt-8">
                <h3 className="text-2xl text-white mb-6 font-serif">{watch.model}</h3>
                <div className="grid grid-cols-2 gap-4 text-[10px] font-mono tracking-[0.1em]">
                  <div>
                    <div className="text-[#555] mb-1">MOVEMENT</div>
                    <div className="text-[#EAEAEA]">{watch.movement}</div>
                  </div>
                  <div>
                    <div className="text-[#555] mb-1">CASE</div>
                    <div className="text-[#EAEAEA]">{watch.case}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-40 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-mono">Operations</span>
            <h2 className="text-4xl text-white mt-6 leading-tight font-serif">
              Controlled at every handoff.
            </h2>
          </div>
          
          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-16">
            {[
              { label: "QUALITY CONTROL / SOURCING", value: "3 to 5 Days", desc: "Factory sourcing, inspection, movement validation, and final photographic verification before dispatch." },
              { label: "CUSTOMS RISK CONTROL", value: "Triangular Routing", desc: "Low-risk transit through established intermediate hubs, including Germany or the United Kingdom." },
              { label: "TOTAL TRANSIT", value: "10 to 20 Days", desc: "Measured from confirmed dispatch through routing and final delivery to your destination." }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease }}
                className="border-b border-white/5 pb-12"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#555] mb-4">{stat.label}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-baseline">
                  <div className="text-4xl md:text-5xl text-white tracking-tight">{stat.value}</div>
                  <div className="text-[#888888] text-sm leading-relaxed">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
