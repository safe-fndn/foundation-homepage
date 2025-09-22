import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/Cookie";

const defaultMetaTags = {
  pageTitle: "Safe",
  description:
    "Safe is the most trusted platform to manage digital assets on Ethereum",
  image: `${process.env.NEXT_PUBLIC_PROD_URL}/images/og.jpg`,
  site: "Safe",
};

const isProduction = process.env.NEXT_PUBLIC_IS_PROD === "true";

export const metadata: Metadata = {
  title: defaultMetaTags.pageTitle,
  description: defaultMetaTags.description,

  applicationName: defaultMetaTags.site,

  robots: {
    follow: isProduction,
    index: isProduction,
  },

  openGraph: {
    title: defaultMetaTags.pageTitle,
    description: defaultMetaTags.description,
    images: [
      {
        url: defaultMetaTags.image,
        alt: defaultMetaTags.pageTitle,
      },
    ],
    siteName: defaultMetaTags.site,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: defaultMetaTags.pageTitle,
    description: defaultMetaTags.description,
    images: [defaultMetaTags.image],
    creator: defaultMetaTags.pageTitle,
  },
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
