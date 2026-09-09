import React from "react";

export default function TermsPage() {
  return (
    <div className="wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <h1 className="h1">Terms of Service</h1>
      <div className="body" style={{ marginTop: 40, maxWidth: 800, display: "flex", flexDirection: "column", gap: 24 }}>
        <p>Last updated: September 2026</p>
        <p>By accessing or using HY Watches, you agree to be bound by these terms.</p>
        <h2 className="h3" style={{ color: "var(--txt)" }}>1. Purchases and Settlement</h2>
        <p>All transactions are final upon dispatch. Settlement is conducted via agreed upon cryptocurrency or peer-to-peer rail. Prices are subject to change based on sourcing costs.</p>
        <h2 className="h3" style={{ color: "var(--txt)" }}>2. Shipping and Customs</h2>
        <p>We utilize triangular routing to minimize customs risks. However, we are not liable for unprecedented seizures once the item has cleared the intermediate jurisdiction.</p>
        <h2 className="h3" style={{ color: "var(--txt)" }}>3. Quality Control</h2>
        <p>Buyers must approve all QC media before shipment. Once approved, returns based on visual discrepancies are not accepted.</p>
      </div>
    </div>
  );
}
