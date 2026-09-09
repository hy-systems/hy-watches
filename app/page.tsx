"use client";

import React from "react";
import { Orbs, ParticleField } from "../components/fx";
import {
  SplitText,
  Reveal,
  Spotlight,
  LinkButton,
  Arrow,
  IShield,
  IClock,
  ICheck,
  ICross,
  IDot,
  IRoute,
  IDatabase,
  IBolt,
} from "../components/primitives";

const watchCollection = [
  {
    brand: "Rolex",
    model: "Datejust 126234",
    specs: "VSF or Clean Factory / VS3235 or VR3235 Movement",
    desc: "Fluted bezel and Jubilee bracelet. 904L Oystersteel construction with exact weight and dimension mirroring the genuine article.",
    icon: <IClock />,
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus 5711/1A",
    specs: "3KF Factory / Caliber 324 SC Clone",
    desc: "Integrated stainless steel architecture. Ultra-thin profile matching the original down to the millimeter, featuring a fully decorated rotor.",
    icon: <IShield />,
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak 15510ST",
    specs: "ZF or APSF Factory / Caliber 4302 Clone",
    desc: "Signature octagonal bezel with exposed screws. Tapisserie dial with correct light interplay and seamless bracelet finishing.",
    icon: <IBolt />,
  },
  {
    brand: "Cartier",
    model: "Panthère",
    specs: "BVF Factory / Swiss Quartz",
    desc: "Classic square dial with Roman numerals. Blued-steel sword-shaped hands and a synthetic blue spinel crown.",
    icon: <IDot />,
  },
];

const logistics = [
  {
    n: "01",
    t: "Sourcing & Assembly",
    d: "Your timepiece is sourced directly from top-tier factories like VSF, Clean, or 3KF. No mid-tier substitutes.",
  },
  {
    n: "02",
    t: "Quality Control (3-5 Days)",
    d: "We provide high-resolution photos and timegrapher readings for your approval before dispatch.",
  },
  {
    n: "03",
    t: "Triangular Shipping",
    d: "Parcels are routed through an intermediate low-risk customs jurisdiction, like Germany or the UK, to ensure secure transit.",
  },
  {
    n: "04",
    t: "Settlement & Delivery (10-20 Days)",
    d: "Final delivery occurs via localized couriers. Payments are settled anonymously via cryptocurrency or direct peer-to-peer rail.",
  },
];

const guarantees = [
  { v: "3 - 5", k: "Days for QC and media verification" },
  { v: "10 - 20", k: "Business days total transit time" },
  { v: "100%", k: "Customs clearance via triangular routing" },
];

const standardRetail = [
  "Endless waitlists and AD games",
  "Artificial scarcity and gatekeeping",
  "Inflated secondary market premiums",
  "Opaque inventory management",
  "Tied purchases required for allocation",
];

const hyWatches = [
  "Direct access to top-tier factory builds",
  "1:1 weight, dimensions, and materials",
  "Transparent QC data before shipment",
  "Anonymous, intermediary-free settlement",
  "Secure triangular shipping logistics",
];

export default function HomePage() {
  return (
    <>
      <header
        id="top"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Orbs />
        <ParticleField />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 22%, transparent 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div
          className="wrap"
          style={{ position: "relative", zIndex: 3, paddingTop: 130, paddingBottom: 90 }}
        >
          <div className="eyebrow fade-up" style={{ animationDelay: "60ms" }}>
            HY Watches / High-Fidelity Timepieces
          </div>
          <h1 className="h1" style={{ marginTop: 28, maxWidth: 1000 }}>
            <SplitText
              text="Precision timepieces. Uncompromised sourcing."
              accent={["Precision", "timepieces.", "Uncompromised"]}
              baseDelay={180}
              stagger={44}
            />
          </h1>
          <p
            className="lede fade-up"
            style={{ marginTop: 30, maxWidth: 660, animationDelay: "760ms" }}
          >
            Engineered for those who know the difference. Anonymous settlement. Flawless execution. Access 1:1 factory builds without retail friction.
          </p>
          <div
            className="fade-up"
            style={{
              marginTop: 42,
              display: "flex",
              gap: 16,
              alignItems: "center",
              flexWrap: "wrap",
              animationDelay: "880ms",
            }}
          >
            <LinkButton href="https://wa.me/yourwhatsappnumber" variant="primary">
              WhatsApp <Arrow />
            </LinkButton>
            <LinkButton href="mailto:contact@hywatches.com.au" variant="primary">
              Email <Arrow />
            </LinkButton>
            <LinkButton href="https://instagram.com/yourinstagram" variant="ghost">
              Instagram
            </LinkButton>
            <LinkButton href="https://tiktok.com/@yourtiktok" variant="ghost">
              TikTok
            </LinkButton>
          </div>
        </div>
      </header>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__t">
          {[0, 1].map((k) => (
            <span key={k}>
              Rolex&nbsp;&nbsp;Patek Philippe&nbsp;&nbsp;Audemars Piguet&nbsp;&nbsp;Cartier&nbsp;&nbsp;Triangular Shipping&nbsp;&nbsp;Seamless Settlement&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <section style={{ background: "var(--bg)" }}>
        <div className="wrap" style={{ paddingTop: 120, paddingBottom: 60 }}>
          <Reveal>
            <div className="eyebrow">The Contrast</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2" style={{ marginTop: 26, maxWidth: 980 }}>
              Bypass the retail games. Secure exact specifications.
            </h2>
          </Reveal>
          <div style={{ marginTop: 46, maxWidth: 780, display: "grid", gap: 30 }}>
            <Reveal delay={130}>
              <p className="body">
                The traditional luxury market is built on artificial scarcity and opaque allocations. We provide a direct conduit to high-fidelity, meticulously assembled timepieces that bypass the gatekeepers.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="wrap" style={{ paddingBottom: 120 }}>
          <Reveal delay={60}>
            <div className="cols2">
              <div style={{ background: "var(--bg)", padding: "38px 34px" }}>
                <div
                  className="mono"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--txt3)",
                    marginBottom: 24,
                  }}
                >
                  Standard Retail
                </div>
                {standardRetail.map((x) => (
                  <div
                    key={x}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      padding: "13px 0",
                      borderTop: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ color: "var(--txt3)", marginTop: 2 }}>
                      <ICross />
                    </span>
                    <span className="body" style={{ fontSize: "0.96rem", color: "var(--txt2)" }}>
                      {x}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--bg1)", padding: "38px 34px" }}>
                <div
                  className="mono"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--acc1)",
                    marginBottom: 24,
                  }}
                >
                  HY Watches
                </div>
                {hyWatches.map((x) => (
                  <div
                    key={x}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      padding: "13px 0",
                      borderTop: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ color: "var(--acc1)", marginTop: 2 }}>
                      <ICheck />
                    </span>
                    <span className="body" style={{ fontSize: "0.96rem", color: "var(--txt1)" }}>
                      {x}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        style={{
          background: "var(--bg1)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <h2 className="vh">Operating guarantees</h2>
          <div
            style={{
              display: "grid",
              gap: 40,
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            }}
          >
            {guarantees.map((s, i) => (
              <Reveal key={s.k} delay={i * 90}>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 600,
                    fontSize: "clamp(2.6rem,5.5vw,4rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--txt2)",
                    marginTop: 14,
                  }}
                >
                  {s.k}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="arsenal" style={{ background: "var(--bg)" }}>
        <div className="wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
          <Reveal>
            <div className="eyebrow">The Collection</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2" style={{ marginTop: 26, marginBottom: 50, maxWidth: 760 }}>
              Curated inventory. Top-tier factory builds.
            </h2>
          </Reveal>
          <div className="bento">
            {watchCollection.map((watch, index) => (
              <Reveal
                key={watch.model}
                delay={index * 60}
                style={{ gridColumn: "span 6", display: "flex" }}
              >
                <Spotlight
                  className="cell"
                  style={{ width: "100%", minHeight: 280, justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--acc1)" }}>{watch.icon}</span>
                    <span className="mono" style={{ fontSize: "0.8rem", color: "var(--txt3)" }}>
                      0{index + 1}
                    </span>
                  </div>
                  <div style={{ maxWidth: 620, marginTop: 20 }}>
                    <div className="mono" style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--acc1)" }}>
                      {watch.brand}
                    </div>
                    <h3 className="h3" style={{ marginTop: 8, color: "var(--txt)", fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>
                      {watch.model}
                    </h3>
                    <div className="mono" style={{ fontSize: "0.85rem", color: "var(--txt2)", marginTop: 12 }}>
                      {watch.specs}
                    </div>
                    <p className="body" style={{ marginTop: 14 }}>
                      {watch.desc}
                    </p>
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg1)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
          <div className="proc">
            <div className="sticky">
              <Reveal>
                <div className="eyebrow">The Logistics</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="h2" style={{ marginTop: 24 }}>
                  Precision transit. Anonymous settlement.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="body" style={{ marginTop: 22, maxWidth: 360 }}>
                  A secure, transparent pipeline from factory sourcing to final delivery.
                </p>
              </Reveal>
            </div>
            <div>
              {logistics.map((m, i) => (
                <Reveal key={m.n} delay={i * 80}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: 28,
                      padding: "34px 0",
                      borderTop: "1px solid var(--line)",
                    }}
                  >
                    <span className="mono" style={{ fontSize: "0.9rem", color: "var(--acc1)" }}>
                      {m.n}
                    </span>
                    <div>
                      <h3 className="h3" style={{ color: "var(--txt)" }}>
                        {m.t}
                      </h3>
                      <p className="body" style={{ marginTop: 12, maxWidth: 560 }}>
                        {m.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
          <Reveal>
            <div className="eyebrow">Contact</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2" style={{ marginTop: 26, maxWidth: 820 }}>
              Initiate your order.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lede" style={{ marginTop: 24, maxWidth: 640 }}>
              Connect with our team to verify current factory stock, request QC examples, or finalize settlement.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ marginTop: 40, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <LinkButton href="https://wa.me/yourwhatsappnumber" variant="primary">
                WhatsApp <Arrow />
              </LinkButton>
              <LinkButton href="mailto:contact@hywatches.com.au" variant="primary">
                Email <Arrow />
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
