import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.p-marius.no";
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/About", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/CV", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/Projects", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/Projects/bergen-stupeklubb", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/Projects/house-of-mambo", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/Projects/foyner", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/Projects/varegg-arena", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/hobby", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/Contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
