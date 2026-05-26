import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

export const metadata: Metadata = {
  title: { absolute: 'Manutenção Elétrica Preventiva e Corretiva em Campinas — Torreão Engenharia' },
  description: 'Manutenção elétrica preventiva e corretiva emergencial, laudos técnicos NR-10 com ART, reformas e modernização de instalações. Indústrias, comércio e condomínios. Campinas/SP.',
  robots: 'index, follow',
  openGraph: { title: 'Manutenção Elétrica Preventiva e Corretiva — Torreão Engenharia', description: 'Manutenção preventiva, corretiva emergencial, reformas e laudos técnicos NR-10 com ART emitida em todas as intervenções. Campinas/SP.', type: 'website' },
  alternates: { canonical: '/servicos/manutencao-eletrica' },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Manutenção e Construção Elétrica', description: 'Manutenção preventiva e corretiva, reformas e ampliações elétricas, laudos técnicos e inspeções em Campinas/SP, conforme NR-10 e NR-35.', provider: { '@type': 'LocalBusiness', name: 'Torreão Engenharia LTDA', url: 'https://torreaoengenharia.com.br' }, areaServed: 'Campinas e região', url: 'https://torreaoengenharia.com.br/servicos/manutencao-eletrica' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: 'https://torreaoengenharia.com.br/' }, { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://torreaoengenharia.com.br/#servicos' }, { '@type': 'ListItem', position: 3, name: 'Manutenção e Construção Elétrica', item: 'https://torreaoengenharia.com.br/servicos/manutencao-eletrica' }] },
  ],
};

export default function ManutencaoEletricaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <Navbar />

      <div className="sp-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.62)), url("/images/sections/iluminacao1.jpeg") center/cover no-repeat' }}>
        <span className="sp-tag">Serviço</span>
        <h1>Manutenção Elétrica Preventiva e Corretiva</h1>
        <p>Diagnóstico, manutenção preventiva programada, corretiva emergencial e laudos técnicos NR-10 com ART — para indústrias, comércio e condomínios em Campinas e região.</p>
      </div>

      <main className="sp-body">
        <div className="sp-section">
          <h2>Como funciona</h2>
          <p>Realizamos o diagnóstico completo da instalação elétrica, identificamos pontos críticos e desenvolvemos o plano de manutenção mais adequado ao seu perfil — seja preventivo programado ou corretivo emergencial.</p>
          <p>Todas as intervenções são executadas com ART registrada, seguindo as exigências da NR-10 e demais normas técnicas vigentes.</p>
        </div>

        <div className="sp-section">
          <h2>Tipos de serviço</h2>
          <div className="sp-grid">
            <div className="sp-card"><h3>Manutenção Preventiva</h3><p>Inspeções periódicas programadas para identificar falhas antes que causem paradas ou acidentes.</p></div>
            <div className="sp-card"><h3>Corretiva Emergencial</h3><p>Atendimento rápido para restaurar o funcionamento do sistema com segurança e agilidade.</p></div>
            <div className="sp-card"><h3>Reformas e Ampliações</h3><p>Adequação e expansão de instalações elétricas para novos equipamentos ou mudanças de layout.</p></div>
            <div className="sp-card"><h3>Laudos Técnicos</h3><p>Inspeção e emissão de laudos de conformidade elétrica com ART — exigidos por seguradoras e fiscalizações.</p></div>
            <div className="sp-card"><h3>Modernização</h3><p>Atualização de sistemas elétricos obsoletos para padrões atuais de segurança e eficiência energética.</p></div>
          </div>
        </div>

        <div className="sp-gallery">
          <img src="/images/sections/iluminacao1.jpeg"  alt="Serviço elétrico em campo"      loading="lazy" />
          <img src="/images/services/iluminacao2.jpeg"  alt="Manutenção de instalação elétrica" loading="lazy" />
          <img src="/images/services/iluminacao3.jpeg"  alt="Infraestrutura elétrica viária"  loading="lazy" />
        </div>

        <div className="sp-section">
          <h2>O que a Torreão garante</h2>
          <ul>
            <li>Equipe técnica própria com engenheiro responsável</li>
            <li>ART emitida em todas as intervenções</li>
            <li>Conformidade com NR-10 e normas ABNT vigentes</li>
            <li>Relatório técnico pós-manutenção</li>
            <li>Atendimento em todo Brasil</li>
          </ul>
        </div>

        <div className="sp-section">
          <h2>Entregas de Referência</h2>
          <div className="sp-entrega-grid">
            <div className="sp-entrega-card"><span className="sp-entrega-tag">Comercial · 2024</span><h3>Iluminação Pública — Arco Metropolitano</h3><div className="sp-entrega-specs"><span className="sp-entrega-spec">2.000 m²</span><span className="sp-entrega-spec">Projeto BIM</span><span className="sp-entrega-spec">Aterramento</span></div><p>Sistema de iluminação viária com eficiência energética.</p></div>
            <div className="sp-entrega-card"><span className="sp-entrega-tag">Comercial · 2024</span><h3>Vias do Atlântico</h3><div className="sp-entrega-specs"><span className="sp-entrega-spec">2.000 m²</span><span className="sp-entrega-spec">Projeto BIM</span><span className="sp-entrega-spec">Subestação</span></div><p>Projeto elétrico executivo para loteamento comercial.</p></div>
            <div className="sp-entrega-card"><span className="sp-entrega-tag">Industrial · 2024</span><h3>Projeto DER</h3><div className="sp-entrega-specs"><span className="sp-entrega-spec">2.000 m²</span><span className="sp-entrega-spec">Infraestrutura viária</span></div><p>Elétrica viária pública com aterramento e proteção contra surtos.</p></div>
          </div>
        </div>

        <Link href="/#servicos" className="sp-back">← Voltar aos serviços</Link>
      </main>

      <section className="cta-section">
        <div className="container">
          <h2>Solicite um orçamento gratuito</h2>
          <p>Fale com nossa equipe e receba um plano de manutenção sob medida para a sua instalação.</p>
          <a href="/orcamento" className="btn-secondary">FALAR COM UM ENGENHEIRO</a>
          <div className="cta-benefits"><span>Sem compromisso</span><span>•</span><span>Resposta rápida</span><span>•</span><span>Orçamento 100% gratuito</span></div>
        </div>
      </section>

      <Footer variant="simple" />
      <WhatsappFloat baseHref="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20el%C3%A9trica" />
    </>
  );
}
