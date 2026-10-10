import type { Metadata } from 'next';
import { PageHero } from '@/components/ui';
export const metadata: Metadata = { title: 'Demo Privacy Notice' };
export default function Privacy() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Privacy"
        title="Your information deserves clarity."
        description="A privacy notice for this local website demonstration."
      />
      <section className="section">
        <div className="container legal-copy">
          <span className="eyebrow">DEMONSTRATION NOTICE</span>
          <h2>This demo does not submit your information.</h2>
          <p>
            Enquiry and registration forms provide an interactive preview. Entered data remains in
            your browser’s page state and is not sent to a server, saved to a database or emailed.
            Refreshing or leaving the page clears the form experience.
          </p>
          <h2>Local assets and external destinations</h2>
          <p>
            Images and fonts are bundled with the project. The demo does not include analytics or
            advertising trackers. Email, telephone and social links open their respective
            destinations when you choose them.
          </p>
          <h2>Before a public launch</h2>
          <p>
            The client’s approved privacy policy must replace this demo notice before real
            enquiries, analytics, storage or other integrations are enabled. This screen
            demonstrates a readable legal-page layout.
          </p>
        </div>
      </section>
    </>
  );
}
