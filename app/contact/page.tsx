import { PageFrame } from "@/components/site";
import { school } from "@/data/school";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactFormClient } from "./contact-form";

export default function ContactPage() {
  return (
    <PageFrame
      eyebrow="Start a conversation"
      title="Contact the school office."
      intro="Use the verified contact details below or send us a message using the form."
    >
      <div className="contactlayout">
        <div className="contactdetails">
          <p><MapPin size={17} /> {school.address}</p>
          <p>
            <a href={`tel:${school.phone.replace(/[^\d+]/g, "")}`}>
              <Phone size={17} /> {school.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${school.email}`}>
              <Mail size={17} /> {school.email}
            </a>
          </p>
          <p><Clock size={17} /> {school.officeHours}</p>

          {/* Embedded Map — Raniganj, Ghoraghat, Dinajpur */}
          <iframe
            className="mapframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14370.0!2d88.95!3d25.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fce0!2sRaniganj%2C+Ghoraghat!5e0!3m2!1sen!2sbd!4v1"
            width="100%"
            height="220"
            style={{ border: 0, marginTop: 24 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="School location map"
          />
        </div>
        <ContactFormClient />
      </div>
    </PageFrame>
  );
}
