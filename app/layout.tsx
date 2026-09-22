import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raniganj National Bidyapith | Established 1999",
  description: "The official public website of Raniganj National Bidyapith.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
