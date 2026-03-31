import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://jshaner.ventures", priority: 1.0 },
    { url: "https://jshaner.ventures/services", priority: 0.9 },
    { url: "https://jshaner.ventures/free-audit", priority: 0.9 },
    { url: "https://jshaner.ventures/vault", priority: 0.8 },
    { url: "https://jshaner.ventures/authority", priority: 0.7 },
    { url: "https://jshaner.ventures/contact", priority: 0.7 },
    { url: "https://jshaner.ventures/roadmap", priority: 0.6 },
    { url: "https://jshaner.ventures/legal", priority: 0.3 },
  ];
}
