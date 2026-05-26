import type { Metadata } from 'next';
import Link from 'next/link';
import './orcamento.css';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import WhatsappFloat from '@/components/WhatsappFloat';

export const metadata: Metadata = {
  title: { absolute: 'Orçamento Gratuito — Torreão Engenharia' },
  description: 'Solicite um orçamento gratuito para projetos elétricos, SPDA, geração solar, manutenção, subestações e segurança eletrônica. Torreão Engenharia, Campinas/SP.',
  robots: 'index, follow',
  openGraph: { title: 'Orçamento Gratuito — Torreão Engenharia', description: 'Fale com um engenheiro especializado. Retornamos em até 24 horas. Orçamento 100% gratuito e sem compromisso.', type: 'website', images: ['/images/logo-torreao-banner.png'] },
  alternates: { canonical: '/orcamento' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://torreaoengenharia.com.br/' },
    { '@type': 'ListItem', position: 2, name: 'Orçamento Gratuito', item: 'https://torreaoengenharia.com.br/orcamento' },
  ],
};

export default function OrcamentoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <div className="orc-hero">
        <span className="orc-tag">Orçamento Gratuito</span>
        <h1>Fale com um Engenheiro Especializado</h1>
        <p>Preencha o formulário ou chame no WhatsApp. Retornamos em até 24 horas com proposta técnica personalizada.</p>
        <div className="orc-trust">
          <span>CREA Ativo</span>
          <span>NR-10 / NBR 5410</span>
          <span>+300 projetos aprovados</span>
          <span>Atendimento em todo Brasil</span>
        </div>
      </div>

      <div className="orc-body">
        <div className="orc-grid">
          <div className="orc-info">
            <h2>Vamos conversar sobre o seu projeto</h2>
            <p>Conte o que precisa e nossa equipe técnica analisa seu caso, esclarece dúvidas e apresenta a solução mais adequada — sem compromisso.</p>
            <ul className="orc-contact-list">
              <li><strong>Telefone / WhatsApp — São Paulo</strong>(11) 92276-3114</li>
              <li><strong>Telefone / WhatsApp — Nordeste</strong>(83) 98628-0101</li>
              <li><strong>E-mail</strong>torreaoengenharia@gmail.com</li>
              <li><strong>Endereço</strong>Av. Francisco Glicério, 1314 — Conj. 21, Sala 2A<br />Centro — Campinas/SP — CEP 13.012-100</li>
              <li><strong>Horário de Atendimento</strong>Segunda a Sexta: 8h às 18h</li>
            </ul>
            <a href="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" className="orc-wa-btn" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
          <div className="orc-form-card">
            <h3>Envie sua solicitação</h3>
            <ContactForm formId="orcamentoForm" submitLabel="ENVIAR SOLICITAÇÃO" />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <Link href="/" className="footer-logo-link">
                <img src="/images/logo-torreao-banner.png" alt="Torreão Engenharia" className="footer-logo" loading="lazy" />
              </Link>
              <p>Engenharia elétrica com segurança normatizada. Projetos, laudos, solar e vigilância no Brasil.</p>
              <div className="footer-badges"><span>CREA-SP Ativo</span><span>NR-10</span><span>NBR 5410</span></div>
            </div>
            <div className="footer-section">
              <h4>SERVIÇOS</h4>
              <ul>
                <li><a href="/servicos/vigilancia">Sistemas de Vigilância</a></li>
                <li><a href="/servicos/fotovoltaica">Geração Fotovoltaica</a></li>
                <li><a href="/servicos/projetos-eletricos">Projetos de Engenharia</a></li>
                <li><a href="/servicos/carregadores-eletricos">Carregadores Elétricos</a></li>
                <li><a href="/servicos/manutencao-eletrica">Manutenção e Construção</a></li>
                <li><a href="/servicos/subestacoes-geradores">Subestações e Geradores</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>CONTATO</h4>
              <ul>
                <li><a href="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener">(11) 92276-3114 — São Paulo</a></li>
                <li><a href="https://wa.me/5583986280101?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20do%20site%20da%20Torre%C3%A3o%20Engenharia.">(83) 98628-0101 — Nordeste</a></li>
                <li><a href="mailto:torreaoengenharia@gmail.com">torreaoengenharia@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Torreão Engenharia LTDA. Todos os direitos reservados.</p>
            <div className="footer-links">
              <a href="/privacidade">Política de Privacidade</a>
              <span>CNPJ 20.262.501/0001-53 | Registro CREA-SP em vigor</span>
            </div>
          </div>
        </div>
      </footer>

      <WhatsappFloat baseHref="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" />
    </>
  );
}
