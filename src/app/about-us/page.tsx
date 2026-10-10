import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { PageHero, Values, SectionHeading, CTA } from '@/components/ui';
import { Reveal } from '@/components/motion';
import { contact } from '@/lib/content';
export const metadata: Metadata = { title: 'About Us' };
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ZENX"
        title="Built for movement. Driven by people."
        description="Logistics and workforce solutions that support businesses and create opportunities for people."
        image="about"
      />
      <section className="section">
        <div className="container split-grid">
          <Reveal>
            <span className="eyebrow">OUR STORY</span>
            <h2>People behind every possibility.</h2>
            <p>
              ZENX Logistics Private Limited began with an ambition to build a modern logistics and
              workforce network that can serve businesses while creating meaningful employment
              opportunities.
            </p>
            <p>
              Our approach brings transport, delivery and operational workforce requirements into
              one conversation. We believe clear coordination and local relationships are the
              starting point for responsible growth.
            </p>
          </Reveal>
          <Reveal className="editorial-image">
            <Image
              src="/images/warehouse.png"
              alt="Representative warehouse colleagues coordinating operations"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading eyebrow="OUR VALUES" title="Principles that guide us." />
          <Values />
        </div>
      </section>
      <section className="section mission-section">
        <div className="container split-grid">
          <Reveal>
            <span className="eyebrow gold">OUR MISSION</span>
            <h2>Support dependable movement and meaningful work.</h2>
            <p>
              Bring logistics and workforce solutions together to serve businesses and create
              opportunities for people.
            </p>
          </Reveal>
          <Reveal>
            <span className="eyebrow gold">OUR VISION</span>
            <h2>Build a connected network across India.</h2>
            <p>
              Connect local hubs, riders, recruiters and transport partners through coordinated
              operations and a people-first approach.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">OUR OFFICE</span>
          <h2>A place to start the conversation.</h2>
          <div className="office-strip">
            <span className="icon-box">
              <MapPin />
            </span>
            <div>
              <h3>Registered Office</h3>
              <p>{contact.address}</p>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Let’s move forward together." label="Contact ZENX" />
    </>
  );
}
