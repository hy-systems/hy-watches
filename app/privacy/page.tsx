import React from "react";

export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-[800px] mx-auto min-h-screen">
      <h1 className="text-4xl text-white font-serif mb-10">Privacy Policy</h1>
      <div className="flex flex-col gap-6 text-[#888888] font-light leading-relaxed">
        <p>Last updated: September 2026</p>
        <p>HY Watches respects your privacy and is committed to protecting your personal data.</p>
        <h2 className="text-xl text-white font-serif mt-6">1. Data Collection</h2>
        <p>We collect minimal information necessary to fulfill your order, including shipping details and contact methods (WhatsApp, Email).</p>
        <h2 className="text-xl text-white font-serif mt-6">2. Data Usage</h2>
        <p>Your information is used strictly for logistics, quality control communications, and delivery.</p>
        <h2 className="text-xl text-white font-serif mt-6">3. Anonymity</h2>
        <p>We do not store permanent records of transaction settlements. Crypto and peer-to-peer transfers are handled securely and privately.</p>
      </div>
    </div>
  );
}
