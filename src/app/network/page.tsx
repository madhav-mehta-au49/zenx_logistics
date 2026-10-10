import type { Metadata } from 'next';
import Link from 'next/link';
import { Warehouse, Users, Bike, ArrowUpRight } from 'lucide-react';
import { PageHero, NetworkVisual, SectionHeading, CTA } from '@/components/ui';
import { Reveal } from '@/components/motion';
export const metadata: Metadata = { title: 'Our Network' };
export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Network"
        title="Local teams. National ambition."
        description="Building connections through hubs, recruiters, riders and transport partners."
        image="network"
      />
      <section className="section network-section">
        <div className="container split-grid">
          <Reveal>
            <SectionHeading
              light
              eyebrow="A CONNECTED VISION"
              title="Bringing people and movement together."
              description="A network grows through local relationships. Our vision connects teams and operations across India, one conversation at a time."
            />
            <p>
              Ask our team about service availability for your city and requirement. This
              illustration represents a network vision.
            </p>
            <Link href="/contact" className="button button-gold">
              Enquire About Coverage
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>
          <Reveal>
            <NetworkVisual />
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="THE PEOPLE BEHIND THE NETWORK"
            title="Stronger connections start locally."
          />
          <div className="value-grid">
            {[
              {
                icon: Warehouse,
                title: 'Local Hubs',
                text: 'Sorting, coordination and dispatch anchored around local operational requirements.',
              },
              {
                icon: Users,
                title: 'Field Recruiters',
                text: 'Local teams supporting workforce and rider recruitment conversations.',
              },
              {
                icon: Bike,
                title: 'Riders & Transport',
                text: 'People and partners behind delivery and transport operations.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <Reveal className="value-card" key={title}>
                <span className="icon-box">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA
        title="Discuss your location and requirements."
        description="Tell us where you need support. Explore the possibilities with our team."
        label="Talk to ZENX"
      />
    </>
  );
}
