import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raniganj National Biddiyapith | Established 1999",
  description: "The official public website of Raniganj National Biddiyapith.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
