import type { Metadata } from 'next';
import { PageHero } from '@/components/ui';
export const metadata: Metadata = { title: 'Demo Terms Notice' };
export default function Terms() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Terms"
        title="A clear foundation for the journey."
        description="Information about this website demonstration."
      />
      <section className="section">
        <div className="container legal-copy">
          <span className="eyebrow">DEMONSTRATION NOTICE</span>
          <h2>A presentation of the proposed experience.</h2>
          <p>
            This website is a redesign demonstration for ZENX Logistics Private Limited. Quote
            requests and registration forms simulate user journeys. They do not create bookings,
            applications, payments or contractual commitments.
          </p>
          <h2>Services and availability</h2>
          <p>
            Discuss service availability, requirements, eligibility and commercial terms directly
            with the ZENX team. The network graphic is an illustrative vision, not a verified
            coverage map. Images are representative demo concepts.
          </p>
          <h2>Before a public launch</h2>
          <p>
            Approved business terms, rider/recruiter terms and applicable legal text must be
            supplied and reviewed before enabling real transactions or registrations. This screen is
            a layout demonstration rather than final contractual text.
          </p>
        </div>
      </section>
    </>
  );
}
