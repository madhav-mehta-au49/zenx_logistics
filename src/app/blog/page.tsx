import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/ui';
export const metadata: Metadata = { title: 'Blog' };
export default function BlogPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Blog"
        title="Insights for the road ahead."
        description="A space for logistics ideas, learning and updates from ZENX."
        image="warehouse"
      />
      <section className="section">
        <div className="container blog-empty">
          <span className="icon-box">
            <BookOpen size={30} />
          </span>
          <span className="eyebrow">ZENX BLOG</span>
          <h2>No blog posts published yet.</h2>
          <p>
            The current ZENX blog has no published entries. Explore the company vision or our demo
            editorial stories while this space develops.
          </p>
          <div className="button-row">
            <Link className="button button-gold" href="/news">
              Company News <ArrowRight size={17} />
            </Link>
            <Link className="text-link" href="/stories">
              Explore Stories <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
