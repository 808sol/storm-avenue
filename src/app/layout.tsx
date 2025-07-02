import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://storm-avenue.vercel.app'),
  title: "Storm Avenue Roofing and Construction - Professional Roofing Services",
  description: "Storm Avenue Roofing and Construction is a trusted professional roofing contractor specializing in residential & commercial roofing applications. Quality craftsmanship & exceptional service.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Storm Avenue",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Storm Avenue Roofing & Construction",
    title: "Storm Avenue Roofing and Construction - Professional Roofing Services",
    description: "Professional roofing and construction services. Your avenue to storm protection and recovery.",
    images: [
      {
        url: "/preview-logo.png",
        width: 1500,
        height: 500,
        alt: "Storm Avenue Roofing & Construction - Professional Roofing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Storm Avenue Roofing and Construction",
    description: "Professional roofing and construction services. Your avenue to storm protection and recovery.",
    images: ["/preview-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Storm Avenue" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png" />

        {/* Open Graph / Social Media Preview */}
        <meta property="og:image" content="/preview-logo.png" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="/preview-logo.png" />
        <meta name="twitter:image:alt" content="Storm Avenue Roofing & Construction - Professional Roofing Services" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <Analytics />
      </body>
    </html>
  );
}
