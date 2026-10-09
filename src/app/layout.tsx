import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://jshaner.ventures"),
  title: {
    default: "JShaner Ventures | SEO • AEO • AI Integration & Training",
    template: "%s | JShaner Ventures",
  },
  description:
    "Practical AI, SEO, websites, and automation for small businesses that need cleaner systems and better visibility.",
  alternates: {
    canonical: "https://jshaner.ventures",
  },
  openGraph: {
    title: "JShaner Ventures",
    description: "Practical AI, SEO, websites, and automation for small business.",
    siteName: "JShaner Ventures",
    type: "website",
    images: [
      {
        url: "/images/logo-main.png",
        width: 883,
        height: 850,
        alt: "JShaner Ventures Logo",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://jshaner.ventures/#business",
  name: "JShaner Ventures",
  url: "https://jshaner.ventures",
  logo: "https://jshaner.ventures/images/logo-main.png",
  image: "https://jshaner.ventures/images/logo-main.png",
  description: "Practical SEO, AI visibility, websites, automation, and training for small businesses.",
  telephone: "+1-570-291-7887",
  email: "ops@jshaner.ventures",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muncy",
    addressRegion: "PA",
    postalCode: "17756",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Muncy, PA" },
    { "@type": "City", name: "Montoursville, PA" },
    { "@type": "City", name: "Williamsport, PA" },
    { "@type": "AdministrativeArea", name: "Lycoming County, PA" },
    { "@type": "AdministrativeArea", name: "North Central Pennsylvania" },
  ],
  founder: {
    "@type": "Person",
    "@id": "https://jshaner.ventures/authority#jonathan",
    name: "Jonathan Shaner",
  },
  sameAs: ["https://github.com/TheJShaner"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "ops@jshaner.ventures",
    telephone: "+1-570-291-7887",
    contactType: "sales",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "JShaner Ventures",
  url: "https://jshaner.ventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="ImLtm3d2M4D5v2gMsxcQOw"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BZ2E7LKG3G"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BZ2E7LKG3G');
        `}
      </Script>
      <body className="font-sans antialiased min-h-screen relative overflow-x-hidden">
        <div className="blueprint-overlay" />
        <div className="ambient-glow" />
        <div className="relative flex min-h-screen w-full flex-col">
          <Header />
          <main className="flex flex-1 flex-col items-center w-full">
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
