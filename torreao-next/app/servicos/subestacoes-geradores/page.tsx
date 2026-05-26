import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

export const metadata: Metadata = {
  title: { absolute: 'Subestações e Geradores em Campinas — Torreão Engenharia' },
  description: 'Manutenção preditiva e preventiva em subestações, instalação de grupos geradores (GMG), modernização de painéis QTA e consultoria em eficiência energética. Torreão Engenharia, Campinas/SP.',
  robots: 'index, follow',
  openGraph: { title: 'Subestações e Geradores em Campinas — Torreão Engenharia', description: 'Manutenção em subestações, instalação de GMG e modernização de painéis QTA. Conformidade NBR 14039. Campinas/SP.', type: 'website' },
  alternates: { canonical: '/servicos/subestacoes-geradores' },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Subestações e Geradores', description: 'Manutenção preditiva e preventiva de subestações, instalação de grupos geradores (GMG) e modernização de painéis QTA, conforme NBR 14039 e NR-10.', provider: { '@type': 'LocalBusiness', name: 'Torreão Engenharia LTDA', url: 'https://torreaoengenharia.com.br' }, areaServed: 'Campinas e região', url: 'https://torreaoengenharia.com.br/servicos/subestacoes-geradores' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: 'https://torreaoengenharia.com.br/' }, { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://torreaoengenharia.com.br/#servicos' }, { '@type': 'ListItem', position: 3, name: 'Subestações e Geradores', item: 'https://torreaoengenharia.com.br/servicos/subestacoes-geradores' }] },
  ],
};

export default function SubestacoesGeradoresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <Navbar />

      <div className="sp-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.62)), url("/images/sections/subestacao-abrigada.jpeg") center/cover no-repeat' }}>
        <span className="sp-tag">Serviço</span>
        <h1>Subestações e Geradores</h1>
        <p>Máxima confiabilidade energética e segurança operacional — manutenção preditiva, instalação de GMG e modernização de painéis de transferência.</p>
      </div>

      <main className="sp-body">
        <div className="sp-section">
          <h2>Como funciona</h2>
          <p>Atuamos em todo o ciclo de vida de ativos de alta confiabilidade. Projetamos, instalamos e otimizamos sistemas como transformadores, postes, disjuntores, barramentos, sistemas de aterramento, grupos geradores e quadros de transferência automática, definindo a estratégia técnica ideal para cada infraestrutura.</p>
          <p>Todas as nossas implantações e intervenções são realizadas com todos os documentos técnicos necessários para uma ágil aprovação na concessionária de Energia, em total conformidade com as Normas Técnicas Brasileiras (NBR 14039) e as especificações técnicas dos fabricantes.</p>
        </div>

        <div className="sp-section">
          <h2>Soluções e Serviços</h2>
          <div className="sp-grid">
            <div className="sp-card"><h3>Engenharia Diagnóstica</h3><p>Termografia elétrica, análise de qualidade de energia e inspeções técnicas para garantir a saúde e a continuidade operacional de subestações.</p></div>
            <div className="sp-card"><h3>Gestão de Ativos</h3><p>Intervenções preventivas com limpeza, reaperto e testes funcionais para assegurar que sistemas de média e baixa tensão operem em sua máxima performance.</p></div>
            <div className="sp-card"><h3>Instalação e Montagem</h3><p>Implantação completa de Grupos Geradores (GMG) e configuração de Quadros de Transferência Automática (QTA) para garantir autonomia energética.</p></div>
            <div className="sp-card"><h3>Retrofit e Modernização</h3><p>Atualização tecnológica de painéis de distribuição e QTAs, elevando sistemas legados aos novos padrões de segurança, automação e eficiência.</p></div>
            <div className="sp-card"><h3>Inteligência Energética</h3><p>Consultoria especializada em análise de consumo, correção de fator de potência e gestão de demanda para otimização de custos e recursos.</p></div>
          </div>
        </div>

        <div className="sp-gallery">
          <img src="/images/sections/subestacao-abrigada.jpeg"  alt="Subestação abrigada instalada"            loading="lazy" />
          <img src="/images/services/sub1.jpeg"                 alt="Interior de subestação elétrica"          loading="lazy" />
          <img src="/images/services/subestacao-abrigada2.jpeg" alt="Subestação elétrica de média tensão"       loading="lazy" />
        </div>

        <div className="sp-section">
          <h2>Normas aplicadas</h2>
          <div className="norm-badges">
            <span className="norm-badge">NBR 14039</span><span className="norm-badge">NR-10</span><span className="norm-badge">NBR 5410</span>
          </div>
        </div>

        <div className="sp-section">
          <h2>Segmentos atendidos</h2>
          <ul>
            <li>Indústrias e plantas de produção</li>
            <li>Hospitais e clínicas (carga crítica)</li>
            <li>Data centers e edifícios corporativos</li>
            <li>Condomínios e empreendimentos de grande porte</li>
            <li>Comércio varejista e shoppings</li>
          </ul>
        </div>

        <div className="sp-section">
          <h2>Entregas de Referência</h2>
          <div className="sp-entrega-grid">
            <div className="sp-entrega-card"><span className="sp-entrega-tag">Comercial · 2024</span><h3>Vias do Atlântico</h3><div className="sp-entrega-specs"><span className="sp-entrega-spec">2.000 m²</span><span className="sp-entrega-spec">Projeto BIM</span><span className="sp-entrega-spec">Subestação</span></div><p>Projeto elétrico executivo para loteamento comercial com subestação inclusa.</p></div>
            <div className="sp-entrega-card"><span className="sp-entrega-tag">Comercial · 2024</span><h3>Policlínica — Projeto POINSP</h3><div className="sp-entrega-specs"><span className="sp-entrega-spec">2.000 m²</span><span className="sp-entrega-spec">Projeto BIM</span><span className="sp-entrega-spec">Geradores</span></div><p>Elétrica hospitalar com geradores de emergência.</p></div>
          </div>
        </div>

        <Link href="/#servicos" className="sp-back">← Voltar aos serviços</Link>
      </main>

      <section className="cta-section">
        <div className="container">
          <h2>Solicite um orçamento gratuito</h2>
          <p>Nossa equipe avalia seus equipamentos e apresenta o plano mais eficiente para garantir a continuidade operacional.</p>
          <a href="/orcamento" className="btn-secondary">FALAR COM UM ENGENHEIRO</a>
          <div className="cta-benefits"><span>Sem compromisso</span><span>•</span><span>Resposta rápida</span><span>•</span><span>Orçamento 100% gratuito</span></div>
        </div>
      </section>

      <Footer variant="simple" />
      <WhatsappFloat baseHref="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20subesta%C3%A7%C3%B5es%20e%20geradores" />
    </>
  );
}
