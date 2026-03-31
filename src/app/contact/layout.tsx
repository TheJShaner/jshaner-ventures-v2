import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with JShaner Ventures for AI integration, SEO optimization, and technical consulting engagements.",
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
