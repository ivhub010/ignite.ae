import type { Metadata, Viewport } from 'next';
import { Archivo, Inter } from 'next/font/google';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], weight: ['400','500','700','900'], style: ['normal','italic'], variable: '--font-archivo', display: 'swap' });
const inter   = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'IGNITE Dubai - Water Sports, Team Building & Corporate Wellness', template: '%s · IGNITE' },
  description: 'IGNITE is Dubai`s leading active lifestyle brand. Water sports, team building and corporate wellness - trusted by P&G, Deloitte, McKinsey and 90+ leading organisations since 2010.',
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
