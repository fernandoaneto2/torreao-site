import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import HeroEletrica from '@/components/engenharia-eletrica/HeroEletrica';
import MetricasFaixa from '@/components/engenharia-eletrica/MetricasFaixa';

export const metadata: Metadata = {
  title: { absolute: 'Projeto Elétrico em Campinas — NR-10, NBR 5410, SPDA | Torreão Engenharia' },
  description: 'Projetos elétricos BIM com ART CREA ativo. Baixa e média tensão, SPDA NBR 5419, medição agrupada, PCI e complementares. Campinas/SP — entrega em todo Brasil.',
  robots: 'index, follow',
  openGraph: { title: 'Projetos Elétricos BIM em Campinas — Torreão Engenharia', description: 'Projetos elétricos e complementares em BIM com ART CREA ativo. NR-10, NBR 5410, NBR 5419, SPDA, PCI. Campinas/SP.', type: 'website', images: ['../images/logo-torreao-banner.png'] },
  alternates: { canonical: '/servicos/projetos-eletricos' },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Projetos de Engenharia Elétrica', description: 'Projetos elétricos em BIM com ART, memoriais descritivos, compatibilização e As Built, conforme NR-10, NBR 5410 e NBR 5419 (SPDA) em Campinas/SP.', provider: { '@type': 'LocalBusiness', name: 'Torreão Engenharia LTDA', url: 'https://torreaoengenharia.com.br' }, areaServed: 'Campinas e região', url: 'https://torreaoengenharia.com.br/servicos/projetos-eletricos' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: 'https://torreaoengenharia.com.br/' }, { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://torreaoengenharia.com.br/#servicos' }, { '@type': 'ListItem', position: 3, name: 'Projetos de Engenharia Elétrica', item: 'https://torreaoengenharia.com.br/servicos/projetos-eletricos' }] },
  ],
};

export default function ProjetosEletricosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <Navbar />

      <HeroEletrica />
      <MetricasFaixa />

      <main className="sp-body">
        <div className="sp-section">
          <h2>Como funciona</h2>
          <p>Cada projeto começa com o levantamento técnico do empreendimento — dimensões, cargas, especificações da concessionária e normas aplicáveis. A partir disso, desenvolvemos a modelagem 2D e 3D em BIM, garantindo compatibilização com os demais sistemas da edificação.</p>
          <p>Entregamos o projeto completo com ART, memoriais descritivos, quantitativos e As Built ao final da obra.</p>
        </div>

        <div className="sp-section">
          <h2>Escopo padrão entregue</h2>
          <ul>
            <li>ART registrada no CREA</li>
            <li>Memorial descritivo e de cálculo</li>
            <li>Pranchas técnicas 2D/3D em BIM</li>
            <li>Compatibilização com projetos complementares</li>
            <li>Realizamos As Built para maior segurança e confiabilidade</li>
          </ul>
        </div>

        <div className="sp-section">
          <h2>Tipos de projeto</h2>
          <div className="sp-grid">
            <div className="sp-card"><h3>Elétrico BT/MT</h3><p>Instalações de baixa e média tensão para todo tipo de empreendimento.</p></div>
            <div className="sp-card"><h3>Medição agrupada</h3><p>Projetos para condomínios residenciais e comerciais com padrão da concessionária.</p></div>
            <div className="sp-card"><h3>Cabeamento estruturado</h3><p>Infraestrutura de dados e telecomunicações para ambientes corporativos.</p></div>
            <div className="sp-card"><h3>SPDA</h3><p>Projeto de para-raios conforme NBR 5419 com laudo de conformidade e ART.</p></div>
            <div className="sp-card"><h3>PCI</h3><p>Prevenção e Combate a Incêndio — aprovação junto ao Corpo de Bombeiros (AVCB).</p></div>
            <div className="sp-card"><h3>Complementares</h3><p>Hidrossanitário, gás, climatização e drenagem.</p></div>
          </div>
        </div>

        <figure className="sp-img-block">
          <img src="/images/services/projetos-1.jpg" alt="Engenheiros revisando projeto elétrico — Torreão Engenharia" loading="lazy" />
        </figure>

        <div className="sp-section">
          <h2>Normas aplicadas</h2>
          <div className="norm-badges">
            <span className="norm-badge">NR-10</span><span className="norm-badge">NBR 5410</span><span className="norm-badge">NBR 5419</span><span className="norm-badge">NBR 14039</span><span className="norm-badge">NBR 17240</span>
          </div>
        </div>

        <div className="sp-section">
          <h2>Entregas de Referência</h2>
          <div className="sp-entrega-grid">
            <div className="sp-entrega-card"><span className="sp-entrega-tag">Residencial · 2025</span><h3>Complexo Residencial Luna</h3><div className="sp-entrega-specs"><span className="sp-entrega-spec">8.500 m²</span><span className="sp-entrega-spec">Projeto BIM</span><span className="sp-entrega-spec">SPDA</span></div><p>Projeto elétrico executivo com medição agrupada e SPDA.</p></div>
            <div className="sp-entrega-card"><span className="sp-entrega-tag">Residencial · 2023</span><h3>Porto Resort</h3><div className="sp-entrega-specs"><span className="sp-entrega-spec">8.500 m²</span><span className="sp-entrega-spec">Agrupamento</span></div><p>Medição agrupada conforme padrão da concessionária.</p></div>
            <div className="sp-entrega-card"><span className="sp-entrega-tag">Residencial · 2024</span><h3>Projeto PCI</h3><div className="sp-entrega-specs"><span className="sp-entrega-spec">2.000 m²</span><span className="sp-entrega-spec">AVCB aprovado</span></div><p>Sistema completo de prevenção e combate a incêndio.</p></div>
            <div className="sp-entrega-card"><span className="sp-entrega-tag">Comercial · 2024</span><h3>Vias do Atlântico</h3><div className="sp-entrega-specs"><span className="sp-entrega-spec">2.000 m²</span><span className="sp-entrega-spec">Projeto BIM</span><span className="sp-entrega-spec">Subestação</span></div><p>Projeto elétrico executivo para loteamento comercial.</p></div>
          </div>
        </div>

        <Link href="/#servicos" className="sp-back">← Voltar aos serviços</Link>
      </main>

      <section className="cta-section">
        <div className="container">
          <h2>Solicite um orçamento gratuito</h2>
          <p>Envie as informações do seu empreendimento e nossa equipe retorna com proposta técnica.</p>
          <a href="/orcamento" className="btn-secondary">FALAR COM UM ENGENHEIRO</a>
          <div className="cta-benefits"><span>Sem compromisso</span><span>•</span><span>Resposta rápida</span><span>•</span><span>Orçamento 100% gratuito</span></div>
        </div>
      </section>

      <Footer variant="simple" />
      <WhatsappFloat baseHref="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20projeto%20el%C3%A9trico" />
    </>
  );
}
