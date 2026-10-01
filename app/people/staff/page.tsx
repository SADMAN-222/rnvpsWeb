import type { Metadata } from "next";
import { PeopleCategoryPage } from "@/components/people";

export const metadata: Metadata = {
  title: "Staff | Raniganj National Bidyapith",
  description:
    "Meet the dedicated administrative and operational staff supporting students and educators at Raniganj National Bidyapith.",
};

export default function StaffPage() {
  return <PeopleCategoryPage category="staff" />;
}
