import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raniganj National Bidyapith",
    short_name: "RNB",
    description: "Nurturing Intellect, Character, and Purpose Since 1999",
    start_url: "/",
    display: "standalone",
    background_color: "#0b2d4d",
    theme_color: "#0b2d4d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48 32x32 16x16",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
