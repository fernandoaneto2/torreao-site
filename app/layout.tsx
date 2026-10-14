import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import UtmInit from '@/components/UtmInit';
import CookieBanner from '@/components/CookieBanner';
import { SITE_URL } from '@/lib/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  // Torna absolutos os links canônicos e as imagens de compartilhamento (antes saíam como localhost:3000)
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Torreão Engenharia — Projetos Elétricos, SPDA e Laudos NR-10',
    template: '%s | Torreão Engenharia',
  },
  description:
    'Engenharia elétrica com ART: projetos BIM, manutenção NR-10, fotovoltaica, SPDA, subestações e carregadores EV. Campinas/SP.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {children}
        <UtmInit />
        <CookieBanner />
      </body>
    </html>
  );
}
