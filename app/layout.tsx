import type { Metadata, Viewport } from 'next';
import { Archivo, Inter } from 'next/font/google';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], weight: ['400','500','700','900'], style: ['normal','italic'], variable: '--font-archivo', display: 'swap' });
const inter   = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: "IGNITE Dubai - Water Sports, Team Building & Corporate Wellness",

  description:
    "IGNITE is Dubai`s leading active lifestyle brand. Water sports, team building and corporate wellness - trusted by P&G, Deloitte, McKinsey and 90+ leading organisations since 2010.",

  openGraph: {
    title: "IGNITE Dubai - Water Sports, Team Building & Corporate Wellness",

    description:
    "IGNITE is Dubai`s leading active lifestyle brand. Water sports, team building and corporate wellness - trusted by P&G, Deloitte, McKinsey and 90+ leading organisations since 2010.",
    type: "website",
    siteName: "IGNITE",
    images: [
      {
        url: "https://ignite.ae/assets/images/ignite-favicon.jpg",
        width: 1200,
        height: 630,
        alt: "IGNITE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IGNITE Dubai - Water Sports, Team Building & Corporate Wellness",

    description:
    "IGNITE is Dubai`s leading active lifestyle brand. Water sports, team building and corporate wellness - trusted by P&G, Deloitte, McKinsey and 90+ leading organisations since 2010.",
    images: [
      "https://ignite.ae/assets/images/ignite-favicon.jpg",
    ],
  },
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
