"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${scrolled ? 'bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-mono text-[1.1rem] font-bold tracking-[0.05em] text-white">
          HY WATCHES
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-[0.85rem] uppercase tracking-[0.1em] text-white hover:text-[#D4AF37] transition-colors">
            Collection
          </Link>
          <a 
            href="https://wa.me/yourwhatsappnumber" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[0.85rem] uppercase tracking-[0.1em] text-[#D4AF37] hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
