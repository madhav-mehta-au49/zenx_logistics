import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/ui';
import { ContactDetails, EnquiryForm } from '@/components/forms';
import { Reveal } from '@/components/motion';
export const metadata: Metadata = { title: 'Contact & Request a Quote' };
export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Get in Touch"
        title="Let’s move your business forward."
        description="Talk to ZENX about logistics, transport, delivery or workforce support."
      />
      <section className="section">
        <div className="container contact-layout">
          <Reveal>
            <span className="eyebrow">START A CONVERSATION</span>
            <h2>The right support starts here.</h2>
            <p>
              Share your requirement or reach our team directly. We’re here to help businesses,
              riders and recruiters find their next step.
            </p>
            <ContactDetails />
            <div className="support-callout">
              <h3>Rider or recruiter enquiry?</h3>
              <p>
                Explore our opportunity pages, or contact the team for registration and support
                questions.
              </p>
              <Link href="/work-with-us" className="text-link">
                Visit Work With Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <EnquiryForm full />
          </Reveal>
        </div>
      </section>
    </>
  );
}
