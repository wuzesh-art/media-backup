import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://videodownloaderai.com";
  const routes = ["", "/privacy", "/terms", "/dmca", "/faq", "/platforms"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.5,
  }));
}
