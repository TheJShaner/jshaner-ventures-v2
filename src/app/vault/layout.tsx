import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operational Asset Vault",
  description:
    "Access AI scripts, GovCon compliance resources, and automation tools from the JShaner Ventures operational asset library. Categorized by deployment status.",
  alternates: {
    canonical: "https://jshaner.ventures/vault",
  },
};

export default function VaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
