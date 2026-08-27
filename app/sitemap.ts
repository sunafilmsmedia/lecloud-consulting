import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/audit", priority: 0.9 },
    { path: "/vsl", priority: 0.8 },
    { path: "/services", priority: 0.7 },
    { path: "/automatisations", priority: 0.7 },
    { path: "/temoignages", priority: 0.6 },
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
