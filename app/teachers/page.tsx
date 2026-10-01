import type { Metadata } from "next";
import { PeopleOverview } from "@/components/people";

export const metadata: Metadata = {
  title: "Our People | Raniganj National Bidyapith",
  description:
    "Explore the administration, leadership, teachers, and staff members of Raniganj National Bidyapith.",
};

export default function TeachersPage() {
  return <PeopleOverview />;
}
