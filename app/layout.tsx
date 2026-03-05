import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrelogistics.com.pk"),
  title: {
    default: "MRE Logistics | Warehousing & Transportation Pakistan",
    template: "%s | MRE Logistics"
  },
  description: "M Rafique Enterprises (MRE Logistics) is a leading provider of warehousing, transportation, and logistics solutions in Pakistan with over 35 years of experience.",
  keywords: ["logistics", "warehousing", "transportation", "Pakistan", "supply chain", "cargo transport", "MRE Logistics", "M Rafique Enterprises"],
  authors: [{ name: "MRE Logistics" }],
  creator: "MRE Logistics",
  publisher: "MRE Logistics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
