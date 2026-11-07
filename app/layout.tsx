import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Raniganj National Bidyapith | Education with Purpose",
    template: "%s | Raniganj National Bidyapith",
  },
  description: "Official website of Raniganj National Bidyapith, a school community in Dinajpur, Bangladesh established in 1999. Education with purpose, character with care.",
  applicationName: "Raniganj National Bidyapith",
  keywords: ["Raniganj National Bidyapith", "school", "Dinajpur", "Bangladesh", "education", "Ghoraghat"],
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Raniganj National Bidyapith",
    title: "Raniganj National Bidyapith | Education with Purpose",
    description: "A thoughtful learning community shaped by academic purpose, character and belonging. Established 1999, Dinajpur.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
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
