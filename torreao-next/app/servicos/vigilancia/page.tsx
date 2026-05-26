import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

export const metadata: Metadata = {
  title: { absolute: 'Sistemas de Vigilância em Campinas — Torreão Engenharia' },
  description: 'Câmeras CFTV, controle de acesso, alarmes e monitoramento remoto com ART e conformidade NR-35. Atendemos bancos, indústrias, condomínios e residências em Campinas/SP.',
  robots: 'index, follow',
  openGraph: { title: 'Sistemas de Vigilância em Campinas — Torreão Engenharia', description: 'Câmeras CFTV, controle de acesso, alarmes e monitoramento remoto com ART e conformidade NR-35. Campinas/SP.', type: 'website' },
  alternates: { canonical: '/servicos/vigilancia' },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Sistemas de Vigilância', description: 'Instalação e manutenção de câmeras CFTV, controle de acesso e alarmes para bancos, indústrias, comércio, condomínios e residências em Campinas/SP.', provider: { '@type': 'LocalBusiness', name: 'Torreão Engenharia LTDA', url: 'https://torreaoengenharia.com.br' }, areaServed: 'Campinas e região', url: 'https://torreaoengenharia.com.br/servicos/vigilancia' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: 'https://torreaoengenharia.com.br/' }, { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://torreaoengenharia.com.br/#servicos' }, { '@type': 'ListItem', position: 3, name: 'Sistemas de Vigilância', item: 'https://torreaoengenharia.com.br/servicos/vigilancia' }] },
  ],
};

export default function VigilanciaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <Navbar />

      <div className="sp-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.62)), url("/images/sections/engenharia-civil.jpg") center/cover no-repeat' }}>
        <span className="sp-tag">Serviço</span>
        <h1>Sistemas de Vigilância Eletrônica</h1>
        <p>Segurança eletrônica completa com conformidade NR-35 — câmeras CFTV, controle de acesso, alarmes e monitoramento remoto. Atendemos bancos, indústrias, condomínios e residências em Campinas e região.</p>
      </div>

      <main className="sp-body">
        <div className="sp-section">
          <h2>Como funciona</h2>
          <p>Realizamos o levantamento do ambiente, definimos os pontos estratégicos de cobertura e dimensionamos o sistema ideal para cada perfil de cliente. O projeto é executado com cabeamento estruturado, configuração de DVR/NVR e integração com monitoramento remoto via aplicativo.</p>
          <p>Cada instalação segue as normas técnicas vigentes e é entregue com documentação completa, treinamento do usuário e suporte pós-implantação.</p>
        </div>

        <div className="sp-section">
          <h2>O que está incluído</h2>
          <div className="sp-grid">
            <div className="sp-card"><h3>Câmeras CFTV</h3><p>Câmeras analógicas e IP, internas e externas, com resolução HD e visão noturna.</p></div>
            <div className="sp-card"><h3>Monitoramento remoto</h3><p>Acesso às imagens em tempo real pelo celular ou computador, de qualquer lugar.</p></div>
            <div className="sp-card"><h3>Controle de acesso</h3><p>Sistemas com cartão, biometria ou senha — para controlar quem entra e sai.</p></div>
            <div className="sp-card"><h3>Alarmes e sensores</h3><p>Sensores perimetrais, de presença e de abertura, integrados a central de alarme.</p></div>
          </div>
        </div>

        <div className="sp-gallery">
          <img src="/images/sections/engenharia-civil.jpg"  alt="Infraestrutura de segurança em obra"   loading="lazy" />
          <img src="/images/services/engenharia-civil2.jpg" alt="Instalação de sistemas em campo"       loading="lazy" />
          <div className="sp-gallery-ph" aria-hidden="true" />
        </div>

        <div className="sp-section">
          <h2>Segmentos atendidos</h2>
          <ul>
            <li>Bancos e instituições financeiras</li>
            <li>Indústrias e galpões logísticos</li>
            <li>Comércio e estabelecimentos varejistas</li>
            <li>Condomínios residenciais e comerciais</li>
            <li>Residências e escritórios</li>
          </ul>
        </div>

        <div className="sp-section">
          <h2>Processo de implantação</h2>
          <ul>
            <li><strong>Visita técnica:</strong> levantamento do espaço e identificação dos pontos críticos.</li>
            <li><strong>Projeto:</strong> definição e posicionamento de câmeras, cabeamento, equipamentos.</li>
            <li><strong>Instalação:</strong> execução com equipe técnica própria e materiais de qualidade.</li>
            <li><strong>Configuração:</strong> setup do DVR/NVR, acesso remoto e testes de funcionamento.</li>
            <li><strong>Entrega:</strong> treinamento do usuário e documentação completa do sistema.</li>
          </ul>
        </div>

        <Link href="/#servicos" className="sp-back">← Voltar aos serviços</Link>
      </main>

      <section className="cta-section">
        <div className="container">
          <h2>Solicite um orçamento gratuito</h2>
          <p>Nossa equipe visita o local e apresenta a solução de segurança ideal para o seu espaço.</p>
          <a href="/orcamento" className="btn-secondary">FALAR COM UM ENGENHEIRO</a>
          <div className="cta-benefits"><span>Sem compromisso</span><span>•</span><span>Resposta rápida</span><span>•</span><span>Orçamento 100% gratuito</span></div>
        </div>
      </section>

      <Footer variant="simple" />
      <WhatsappFloat baseHref="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20sistemas%20de%20vigil%C3%A2ncia" />
    </>
  );
}
