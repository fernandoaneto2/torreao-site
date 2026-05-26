import type { Metadata } from 'next';
import './globals.css';
import UtmInit from '@/components/UtmInit';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: {
    default: 'Torreão Engenharia — Projetos Elétricos, SPDA e Laudos NR-10',
    template: '%s | Torreão Engenharia',
  },
  description:
    'Engenharia elétrica com ART: projetos BIM, manutenção NR-10, fotovoltaica, SPDA, subestações e carregadores EV. Campinas/SP.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/images/logo-torreao-banner.png" type="image/png" />
      </head>
      <body>
        {children}
        <UtmInit />
        <CookieBanner />
      </body>
    </html>
  );
}
