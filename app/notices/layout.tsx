import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notices | Raniganj National Bidyapith",
  description:
    "Read official announcements, emergency updates, circulars, and notices from Raniganj National Bidyapith.",
};

export default function NoticesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
