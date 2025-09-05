import type { Metadata } from "next";
import "./globals.css";
import { CookieBannerContextProvider } from "@/context/CookieBannerContext";
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
        <CookieBannerContextProvider>
          {children}
          <CookieBanner />
        </CookieBannerContextProvider>
      </body>
    </html>
  );
}
