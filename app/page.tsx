"use client";

import React from "react";

export default function LucyHomePage() {
  return (
    <main className="bg-[#f9f9f9] min-h-screen text-black font-sans overflow-x-hidden">
      
      {/* Video Hero Banner */}
      <section className="relative w-full h-[60vh] md:h-[56.25vw] max-h-[800px] min-h-[400px] overflow-hidden bg-black">
        {/* Dark overlay matching Lucy Timepieces opacity */}
        <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Welcome Text Section */}
      <section className="w-full bg-[#f9f9f9] pt-12 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-medium uppercase tracking-[0.05em] text-black mb-4">
            Welcome to LUCY TIMEPIECES
          </h2>
          <p className="text-[#333] text-[1rem] leading-relaxed max-w-xl font-light">
            Providing perfectly customized products.<br />
            We also buy and appraise genuine watches and luxury items.
          </p>
        </div>
      </section>

    </main>
  );
}
