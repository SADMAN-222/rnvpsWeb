import type { Metadata } from "next";
import { PeopleCategoryPage } from "@/components/people";

export const metadata: Metadata = {
  title: "Teachers | Raniganj National Bidyapith",
  description:
    "Meet our qualified, dedicated faculty inspiring excellence and character in every classroom at Raniganj National Bidyapith.",
};

export default function TeachersDirectoryPage() {
  return <PeopleCategoryPage category="teachers" />;
}
