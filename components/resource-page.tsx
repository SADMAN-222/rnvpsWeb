import Link from "next/link";
import { ArrowUpRight, CalendarDays, FileText, MapPin } from "lucide-react";
import { EmptyState, PageFrame } from "@/components/site";
import { AnimateIn } from "@/components/animate-in";

type Card = { title: string; text: string; href?: string; status?: string };

export function ResourceCards({ cards }: { cards: Card[] }) {
  return (
    <AnimateIn stagger variant="up" className="resourcegrid" as="div">
      {cards.map((card) => (
        <article className="resourcecard" key={card.title}>
          <span className="tag">{card.status ?? "School information"}</span>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          {card.href && (
            <Link className="textlink" href={card.href}>
              Open section <ArrowUpRight size={15} />
            </Link>
          )}
        </article>
      ))}
    </AnimateIn>
  );
}

export function FacilitiesPage() {
  return (
    <PageFrame
      eyebrow="School environment"
      title="Facilities and student support."
      intro="Official facility information is published after confirmation by the school office."
    >
      <ResourceCards
        cards={[
          {
            title: "Learning spaces",
            text: "Information about classrooms and learning spaces will be published with approved photographs.",
          },
          {
            title: "Library and laboratories",
            text: "Verified library, science and ICT information will be available here.",
          },
          {
            title: "Student wellbeing",
            text: "The school will publish confirmed safety, health and pastoral-support information here.",
          },
          {
            title: "Activities and sport",
            text: "Clubs, sport and co-curricular activities will be listed after school confirmation.",
          },
        ]}
      />
    </PageFrame>
  );
}

export function AchievementsPage() {
  return (
    <PageFrame
      eyebrow="School community"
      title="Achievements worth celebrating."
      intro="Verified academic, sporting and cultural achievements will be shared here."
    >
      <AnimateIn variant="up">
        <EmptyState title="Achievements are being collected">
          The school office will publish approved achievement records, photographs and dates here.
        </EmptyState>
      </AnimateIn>
    </PageFrame>
  );
}

export function DownloadsPage() {
  const cards = [
    "Admission forms",
    "Academic calendar",
    "Class routine",
    "Exam routine",
    "Syllabus",
    "Notices",
    "Policies",
  ].map((title) => ({
    title,
    text: "Official document pending publication by the school office.",
    status: "Document centre",
  }));

  return (
    <PageFrame
      eyebrow="Documents"
      title="Downloads and school documents."
      intro="A single place for official forms, routines, calendars and policies."
    >
      <AnimateIn variant="up">
        <div className="downloadintro">
          <FileText size={22} />
          <p>Only documents approved by the school office will appear here.</p>
        </div>
      </AnimateIn>
      <ResourceCards cards={cards} />
    </PageFrame>
  );
}

export function CalendarPage() {
  return (
    <PageFrame
      eyebrow="Academic planning"
      title="School calendar."
      intro="Confirmed school dates, holidays, examinations and activities will appear here."
    >
      <AnimateIn stagger variant="up" className="calendarlist" as="div">
        <div>
          <CalendarDays size={22} />
          <h2>Academic calendar</h2>
          <p>The current academic calendar has not yet been published by the school office.</p>
        </div>
        <div>
          <MapPin size={22} />
          <h2>Events and activities</h2>
          <p>See the Events page for confirmed school gatherings and activities.</p>
          <Link className="textlink" href="/events">
            View events <ArrowUpRight size={15} />
          </Link>
        </div>
      </AnimateIn>
    </PageFrame>
  );
}

export function StudentServicesPage() {
  return (
    <PageFrame
      eyebrow="Students and families"
      title="Student services."
      intro="Digital services will be connected after the school completes secure system setup."
    >
      <ResourceCards
        cards={[
          {
            title: "Examination results",
            text: "A secure result service will be introduced after official system setup.",
            status: "Planned service",
          },
          {
            title: "Attendance",
            text: "Attendance access will be available when the school introduces its secure parent service.",
            status: "Planned service",
          },
          {
            title: "Certificates",
            text: "Certificate requests will be published when the school office confirms the process.",
            status: "Planned service",
          },
          {
            title: "Academic routine",
            text: "Published routines and calendars are available in the academic section.",
            href: "/academic",
            status: "Available information",
          },
          {
            title: "Notices",
            text: "Read verified updates from the school office.",
            href: "/notices",
            status: "Available information",
          },
        ]}
      />
    </PageFrame>
  );
}

export function FaqPage() {
  const questions = [
    [
      "How can I ask about admission?",
      "Please call or email the school office using the verified contact details on the Contact page.",
    ],
    [
      "Where will routines and calendars be published?",
      "The school will publish approved academic documents in the Academic and Downloads sections.",
    ],
    [
      "Can I check results online?",
      "A result service will only be introduced after the school establishes a secure official system.",
    ],
    [
      "Where can I find official notices?",
      "The Notices page is the school’s public space for verified updates.",
    ],
  ];

  return (
    <PageFrame
      eyebrow="Help for families"
      title="Frequently asked questions."
      intro="Clear answers to common school-office questions."
    >
      <AnimateIn stagger variant="up" className="faq" as="div">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </AnimateIn>
    </PageFrame>
  );
}
