'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ArrowUp,
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
} from 'lucide-react';
import { navigation, contact } from '@/lib/content';
import { NavigationProgress, InitialLoader } from './motion';
import { FacebookIcon, InstagramIcon, ThreadsIcon, XIcon } from './social-icons';

export const socials = [
  {
    label: 'ZENX on Facebook',
    href: 'https://www.facebook.com/official.zenxlogistics',
    Icon: FacebookIcon,
  },
  {
    label: 'ZENX on Instagram',
    href: 'https://www.instagram.com/official.zenxlogistics',
    Icon: InstagramIcon,
  },
  {
    label: 'ZENX on Threads',
    href: 'https://www.threads.com/@official.zenxlogistics',
    Icon: ThreadsIcon,
  },
  { label: 'ZENX on X', href: 'https://x.com/zenxlogistics', Icon: XIcon },
];

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${footer ? 'brand-footer' : ''}`}
      aria-label="ZENX Logistics home"
    >
      <Image
        src="/images/logo-mark.png"
        alt="ZENX Logistics"
        width={512}
        height={512}
        className="brand-logo"
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, [open]);
  return (
    <>
      <InitialLoader />
      <NavigationProgress />
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.slice(0, 5).map((n) => (
              <Link
                aria-current={pathname === n.href ? 'page' : undefined}
                className={pathname === n.href ? 'active' : ''}
                key={n.href}
                href={n.href}
              >
                {n.title}
              </Link>
            ))}
            <div className="nav-resources">
              <button type="button">
                Resources <ChevronDown size={15} aria-hidden="true" />
              </button>
              <div className="resource-menu">
                <Link href="/news">News & Stories</Link>
                <Link href="/gallery">Gallery</Link>
              </div>
            </div>
            <Link className={pathname === '/contact' ? 'active' : ''} href="/contact">
              Contact
            </Link>
          </nav>
          <Link className="button button-gold header-quote" href="/contact">
            Request a Quote <ArrowUpRight size={16} />
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className={`mobile-nav ${open ? 'open' : ''}`}
          aria-label="Mobile navigation"
        >
          {[
            ...navigation,
            { title: 'News & Stories', href: '/news' },
            { title: 'Gallery', href: '/gallery' },
          ].map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.title}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <Link className="button button-gold" href="/contact">
            Request a Quote
          </Link>
        </nav>
      </header>
    </>
  );
}

const footerCompany = [
  { label: 'About ZENX', href: '/about-us' },
  { label: 'Our Network', href: '/network' },
  { label: 'News & Stories', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];
const footerServices = [
  { label: 'Explore Services', href: '/services' },
  { label: 'Request a Quote', href: '/contact', badge: 'Instant' },
  { label: 'Register as Rider', href: '/register/rider' },
  { label: 'Register as Recruiter', href: '/register/recruiter' },
  { label: 'Work With Us', href: '/work-with-us' },
];
const footerContact = [
  { Icon: Mail, label: 'Email Support', value: contact.email, href: `mailto:${contact.email}` },
  { Icon: Phone, label: 'Help Desk', value: contact.phone, href: 'tel:+917983544498' },
  { Icon: MapPin, label: 'Corporate Hub', value: contact.address },
  { Icon: Clock3, label: 'Operating Hours', value: 'Mon–Sat, 10 AM–6 PM IST' },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#D4AF37]/80 bg-[#06172e] text-slate-300">
      <div className="pointer-events-none absolute left-1/4 top-0 h-32 w-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-64 w-96 rounded-full bg-[#0a2344]/50 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-10 pt-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between space-y-6 lg:col-span-4 lg:pr-8">
            <div>
              <Brand footer />
              <p className="mb-0 mt-5 text-base font-semibold tracking-tight text-slate-100">
                ZENX LOGISTICS PRIVATE LIMITED
              </p>
              <p className="mb-0 mt-2 text-sm font-light leading-relaxed text-slate-400">
                A connected vision. A people-first approach.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Pan-India Express Network &amp; Real-time Ops
              </span>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Company <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              {footerCompany.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-flex transition hover:translate-x-1 hover:text-[#D4AF37]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 lg:col-span-3">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Services &amp; Opportunities{' '}
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              {footerServices.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center transition hover:translate-x-1 hover:text-[#D4AF37]"
                  >
                    {l.label}
                    {l.badge && (
                      <span className="ml-2 rounded border border-[#D4AF37]/30 bg-[#D4AF37]/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                        {l.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 lg:col-span-3">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Get in touch <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              {footerContact.map(({ Icon, label, value, href }) => (
                <li className="group flex items-start gap-3.5" key={label}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#D4AF37] transition group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10">
                    <Icon size={16} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="break-all font-medium text-slate-200 transition hover:text-[#D4AF37]"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="leading-snug text-slate-300">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 text-xs font-medium text-slate-400 md:flex-row">
          <p className="mb-0 text-center md:text-left">
            © 2026 ZENX Logistics Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition hover:text-[#D4AF37]">
              Privacy Policy
            </Link>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <Link href="/terms" className="transition hover:text-[#D4AF37]">
              Terms &amp; Conditions
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingControls() {
  const [show, setShow] = useState(false);
  const [support, setSupport] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <div className="floating-controls">
      {support && (
        <div className="support-panel">
          <button aria-label="Close support" onClick={() => setSupport(false)}>
            <X size={16} />
          </button>
          <strong>Talk to ZENX</strong>
          <p>How can we help you move forward?</p>
          <Link href="/contact" onClick={() => setSupport(false)}>
            Business enquiry <ArrowUpRight size={16} />
          </Link>
          <Link href="/work-with-us" onClick={() => setSupport(false)}>
            Rider & recruiter support <ArrowUpRight size={16} />
          </Link>
          <a href="tel:+917983544498">
            Call our team <Phone size={16} />
          </a>
        </div>
      )}
      <button
        className="support-button"
        aria-label="Open ZENX support options"
        aria-expanded={support}
        onClick={() => setSupport(!support)}
      >
        {support ? <X size={21} /> : <MessageCircle size={22} />}
      </button>
      {show && (
        <button
          className="back-top"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'instant'
                : 'smooth',
            })
          }
        >
          <ArrowUp size={19} />
        </button>
      )}
    </div>
  );
}
