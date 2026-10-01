import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { PageFrame } from "@/components/site";

export const metadata: Metadata = {
  title: "Result | Raniganj National Bidyapith",
  description:
    "Check academic examination results, merit lists, and report cards for students of Raniganj National Bidyapith.",
};

export default function ResultPage() {
  return (
    <PageFrame
      eyebrow="Examination"
      title="Student results."
      intro="A secure result lookup service will be available after the school management system is fully set up."
    >
      <div className="admission-status">
        <span className="tag">Coming soon</span>
        <h2>Result lookup service</h2>
        <p>
          Once the school management system is live, students and parents will be able to
          search for examination results by entering their student ID and roll number.
        </p>
      </div>

      <div className="featurelist">
        <article className="featurecard">
          <Search size={22} />
          <h3>Search by student ID</h3>
          <p>Enter your student ID and roll number to view your examination results securely.</p>
        </article>
        <article className="featurecard">
          <span className="eyebrow">Secure access</span>
          <h3>Protected results</h3>
          <p>Only the student and their guardian can access individual results through the portal.</p>
        </article>
        <article className="featurecard">
          <span className="eyebrow">Download</span>
          <h3>Report card PDF</h3>
          <p>Download your official report card as a PDF once results are published by the school.</p>
        </article>
      </div>

      <div className="resource-links">
        <Link href="/notices">
          Check notices for result announcements <ArrowUpRight size={16} />
        </Link>
        <Link href="/contact">
          Contact school office <ArrowUpRight size={16} />
        </Link>
      </div>
    </PageFrame>
  );
}
