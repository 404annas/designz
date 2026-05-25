import { Cormorant_Garamond, Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import TrackingBootstrap from "@/components/TrackingBootstrap";
import TrackingScripts from "@/components/TrackingScripts";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Luxury Interior Design Services London | Dwell Rich",
    template: "%s | Dwell Rich",
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  keywords: [
    "luxury interior design London",
    "architectural design London",
    "turnkey build services",
    "high-end residential interiors",
    "commercial interior design",
    "bespoke joinery London",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: "Luxury Interior Design Services London | Dwell Rich",
    description: siteConfig.description,
    locale: "en_GB",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: `${siteConfig.siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Design Services London | Dwell Rich",
    description: siteConfig.description,
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <TrackingScripts />
        <TrackingBootstrap />
        {children}
      </body>
    </html>
  );
}
