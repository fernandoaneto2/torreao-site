import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import { SOCIAL } from '@/lib/social';
import './not-found.css';

export const metadata: Metadata = {
  title: { absolute: 'Página não encontrada — Torreão Engenharia' },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar isHome={false} />
      <main className="nf">
        <p className="nf-code">404</p>
        <h1>Página não encontrada</h1>
        <p className="nf-text">O endereço que você acessou não existe ou foi alterado. Veja alguns caminhos:</p>
        <div className="nf-actions">
          <Link href="/" className="nf-btn nf-btn--primary">VOLTAR AO INÍCIO</Link>
          <a href="/orcamento" className="nf-btn">AGENDAR AVALIAÇÃO GRATUITA</a>
        </div>
        <ul className="nf-links">
          <li><a href="/servicos/fotovoltaica">Energia solar</a></li>
          <li><a href="/servicos/carregadores-eletricos">Carregadores elétricos</a></li>
          <li><a href="/servicos/subestacoes-geradores">Subestações e geradores</a></li>
          <li><Link href="/#payback">Payback dos projetos</Link></li>
        </ul>
      </main>
      <Footer variant="simple" />
      <WhatsappFloat baseHref={SOCIAL.whatsapp} />
    </>
  );
}
