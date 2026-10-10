import type { Metadata } from 'next';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './globals.css';
import { Header, Footer, FloatingControls } from '@/components/site-shell';
export const metadata: Metadata = {
  title: {
    default: 'ZENX Logistics — Delivering trust. Driving growth.',
    template: '%s | ZENX Logistics',
  },
  description:
    'Logistics, transport and workforce solutions built to keep your business moving. Explore ZENX services and rider and recruiter opportunities.',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingControls />
      </body>
    </html>
  );
}
