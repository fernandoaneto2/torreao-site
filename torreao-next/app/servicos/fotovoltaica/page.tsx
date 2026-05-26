import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

export const metadata: Metadata = {
  title: { absolute: 'Geração Fotovoltaica em Campinas — Torreão Engenharia' },
  description: 'Projetos de geração solar fotovoltaica On Grid, Off Grid, híbrido e bomba solar. +25MW em projetos de conexão. Torreão Engenharia, Campinas/SP.',
  robots: 'index, follow',
  openGraph: { title: 'Geração Fotovoltaica em Campinas — Torreão Engenharia', description: 'Soluções completas em energia solar — do projeto à conexão com a concessionária. Mais de 25MW em projetos entregues.', type: 'website' },
  alternates: { canonical: '/servicos/fotovoltaica' },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Geração Fotovoltaica', description: 'Projetos e instalação de sistemas fotovoltaicos On Grid, Off Grid e híbridos conforme NBR 16690, para residências, comércio e indústria em Campinas/SP.', provider: { '@type': 'LocalBusiness', name: 'Torreão Engenharia LTDA', url: 'https://torreaoengenharia.com.br' }, areaServed: 'Campinas e região', url: 'https://torreaoengenharia.com.br/servicos/fotovoltaica' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: 'https://torreaoengenharia.com.br/' }, { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://torreaoengenharia.com.br/#servicos' }, { '@type': 'ListItem', position: 3, name: 'Geração Fotovoltaica', item: 'https://torreaoengenharia.com.br/servicos/fotovoltaica' }] },
  ],
};

export default function FotovoltaicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <Navbar />

      <div className="sp-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.62)), url("/images/sections/solar.jpg") center/cover no-repeat' }}>
        <span className="sp-tag">Serviço</span>
        <h1>Geração Solar Fotovoltaica</h1>
        <p>Projetos On Grid, Off Grid e híbridos conforme NBR 16690 — do dimensionamento à conexão com a concessionária. Mais de 25MW entregues em Campinas e todo Brasil.</p>
      </div>

      <main className="sp-body">
        <div className="sp-section">
          <h2>Números que falam</h2>
          <div className="sp-stat-row">
            <div className="sp-stat"><div className="num">+25MW</div><div className="lbl">em projetos de conexão</div></div>
            <div className="sp-stat"><div className="num">+10</div><div className="lbl">anos de experiência</div></div>
            <div className="sp-stat"><div className="num">+15</div><div className="lbl">cidades atendidas</div></div>
          </div>
        </div>

        <div className="sp-section">
          <h2>Como funciona</h2>
          <p>Desenvolvemos o projeto elétrico e estrutural do sistema solar, elaboramos a documentação exigida pela concessionária e acompanhamos todo o processo de aprovação e conexão à rede. O trabalho é executado com ART emitida por engenheiro CREA ativo.</p>
          <p>Após a aprovação, a instalação é realizada pela nossa equipe técnica, com testes de funcionamento e entrega de relatório final.</p>
        </div>

        <div className="sp-section">
          <h2>Tipos de sistemas</h2>
          <div className="sp-grid">
            <div className="sp-card"><h3>On Grid</h3><p>Conectado à rede elétrica. Gera créditos de energia na concessionária e reduz a conta de luz.</p></div>
            <div className="sp-card"><h3>Off Grid</h3><p>Totalmente independente da rede. Ideal para áreas sem fornecimento elétrico ou como backup completo.</p></div>
            <div className="sp-card"><h3>On Grid com Micro Inversor</h3><p>Cada painel tem seu próprio inversor — maior eficiência mesmo com sombreamento parcial.</p></div>
            <div className="sp-card"><h3>Híbrido</h3><p>Combina geração solar com banco de baterias e rede elétrica. Máxima autonomia e segurança.</p></div>
            <div className="sp-card"><h3>Bomba Solar</h3><p>Sistema para bombeamento de água acionado diretamente pela energia gerada pelos painéis.</p></div>
          </div>
        </div>

        <figure className="sp-img-block">
          <img src="/images/services/fotovoltaica-1.jpg" alt="Instalação de sistema solar fotovoltaico — Torreão Engenharia" loading="lazy" />
        </figure>

        <div className="sp-section">
          <h2>O que a Torreão entrega</h2>
          <ul>
            <li>Projeto elétrico e estrutural completo com ART</li>
            <li>Memorial de cálculo e dimensionamento dos equipamentos</li>
            <li>Documentação para aprovação na concessionária</li>
            <li>Instalação e testes de comissionamento</li>
            <li>As Built e relatório de entrega</li>
          </ul>
        </div>

        <Link href="/#servicos" className="sp-back">← Voltar aos serviços</Link>
      </main>

      <section className="cta-section">
        <div className="container">
          <h2>Solicite um orçamento gratuito</h2>
          <p>Nossos engenheiros analisam seu consumo e apresentam a solução solar mais eficiente para o seu caso.</p>
          <a href="/orcamento" className="btn-secondary">FALAR COM UM ENGENHEIRO</a>
          <div className="cta-benefits"><span>Sem compromisso</span><span>•</span><span>Resposta rápida</span><span>•</span><span>Orçamento 100% gratuito</span></div>
        </div>
      </section>

      <Footer variant="simple" />
      <WhatsappFloat baseHref="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20gera%C3%A7%C3%A3o%20fotovoltaica" />
    </>
  );
}
