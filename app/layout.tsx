import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rnvpsweb.vercel.app"),
  title: {
    default: "Raniganj National Bidyapith | Education with Purpose",
    template: "%s | Raniganj National Bidyapith",
  },
  description:
    "Official website of Raniganj National Bidyapith, a premier secondary and residential school in Dinajpur, Bangladesh established in 1999. Education with purpose, character with care.",
  applicationName: "Raniganj National Bidyapith",
  keywords: [
    "Raniganj National Bidyapith",
    "RNB",
    "school",
    "Dinajpur",
    "Bangladesh",
    "education",
    "Ghoraghat",
    "residential school",
    "boarding school",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Raniganj National Bidyapith",
    title: "Raniganj National Bidyapith | Education with Purpose",
    description:
      "A thoughtful learning community shaped by academic purpose, character and belonging. Established 1999, Dinajpur.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raniganj National Bidyapith Logo & Campus Identity",
      },
      {
        url: "/images/school-logo.jpg",
        width: 600,
        height: 600,
        alt: "Raniganj National Bidyapith Crest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raniganj National Bidyapith | Education with Purpose",
    description:
      "A thoughtful learning community shaped by academic purpose, character and belonging. Established 1999, Dinajpur.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="page-enter">{children}</body>
    </html>
  );
}
