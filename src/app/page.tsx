import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Truck, Users, BriefcaseBusiness } from 'lucide-react';
import { Reveal } from '@/components/motion';
import {
  SectionHeading,
  CapabilityStrip,
  NetworkSection,
  Process,
  RecruitmentSection,
} from '@/components/ui';
import { BackgroundMotion } from '@/components/background';
import { EnquiryForm } from '@/components/forms';
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          className="hero-image"
          src="/images/hero/home.jpg"
          alt="Illustrative ZENX cargo trucks leaving a distribution hub at blue hour"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <BackgroundMotion variant="hero" />
        <div className="container hero-content">
          <Reveal>
            <span className="eyebrow hero-eyebrow">LOGISTICS. PEOPLE. POSSIBILITIES.</span>
            <h1>
              Delivering trust.
              <br />
              <span>Driving growth.</span>
            </h1>
            <p>
              Logistics, transport and workforce solutions
              <br className="desktop-break" /> built to keep your business moving.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-gold">
                Request a Quote
                <ArrowRight size={19} />
              </Link>
              <Link href="/services" className="button button-outline">
                Explore Services
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <CapabilityStrip />
      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="OUR SERVICES"
              title="The right support for every movement."
              description="End-to-end logistics, transport and workforce solutions tailored to your business needs."
            />
          </Reveal>
          <div className="services-feature">
            <Reveal className="feature-photo">
              <Image
                src="/images/warehouse.png"
                alt="Illustrative warehouse team coordinating parcel operations"
                fill
                sizes="(max-width:768px) 100vw, 55vw"
              />
              <Link href="/services/warehousing" className="feature-photo-caption">
                <span>
                  <strong>Warehousing & Hub Operations</strong>
                </span>
                <ArrowUpRight size={26} />
              </Link>
            </Reveal>
            <div className="feature-service-list">
              {[
                {
                  icon: Truck,
                  title: 'Transport & Delivery',
                  text: 'Flexible and reliable transport solutions for businesses of all sizes.',
                  href: '/services/logistics-transport',
                },
                {
                  icon: Users,
                  title: 'Operations & Workforce',
                  text: 'Workforce and hub support to keep your operations running smoothly.',
                  href: '/services/manpower',
                },
                {
                  icon: BriefcaseBusiness,
                  title: 'Advisory & Tenders',
                  text: 'Guidance and support for logistics, operations and tender requirements.',
                  href: '/services/consultancy',
                },
              ].map(({ icon: Icon, title, text, href }, i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <Link className="feature-service-row" href={href}>
                    <span className="icon-box">
                      <Icon size={27} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                    <ArrowUpRight size={21} />
                  </Link>
                </Reveal>
              ))}
              <Link className="text-link" href="/services">
                View All Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <NetworkSection />
      <Process />
      <RecruitmentSection />
      <section className="section enquiry-section" id="enquiry">
        <div className="container split-grid">
          <Reveal>
            <span className="eyebrow gold">GET IN TOUCH</span>
            <h2>Let’s build the right solution for your business.</h2>
            <span className="gold-line" />
            <p>Share your requirement and explore a suitable way forward with ZENX.</p>
            <a className="enquiry-email" href="mailto:support.zenxlogistics@gmail.com">
              support.zenxlogistics@gmail.com
              <ArrowUpRight size={18} />
            </a>
          </Reveal>
          <Reveal>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
