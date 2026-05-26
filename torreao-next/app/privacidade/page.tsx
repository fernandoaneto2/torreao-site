import type { Metadata } from 'next';
import Link from 'next/link';
import './privacidade.css';

export const metadata: Metadata = {
  title: { absolute: 'Política de Privacidade — Torreão Engenharia' },
  description: 'Política de Privacidade da Torreão Engenharia LTDA. Saiba como tratamos seus dados pessoais conforme a LGPD (Lei 13.709/2018).',
  robots: 'noindex, follow',
  alternates: { canonical: '/privacidade' },
};

export default function PrivacidadePage() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link className="logo-link" href="/">
              <img className="logo" src="/images/logo-torreao-banner.png" alt="Logo Torreão Engenharia" loading="eager" />
            </Link>
          </div>
          <div className="navbar-right">
            <Link href="/#contato" className="btn-primary navbar-cta">SOLICITAR ORÇAMENTO</Link>
          </div>
        </div>
      </header>

      <main className="privacy-page">
        <h1>Política de Privacidade</h1>
        <p className="updated">Última atualização: 18 de abril de 2026</p>

        <h2>1. Quem somos</h2>
        <p><strong>Torreão Engenharia LTDA</strong> (CNPJ 20.262.501/0001-53), com sede na Av. Francisco Glicério, 1314 — Conj. 21, Sala 2A, Centro, Campinas/SP — CEP 13.012-100. Somos responsáveis pelo tratamento dos dados pessoais coletados neste site.</p>

        <h2>2. Dados coletados via formulário</h2>
        <p>Ao preencher o formulário de contato ou de orçamento neste site, coletamos:</p>
        <ul>
          <li>Nome completo</li>
          <li>Número de telefone / WhatsApp</li>
          <li>Endereço de e-mail</li>
          <li>Serviço de interesse</li>
          <li>Descrição do projeto (texto livre)</li>
        </ul>
        <p>Não coletamos dados de pagamento, documentos de identificação, dados sensíveis ou qualquer outra categoria especial de dado pessoal.</p>

        <h2>3. Finalidade do tratamento</h2>
        <p>Os dados são utilizados exclusivamente para responder à sua solicitação de orçamento ou contato comercial e, quando necessário, para envio de informações relacionadas ao serviço solicitado.</p>
        <p>Não vendemos, alugamos nem compartilhamos seus dados com terceiros.</p>

        <h2>4. Base legal (LGPD — Art. 7º)</h2>
        <ul>
          <li><strong>Consentimento</strong> (art. 7º, I): ao preencher e enviar o formulário, você consente com o uso dos dados para as finalidades descritas acima.</li>
          <li><strong>Execução de contrato</strong> (art. 7º, V): quando o contato resulta em prestação de serviço, o tratamento é necessário para execução do contrato ou procedimentos preliminares.</li>
        </ul>

        <h2>5. Retenção dos dados</h2>
        <p>Os dados são mantidos pelo tempo necessário ao atendimento da solicitação e, no caso de contratação de serviço, pelo prazo legal exigido (mínimo de 5 anos, conforme legislação fiscal e contábil aplicável). Após o prazo, os dados são excluídos ou anonimizados.</p>

        <h2>6. Direitos do titular</h2>
        <p>Conforme a LGPD (Art. 18), você tem o direito de, a qualquer momento:</p>
        <ul>
          <li>Confirmar a existência de tratamento;</li>
          <li>Acessar seus dados;</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Revogar o consentimento;</li>
          <li>Solicitar portabilidade dos dados a outro fornecedor (quando aplicável).</li>
        </ul>
        <p>Para exercer qualquer desses direitos, entre em contato pelo e-mail abaixo.</p>

        <h2>7. Cookies e rastreamento</h2>
        <p>Este site utiliza apenas cookies funcionais essenciais (sem cookies de rastreamento de terceiros, sem scripts de análise comportamental ou publicidade).</p>

        <h2>8. Contato do responsável (DPO)</h2>
        <p>
          Dúvidas ou solicitações relacionadas a esta Política de Privacidade podem ser enviadas para:<br />
          <strong>E-mail:</strong> <a href="mailto:torreaoengenharia@gmail.com">torreaoengenharia@gmail.com</a><br />
          <strong>Telefone:</strong> (11) 2276-3114
        </p>

        <Link href="/" className="privacy-back">← Voltar ao site</Link>
      </main>

      <footer className="footer" style={{ padding: '30px 20px' }}>
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p>&copy; 2026 Torreão Engenharia LTDA. Todos os direitos reservados.</p>
            <div className="footer-links">
              <span>CNPJ 20.262.501/0001-53 | Registro CREA-SP em vigor</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
