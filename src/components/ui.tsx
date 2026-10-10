import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Truck, Users, Package, MapPin } from 'lucide-react';
import { Reveal } from './motion';
import { IndiaMap } from './india-map';
import { BackgroundMotion } from './background';
export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  description,
  image = 'hero',
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero ${compact ? 'compact' : ''}`}>
      <Image
        src={`/images/hero/${image}.jpg`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-overlay" />
      <BackgroundMotion variant="hero" count={5} />
      <div className="container page-hero-content">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <Reveal>
          <span className="eyebrow gold">{eyebrow}</span>
          <h1>{title}</h1>
          <span className="gold-line" aria-hidden="true" />
          <p>{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
export function CTA({
  title = 'Let’s build the right solution for your business.',
  description = 'Tell us what you need. Let’s explore the possibilities.',
  label = 'Request a Quote',
  href = '/contact',
}: {
  title?: string;
  description?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal className="cta-banner">
          <Image src="/images/warehouse.png" alt="" fill sizes="1200px" />
          <div className="cta-overlay" />
          <div className="cta-content">
            <span className="gold-line" />
            <h2>{title}</h2>
            <p>{description}</p>
            <Link className="button button-gold" href={href}>
              {label}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="From requirement to coordinated execution."
            description=""
          />
        </Reveal>
        <div className="process-grid">
          {[
            {
              title: 'Share your requirement',
              text: 'Tell us what you need and where you need it.',
            },
            { title: 'Discuss your solution', text: 'Explore a suitable approach with our team.' },
            {
              title: 'Coordinate movement',
              text: 'Bring people, transport and operations together.',
            },
            { title: 'Stay connected', text: 'Keep the conversation moving with our support.' },
          ].map((s, i) => (
            <Reveal delay={i * 0.06} className="process-step" key={s.title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function NetworkVisual() {
  return <IndiaMap />;
}
export function NetworkSection() {
  return (
    <section className="network-section section">
      <BackgroundMotion variant="dark" count={6} />
      <div className="container split-grid">
        <Reveal>
          <span className="eyebrow gold">OUR NETWORK</span>
          <h2>
            Local teams.
            <br />A connected vision
            <br />
            for India.
          </h2>
          <p>Connecting hubs, recruiters, riders and transport partners.</p>
          <span className="gold-line" />
          <Link className="button button-outline" href="/network">
            Explore Our Network <ArrowUpRight size={18} />
          </Link>
        </Reveal>
        <Reveal delay={0.15}>
          <NetworkVisual />
        </Reveal>
      </div>
    </section>
  );
}
export function Values() {
  return (
    <div className="value-grid">
      {[
        {
          icon: Truck,
          title: 'Reliability',
          text: 'Clear coordination and dependable business support.',
        },
        {
          icon: Users,
          title: 'People First',
          text: 'Opportunities built around the people behind every movement.',
        },
        {
          icon: MapPin,
          title: 'Responsible Growth',
          text: 'A considered approach to building a connected network.',
        },
      ].map(({ icon: Icon, title, text }, i) => (
        <Reveal className="value-card" delay={i * 0.08} key={title}>
          <span className="icon-box">
            <Icon />
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </Reveal>
      ))}
    </div>
  );
}
export function RecruitmentSection() {
  return (
    <section className="section recruitment-section">
      <div className="container split-grid">
        <Reveal>
          <span className="eyebrow">WORK WITH US</span>
          <h2>
            Build your next
            <br />
            opportunity with ZENX.
          </h2>
          <p>Join our growing rider and recruiter network.</p>
          <div className="button-row">
            <Link href="/register/rider" className="button button-gold">
              Register as Rider
              <ArrowRight size={18} />
            </Link>
            <Link href="/register/recruiter" className="text-link">
              Register as Recruiter
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </Reveal>
        <Reveal className="recruitment-image">
          <Image
            src="/images/rider.png"
            alt="Illustrative delivery rider beside a motorcycle"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
export function CapabilityStrip() {
  return (
    <div className="capability-strip">
      <div className="container">
        {[
          {
            icon: Truck,
            title: 'Logistics & Transport',
            text: 'Movement built around your needs.',
          },
          {
            icon: Package,
            title: 'Delivery Operations',
            text: 'Local delivery. Connected support.',
          },
          {
            icon: Users,
            title: 'Workforce & Hub Support',
            text: 'People behind stronger operations.',
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <Icon size={32} />
            <span>
              <strong>{title}</strong>
              <small>{text}</small>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={18} />
          {item}
        </li>
      ))}
    </ul>
  );
}
