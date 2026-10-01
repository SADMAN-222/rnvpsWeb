import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { PageFrame, EmptyState } from "@/components/site";
import { AnimateIn } from "@/components/animate-in";
import { school } from "@/data/school";

export const metadata: Metadata = {
  title: "Admission | Raniganj National Bidyapith",
  description:
    "Admission guidance, eligibility requirements, and application procedures for enrolling at Raniganj National Bidyapith.",
};

export default function AdmissionPage() {
  return (
    <PageFrame
      eyebrow="Join the community"
      title="Admission guidance."
      intro="The school office will publish current-session admission details here after official confirmation."
    >
      <AnimateIn variant="up">
        <div className="admission-status">
          <span className="tag">Information pending school confirmation</span>
          <h2>Plan your admission enquiry.</h2>
          <p>
            Before visiting, please contact the school office for confirmed class
            availability, eligibility, documents, dates and fees.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn stagger variant="up" className="featurelist" as="div">
        <article className="featurecard">
          <span className="eyebrow">01</span>
          <h3>Eligibility</h3>
          <p>
            Official eligibility will appear here once the school confirms the
            current session requirements.
          </p>
        </article>
        <article className="featurecard">
          <span className="eyebrow">02</span>
          <h3>Documents</h3>
          <p>
            The school will publish a verified document checklist for families.
          </p>
        </article>
        <article className="featurecard">
          <span className="eyebrow">03</span>
          <h3>Admission process</h3>
          <p>
            Confirmed dates, office steps and fee information will be published
            here.
          </p>
        </article>
      </AnimateIn>

      <AnimateIn variant="up" delay={100}>
        <EmptyState title="Speak with the admission office">
          <a
            className="textlink"
            href={`tel:${school.phone.replace(/[^\d+]/g, "")}`}
          >
            <Phone size={15} /> {school.phone}
          </a>{" "}
          <span> · </span>
          <a className="textlink" href={`mailto:${school.email}`}>
            <Mail size={15} /> {school.email}
          </a>
        </EmptyState>
      </AnimateIn>

      <AnimateIn variant="up" delay={150}>
        <Link className="button buttondark" href="/contact">
          Contact school office <ArrowUpRight size={17} />
        </Link>
      </AnimateIn>
    </PageFrame>
  );
}
