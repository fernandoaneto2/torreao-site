type Variant = 'full' | 'simple';

export default function Footer({ variant = 'full' }: { variant?: Variant }) {
  if (variant === 'simple') {
    return (
      <footer className="footer" style={{ padding: '30px 20px' }}>
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p>&copy; 2026 Torreão Engenharia LTDA. Todos os direitos reservados.</p>
            <div className="footer-links">
              <a href="/privacidade">Política de Privacidade</a>
              <span>CNPJ 20.262.501/0001-53 | Registro CREA-SP em vigor</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <a href="#inicio" className="footer-logo-link">
              <img src="/images/logo-torreao-banner.png" alt="Torreão Engenharia" className="footer-logo" loading="lazy" />
            </a>
            <p>Engenharia elétrica com segurança normatizada. Projetos, laudos, solar e vigilância no Brasil.</p>
            <div className="footer-badges">
              <span>CREA-SP Ativo</span>
              <span>NR-10</span>
              <span>NBR 5410</span>
            </div>
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
            <h4>NAVEGAÇÃO</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#processo">Processo</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="/privacidade">Privacidade</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>CONTATO</h4>
            <ul>
              <li>
                <a href="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                  (11) 92276-3114 - São Paulo
                </a>
              </li>
              <li>
                <a href="https://wa.me/5583986280101?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20do%20site%20da%20Torre%C3%A3o%20Engenharia." target="_blank" rel="noopener noreferrer">
                  (83) 98628-0101 - Nordeste
                </a>
              </li>
              <li><a href="mailto:torreaoengenharia@gmail.com">torreaoengenharia@gmail.com</a></li>
              <li>
                Av. Francisco Glicério, 1314<br />
                Conj. 21, Sala 2A — Centro<br />
                Campinas/SP — CEP 13.012-100
              </li>
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
  );
}
