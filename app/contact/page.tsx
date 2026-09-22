import { PageFrame, ContactForm } from "@/components/site";
import { school } from "@/data/school";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() { return <PageFrame eyebrow="Start a conversation" title="We would be glad to hear from you." intro="Use the details below for the school office, or send a frontend-only message through the form."><div className="contactlayout"><div className="contactdetails"><p><MapPin size={17} /> {school.address}</p><p><a href={`tel:${school.phone.replace(/[^\d+]/g, "")}`}><Phone size={17} /> {school.phone}</a></p><p><a href={`mailto:${school.email}`}><Mail size={17} /> {school.email}</a></p><p>{school.officeHours}</p><div className="mapplaceholder">Map placeholder</div></div><ContactForm /></div></PageFrame>; }
