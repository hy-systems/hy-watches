"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--line)", padding: "80px 0 40px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
          <div>
            <div className="mono" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.05em", color: "var(--txt)" }}>
              HY WATCHES
            </div>
            <p className="body" style={{ marginTop: 16, maxWidth: 320, fontSize: "0.9rem", color: "var(--txt2)" }}>
              Precision timepieces. Uncompromised sourcing.
            </p>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="mono" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--txt3)", marginBottom: 8 }}>
                Connect
              </div>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="body" style={{ fontSize: "0.9rem", color: "var(--txt1)", textDecoration: "none" }}>
                WhatsApp
              </a>
              <a href="mailto:contact@hywatches.com.au" className="body" style={{ fontSize: "0.9rem", color: "var(--txt1)", textDecoration: "none" }}>
                Email
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="mono" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--txt3)", marginBottom: 8 }}>
                Social
              </div>
              <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" className="body" style={{ fontSize: "0.9rem", color: "var(--txt1)", textDecoration: "none" }}>
                Instagram
              </a>
              <a href="https://tiktok.com/@yourtiktok" target="_blank" rel="noopener noreferrer" className="body" style={{ fontSize: "0.9rem", color: "var(--txt1)", textDecoration: "none" }}>
                TikTok
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: 24, flexWrap: "wrap", gap: 16 }}>
          <div className="mono" style={{ fontSize: "0.75rem", color: "var(--txt3)" }}>
            © {new Date().getFullYear()} HY Watches. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy" className="mono" style={{ fontSize: "0.75rem", color: "var(--txt3)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" className="mono" style={{ fontSize: "0.75rem", color: "var(--txt3)", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
