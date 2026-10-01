import type { Metadata } from "next";
import { PeopleCategoryPage } from "@/components/people";

export const metadata: Metadata = {
  title: "Principal | Raniganj National Bidyapith",
  description:
    "Message and leadership profile of the Principal and Managing Director of Raniganj National Bidyapith.",
};

export default function PrincipalPage() {
  return <PeopleCategoryPage category="principal" />;
}
