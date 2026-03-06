import SafenetNavbar from "@/components/safenet/Navbar";
import SafenetFooter from "@/components/safenet/Footer";
import { Geist_Mono } from "next/font/google";
import React from "react";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function SafenetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={geistMono.variable}>
      <div className="sticky top-0 z-50">
        <SafenetNavbar />
      </div>
      <div>{children}</div>
      <SafenetFooter />
    </div>
  );
}
