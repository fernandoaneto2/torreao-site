import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import ContactModal from '@/components/ContactModal';
import ContactForm from '@/components/ContactForm';
import PortfolioFilter from '@/components/PortfolioFilter';
import ModalTriggerButton from '@/components/ModalTriggerButton';
import ScrollInit from '@/components/ScrollInit';

export const metadata: Metadata = {
  title: { absolute: 'Torreão Engenharia — Projetos Elétricos, SPDA e Laudos NR-10' },
  description: 'Torreão Engenharia — projetos elétricos, SPDA, laudos NR-10, geração solar e segurança eletrônica em Campinas/SP. CREA ativo, +300 projetos aprovados.',
  keywords: 'engenharia elétrica campinas, projeto elétrico, SPDA NBR 5419, laudo NR-10, NBR 5410, geração solar fotovoltaica, subestação, manutenção elétrica',
  openGraph: { title: 'Torreão Engenharia — Engenharia Elétrica com Segurança Normatizada', description: 'Projetos elétricos, SPDA, laudos NR-10, geração solar e segurança eletrônica em Campinas/SP.', type: 'website', locale: 'pt_BR', images: ['/images/logo-torreao-banner.png'] },
  alternates: { canonical: '/' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Torreão Engenharia LTDA',
  alternateName: 'Torreão Engenharia',
  description: 'Projetos elétricos, SPDA, laudos NR-10, geração solar e segurança eletrônica em Campinas e região.',
  url: 'https://torreaoengenharia.com.br',
  telephone: '+551122763114',
  email: 'torreaoengenharia@gmail.com',
  foundingDate: '2014-05-15',
  address: { '@type': 'PostalAddress', streetAddress: 'Av. Francisco Glicério, 1314, Conj. 21, Sala 2A, Centro', addressLocality: 'Campinas', addressRegion: 'SP', postalCode: '13012-100', addressCountry: 'BR' },
  geo: { '@type': 'GeoCoordinates', latitude: -22.9068, longitude: -47.0622 },
  areaServed: 'Campinas e região',
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' }],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Como funciona o processo de orçamento?', acceptedAnswer: { '@type': 'Answer', text: 'O processo começa com um contato inicial — pelo formulário, WhatsApp ou telefone. Nossa equipe analisa a demanda e agenda uma visita técnica gratuita ao local (quando necessária). Em seguida, elaboramos uma proposta técnica detalhada com escopo, prazo e valor. Sem compromisso até a sua aprovação.' } },
    { '@type': 'Question', name: 'Todos os projetos incluem ART?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Todos os projetos e serviços executados pela Torreão Engenharia são acompanhados de ART registrada no CREA, com engenheiro responsável identificado.' } },
    { '@type': 'Question', name: 'Quais normas técnicas são seguidas nos projetos?', acceptedAnswer: { '@type': 'Answer', text: 'Nossos projetos seguem as normas técnicas vigentes: NR-10, NBR 5410, NBR 5419 (SPDA), NBR 14039, NBR 17240 e NR-35, entre outras.' } },
    { '@type': 'Question', name: 'Qual a área de atendimento?', acceptedAnswer: { '@type': 'Answer', text: 'Temos sede em Campinas/SP e atendemos projetos em todo o Brasil. Já executamos projetos em mais de 15 cidades em diferentes estados.' } },
    { '@type': 'Question', name: 'Vocês atendem tanto residências quanto indústrias?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Atendemos projetos residenciais, comerciais e industriais. Cada projeto recebe tratamento técnico adequado ao porte e às exigências normativas do segmento.' } },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      {/* Hero */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">ENGENHARIA ELÉTRICA COM SEGURANÇA NORMATIZADA</p>
            <h1 className="hero-title">
              Construímos o Futuro <span className="hero-title-gradient">com Precisão.</span>
            </h1>
            <p className="hero-description">
              Especialistas em projetos elétricos com conformidade às normas NR-10, NBR 5410 e NBR 5419 (SPDA). Emitimos
              laudos técnicos com responsabilidade do engenheiro e ART — para que sua obra tenha segurança jurídica e
              técnica do início ao fim, com a <strong>Torreão Engenharia</strong>.
            </p>
            <ul className="hero-badges" aria-label="Credenciais">
              {['CREA Ativo', 'NR-10 / NBR 5410', 'SPDA NBR 5419', 'NR-35'].map((b) => (
                <li key={b} className="badge">{b}</li>
              ))}
            </ul>
            <div className="hero-buttons buttons-wrapper">
              <a href="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" className="btn-whatsapp" id="heroWhatsAppBtn" target="_blank" rel="noopener">
                CHAMAR NO WHATSAPP
              </a>
              <a href="/orcamento" className="btn-secondary">SOLICITAR ORÇAMENTO</a>
            </div>
          </div>
          <div className="hero-video-wrap">
            <div className="hero-video">
              <video autoPlay muted loop playsInline preload="none" aria-hidden="true">
                <source src="/videos/video-drone-solar.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="partners-marquee">
        <div className="marquee-track">
          <div className="marquee-inner" aria-hidden="true">
            {[
              { src: '/images/logo-vert-fundo-branco-96px.png', alt: 'Solar Vert' },
              { src: '/images/logo-montevi-fundo-branco96px.png', alt: 'Montevi' },
              { src: '/images/Logo-DER-PB.png', alt: 'DER-PB' },
              { src: '/images/logo-comtermica.png', alt: 'Comtérmica' },
              { src: '/images/logo-construdantas.jpg', alt: 'Construdantas' },
              { src: '/images/logo-distribuidora.jpg', alt: 'Distribuidora' },
              { src: '/images/logo-governo-da-paraiba.png', alt: 'Governo da Paraíba' },
              { src: '/images/logo-montemorsp.png', alt: 'Monte Mor SP' },
              { src: '/images/logo-neoenergia.svg', alt: 'Neoenergia' },
              { src: '/images/logo-santenge.jpg', alt: 'Santenge' },
              { src: '/images/logo-sindivarejista.png', alt: 'Sindivarejista' },
            ].concat([
              { src: '/images/logo-vert-fundo-branco-96px.png', alt: 'Solar Vert' },
              { src: '/images/logo-montevi-fundo-branco96px.png', alt: 'Montevi' },
              { src: '/images/Logo-DER-PB.png', alt: 'DER-PB' },
              { src: '/images/logo-comtermica.png', alt: 'Comtérmica' },
              { src: '/images/logo-construdantas.jpg', alt: 'Construdantas' },
              { src: '/images/logo-distribuidora.jpg', alt: 'Distribuidora' },
              { src: '/images/logo-governo-da-paraiba.png', alt: 'Governo da Paraíba' },
              { src: '/images/logo-montemorsp.png', alt: 'Monte Mor SP' },
              { src: '/images/logo-neoenergia.svg', alt: 'Neoenergia' },
              { src: '/images/logo-santenge.jpg', alt: 'Santenge' },
              { src: '/images/logo-sindivarejista.png', alt: 'Sindivarejista' },
            ]).map((logo, i) => (
              <div key={`${logo.src}-${i}`} className="marquee-item">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="metrics-strip" aria-label="Números da Torreão Engenharia">
        <div className="metrics-strip-grid">
          <div className="metrics-item"><span className="metrics-num">+300</span><span className="metrics-bar" aria-hidden="true" /><span className="metrics-lbl">Projetos elétricos aprovados</span></div>
          <div className="metrics-item"><span className="metrics-num">+10</span><span className="metrics-bar" aria-hidden="true" /><span className="metrics-lbl">Anos no mercado</span></div>
          <div className="metrics-item"><span className="metrics-num">+25MW</span><span className="metrics-bar" aria-hidden="true" /><span className="metrics-lbl">Em projetos de conexão</span></div>
          <div className="metrics-item"><span className="metrics-num">+15</span><span className="metrics-bar" aria-hidden="true" /><span className="metrics-lbl">Cidades atendidas</span></div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="about">
        <div className="container">
          <div className="about-split">
            <div className="about-split-img">
              <img src="/images/sections/team-torreao.jpg" alt="Equipe Torreão Engenharia" loading="lazy" />
            </div>
            <div className="about-split-text">
              <h2 className="about-header-title">Somos a Torreão Engenharia</h2>
              <p>Sua parceira confiável em engenharia elétrica, civil e segurança eletrônica. Entregamos projetos com o rigor que obras de alto padrão exigem — com ART, conformidade normativa e responsabilidade técnica do início ao fim.</p>
              <div className="about-grid">
                <div className="about-item"><h4>Equipe com mais de 10 anos de mercado</h4></div>
                <div className="about-item"><h4>Engenheiros CREA credenciados</h4></div>
                <div className="about-item"><h4>Gestão completa de obra</h4></div>
                <div className="about-item"><h4>Tecnologia BIM em todos os projetos</h4></div>
                <div className="about-item"><h4>Materiais Homologados e Aprovados pelas concessionárias</h4></div>
                <div className="about-item"><h4>Atendimento 24h durante a obra</h4></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="services">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <p className="section-subtitle">Especialidades para suas necessidades de engenharia, energia e segurança.</p>
          <div className="services-grid">
            <div className="service-card">
              <figure className="service-img"><img src="/images/sections/engenharia-civil.jpg" alt="Sistemas de vigilância" loading="lazy" /></figure>
              <h3>Sistemas de vigilância</h3>
              <p>Instalação e manutenção de sistemas de segurança eletrônica para Bancos, Indústrias, Comércio, Condomínios e residências.</p>
              <ul><li>Câmeras CFTV e monitoramento remoto</li><li>Controle de acesso e biometria</li><li>Alarmes e sensores perimetrais</li></ul>
              <div className="service-norms"><span className="service-norm-badge">NR-35</span></div>
              <div className="service-actions"><a href="/servicos/vigilancia" className="link-more">Ver detalhes →</a><a href="#contato" className="link-request">Solicitar orçamento</a></div>
            </div>
            <div className="service-card">
              <figure className="service-img"><img src="/images/sections/geracao-fotovoltaica1.jpeg" alt="Geração fotovoltaica" loading="lazy" /></figure>
              <h3>Geração fotovoltaica</h3>
              <p>Projetos estruturais inovadores e soluções construtivas.</p>
              <ul><li>On Grid e Off Grid</li><li>On Grid com Micro Inversor</li><li>Híbrido</li><li>Bomba Solar</li></ul>
              <div className="service-norms"><span className="service-norm-badge">NBR 16690</span></div>
              <div className="service-actions"><a href="/servicos/fotovoltaica" className="link-more">Ver detalhes →</a><a href="#contato" className="link-request">Solicitar orçamento</a></div>
            </div>
            <div className="service-card">
              <figure className="service-img"><img src="/images/sections/projetos-complementares2.jpg" alt="Projetos de engenharia BIM" loading="lazy" /></figure>
              <h3>Projetos de engenharia</h3>
              <p>Projetos desenvolvidos em BIM, com modelagem 2D e 3D para máxima precisão.</p>
              <ul>
                <li><strong>Escopo:</strong> ART (CREA), memoriais, compatibilização e As Built</li>
                <li><strong>Elétricos:</strong> para todo tipo de Empreendimento (BT/MT, medição agrupada, cabeamento e SPDA)</li>
                <li><strong>Complementares:</strong> PCI, Hidrossanitário, gás, climatização e drenagem</li>
              </ul>
              <div className="service-norms"><span className="service-norm-badge">NR-10</span><span className="service-norm-badge">NBR 5410</span><span className="service-norm-badge">NBR 5419</span></div>
              <div className="service-actions"><a href="/servicos/projetos-eletricos" className="link-more">Ver detalhes →</a><a href="#contato" className="link-request">Solicitar orçamento</a></div>
            </div>
            <div className="service-card">
              <figure className="service-img"><img src="/images/sections/foto-carregadore-eletricos.jpg" alt="Carregadores elétricos veiculares" loading="lazy" /></figure>
              <h3>Carregadores Elétricos</h3>
              <p>Soluções completas para infraestrutura de recarga veicular.</p>
              <ul>
                <li><strong>Infraestrutura:</strong> dimensionamento elétrico e adequações</li>
                <li><strong>Carregadores:</strong> AC e DC (residencial, comercial e industrial)</li>
                <li><strong>Proteções:</strong> disjuntores, DPS, e aterramento</li>
                <li><strong>Normas:</strong> NBR, concessionárias e segurança elétrica</li>
              </ul>
              <div className="service-norms"><span className="service-norm-badge">NBR 5410</span></div>
              <div className="service-actions"><a href="/servicos/carregadores-eletricos" className="link-more">Ver detalhes →</a><a href="#contato" className="link-request">Solicitar orçamento</a></div>
            </div>
            <div className="service-card">
              <figure className="service-img"><img src="/images/sections/iluminacao1.jpeg" alt="Manutenção elétrica" loading="lazy" /></figure>
              <h3>Manutenção e Construção</h3>
              <p>Inteligência em infraestrutura para melhor performance dos seus sistemas.</p>
              <ul><li>Manutenção Preventiva</li><li>Manutenção Corretiva Emergencial</li><li>Reformas e Ampliações Elétricas</li><li>Laudos Técnicos e Inspeções</li><li>Modernização de Sistemas</li></ul>
              <div className="service-norms"><span className="service-norm-badge">NR-10</span><span className="service-norm-badge">NR-35</span></div>
              <div className="service-actions"><a href="/servicos/manutencao-eletrica" className="link-more">Ver detalhes →</a><a href="#contato" className="link-request">Solicitar orçamento</a></div>
            </div>
            <div className="service-card">
              <figure className="service-img"><img src="/images/sections/subestacao-abrigada.jpeg" alt="Subestações e geradores" loading="lazy" /></figure>
              <h3>Subestações e Geradores</h3>
              <p>Máxima confiabilidade energética e segurança operacional.</p>
              <ul><li>Manutenção Preditiva e Preventiva em Subestações</li><li>Instalação e configuração de Grupos Geradores (GMG)</li><li>Modernização de Painéis e Quadros de Transferência (QTA)</li><li>Consultoria Técnica para Eficiência Energética</li></ul>
              <div className="service-norms"><span className="service-norm-badge">NBR 14039</span><span className="service-norm-badge">NR-10</span></div>
              <div className="service-actions"><a href="/servicos/subestacoes-geradores" className="link-more">Ver detalhes →</a><a href="#contato" className="link-request">Solicitar orçamento</a></div>
            </div>
          </div>
          <div className="services-cta">
            <p>Não encontrou o que precisa? Entre em contato — temos solução para cada projeto.</p>
            <ModalTriggerButton className="btn-primary">FALAR COM UM ENGENHEIRO</ModalTriggerButton>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="projetos" className="portfolio">
        <div className="container">
          <h2>Nossos Projetos</h2>
          <p className="section-subtitle">Obras entregues com rigor técnico e conformidade normativa.</p>
          <PortfolioFilter />
          <div className="portfolio-cta">
            <h3>Tem um projeto em mente?</h3>
            <p>Fale com nossos engenheiros.</p>
            <ModalTriggerButton className="btn-primary">Entrar em contato</ModalTriggerButton>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="process">
        <div className="container">
          <h2>Como trabalhamos</h2>
          <p className="section-subtitle">Do levantamento à entrega, com rigor técnico em cada fase.</p>
          <div className="process-grid">
            <div className="process-step"><div className="step-number">01</div><h3>Planejamento</h3><p>Análise técnica detalhada para entender suas necessidades e estabelecer o cronograma ideal.</p></div>
            <div className="process-step"><div className="step-number">02</div><h3>Execução</h3><p>Aplicação de expertise técnica com rigor normativo para realizar o projeto com máxima eficiência.</p></div>
            <div className="process-step"><div className="step-number">03</div><h3>Entrega</h3><p>Entrega formal com documentação completa e verificação final para sua total satisfação.</p></div>
            <div className="process-step"><div className="step-number">04</div><h3>Monitoramento</h3><p>Acompanhamento contínuo dos resultados para garantir a performance esperada.</p></div>
            <div className="process-step"><div className="step-number">05</div><h3>Suporte Técnico</h3><p>Assistência especializada pós-entrega para qualquer necessidade ou ajuste técnico.</p></div>
            <div className="process-step"><div className="step-number">06</div><h3>Inovação</h3><p>Atualização constante com novas tecnologias para manter seu projeto sempre moderno.</p></div>
          </div>
          <div className="process-cta">
            <p>Pronto para começar? A consulta inicial é gratuita e sem compromisso.</p>
            <ModalTriggerButton className="btn-primary">AGENDAR CONSULTA</ModalTriggerButton>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us">
        <div className="container">
          <h2>Por que a Torreão Engenharia</h2>
          <div className="why-grid">
            <div className="why-card"><h3>Agilidade sem abrir mão da qualidade</h3><p>Nosso processo otimizado permite entregas rápidas sem comprometer nem um milímetro do padrão técnico.</p></div>
            <div className="why-card"><h3>Segurança Jurídica e Técnica</h3><p>ART emitida em todos os projetos. Nossa responsabilidade técnica protege você e sua obra legalmente.</p></div>
            <div className="why-card"><h3>ROI Comprovado</h3><p>Clientes relatam até 30% de redução de custos com nossa gestão eficiente de obra e planejamento preciso.</p></div>
            <div className="why-card"><h3>Equipe Multidisciplinar</h3><p>Engenheiros e técnicos especializados trabalhando de forma integrada no seu projeto.</p></div>
            <div className="why-card"><h3>98% de Pontualidade</h3><p>Nossa gestão rigorosa de cronograma garante que seus projetos sejam entregues dentro do prazo combinado.</p></div>
            <div className="why-card"><h3>Tecnologia de Ponta</h3><p>BIM Level 2, drones para vistoria, softwares de análise estrutural avançada e gêmeos digitais.</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          <p className="section-subtitle">As dúvidas mais comuns sobre nossos serviços e processo de trabalho.</p>
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">Como funciona o processo de orçamento?</summary>
              <div className="faq-answer"><p>O processo começa com um contato inicial — pelo formulário, WhatsApp ou telefone. Nossa equipe analisa a demanda e agenda uma visita técnica gratuita ao local (quando necessária). Em seguida, elaboramos uma proposta técnica detalhada com escopo, prazo e valor. Sem compromisso até a sua aprovação.</p></div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Todos os projetos incluem ART?</summary>
              <div className="faq-answer"><p>Sim. Todos os projetos e serviços executados pela Torreão Engenharia são acompanhados de ART (Anotação de Responsabilidade Técnica) registrada no CREA, com engenheiro responsável identificado. Isso garante segurança jurídica e técnica para você e sua obra.</p></div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Quais normas técnicas são seguidas nos projetos?</summary>
              <div className="faq-answer"><p>Nossos projetos seguem as normas técnicas vigentes aplicáveis a cada especialidade: NR-10, NBR 5410 (instalações elétricas de baixa tensão), NBR 5419 (SPDA), NBR 14039 (instalações de média tensão), NBR 17240 (sistemas de alarme de incêndio) e NR-35 (trabalho em altura), entre outras.</p></div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Qual a área de atendimento?</summary>
              <div className="faq-answer"><p>Temos sede em Campinas/SP e atendemos projetos em todo o Brasil. Para obras fora da região de Campinas, avaliamos a viabilidade e logística junto ao cliente — já executamos projetos em mais de 15 cidades em diferentes estados.</p></div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Vocês atendem tanto residências quanto indústrias?</summary>
              <div className="faq-answer"><p>Sim. Atendemos projetos residenciais (unifamiliares e condomínios), comerciais (escritórios, lojas, shoppings) e industriais (fábricas, galpões, subestações). Cada projeto recebe tratamento técnico adequado ao porte e às exigências normativas do segmento.</p></div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Sobre a Torreão Engenharia</h2>
          <p>Conte conosco para impulsionar o sucesso do seu investimento com soluções técnicas de ponta e inovação constante em cada etapa do projeto.</p>
          <a href="/orcamento" className="btn-secondary btn-large">FALAR CONOSCO</a>
          <div className="cta-benefits">
            <span>Sem compromisso</span><span>•</span><span>Resposta rápida</span><span>•</span><span>Orçamento 100% gratuito</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Fale Conosco</h2>
              <p>Seu projeto começa com uma conversa</p>
              <p>Preencha o formulário e um engenheiro especializado entrará em contato.</p>
              <div className="contact-details">
                <div className="contact-item"><h4>TELEFONE / WHATSAPP</h4><p>(11) 92276-3114</p></div>
                <div className="contact-item"><h4>E-MAIL</h4><p>torreaoengenharia@gmail.com</p></div>
                <div className="contact-item"><h4>ENDEREÇO</h4><p>Av. Francisco Glicério, 1314 — Conj. 21, Sala 2A<br />Centro — Campinas/SP — CEP 13.012-100</p></div>
                <div className="contact-item"><h4>HORÁRIO DE ATENDIMENTO</h4><p>Seg–Sex: 8h–18h</p></div>
              </div>
              <a href="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" className="btn-whatsapp" target="_blank" rel="noopener">Chamar no WhatsApp</a>
            </div>
            <ContactForm formId="contactForm" />
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal />
      <WhatsappFloat baseHref="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" />
      <ScrollInit />
    </>
  );
}
