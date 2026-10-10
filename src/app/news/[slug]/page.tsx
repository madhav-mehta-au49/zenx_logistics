import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { stories } from '@/lib/content';
import { PageHero, CTA } from '@/components/ui';
import { ServiceArt } from '@/components/illustrations';
export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: stories.find((s) => s.slug === slug)?.title ?? 'Story' };
}
export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();
  return (
    <>
      <PageHero
        compact
        eyebrow={story.tag}
        title={story.title}
        description={story.excerpt}
        image={story.image}
      />
      <section className="section">
        <article className="container article">
          <div className="service-art">
            <ServiceArt slug={story.art} title={`${story.title} illustration`} />
          </div>
          <span className="eyebrow">OUR APPROACH</span>
          <p>{story.text}</p>
          <p>
            Every requirement and opportunity starts with a conversation. Contact the team to
            discuss available support and the next steps.
          </p>
        </article>
      </section>
      <CTA />
    </>
  );
}
