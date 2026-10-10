import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero, SectionHeading } from '@/components/ui';
import { ServiceArt } from '@/components/illustrations';
import { Reveal } from '@/components/motion';
import { stories } from '@/lib/content';

export const metadata: Metadata = { title: 'News' };

export default function NewsPage() {
  const dream = stories.find((s) => s.slug === 'zenx-dream')!;
  const people = stories.find((s) => s.slug === 'people-first')!;
  const network = stories.find((s) => s.slug === 'network-update')!;
  return (
    <>
      <PageHero eyebrow="News" title={dream.title} description={dream.text} image="hero" />
      <section className="section">
        <div className="container news-feature">
          <Reveal className="service-art">
            <ServiceArt slug={people.art} title={`${people.title} illustration`} />
          </Reveal>
          <Reveal>
            <SectionHeading eyebrow={people.tag} title={people.title} description={people.text} />
            <Link className="text-link" href={`/news/${people.slug}`}>
              Read More <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section news-network">
        <div className="container news-update">
          <SectionHeading
            light
            eyebrow={network.tag}
            title={network.title}
            description={network.text}
          />
          <div className="button-row">
            <Link className="button button-gold" href={`/news/${network.slug}`}>
              Read More <ArrowRight size={18} />
            </Link>
            <Link className="button button-outline" href="/network">
              Explore Our Network <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container news-feature">
          <Reveal>
            <SectionHeading eyebrow={dream.tag} title={dream.title} description={dream.text} />
            <Link className="text-link" href={`/news/${dream.slug}`}>
              Read More <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal className="service-art">
            <ServiceArt slug={dream.art} title={`${dream.title} illustration`} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
