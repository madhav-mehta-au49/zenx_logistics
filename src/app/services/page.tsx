import type { Metadata } from 'next';
import { PageHero, SectionHeading, CTA } from '@/components/ui';
import { ServicesGrid } from '@/components/services-grid';
export const metadata: Metadata = { title: 'Our Services' };
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Solutions that keep your business moving."
        description="Transport, delivery, workforce and operational support. Explore the right path for your requirement."
        image="services"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="EXPLORE OUR SERVICES"
            title="Your requirement. Our starting point."
            description="Find the service you need, then start a conversation with our team."
          />
          <ServicesGrid />
        </div>
      </section>
      <CTA title="Tell us what your business needs." />
    </>
  );
}
