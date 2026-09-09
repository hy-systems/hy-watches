import React from "react";

export default function TermsPage() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-[800px] mx-auto min-h-screen">
      <h1 className="text-4xl text-white font-serif mb-10">Terms of Service</h1>
      <div className="flex flex-col gap-6 text-[#888888] font-light leading-relaxed">
        <p>Last updated: September 2026</p>
        <p>By accessing or using HY Watches, you agree to be bound by these terms.</p>
        <h2 className="text-xl text-white font-serif mt-6">1. Purchases and Settlement</h2>
        <p>All transactions are final upon dispatch. Settlement is conducted via agreed upon cryptocurrency or peer-to-peer rail. Prices are subject to change based on sourcing costs.</p>
        <h2 className="text-xl text-white font-serif mt-6">2. Shipping and Customs</h2>
        <p>We utilize triangular routing to minimize customs risks. However, we are not liable for unprecedented seizures once the item has cleared the intermediate jurisdiction.</p>
        <h2 className="text-xl text-white font-serif mt-6">3. Quality Control</h2>
        <p>Buyers must approve all QC media before shipment. Once approved, returns based on visual discrepancies are not accepted.</p>
      </div>
    </div>
  );
}
