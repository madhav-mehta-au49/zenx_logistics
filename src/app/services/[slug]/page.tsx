import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/content';
import { PageHero, Process, CheckList, SectionHeading } from '@/components/ui';
import { ServiceArt } from '@/components/illustrations';
import { EnquiryForm } from '@/components/forms';
import { Reveal } from '@/components/motion';
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service?.title ?? 'Service' };
}
export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.description}
        image={service.image}
      />
      <section className="section">
        <div className="container detail-layout">
          <Reveal className="detail-main">
            <span className="eyebrow">SUPPORT BUILT AROUND YOU</span>
            <h2>A considered approach to your requirements.</h2>
            <p>
              Every business has different needs. Share your location, scale and operational
              priorities with ZENX, and explore an approach suited to your requirement.
            </p>
            <div className="service-art">
              <ServiceArt slug={service.slug} title={`${service.title} illustration`} />
            </div>
            <h2>What we can discuss</h2>
            <CheckList items={service.features} />
            <p className="field-note">
              Availability and scope are confirmed by the team for each requirement.
            </p>
          </Reveal>
          <aside className="detail-sidebar">
            <h3>Explore other services</h3>
            {services
              .filter((s) => s.slug !== slug && s.category === service.category)
              .slice(0, 5)
              .map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  {s.title}
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            <Link className="button button-gold" href="#service-enquiry">
              Discuss Your Requirement
              <ArrowUpRight size={17} />
            </Link>
          </aside>
        </div>
      </section>
      <Process />
      <section className="section recruitment-section" id="service-enquiry">
        <div className="container split-grid">
          <SectionHeading
            eyebrow="LET’S TALK"
            title={`Tell us about your ${service.title.toLowerCase()} needs.`}
            description="Explore a suitable solution with our team. This form demonstrates the proposed enquiry experience."
          />
          <EnquiryForm defaultService={service.title} full />
        </div>
      </section>
    </>
  );
}
