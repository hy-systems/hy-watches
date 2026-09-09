"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-10">
        <div className="flex justify-between flex-wrap gap-10">
          <div>
            <div className="font-mono text-[1.1rem] font-bold tracking-[0.05em] text-white">
              HY WATCHES
            </div>
            <p className="mt-4 max-w-[320px] text-[0.9rem] text-[#888888]">
              Precision timepieces. Uncompromised sourcing.
            </p>
          </div>
          <div className="flex gap-12 flex-wrap">
            <div className="flex flex-col gap-3">
              <div className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-[#555555] mb-2">
                Connect
              </div>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-[0.9rem] text-white hover:text-[#D4AF37] transition-colors">
                WhatsApp
              </a>
              <a href="mailto:contact@hywatches.com.au" className="text-[0.9rem] text-white hover:text-[#D4AF37] transition-colors">
                Email
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-[#555555] mb-2">
                Social
              </div>
              <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" className="text-[0.9rem] text-white hover:text-[#D4AF37] transition-colors">
                Instagram
              </a>
              <a href="https://tiktok.com/@yourtiktok" target="_blank" rel="noopener noreferrer" className="text-[0.9rem] text-white hover:text-[#D4AF37] transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-white/10 pt-6 flex-wrap gap-4">
          <div className="font-mono text-[0.75rem] text-[#555555]">
            © {new Date().getFullYear()} HY Watches. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-mono text-[0.75rem] text-[#555555] hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-mono text-[0.75rem] text-[#555555] hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
