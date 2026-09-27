import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Raniganj National Bidyapith | Established 1999",
    template: "%s | Raniganj National Bidyapith",
  },
  description: "The official public website of Raniganj National Bidyapith.",
  applicationName: "Raniganj National Bidyapith",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
