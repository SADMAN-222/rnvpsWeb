'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, User, HelpCircle, ArrowRight } from 'lucide-react';

export function ContactFormClient() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || 'Not provided',
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      // Send email using mailto as a reliable direct link
      const mailtoUrl = `mailto:1999rnb@gmail.com?subject=${encodeURIComponent(
        `[Website Inquiry] ${data.subject} - ${data.name}`
      )}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nInquiry Category: ${data.subject}\n\nMessage:\n${data.message}\n\n---\nSent via Raniganj National Bidyapith Portal`
      )}`;

      window.open(mailtoUrl, '_blank');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form-success">
        <div className="success-icon-wrap">
          <CheckCircle2 size={36} />
        </div>
        <h3>Message Composed Successfully</h3>
        <p>
          Your email application has opened with your inquiry pre-filled. If it didn&apos;t trigger automatically, please email our administrative office directly at:
        </p>
        <a href="mailto:1999rnb@gmail.com" className="success-email-badge">
          <Mail size={16} /> 1999rnb@gmail.com
        </a>
        <div className="success-actions">
          <button
            type="button"
            className="button buttonoutline"
            onClick={() => setStatus('idle')}
          >
            Compose Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contactform-enhanced" onSubmit={handleSubmit}>
      <div className="form-grid-2">
        <label className="form-field">
          <span className="field-label">
            <User size={14} /> Full Name <span className="req">*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Mohammad Rahim"
            autoComplete="name"
            className="field-input"
          />
        </label>

        <label className="form-field">
          <span className="field-label">
            <Mail size={14} /> Email Address <span className="req">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="e.g. rahim@example.com"
            autoComplete="email"
            className="field-input"
          />
        </label>
      </div>

      <div className="form-grid-2">
        <label className="form-field">
          <span className="field-label">
            <Phone size={14} /> Contact Phone
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. 01700-000000"
            autoComplete="tel"
            className="field-input"
          />
        </label>

        <label className="form-field">
          <span className="field-label">
            <HelpCircle size={14} /> Topic / Department <span className="req">*</span>
          </span>
          <select name="subject" required className="field-select">
            <option value="">Select an inquiry type</option>
            <option value="Admission Enquiry">Admission & Enrollment</option>
            <option value="Residential & Hostel">Residential Care & Boarding</option>
            <option value="Academic Curriculum">Academic Curriculum & Classes</option>
            <option value="Fees & Billing">Tuition & Boarding Fees</option>
            <option value="Certificate / Transcript">Transfer Certificate (TC) / Transcript</option>
            <option value="General Question">General Administration Inquiry</option>
            <option value="Other">Other Topic</option>
          </select>
        </label>
      </div>

      <label className="form-field">
        <span className="field-label">
          Detailed Message <span className="req">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Please describe your question or requirement in detail so we can route it to the proper office..."
          className="field-textarea"
        />
      </label>

      <div className="form-footer-action">
        <button
          type="submit"
          className="contact-submit-btn"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            'Preparing Message...'
          ) : (
            <>
              Send Inquiry <Send size={15} />
            </>
          )}
        </button>
        <span className="form-privacy-hint">
          Opens in your default email client for verified delivery.
        </span>
      </div>
    </form>
  );
}
