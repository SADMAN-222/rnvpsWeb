import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return ["", "/about", "/academic", "/admission", "/notices", "/events", "/gallery", "/facilities", "/achievements", "/calendar", "/downloads", "/faq", "/student-services", "/teachers", "/contact", "/privacy", "/photo-consent"].map(path => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
