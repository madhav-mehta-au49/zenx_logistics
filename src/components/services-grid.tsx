'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services, categories } from '@/lib/content';
import { Reveal } from './motion';
import { ServiceArt } from './illustrations';
export function ServicesGrid() {
  const [active, setActive] = useState('All Services');
  const filtered = services.filter((s) => active === 'All Services' || s.category === active);
  return (
    <>
      <div className="category-tabs" role="group" aria-label="Filter services">
        {categories.map((c) => (
          <button
            key={c}
            className={active === c ? 'selected' : ''}
            aria-pressed={active === c}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="result-count" aria-live="polite">
        {filtered.length} services · {active}
      </p>
      <div className="services-grid">
        {filtered.map((s) => (
          <Reveal key={s.slug}>
            <Link href={`/services/${s.slug}`} className="service-card">
              <span className="service-card-media">
                <ServiceArt slug={s.slug} />
              </span>
              <span className="card-arrow">
                <ArrowUpRight size={21} />
              </span>
              <span className="service-category">{s.category}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="text-link">
                Explore Service
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
