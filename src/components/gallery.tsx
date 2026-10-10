'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Maximize2, Play, X } from 'lucide-react';

const items = [
  { title: 'Hub Operations', image: 'warehouse', position: '35% center' },
  { title: 'Team & Recruitment', image: 'warehouse', position: '70% center' },
  { title: 'Last-Mile Rider Network', image: 'rider', position: '70% center' },
  { title: 'Warehouse Operations', image: 'warehouse', position: '20% center' },
  { title: 'Transport & Fleet', image: 'hero', position: '72% center' },
  { title: 'Corporate Team', image: 'warehouse', position: '92% center' },
];

const videos = [
  { title: 'Hub Operations Demo', image: 'warehouse', position: '40% center' },
  { title: 'Last-Mile Network Demo', image: 'rider', position: '70% center' },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'Tab') {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener('keydown', key);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', key);
      triggerRef.current?.focus();
    };
  }, [selected]);
  return (
    <>
      <p className="gallery-notice">
        Temporary demo imagery for this prototype. These photographs stand in for ZENX&apos;s own
        photos and can be replaced at any time. They do not document ZENX-owned facilities, vehicles
        or actual staff.
      </p>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <button
            key={item.title}
            className="gallery-item"
            aria-label={`Open ${item.title} image`}
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setSelected(i);
            }}
          >
            <Image
              src={`/images/${item.image}.png`}
              alt={item.title}
              fill
              sizes="(max-width:768px) 50vw, 33vw"
              style={{ objectPosition: item.position }}
            />
            <span>
              {item.title}
              <Maximize2 size={18} />
            </span>
          </button>
        ))}
      </div>
      {selected !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={items[selected].title}
          onClick={() => setSelected(null)}
        >
          <button
            ref={closeRef}
            className="lightbox-close"
            aria-label="Close image"
            onClick={() => setSelected(null)}
          >
            <X />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/images/${items[selected].image}.png`}
              alt={items[selected].title}
              fill
              sizes="90vw"
            />
            <figcaption>{items[selected].title} · Temporary demo imagery</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

export function GalleryVideos() {
  return (
    <>
      <div className="video-grid">
        {videos.map((video) => (
          <figure className="video-card" key={video.title}>
            <div className="video-poster">
              <Image
                src={`/images/${video.image}.png`}
                alt=""
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                style={{ objectPosition: video.position }}
              />
              <span className="video-play" aria-hidden="true">
                <Play size={22} />
              </span>
              <span className="video-badge">Demo placeholder</span>
            </div>
            <figcaption>{video.title}</figcaption>
          </figure>
        ))}
      </div>
      <p className="gallery-notice">
        Video placeholders only. No media files are bundled in this prototype; share your hub or
        team footage and it can be embedded here.
      </p>
    </>
  );
}
