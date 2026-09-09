import React from "react";

export default function PrivacyPage() {
  return (
    <div className="wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <h1 className="h1">Privacy Policy</h1>
      <div className="body" style={{ marginTop: 40, maxWidth: 800, display: "flex", flexDirection: "column", gap: 24 }}>
        <p>Last updated: September 2026</p>
        <p>HY Watches respects your privacy and is committed to protecting your personal data.</p>
        <h2 className="h3" style={{ color: "var(--txt)" }}>1. Data Collection</h2>
        <p>We collect minimal information necessary to fulfill your order, including shipping details and contact methods (WhatsApp, Email).</p>
        <h2 className="h3" style={{ color: "var(--txt)" }}>2. Data Usage</h2>
        <p>Your information is used strictly for logistics, quality control communications, and delivery.</p>
        <h2 className="h3" style={{ color: "var(--txt)" }}>3. Anonymity</h2>
        <p>We do not store permanent records of transaction settlements. Crypto and peer-to-peer transfers are handled securely and privately.</p>
      </div>
    </div>
  );
}
