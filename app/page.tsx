"use client";

import React from "react";
import Link from "next/link";

export default function LuxuryHomePage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black pb-24 overflow-x-hidden">
      
      {/* Cinematic Video Hero */}
      <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 flex flex-col items-center text-center px-6 mt-20">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-serif uppercase tracking-widest text-[#EAEAEA] mb-6">
            Welcome to HY Watches
          </h1>
          <p className="max-w-2xl text-[#EAEAEA] text-[1rem] md:text-[1.1rem] leading-relaxed font-light tracking-wide">
            Providing perfectly customized products. We also buy and appraise genuine watches and luxury items.
          </p>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="w-full bg-black py-8 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto text-center px-4">
          <h4 className="text-[0.75rem] md:text-[0.85rem] tracking-[0.2em] uppercase text-white font-light">
            Complimentary Travel Case with Every Watch Purchase
          </h4>
        </div>
      </section>

      {/* Popular Collections Grid */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-[0.15em] text-white">Popular Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Link href="/collection" className="group relative h-[450px] md:h-[600px] overflow-hidden bg-[#111]">
            <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-yacht-master-42-226627-rlx-titanium-black-dial-2024-rolex-1193996764.jpg" alt="HY Watches Picks" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-10 w-full text-center z-10 px-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-mono block mb-2">HY Watches</span>
              <h3 className="text-2xl font-serif uppercase tracking-widest text-white">Our Picks</h3>
            </div>
          </Link>

          <Link href="/collection" className="group relative h-[450px] md:h-[600px] overflow-hidden bg-[#111]">
            <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-daytona-116500ln-stainless-steel-white-panda-dial-2018-rolex-1212087379.jpg" alt="Daytona" className="absolute inset-0 w-full h-full object-cover object-[31%_0%] opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-10 w-full text-center z-10 px-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-mono block mb-2">Popular Collections</span>
              <h3 className="text-2xl font-serif uppercase tracking-widest text-white">Daytona</h3>
            </div>
          </Link>

          <Link href="/collection" className="group relative h-[450px] md:h-[600px] overflow-hidden bg-[#111]">
            <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126710blnr-batgirl-stainless-steel-black-dial-jubilee-2021-rolex-1206409323.jpg" alt="GMT-Master II" className="absolute inset-0 w-full h-full object-cover object-[31%_0%] opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-10 w-full text-center z-10 px-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-mono block mb-2">Popular Collections</span>
              <h3 className="text-2xl font-serif uppercase tracking-widest text-white">GMT-Master II</h3>
            </div>
          </Link>

          <Link href="/collection" className="group relative h-[450px] md:h-[600px] overflow-hidden bg-[#111]">
            <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-datejust-41-126334-stainless-steel-blue-diamond-dial-jubilee-2021-rolex-1197074364.jpg" alt="Datejust" className="absolute inset-0 w-full h-full object-cover object-[31%_0%] opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-10 w-full text-center z-10 px-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-mono block mb-2">Popular Collections</span>
              <h3 className="text-2xl font-serif uppercase tracking-widest text-white">Datejust</h3>
            </div>
          </Link>

          <Link href="/collection" className="group relative h-[450px] md:h-[600px] overflow-hidden bg-[#111]">
            <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/patek-philippe-nautilus-5712-1a-001-tiffany-co-moon-phase-stainless-steel-patek-philippe-40740357636340.webp" alt="Nautilus" className="absolute inset-0 w-full h-full object-cover object-[31%_0%] opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-10 w-full text-center z-10 px-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-mono block mb-2">Popular Collections</span>
              <h3 className="text-2xl font-serif uppercase tracking-widest text-white">Nautilus</h3>
            </div>
          </Link>

          <Link href="/collection" className="group relative h-[450px] md:h-[600px] overflow-hidden bg-[#111]">
            <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-055-bubba-watson-white-ceramic-richard-mille-1155978505.jpg" alt="Richard Mille" className="absolute inset-0 w-full h-full object-cover object-[21%_55%] opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-10 w-full text-center z-10 px-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-mono block mb-2">Popular Collections</span>
              <h3 className="text-2xl font-serif uppercase tracking-widest text-white">Richard Mille</h3>
            </div>
          </Link>
        </div>
      </section>
      
    </main>
  );
}
