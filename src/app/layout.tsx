import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/Cookie";

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
      <body className="antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
