import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HY Watches | High-Fidelity Timepieces",
  description: "Premium 1:1 timepieces. Anonymous settlement. Flawless execution. Access top-tier factory builds without retail friction.",
  metadataBase: new URL("https://hywatches.com.au"),
  openGraph: {
    title: "HY Watches | High-Fidelity Timepieces",
    description: "Premium 1:1 timepieces. Anonymous settlement.",
    url: "https://hywatches.com.au",
    siteName: "HY Watches",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "HY Watches",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
