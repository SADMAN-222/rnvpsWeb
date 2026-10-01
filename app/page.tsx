import type { Metadata } from "next";
import { HomePage } from "@/components/site";

export const metadata: Metadata = {
  title: "Raniganj National Bidyapith | Education with Purpose",
  description:
    "Official website of Raniganj National Bidyapith in Dinajpur, Bangladesh. Established in 1999, fostering knowledge, discipline, and humanity through purposeful education.",
};

export default function Home() {
  return <HomePage />;
}
