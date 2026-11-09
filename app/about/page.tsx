import type { Metadata } from "next";
import Image from "next/image";
import { PageFrame } from "@/components/site";
import { AnimateIn } from "@/components/animate-in";
import { 
  Award, 
  BookOpen, 
  Building2, 
  Clock, 
  Compass, 
  GraduationCap, 
  HeartHandshake, 
  MapPin, 
  Quote, 
  ShieldCheck, 
  Trophy, 
  Users 
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Raniganj National Bidyapith",
  description:
    "Discover the history, residential leadership, academic distinction, and institutional governance of Raniganj National Bidyapith, established in 1999 in Ghoraghat, Dinajpur.",
};

const keyHighlights = [
  { feature: "Established", details: "1999" },
  { feature: "Location", details: "Raniganj Bazar, Ghoraghat, Dinajpur, Bangladesh" },
  { feature: "Residential Pioneer", details: "First dedicated boarding school in Ghoraghat Upazila" },
  { feature: "Academic Record", details: "Consistent 100% SSC pass rate (2005–2026)" },
  { feature: "Alumni Network", details: "5,000+ graduates leading across professional and public sectors" },
];

const residentialFeatures = [
  {
    icon: Clock,
    title: "Structured Daily Routines",
    text: "Balanced scheduling for focused study, physical activity, recreation, and rest.",
  },
  {
    icon: Compass,
    title: "Continuous Mentorship",
    text: "Round-the-clock pastoral care and supervised evening study sessions led by faculty.",
  },
  {
    icon: ShieldCheck,
    title: "Character & Independence",
    text: "Practical life skills, collaborative peer living, and personal accountability.",
  },
];

const academicFeatures = [
  {
    icon: Trophy,
    title: "Sustained Excellence",
    text: "The institution has maintained an unbroken 100% pass record in the Secondary School Certificate (SSC) examinations from 2005 through 2026.",
  },
  {
    icon: BookOpen,
    title: "Beyond the Classroom",
    text: "Academic merit is paired with co-curricular engagement, language skill-building, and ethical leadership programs.",
  },
  {
    icon: GraduationCap,
    title: "Our National Footprint",
    text: "More than 5,000 alumni have graduated to top universities, engineering institutes, medical colleges, public administration, and entrepreneurship.",
  },
];

const leadershipTeam = [
  {
    initials: "MR",
    name: "Md. Mahbubur Rahman Chowdhury",
    role: "Director 1",
  },
  {
    initials: "HR",
    name: "Md. Hafizur Rahman",
    role: "Director 2",
  },
  {
    initials: "MR",
    name: "Md. Mamunur Rashid",
    role: "Director 3 & Principal",
  },
];

const corePillars = [
  {
    icon: Award,
    title: "Academic Rigor",
    text: "Strong fundamentals in STEM, humanities, and communication skills aligned with national curriculum benchmarks.",
  },
  {
    icon: HeartHandshake,
    title: "Moral & Social Responsibility",
    text: "Fostering empathy, integrity, and civic commitment through student assemblies, community outreach, and cultural observances.",
  },
  {
    icon: Users,
    title: "Supportive Environment",
    text: "Low student-to-teacher ratios that guarantee individual mentoring and continuous academic guidance.",
  },
];

export default function AboutPage() {
  return (
    <PageFrame
      eyebrow="Our History & Legacy"
      title="Raniganj National Bidyapith"
      intro="Nurturing Intellect, Character, and Purpose Since 1999."
    >
      {/* ─── Top Hero Showcase: Campus Picture & Welcome History Box ─── */}
      <AnimateIn variant="up" className="about-hero-showcase" as="div">
        {/* School Picture Box */}
        <div className="about-img-box">
          <Image
            src="/hero/hero-1.jpg"
            alt="Raniganj National Bidyapith campus and building"
            width={1200}
            height={800}
            priority
          />
          <div className="about-img-badge">
            <div>
              <strong>Raniganj National Bidyapith Campus</strong>
              <small style={{ color: "#c2d0d8", fontSize: "11px", display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                <MapPin size={11} /> Raniganj Bazar, Ghoraghat, Dinajpur
              </small>
            </div>
            <span>EST. 1999</span>
          </div>
        </div>

        {/* Welcome Narrative History Box */}
        <div className="about-text-card">
          <span className="history-eyebrow">Institutional Overview</span>
          <h1>Welcome to Raniganj National Bidyapith</h1>
          <span className="history-tagline">
            Nurturing Intellect, Character, and Purpose Since 1999
          </span>
          <p>
            Located at Raniganj Bazar in Ghoraghat, Dinajpur, Raniganj National Bidyapith was founded in 1999 with a commitment to academic rigor, integrity, and disciplined personal growth. Over more than two decades, the institution has expanded from an ambitious local initiative into one of the region’s most respected centers for secondary and residential education.
          </p>
          <p>
            By fostering close collaboration among educators, parents, and the wider community, we provide a safe, intellectually vibrant campus where learners cultivate curiosity, self-reliance, and lifelong civic responsibility.
          </p>
        </div>
      </AnimateIn>

      {/* ─── Key Highlights Table ─── */}
      <AnimateIn variant="up" delay={150} className="about-table-section" as="section">
        <h2>Key Highlights</h2>
        <div className="about-table-wrap">
          <table className="about-table">
            <thead>
              <tr>
                <th style={{ width: "32%" }}>Feature</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {keyHighlights.map((row) => (
                <tr key={row.feature}>
                  <td>
                    <strong>{row.feature}</strong>
                  </td>
                  <td>{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* ─── The Pioneer in Residential Education ─── */}
      <AnimateIn variant="up" delay={200} className="about-section-block" as="section">
        <h2>The Pioneer in Residential Education</h2>
        <p className="section-intro">
          Raniganj National Bidyapith holds a pioneering distinction in the region as the first residential school in Ghoraghat Upazila. Our boarding system was created to bridge accessibility gaps for students across neighboring villages and towns, offering:
        </p>
        <div className="about-grid-3">
          {residentialFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <article className="about-card" key={item.title}>
                <div className="about-card-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </AnimateIn>

      {/* ─── Academic Distinction & Alumni Legacy ─── */}
      <AnimateIn variant="up" delay={250} className="about-section-block" as="section">
        <h2>Academic Distinction & Alumni Legacy</h2>
        <p className="section-intro">
          Consistent performance in regional and national evaluations reflects our structured curriculum and deliberate exam preparation.
        </p>
        <div className="about-grid-3">
          {academicFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <article className="about-card" key={item.title}>
                <div className="about-card-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </AnimateIn>

      {/* ─── Institutional Governance ─── */}
      <AnimateIn variant="up" delay={300} className="about-section-block" as="section">
        <h2>Institutional Governance</h2>
        <p className="section-intro">
          The institution’s growth, academic standards, and daily operations are driven by its dedicated governing leadership:
        </p>
        <div className="about-grid-3" style={{ marginBottom: 24 }}>
          {leadershipTeam.map((leader) => (
            <div className="about-gov-card" key={leader.name}>
              <div className="about-gov-avatar" aria-hidden="true">
                {leader.initials}
              </div>
              <div className="about-gov-info">
                <strong>{leader.name}</strong>
                <span>{leader.role}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: "14.5px", lineHeight: 1.7, margin: 0 }}>
          Together, this management body steers the strategic vision, administrative excellence, and continuous development of Raniganj National Bidyapith.
        </p>
      </AnimateIn>

      {/* ─── Core Pillars of Our Learning Community ─── */}
      <AnimateIn variant="up" delay={350} className="about-section-block" as="section">
        <h2>Core Pillars of Our Learning Community</h2>
        <div className="about-grid-3">
          {corePillars.map((item) => {
            const Icon = item.icon;
            return (
              <article className="about-card" key={item.title}>
                <div className="about-card-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </AnimateIn>

      {/* ─── Closing Philosophy Quote Callout ─── */}
      <AnimateIn variant="scale" delay={400} className="about-quote-box" as="div">
        <Quote size={32} style={{ color: "var(--gold)", margin: "0 auto 16px", opacity: 0.9 }} aria-hidden="true" />
        <blockquote>
          “Education is not merely the preparation for examinations; it is the deliberate cultivation of intellect, character, and service to society.”
        </blockquote>
        <cite>Raniganj National Bidyapith Philosophy</cite>
      </AnimateIn>
    </PageFrame>
  );
}
