import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero, SectionHeading, Values } from '@/components/ui';
import { Reveal } from '@/components/motion';
export const metadata: Metadata = { title: 'Work With Us' };
export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work With Us"
        title="Your next chapter starts here."
        description="Join the last-mile journey as a rider, or help build local teams as a recruiter."
        image="work-with-us"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="CHOOSE YOUR ROLE"
            title="More than movement. Opportunity."
            description="Find the path that fits your interests, then speak to our team about current opportunities."
          />
          <div className="role-grid">
            {[
              {
                role: 'rider',
                title: 'Register as Rider',
                image: 'rider',
                description: 'Explore opportunities to be part of the last-mile delivery network.',
              },
              {
                role: 'recruiter',
                title: 'Register as Recruiter',
                image: 'warehouse',
                description: 'Help connect local talent with workforce and rider opportunities.',
              },
            ].map((r) => (
              <Reveal className="role-card" key={r.role}>
                <div className="role-photo">
                  <Image
                    src={`/images/${r.image}.png`}
                    alt={`Representative ${r.role} opportunity image`}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div className="role-content">
                  <span className="eyebrow">YOUR NEXT POSSIBILITY</span>
                  <h2>{r.title}</h2>
                  <p>{r.description}</p>
                  <Link href={`/register/${r.role}`} className="button button-gold">
                    {r.title}
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="gallery-notice" style={{ marginTop: 30 }}>
            Registration screens are demo previews. Contact ZENX for current eligibility, available
            roles and application requirements.
          </p>
        </div>
      </section>
      <section className="section recruitment-section">
        <div className="container">
          <SectionHeading eyebrow="OUR APPROACH" title="A people-first way forward." />
          <Values />
        </div>
      </section>
    </>
  );
}
