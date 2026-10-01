import type { Metadata } from "next";
import { PageFrame } from "@/components/site";
import { school } from "@/data/school";

export const metadata: Metadata = {
  title: "Privacy Policy | Raniganj National Bidyapith",
  description:
    "Learn how Raniganj National Bidyapith collects, uses, and safeguards personal data and student information.",
};

export default function PrivacyPage() {
  return (
    <PageFrame
      eyebrow="School policy"
      title="Privacy policy."
      intro="How the school website handles information shared by visitors."
    >
      <h2>Information we collect</h2>
      <p>
        This website may collect basic information such as your name and email address
        when you use the contact form. This information is used solely to respond to
        your enquiry and is not shared with any third party.
      </p>

      <h2>How we use your information</h2>
      <p>
        Any personal information submitted through this website is used only for the
        purpose of responding to your enquiry or request. The school does not sell,
        trade, or transfer your personal information to outside parties.
      </p>

      <h2>Cookies</h2>
      <p>
        This website may use cookies to improve your browsing experience. These
        cookies do not store any personally identifiable information. You can disable
        cookies in your browser settings if you prefer.
      </p>

      <h2>Student data protection</h2>
      <p>
        Student records, grades, attendance, and personal information are stored
        securely and are only accessible to authorised school staff, the student,
        and their registered guardians through the school management portal.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of any personal
        information held by the school. To make such a request, please contact
        the school office.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this privacy policy, please contact:{" "}
        <a className="textlink" href={`mailto:${school.email}`}>{school.email}</a>
      </p>

      <p style={{ marginTop: 40, fontSize: 12, color: "var(--muted)" }}>
        Last updated: October 2026. This policy may be updated periodically.
        Please check this page for the latest version.
      </p>
    </PageFrame>
  );
}
