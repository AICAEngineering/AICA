import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  keywords: ["AICA", "AI controlled air mobility", "vertical mobility research", "air mobility engineering", "prototype validation"],
  icons: { icon: "/icon.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="sr-only z-[100] rounded-md bg-white px-4 py-3 font-semibold text-aica-800 shadow-soft focus:not-sr-only focus:fixed focus:left-4 focus:top-4" href="#main-content">Skip to main content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
