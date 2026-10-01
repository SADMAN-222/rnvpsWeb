import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageFrame, EmptyState } from "@/components/site";
import { AnimateIn } from "@/components/animate-in";
import { programs } from "@/data/content";

export const metadata: Metadata = {
  title: "Academics | Raniganj National Bidyapith",
  description:
    "Explore academic levels, learning programs, class structures, and educational resources at Raniganj National Bidyapith.",
};

export default function AcademicPage() {
  return (
    <PageFrame
      eyebrow="Academic life"
      title="Learning with purpose."
      intro="Explore academic levels and find official routines and documents in one place."
    >
      <AnimateIn stagger variant="up" className="featurelist" as="div">
        {programs.map((program) => (
          <article className="featurecard" key={program.label}>
            <span className="eyebrow">{program.label}</span>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <div className="chips">
              {program.subjects.map((subject) => (
                <span key={subject}>{subject}</span>
              ))}
            </div>
          </article>
        ))}
      </AnimateIn>

      <AnimateIn variant="up" delay={100}>
        <div className="resource-links">
          <Link href="/calendar">
            Academic calendar <ArrowUpRight size={16} />
          </Link>
          <Link href="/downloads">
            Routines and documents <ArrowUpRight size={16} />
          </Link>
        </div>
      </AnimateIn>

      <AnimateIn variant="up" delay={150}>
        <EmptyState title="Published routines and syllabus">
          The school office will place approved class routines, exam routines and
          syllabus documents in the Downloads section.
        </EmptyState>
      </AnimateIn>
    </PageFrame>
  );
}
