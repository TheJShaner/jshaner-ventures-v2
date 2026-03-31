import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "JShaner Ventures",
    template: "%s | JShaner Ventures",
  },
  description:
    "Precision AI integration, advanced search optimization, and technical blueprinting for scalable small business architecture.",
  alternates: {
    canonical: "https://jshaner.ventures",
  },
  openGraph: {
    title: "JShaner Ventures",
    description: "AI Visibility, SEO & Automation for Small Business",
    url: "https://jshaner.ventures",
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
  "@type": "Organization",
  name: "JShaner Ventures",
  url: "https://jshaner.ventures",
  description: "Professional services firm specializing in SEO, AEO, AI Integration, and Technical Training for small businesses.",
  founder: {
    "@type": "Person",
    name: "Jonathan Shaner",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "ops@jshaner.ventures",
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
      </body>
    </html>
  );
}
