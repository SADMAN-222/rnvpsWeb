import type { Metadata } from "next";
import { EmptyState, PageFrame } from "@/components/site";
import { AnimateIn } from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Gallery | Raniganj National Bidyapith",
  description:
    "Explore photo galleries capturing campus life, classroom learning, sports, and cultural events at Raniganj National Bidyapith.",
};

export default function GalleryPage() {
  return (
    <PageFrame
      eyebrow="A visual record"
      title="School life in focus."
      intro="Approved photographs from campus, learning, sport, culture and events will be organised here."
    >
      <AnimateIn variant="up">
        <div className="galleryfilters" aria-label="Gallery categories">
          <button type="button" aria-pressed="true">
            All
          </button>
          <button type="button">Campus</button>
          <button type="button">Academic</button>
          <button type="button">Sports</button>
          <button type="button">Culture</button>
          <button type="button">Events</button>
        </div>
      </AnimateIn>

      <AnimateIn variant="up" delay={100}>
        <EmptyState title="Approved photographs are being prepared">
          This gallery will feature school-owned or approved photographs only.
          Student images will be published in line with the school’s photo and
          child-consent policy.
        </EmptyState>
      </AnimateIn>
    </PageFrame>
  );
}
