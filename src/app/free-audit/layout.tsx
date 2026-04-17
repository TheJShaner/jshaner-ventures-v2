import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Get a complimentary audit of your website's SEO, AI search visibility, and technical architecture from JShaner Ventures. No commitment required to apply.",
  alternates: {
    canonical: "https://jshaner.ventures/free-audit",
  },
};

export default function FreeAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
