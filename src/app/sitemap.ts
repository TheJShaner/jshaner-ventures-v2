import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-08");

  return [
    { url: "https://jshaner.ventures", lastModified, priority: 1.0 },
    { url: "https://jshaner.ventures/services", lastModified, priority: 0.9 },
    { url: "https://jshaner.ventures/free-audit", lastModified, priority: 0.9 },
    { url: "https://jshaner.ventures/vault", lastModified, priority: 0.8 },
    { url: "https://jshaner.ventures/authority", lastModified, priority: 0.7 },
    { url: "https://jshaner.ventures/contact", lastModified, priority: 0.7 },
    { url: "https://jshaner.ventures/roadmap", lastModified, priority: 0.6 },
    { url: "https://jshaner.ventures/legal", lastModified, priority: 0.3 },
  ];
}
