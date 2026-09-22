import { PageFrame } from "@/components/site";
import { events } from "@/data/content";

export default function EventsPage() { return <PageFrame eyebrow="School life" title="Make room for moments." intro="Upcoming activities and community gatherings will be collected here."><div className="eventlist">{events.map(event => <article key={event.id}><div className="eventdate"><strong>{event.date.split("-")[2]}</strong><span>{event.month}</span></div><div><h3>{event.title}</h3><p>{event.summary}</p></div></article>)}</div></PageFrame>; }
