import { ContactForm, PageFrame } from "@/components/site";
import { school } from "@/data/school";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return <PageFrame eyebrow="Start a conversation" title="Contact the school office." intro="Use the verified contact details below. Online enquiry delivery will be available after office setup."><div className="contactlayout"><div className="contactdetails"><p><MapPin size={17} /> {school.address}</p><p><a href={`tel:${school.phone.replace(/[^\d+]/g, "")}`}><Phone size={17} /> {school.phone}</a></p><p><a href={`mailto:${school.email}`}><Mail size={17} /> {school.email}</a></p><p>{school.officeHours}</p><div className="mapplaceholder">Location map pending school confirmation</div></div><ContactForm /></div></PageFrame>;
}
