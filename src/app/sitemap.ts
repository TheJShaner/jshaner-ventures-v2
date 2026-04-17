import type { MetadataRoute } from "next";

const lastMod = new Date("2026-04-16");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://jshaner.ventures", priority: 1.0, lastModified: lastMod, changeFrequency: "weekly" },
    { url: "https://jshaner.ventures/services", priority: 0.9, lastModified: lastMod, changeFrequency: "monthly" },
    { url: "https://jshaner.ventures/free-audit", priority: 0.9, lastModified: lastMod, changeFrequency: "monthly" },
    { url: "https://jshaner.ventures/vault", priority: 0.8, lastModified: lastMod, changeFrequency: "monthly" },
    { url: "https://jshaner.ventures/authority", priority: 0.7, lastModified: lastMod, changeFrequency: "monthly" },
    { url: "https://jshaner.ventures/contact", priority: 0.7, lastModified: lastMod, changeFrequency: "yearly" },
    { url: "https://jshaner.ventures/roadmap", priority: 0.6, lastModified: lastMod, changeFrequency: "monthly" },
    { url: "https://jshaner.ventures/legal", priority: 0.3, lastModified: lastMod, changeFrequency: "yearly" },
  ];
}
