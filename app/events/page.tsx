import type { Metadata } from "next";
import { CalendarDays, MapPin } from "lucide-react";
import { EmptyState, PageFrame } from "@/components/site";
import { AnimateIn } from "@/components/animate-in";
import { events } from "@/data/content";

export const metadata: Metadata = {
  title: "Events | Raniganj National Bidyapith",
  description:
    "Explore upcoming events, sports tournaments, cultural celebrations, and campus activities at Raniganj National Bidyapith.",
};

export default function EventsPage() {
  return (
    <PageFrame
      eyebrow="School life"
      title="Events and activities."
      intro="Confirmed activities, dates and participation details from the school office."
    >
      {events.length ? (
        <AnimateIn stagger variant="up" className="eventlist" as="div">
          {events.map((event) => (
            <article key={event.id}>
              <div className="eventdate">
                <strong>{event.date.split("-")[2]}</strong>
                <span>{event.month}</span>
              </div>
              <div>
                <span className="tag">{event.category}</span>
                <h3>{event.title}</h3>
                <p>
                  <MapPin size={14} /> {event.location} · <CalendarDays size={14} />{" "}
                  {event.time}
                </p>
                <p>{event.summary}</p>
              </div>
            </article>
          ))}
        </AnimateIn>
      ) : (
        <AnimateIn variant="up">
          <EmptyState title="No confirmed events">
            The school office has not published an upcoming event yet.
          </EmptyState>
        </AnimateIn>
      )}
    </PageFrame>
  );
}
