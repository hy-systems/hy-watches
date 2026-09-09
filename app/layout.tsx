import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "HY Watches | High-Fidelity Timepieces",
  description: "Premium 1:1 timepieces. Anonymous settlement. Flawless execution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-[#EDEDED] antialiased selection:bg-[#D4AF37] selection:text-black">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
