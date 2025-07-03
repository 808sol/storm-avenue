import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://storm-avenue.vercel.app'),
  title: {
    default: "Storm Avenue Roofing & Construction - Professional Roofing Services",
    template: "%s | Storm Avenue Roofing"
  },
  description: "Storm Avenue Roofing & Construction - Professional Roofing Services",
  keywords: "roofing contractor Brandon MS, Madison MS roofer, Ridgeland roofing company, Flowood roof repair, Clinton MS roofing, Jackson metro roofing, emergency roof repair Brandon, storm damage Madison MS, roof replacement Ridgeland, GAF Master Elite Mississippi, commercial roofing Flowood, residential roofing Clinton, 24/7 emergency roofing service, Mississippi roofing contractor, roof inspection Brandon Madison Ridgeland",
  authors: [{ name: "Storm Avenue Roofing & Construction" }],
  creator: "Storm Avenue Roofing & Construction",
  publisher: "Storm Avenue Roofing & Construction",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://storm-avenue.vercel.app",
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
  verification: {
    google: "your-google-verification-code",
  },
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
    title: "Storm Avenue Roofing & Construction - Professional Roofing Services",
    description: "Storm Avenue Roofing & Construction - Professional Roofing Services",
    url: "https://storm-avenue.vercel.app",
    images: {
      url: "/preview-logo.png",
      width: 1500,
      height: 500,
      alt: "Storm Avenue Roofing & Construction - Your Avenue to Storm Protection",
    },
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@stormavenueroofing",
    creator: "@stormavenueroofing",
    title: "Storm Avenue Roofing - 24/7 Emergency Service",
    description: "Storm Avenue Roofing & Construction - Professional Roofing Services",
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

        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "@id": "https://stormavenue.com/#business",
              "name": "Storm Avenue Roofing & Construction",
              "image": "https://storm-avenue.vercel.app/preview-logo.png",
              "logo": "https://storm-avenue.vercel.app/sa-logo.png",
              "telephone": "+16017484769",
              "email": "info@stormavenueroofing.com",
              "description": "Storm Avenue is a Mississippi-based roofing company specializing in storm damage repair, roof replacements, and insurance restoration. We proudly serve homeowners and businesses throughout Mississippi with honest assessments, expert craftsmanship, and rapid response after severe weather.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "MS",
                "addressCountry": "US",
                "addressLocality": "Central Mississippi"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.2988",
                "longitude": "-90.1848"
              },
              "url": "https://stormavenue.com",
              "sameAs": [
                "https://www.facebook.com/stormavenueroofing",
                "https://www.instagram.com/stormavenueroofing",
                "https://twitter.com/stormavenueroofing",
                "https://maps.app.goo.gl/cJLJmQnfaJXJBBgf9"
              ],
              "areaServed": [
                { "@type": "City", "name": "Brandon", "state": "Mississippi" },
                { "@type": "City", "name": "Madison", "state": "Mississippi" },
                { "@type": "City", "name": "Ridgeland", "state": "Mississippi" },
                { "@type": "City", "name": "Flowood", "state": "Mississippi" },
                { "@type": "City", "name": "Clinton", "state": "Mississippi" },
                { "@type": "City", "name": "Jackson", "state": "Mississippi" },
                { "@type": "City", "name": "Florence", "state": "Mississippi" },
                { "@type": "City", "name": "Oak Grove", "state": "Mississippi" },
                { "@type": "City", "name": "Vicksburg", "state": "Mississippi" },
                { "@type": "City", "name": "Brookhaven", "state": "Mississippi" },
                { "@type": "City", "name": "Hattiesburg", "state": "Mississippi" },
                { "@type": "City", "name": "Petal", "state": "Mississippi" },
                { "@type": "City", "name": "McComb", "state": "Mississippi" },
                { "@type": "City", "name": "Columbia", "state": "Mississippi" },
                { "@type": "City", "name": "Hazlehurst", "state": "Mississippi" },
                { "@type": "City", "name": "Crystal Springs", "state": "Mississippi" },
                { "@type": "City", "name": "Pearl", "state": "Mississippi" },
                { "@type": "City", "name": "Byram", "state": "Mississippi" },
                { "@type": "State", "name": "Mississippi", "containsPlace": "Central Mississippi" }
              ],
              "priceRange": "$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Roofing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Roofing",
                      "description": "Complete residential roof replacement and repair services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Roofing",
                      "description": "Professional commercial roofing solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Roofing Services",
                      "description": "24/7 emergency roof repair and storm damage response"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roof Inspections",
                      "description": "Professional roof assessments and HAAG certified inspections"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "8",
                "bestRating": "5"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Google Reviews"
                }
              }
            })
          }}
        />

        {/* FAQ Schema for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What areas does Storm Avenue Roofing serve in Mississippi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Storm Avenue Roofing proudly serves Brandon, Madison, Ridgeland, Flowood, Clinton, Jackson, and surrounding areas in Central Mississippi. We also provide services to Florence, Oak Grove, Vicksburg, Brookhaven, Hattiesburg, Petal, McComb, Columbia, Hazlehurst, Crystal Springs, Pearl, and Byram. Our 24/7 emergency service covers the entire state of Mississippi."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide emergency roofing services in Brandon and Madison MS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Storm Avenue Roofing provides 24/7 emergency roofing services in Brandon, Madison, Ridgeland, Flowood, Clinton, and throughout Central Mississippi. Call (601) 748-4769 for immediate storm damage response, emergency tarping, and urgent roof repairs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you a GAF certified roofing contractor in Ridgeland and Flowood?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Storm Avenue Roofing is a GAF Master Elite certified contractor serving Ridgeland, Flowood, and all of Central Mississippi. This certification represents the top 2% of roofing contractors nationwide and ensures superior workmanship, reliability, and warranty coverage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How quickly can you respond to roof damage in Clinton MS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer 24/7 emergency response for roof damage in Clinton, Brandon, Madison, and surrounding areas. Our emergency crews are on standby and typically respond within 2-4 hours for urgent situations like storm damage, leaks, or structural issues."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
