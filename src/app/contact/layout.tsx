import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Start Your Engagement",
  description:
    "Get in touch with JShaner Ventures to start your engagement. Services cover AI integration, SEO/AEO optimization, and technical consulting for small businesses.",
  alternates: {
    canonical: "https://jshaner.ventures/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
