'use client';
import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  LoaderCircle,
  Mail,
  Phone,
  MapPin,
  Clock3,
} from 'lucide-react';
import Link from 'next/link';
import { services, contact } from '@/lib/content';
import { readFormValues, validateEnquiry, validateRegistration } from '@/lib/validation';
export function EnquiryForm({
  defaultService = '',
  full = false,
}: {
  defaultService?: string;
  full?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [selected, setSelected] = useState(defaultService);
  const [error, setError] = useState('');
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = readFormValues(new FormData(e.currentTarget));
    const validationError = validateEnquiry(
      {
        name: data.name ?? '',
        email: data.email ?? '',
        phone: data.phone ?? '',
        service: data.service ?? '',
        message: data.message ?? '',
        city: data.city ?? '',
      },
      services.map((service) => service.title),
      full,
    );
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setBusy(true);
    await new Promise((r) => setTimeout(r, 650));
    setBusy(false);
    setSubmitted(true);
  }
  if (submitted)
    return (
      <div className="form-card form-success" role="status">
        <CheckCircle2 size={48} />
        <h3>Your demo enquiry is ready.</h3>
        <p>This is a prototype confirmation. No message has been sent or stored.</p>
        <p>
          For a real enquiry, email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
        <button className="button button-gold" onClick={() => setSubmitted(false)}>
          Try another enquiry
          <ArrowRight size={17} />
        </button>
      </div>
    );
  const category = services.find((s) => s.title === selected)?.category;
  return (
    <form className="form-card" onSubmit={submit} aria-busy={busy}>
      <div className="form-heading">
        <h3>Tell us what you need</h3>
        <span>Demo enquiry form</span>
      </div>
      <div className="form-grid">
        <label>
          Full name <b>*</b>
          <input
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
            maxLength={100}
          />
        </label>
        <label>
          Company <small>(optional)</small>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            maxLength={150}
          />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
        </label>
        <label className="full-field">
          Service required <b>*</b>
          <select
            name="service"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        </label>
        {full && (
          <>
            <label className="full-field">
              City / operating location <b>*</b>
              <input name="city" placeholder="Where do you need support?" required />
            </label>
            {category === 'Transport & Delivery' && (
              <>
                <label>
                  Pickup location <small>(optional)</small>
                  <input name="pickup" placeholder="Origin city" />
                </label>
                <label>
                  Delivery location <small>(optional)</small>
                  <input name="destination" placeholder="Destination city" />
                </label>
              </>
            )}
            {category === 'Operations & Workforce' && (
              <>
                <label>
                  Role / operation <small>(optional)</small>
                  <input name="role" placeholder="e.g. Warehouse team" />
                </label>
                <label>
                  Team size <small>(optional)</small>
                  <input
                    name="quantity"
                    type="number"
                    min="1"
                    max="10000"
                    placeholder="Number of people"
                  />
                </label>
              </>
            )}
          </>
        )}
        <label className="full-field">
          Your requirement <b>*</b>
          <textarea
            name="message"
            placeholder="Tell us a little about your requirement…"
            rows={full ? 4 : 3}
            required
            minLength={10}
            maxLength={3000}
          />
        </label>
      </div>
      <p className="field-note">Provide at least one contact method: email or phone.</p>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button className="button button-gold form-submit" disabled={busy}>
        {busy ? (
          <>
            <LoaderCircle size={18} className="spin" />
            Preparing demo enquiry…
          </>
        ) : (
          <>
            Submit Enquiry
            <ArrowRight size={18} />
          </>
        )}
      </button>
      <p className="form-disclaimer">Prototype only. No data is sent or saved.</p>
    </form>
  );
}
export function ContactDetails() {
  return (
    <div className="contact-details">
      {[
        { icon: Mail, label: 'Email us', value: contact.email, href: `mailto:${contact.email}` },
        { icon: Phone, label: 'Call our team', value: contact.phone, href: 'tel:+917983544498' },
        { icon: MapPin, label: 'Registered office', value: contact.address },
        { icon: Clock3, label: 'Support hours', value: contact.hours },
      ].map(({ icon: Icon, label, value, href }) => (
        <div className="contact-detail" key={label}>
          <span className="icon-box">
            <Icon size={21} />
          </span>
          <div>
            <h3>{label}</h3>
            {href ? <a href={href}>{value}</a> : <p>{value}</p>}
            {label === 'Support hours' && <small>Excluding public holidays</small>}
          </div>
        </div>
      ))}
    </div>
  );
}
export function RegistrationForm({ role }: { role: 'rider' | 'recruiter' }) {
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [data, setData] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const title = role === 'rider' ? 'Rider' : 'Recruiter';
  const [error, setError] = useState('');
  async function next(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = readFormValues(new FormData(e.currentTarget));
    const validationError = validateRegistration(values, step);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setData({ ...data, ...values });
    if (step === 1) {
      setStep(2);
      return;
    }
    setBusy(true);
    await new Promise((r) => setTimeout(r, 600));
    setBusy(false);
    setComplete(true);
  }
  if (complete)
    return (
      <div className="form-card form-success" role="status">
        <CheckCircle2 size={48} />
        <h2>Thanks for exploring ZENX.</h2>
        <p>
          Your {role} registration preview is complete. No application has been submitted or stored.
        </p>
        <Link className="button button-gold" href="/contact">
          Contact our team
          <ArrowRight size={17} />
        </Link>
      </div>
    );
  return (
    <form className="form-card registration-form" onSubmit={next} aria-busy={busy}>
      <div className="registration-progress">
        <span className={step >= 1 ? 'active' : ''}>
          01 <small>Your details</small>
        </span>
        <i />
        <span className={step === 2 ? 'active' : ''}>
          02 <small>Your interest</small>
        </span>
      </div>
      <h2>{step === 1 ? `Start your ${role} journey.` : 'A little more about you.'}</h2>
      <p>
        {step === 1
          ? 'Let’s get to know you.'
          : 'Help the team understand where you would like to contribute.'}
      </p>
      <div className="form-grid" key={step}>
        {step === 1 ? (
          <>
            <label className="full-field">
              Full name <b>*</b>
              <input
                name="name"
                defaultValue={data.name}
                autoComplete="name"
                required
                placeholder="Your full name"
              />
            </label>
            <label>
              Phone <b>*</b>
              <input
                name="phone"
                defaultValue={data.phone}
                type="tel"
                autoComplete="tel"
                pattern="[+0-9 ()-]{10,20}"
                required
                placeholder="Your mobile number"
              />
            </label>
            <label>
              Email <small>(optional)</small>
              <input
                name="email"
                defaultValue={data.email}
                type="email"
                autoComplete="email"
                placeholder="Your email address"
              />
            </label>
            <label className="full-field">
              City <b>*</b>
              <input name="city" defaultValue={data.city} required placeholder="Your city" />
            </label>
          </>
        ) : (
          <>
            <label className="full-field">
              Preferred working location <b>*</b>
              <input
                name="location"
                defaultValue={data.location}
                required
                maxLength={150}
                placeholder="City or district"
              />
            </label>
            <label className="full-field">
              {title} experience <small>(optional)</small>
              <select name="experience" defaultValue={data.experience}>
                <option>New to this role</option>
                <option>Less than 1 year</option>
                <option>1–3 years</option>
                <option>More than 3 years</option>
              </select>
            </label>
            <label className="full-field">
              Tell us about your interest <small>(optional)</small>
              <textarea
                name="interest"
                defaultValue={data.interest}
                maxLength={1500}
                rows={3}
                placeholder="What would you like the team to know?"
              />
            </label>
            <div className="application-note full-field">
              Eligibility, document requirements and terms will be confirmed by ZENX. This demo does
              not collect identity documents.
            </div>
          </>
        )}
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <div className="button-row">
        {step === 2 && (
          <button
            className="button button-plain"
            type="button"
            onClick={(event) => {
              const form = event.currentTarget.form;
              if (form) setData({ ...data, ...readFormValues(new FormData(form)) });
              setError('');
              setStep(1);
            }}
          >
            <ArrowLeft size={17} />
            Back
          </button>
        )}
        <button className="button button-gold" disabled={busy}>
          {busy ? (
            <LoaderCircle size={18} className="spin" />
          ) : step === 1 ? (
            'Continue'
          ) : (
            'Complete Demo'
          )}
          <ArrowRight size={17} />
        </button>
      </div>
      <p className="form-disclaimer">Prototype only. No application is sent or saved.</p>
    </form>
  );
}
