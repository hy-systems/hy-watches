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
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner wrap">
        <Link href="/" className="nav__logo mono" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.05em" }}>
          HY WATCHES
        </Link>
        <div className="nav__links" style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link href="/#arsenal" className="nav__link" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Collection
          </Link>
          <a 
            href="https://wa.me/yourwhatsappnumber" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav__link"
            style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--acc1)" }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
