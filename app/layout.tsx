import type { Metadata, Viewport } from 'next';
import { Archivo, Inter } from 'next/font/google';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], weight: ['400','500','700','900'], style: ['normal','italic'], variable: '--font-archivo', display: 'swap' });
const inter   = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'IGNITE — wellness in motion.', template: '%s · IGNITE' },
  description: 'Contributing to the quality of life of our community by encouraging healthy lifestyle habits and movement. Dubai, UAE · Since 2007.',
};

export const viewport: Viewport = { themeColor: '#0F1923', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
