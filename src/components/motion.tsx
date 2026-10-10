'use client';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';

const INITIAL_MIN_MS = 1000;

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageEnter({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export function InitialLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), INITIAL_MIN_MS);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [show]);
  return (
    <div
      className={`site-loader ${show ? '' : 'loaded'}`}
      role="status"
      aria-live="polite"
      aria-hidden={!show}
    >
      <span className="site-loader-logo">
        <span className="site-loader-ring" />
        <Image src="/images/logo-mark.png" alt="" width={128} height={128} priority />
      </span>
    </div>
  );
}

export function NavigationProgress() {
  const pathname = usePathname();
  const [pending, setPending] = useState<string | null>(null);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onClick = (event: MouseEvent) => {
      const el = (event.target as HTMLElement).closest('a');
      if (!el || event.ctrlKey || event.metaKey || event.shiftKey || el.target === '_blank') return;
      const url = new URL(el.href, location.href);
      if (url.origin === location.origin && url.pathname !== location.pathname) {
        setPending(url.pathname);
        timer = setTimeout(() => setPending(null), 4500);
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      clearTimeout(timer);
    };
  }, []);
  const busy = pending !== null && pending !== pathname;
  return (
    <div className={`navigation-progress ${busy ? 'is-busy' : ''}`} aria-hidden="true">
      <span />
    </div>
  );
}
