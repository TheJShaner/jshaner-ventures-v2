import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Get a complimentary audit of your website's SEO, AI visibility, and technical architecture. No commitment required.",
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
