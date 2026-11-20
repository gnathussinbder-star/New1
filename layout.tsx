import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { LanguageProvider } from '@/components/language';
import { Header, Footer } from '@/components/site-shell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: 'Hussien Badr English | Learn with clarity',
    template: '%s | Hussien Badr English',
  },
  description: 'A bilingual English-learning academy for Arabic-speaking learners, with an indicative A1–C1 learning path, practical lessons and a six-skill placement assessment.',
  applicationName: 'Hussien Badr English',
  keywords: ['Learn English', 'English Academy', 'CEFR', 'A1', 'A2', 'B1', 'B2', 'C1', 'تعلم الإنجليزية', 'اختبار تحديد المستوى'],
  authors: [{ name: 'Hussien Badr' }],
  creator: 'Hussien Badr',
  icons: {
    icon: [{ url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' }, { url: '/assets/hb-icon-192.png', sizes: '192x192', type: 'image/png' }],
    apple: '/assets/hb-icon-192.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Hussien Badr English',
    title: 'Hussien Badr English Academy',
    description: 'Learn English with clarity. Grow with confidence.',
    locale: 'ar_IQ',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Hussien Badr English Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussien Badr English Academy',
    description: 'Learn English with clarity. Grow with confidence.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#102B4C',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ar" dir="rtl"><body><LanguageProvider><Header /><main>{children}</main><Footer /></LanguageProvider></body></html>;
}
