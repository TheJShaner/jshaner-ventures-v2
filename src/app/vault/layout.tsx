import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vault",
  description:
    "Access scripts, AI tools, and GovCon resources from the JShaner Ventures asset library.",
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
