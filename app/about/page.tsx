import { PageFrame } from "@/components/site";
import { AnimateIn } from "@/components/animate-in";
import { school } from "@/data/school";

export default function AboutPage() {
  return (
    <PageFrame
      eyebrow="Our foundation"
      title="A school is a promise kept over time."
      intro="The official story, mission and values of Raniganj National Bidyapith will continue to grow here with verified school information."
    >
      <AnimateIn stagger variant="up" className="featurelist" as="div">
        <article className="featurecard">
          <span className="eyebrow">Mission</span>
          <h3>Learning with purpose</h3>
          <p>{school.mission}</p>
        </article>
        <article className="featurecard">
          <span className="eyebrow">Vision</span>
          <h3>Confidence with character</h3>
          <p>{school.vision}</p>
        </article>
        <article className="featurecard">
          <span className="eyebrow">Since 1999</span>
          <h3>A continuing journey</h3>
          <p>Verified milestones, facilities and community stories will be added here as they are confirmed.</p>
        </article>
      </AnimateIn>

      <AnimateIn variant="up" delay={100}>
        <h2>Our people make the place</h2>
        <p>Messages from the Principal and Director, along with the school history, are being prepared for this public archive.</p>
      </AnimateIn>
    </PageFrame>
  );
}
