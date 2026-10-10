import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero, SectionHeading, CTA } from '@/components/ui';
import { ServiceArt } from '@/components/illustrations';
import { Reveal } from '@/components/motion';
import { stories } from '@/lib/content';
export const metadata: Metadata = { title: 'Stories' };
export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="People behind the possibilities."
        description="People, connections and the possibilities ahead. Explore the ideas behind ZENX."
        image="warehouse"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="FROM ZENX"
            title="Stories behind the movement."
            description="Our approach to people, operations and a connected future."
          />
          <div className="news-grid">
            {stories.map((s) => (
              <Reveal key={s.slug}>
                <Link className="story-card" href={`/stories/${s.slug}`}>
                  <div className="story-art">
                    <ServiceArt slug={s.art} title={`${s.title} illustration`} />
                  </div>
                  <div className="story-body">
                    <span className="eyebrow">{s.tag}</span>
                    <h2>{s.title}</h2>
                    <p>{s.excerpt}</p>
                    <span className="text-link">
                      Read More
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Be part of the next chapter." label="Work With Us" href="/work-with-us" />
    </>
  );
}
