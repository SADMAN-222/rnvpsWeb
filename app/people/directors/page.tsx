import type { Metadata } from "next";
import { PeopleCategoryPage } from "@/components/people";

export const metadata: Metadata = {
  title: "Board of Directors | Raniganj National Bidyapith",
  description:
    "Meet the Board of Directors providing governance, guidance, and strategic leadership for Raniganj National Bidyapith.",
};

export default function DirectorsPage() {
  return <PeopleCategoryPage category="directors" />;
}
