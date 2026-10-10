import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="section container empty-page">
      <span className="eyebrow">404 / ROUTE NOT FOUND</span>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>That page isn’t part of our network yet.</p>
      <Link href="/" className="button button-gold">
        Back to Home
      </Link>
    </section>
  );
}
