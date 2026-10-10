import type { Metadata } from 'next';
import { PageHero, SectionHeading, CTA } from '@/components/ui';
import { Gallery, GalleryVideos } from '@/components/gallery';

export const metadata: Metadata = { title: 'Gallery' };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Gallery"
        title="Our Work, Our People, Our Network."
        description="Photos first, because apparently humans like evidence before words. These visuals are real logistics photographs used as temporary website imagery and can later be replaced by your own ZENX photos."
        image="warehouse"
      />
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <section className="section gallery-videos">
        <div className="container">
          <SectionHeading
            eyebrow="Videos"
            title="ZENX Operations Videos"
            description="Temporary demo video for the prototype. Replace it with your real hub or team video."
          />
          <GalleryVideos />
        </div>
      </section>
      <CTA title="Picture your next possibility with ZENX." />
    </>
  );
}
