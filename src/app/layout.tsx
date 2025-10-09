import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/Cookie";
import PlausibleProvider from "next-plausible";

export const metadata: Metadata = {
  title: "Safe",
  description: "Safe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="safefoundation.org" trackOutboundLinks trackLocalhost />
      </head>
      <body className="antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
