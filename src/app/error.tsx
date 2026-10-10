'use client';
import Link from 'next/link';
import { ArrowRight, RefreshCw } from 'lucide-react';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section container empty-page" role="alert">
      <span className="eyebrow">LET’S GET BACK ON TRACK</span>
      <h1>
        Something interrupted
        <br />
        this journey.
      </h1>
      <p>Please try again, or return to the homepage.</p>
      <div className="button-row" style={{ justifyContent: 'center' }}>
        <button className="button button-gold" onClick={reset}>
          Try Again <RefreshCw size={17} />
        </button>
        <Link className="button button-plain" href="/">
          Back to Home <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
