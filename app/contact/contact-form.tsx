'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

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
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      // Send email using mailto as a fallback (works without backend)
      const mailtoUrl = `mailto:1999rnb@gmail.com?subject=${encodeURIComponent(
        `[Website Enquiry] ${data.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
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
      <div className="success">
        <CheckCircle size={32} />
        <h3>Your message is ready to send</h3>
        <p>
          Your email client should have opened with the message pre-filled.
          If it didn't, please email us directly at{' '}
          <a href="mailto:1999rnb@gmail.com" className="textlink">1999rnb@gmail.com</a>.
        </p>
        <button
          className="button buttonoutline"
          onClick={() => setStatus('idle')}
          style={{ marginTop: 16 }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contactform" onSubmit={handleSubmit}>
      <label>
        Your name
        <input
          type="text"
          name="name"
          required
          placeholder="Full name"
          autoComplete="name"
        />
      </label>
      <label>
        Email address
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
        />
      </label>
      <label>
        Subject
        <select name="subject" required>
          <option value="">Choose a subject</option>
          <option value="Admission enquiry">Admission enquiry</option>
          <option value="Academic information">Academic information</option>
          <option value="Fee or payment">Fee or payment</option>
          <option value="Certificate request">Certificate request</option>
          <option value="General question">General question</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Write your message here..."
        />
      </label>
      <button
        type="submit"
        className="button buttondark"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Opening email...' : 'Send message'}
        <Send size={15} />
      </button>
    </form>
  );
}

