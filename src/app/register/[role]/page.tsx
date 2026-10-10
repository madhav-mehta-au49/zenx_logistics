import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PageHero, CheckList } from '@/components/ui';
import { RegistrationForm } from '@/components/forms';
export function generateStaticParams() {
  return [{ role: 'rider' }, { role: 'recruiter' }];
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>;
}): Promise<Metadata> {
  const { role } = await params;
  return { title: role === 'rider' ? 'Rider Registration' : 'Recruiter Registration' };
}
export default async function RegisterPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  if (role !== 'rider' && role !== 'recruiter') notFound();
  return (
    <>
      <PageHero
        compact
        eyebrow="Work With Us"
        title={
          role === 'rider' ? 'Be part of the last-mile journey.' : 'Help build strong local teams.'
        }
        description="Explore your next opportunity with ZENX."
        image={role === 'rider' ? 'rider' : 'warehouse'}
      />
      <section className="section">
        <div className="container registration-layout">
          <div>
            <div className="editorial-image">
              <Image
                src={`/images/${role === 'rider' ? 'rider' : 'warehouse'}.png`}
                alt="Representative opportunity imagery"
                fill
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </div>
            <h2>People. Possibilities. ZENX.</h2>
            <CheckList
              items={
                role === 'rider'
                  ? [
                      'Explore local delivery opportunities',
                      'Start with your basic contact details',
                      'Discuss the next steps with the team',
                    ]
                  : [
                      'Connect with local talent',
                      'Explore recruitment opportunities',
                      'Discuss your interests with the team',
                    ]
              }
            />
          </div>
          <RegistrationForm role={role} />
        </div>
      </section>
    </>
  );
}
