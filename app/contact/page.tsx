import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "@/components/site";
import { school } from "@/data/school";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Navigation,
  GraduationCap,
  Home,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { ContactFormClient } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact the School Office | Raniganj National Bidyapith",
  description:
    "Get in touch with Raniganj National Bidyapith. Find our campus location on Google Maps in Ghoraghat, Dinajpur, office visiting hours, phone numbers, email, and inquiry form.",
};

export default function ContactPage() {
  return (
    <PageFrame
      eyebrow="Start a conversation"
      title="Contact the school office."
      intro="Whether you have questions regarding admissions, academic programs, residential boarding, or official records, our administrative team is here to assist you."
    >
      {/* ─── Top Highlights Cards ─────────────────────────────────────── */}
      <div className="contact-highlights-grid">
        <article className="contact-highlight-card">
          <div className="highlight-icon-box">
            <MapPin size={20} />
          </div>
          <div className="highlight-content">
            <span className="highlight-label">Campus Location</span>
            <strong>Raniganj Bazar, Binnagari Road</strong>
            <p>Ghoraghat, Dinajpur, Bangladesh</p>
            <a
              href={school.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="highlight-action"
            >
              View on Map <ExternalLink size={13} />
            </a>
          </div>
        </article>

        <article className="contact-highlight-card">
          <div className="highlight-icon-box">
            <Phone size={20} />
          </div>
          <div className="highlight-content">
            <span className="highlight-label">Helpline & Office Phone</span>
            <strong>{school.phone}</strong>
            <p>Saturday – Thursday (Office Hours)</p>
            <a
              href={`tel:${school.phone.replace(/[^\d+]/g, "")}`}
              className="highlight-action"
            >
              Call Campus Office →
            </a>
          </div>
        </article>

        <article className="contact-highlight-card">
          <div className="highlight-icon-box">
            <Mail size={20} />
          </div>
          <div className="highlight-content">
            <span className="highlight-label">Official Email</span>
            <strong>{school.email}</strong>
            <p>Formal inquiries & document verification</p>
            <a href={`mailto:${school.email}`} className="highlight-action">
              Send Email Inquiry →
            </a>
          </div>
        </article>

        <article className="contact-highlight-card">
          <div className="highlight-icon-box">
            <Clock size={20} />
          </div>
          <div className="highlight-content">
            <span className="highlight-label">Visiting & Office Hours</span>
            <strong>8:00 AM – 4:00 PM</strong>
            <p>Saturday – Thursday (Friday Closed)</p>
            <span className="highlight-status-tag">Office In Session</span>
          </div>
        </article>
      </div>

      {/* ─── Main Two-Column Layout ──────────────────────────────────── */}
      <div className="contactlayout-enhanced">
        {/* Left Column: Location Map & Campus Access */}
        <section className="contact-left-column">
          <div className="column-header">
            <span className="eyebrow">Campus Location</span>
            <h2>Find our campus in Dinajpur.</h2>
            <p>
              Raniganj National Bidyapith is situated at Raniganj Bazar along Binnagari Road in Ghoraghat Upazila,
              conveniently accessible from Dinajpur, Bogura, and Gaibandha.
            </p>
          </div>

          {/* Location Map Card using the exact footer map */}
          <div className="contact-map-box">
            <a
              href={school.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-map-link"
              aria-label={`Open ${school.name} on Google Maps`}
            >
              <div className="contact-map-media">
                <Image
                  src="/images/school-map.png"
                  alt="Map showing Raniganj National Bidyapith and its location pin"
                  width={680}
                  height={420}
                  className="contact-map-image"
                  priority
                />
                <div className="contact-map-badge">
                  <MapPin size={14} /> Raniganj National Bidyapith
                </div>
                <div className="contact-map-hover-hint">
                  <span>
                    Open in Google Maps <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </a>

            <div className="contact-map-footer">
              <a
                href={school.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-map-btn"
              >
                <Navigation size={15} /> Get Directions on Google Maps
              </a>
              <span className="contact-map-coords">
                GPS: 25.3056° N, 89.2198° E
              </span>
            </div>
          </div>

          {/* Visitor Guidelines Card */}
          <div className="contact-visitor-box">
            <h4>
              <ShieldCheck size={18} /> Campus Visit Guidelines
            </h4>
            <ul>
              <li>
                <strong>Road Transport:</strong> Frequent bus, auto-rickshaw, and van services connect Raniganj Bazar directly from Ghoraghat Upazila center and surrounding districts.
              </li>
              <li>
                <strong>Visitor Reception:</strong> Please register at the main administrative gate upon arrival for an official visitor badge.
              </li>
              <li>
                <strong>Hostel & Campus Tours:</strong> Guided tours for prospective residential students and guardians are arranged during standard office hours.
              </li>
            </ul>
          </div>
        </section>

        {/* Right Column: Message & Inquiry Desk */}
        <section className="contact-right-column">
          <div className="column-header">
            <span className="eyebrow">Inquiry Desk</span>
            <h2>Send us a direct message.</h2>
            <p>
              Fill out the form below. Your message will be routed directly to the administration office for a prompt response.
            </p>
          </div>

          <div className="contact-form-container">
            <ContactFormClient />
          </div>
        </section>
      </div>

      {/* ─── Bottom Department Help Strip ────────────────────────────── */}
      <section className="contact-departments-strip">
        <div className="dept-strip-header">
          <span className="eyebrow">Direct Office Departments</span>
          <h3>Looking for a specific department?</h3>
        </div>

        <div className="dept-cards-grid">
          <div className="dept-card">
            <div className="dept-icon-box">
              <GraduationCap size={22} />
            </div>
            <h4>Admissions & Seat Inquiries</h4>
            <p>
              Inquire about Nursery to Class 10 admission criteria, seat availability, residential boarding spots, and syllabus.
            </p>
            <Link href="/admission" className="dept-link">
              Admission Details <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="dept-card">
            <div className="dept-icon-box">
              <Home size={22} />
            </div>
            <h4>Residential Life & Hostels</h4>
            <p>
              Learn about our supervised evening study sessions, dining, medical care, and residential mentorship.
            </p>
            <Link href="/facilities" className="dept-link">
              Campus Facilities <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="dept-card">
            <div className="dept-icon-box">
              <BookOpen size={22} />
            </div>
            <h4>Academic Records & Transcripts</h4>
            <p>
              Request official student testimonials, Transfer Certificates (TC), exam mark sheets, or verify alumni credentials.
            </p>
            <a href={`mailto:${school.email}`} className="dept-link">
              Email Records Office <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
