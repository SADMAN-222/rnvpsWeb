import type { Metadata } from "next";
import { EmptyState, PageFrame } from "@/components/site";

export const metadata: Metadata = {
  title: "Photo and Child Consent Policy | Raniganj National Bidyapith",
  description:
    "Read the photography, child-safety, and media consent policies governing student privacy at Raniganj National Bidyapith.",
};

export default function PhotoConsentPage() {
  return (
    <PageFrame
      eyebrow="School policy"
      title="Photo and child-consent policy."
      intro="The school will publish only approved images in line with its child-safety and consent process."
    >
      <EmptyState title="Policy under school review">
        The school office will publish its approved photography, consent and
        removal-request process here before student photographs are added to the
        public gallery.
      </EmptyState>
    </PageFrame>
  );
}
