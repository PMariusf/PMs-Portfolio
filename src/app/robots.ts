import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.p-marius.no/sitemap.xml",
    host: "https://www.p-marius.no",
  };
}
