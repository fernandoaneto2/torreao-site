import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

export const metadata: Metadata = {
  title: { absolute: 'Carregadores Elétricos para Veículos em Campinas — Torreão Engenharia' },
  description: 'Instalação de carregadores elétricos AC e DC para veículos em residências, condomínios e frotas. Dimensionamento elétrico, DPS, ART e conformidade NBR 5410. Campinas/SP.',
  robots: 'index, follow',
  openGraph: { title: 'Carregadores Elétricos Veiculares em Campinas — Torreão Engenharia', description: 'Infraestrutura completa para recarga de veículos elétricos AC e DC. Do dimensionamento à instalação, com ART e conformidade NBR 5410. Campinas/SP.', type: 'website' },
  alternates: { canonical: '/servicos/carregadores-eletricos' },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Instalação de Carregadores Elétricos Veiculares', description: 'Infraestrutura e instalação de carregadores elétricos AC e DC para residências, comércios e indústrias, conforme NBR 5410, em Campinas/SP.', provider: { '@type': 'LocalBusiness', name: 'Torreão Engenharia LTDA', url: 'https://torreaoengenharia.com.br' }, areaServed: 'Campinas e região', url: 'https://torreaoengenharia.com.br/servicos/carregadores-eletricos' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: 'https://torreaoengenharia.com.br/' }, { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://torreaoengenharia.com.br/#servicos' }, { '@type': 'ListItem', position: 3, name: 'Carregadores Elétricos', item: 'https://torreaoengenharia.com.br/servicos/carregadores-eletricos' }] },
  ],
};

export default function CarregadoresEletricosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <Navbar />

      <div className="sp-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.62)), url("/images/sections/foto-carregadore-eletricos.jpg") center/cover no-repeat' }}>
        <span className="sp-tag">Serviço</span>
        <h1>Instalação de Carregadores Elétricos para Veículos</h1>
        <p>Infraestrutura completa para recarga de veículos elétricos AC e DC — do dimensionamento elétrico à instalação com proteções DPS, ART e conformidade NBR 5410. Campinas e região.</p>
      </div>

      <main className="sp-body">
        <div className="sp-section">
          <h2>Como funciona</h2>
          <p>Avaliamos a instalação elétrica existente, dimensionamos a infraestrutura necessária para suportar a carga dos carregadores e definimos o modelo de equipamento mais adequado ao perfil de uso — residencial, comercial ou industrial.</p>
          <p>A instalação é realizada por nossa equipe técnica com ART emitida, garantindo segurança elétrica e conformidade com as normas da concessionária e da ABNT.</p>
        </div>

        <div className="sp-section">
          <h2>Tipos de carregador</h2>
          <div className="sp-grid">
            <div className="sp-card"><h3>AC — Corrente Alternada</h3><p>Carregadores monofásicos e trifásicos. Ideais para residências, escritórios e condomínios com carregamento noturno.</p></div>
            <div className="sp-card"><h3>DC — Corrente Contínua</h3><p>Carregamento rápido para frotas comerciais e postos de recarga pública. Recarga em minutos.</p></div>
          </div>
        </div>

        <div className="sp-gallery">
          <img src="/images/sections/foto-carregadore-eletricos.jpg" alt="Carregador elétrico veicular instalado" loading="lazy" />
          <div className="sp-gallery-ph" aria-hidden="true" />
          <div className="sp-gallery-ph" aria-hidden="true" />
        </div>

        <div className="sp-section">
          <h2>O que está incluído</h2>
          <ul>
            <li><strong>Infraestrutura:</strong> dimensionamento elétrico, cabeamento e adequações no quadro</li>
            <li><strong>Proteções:</strong> disjuntores dedicados, DPS (Dispositivo de Proteção contra Surtos) e aterramento</li>
            <li><strong>Instalação:</strong> fixação do carregador, testes e comissionamento</li>
            <li><strong>Documentação:</strong> ART, memorial de cálculo e relatório de entrega</li>
            <li><strong>Normas:</strong> conformidade com ABNT, concessionárias e segurança elétrica</li>
          </ul>
        </div>

        <div className="sp-section">
          <h2>Segmentos atendidos</h2>
          <ul>
            <li>Residências unifamiliares e condomínios</li>
            <li>Escritórios e edifícios comerciais</li>
            <li>Frotas corporativas e industriais</li>
            <li>Postos de recarga pública</li>
          </ul>
        </div>

        <Link href="/#servicos" className="sp-back">← Voltar aos serviços</Link>
      </main>

      <section className="cta-section">
        <div className="container">
          <h2>Solicite um orçamento gratuito</h2>
          <p>Nossa equipe visita o local e apresenta a melhor solução para a sua infraestrutura de recarga.</p>
          <a href="/orcamento" className="btn-secondary">FALAR COM UM ENGENHEIRO</a>
          <div className="cta-benefits"><span>Sem compromisso</span><span>•</span><span>Resposta rápida</span><span>•</span><span>Orçamento 100% gratuito</span></div>
        </div>
      </section>

      <Footer variant="simple" />
      <WhatsappFloat baseHref="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20carregadores%20el%C3%A9tricos" />
    </>
  );
}
