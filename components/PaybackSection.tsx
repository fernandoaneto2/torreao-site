import ModalTriggerButton from './ModalTriggerButton';
import './payback-section.css';

type Categoria = 'Energia Solar' | 'Carregador Elétrico';

type Projeto = {
  categoria: Categoria;
  imagem: string;
  alt: string;
  titulo: string;
  local: string;
  descricao: string;
  investimento: string;
  economiaMensal: string;
  payback: string;
  /** Potência do sistema (kWp) ou do carregador (kW). */
  potencia: string;
};

/*
 * PLACEHOLDERS — substituir pelos dados reais de cada projeto.
 * Para adicionar um card, basta incluir um novo item neste array.
 */
const PROJETOS: Projeto[] = [
  {
    categoria: 'Energia Solar',
    imagem: '/images/hero/usina-solar-laje.jpg',
    alt: 'Usina solar em solo vista de drone',
    titulo: 'Nome do projeto',
    local: 'Cidade / UF',
    descricao: 'Breve descrição do projeto e da solução entregue ao cliente.',
    investimento: 'R$ 00.000',
    economiaMensal: 'R$ 0.000',
    payback: '0 anos',
    potencia: '00 kWp',
  },
  {
    categoria: 'Energia Solar',
    imagem: '/images/hero/usina-solar-solo.jpg',
    alt: 'Usina fotovoltaica em área rural',
    titulo: 'Nome do projeto',
    local: 'Cidade / UF',
    descricao: 'Breve descrição do projeto e da solução entregue ao cliente.',
    investimento: 'R$ 00.000',
    economiaMensal: 'R$ 0.000',
    payback: '0 anos',
    potencia: '00 kWp',
  },
  {
    categoria: 'Energia Solar',
    imagem: '/images/hero/solar-residencial.jpg',
    alt: 'Sistema solar em telhado residencial',
    titulo: 'Nome do projeto',
    local: 'Cidade / UF',
    descricao: 'Breve descrição do projeto e da solução entregue ao cliente.',
    investimento: 'R$ 00.000',
    economiaMensal: 'R$ 0.000',
    payback: '0 anos',
    potencia: '00 kWp',
  },
  {
    categoria: 'Energia Solar',
    imagem: '/images/hero/solar-telhado-comercial.jpg',
    alt: 'Sistema solar em telhado comercial',
    titulo: 'Nome do projeto',
    local: 'Cidade / UF',
    descricao: 'Breve descrição do projeto e da solução entregue ao cliente.',
    investimento: 'R$ 00.000',
    economiaMensal: 'R$ 0.000',
    payback: '0 anos',
    potencia: '00 kWp',
  },
  {
    categoria: 'Carregador Elétrico',
    imagem: '/images/hero/carregador-veicular-garagem.jpg',
    alt: 'Carregador veicular em garagem de condomínio',
    titulo: 'Nome do projeto',
    local: 'Cidade / UF',
    descricao: 'Breve descrição do projeto e da solução entregue ao cliente.',
    investimento: 'R$ 00.000',
    economiaMensal: 'R$ 000',
    payback: '0 anos',
    potencia: '0 kW',
  },
  {
    categoria: 'Carregador Elétrico',
    imagem: '/images/hero/carregador-veicular-weg.jpg',
    alt: 'Carregador veicular WEG instalado',
    titulo: 'Nome do projeto',
    local: 'Cidade / UF',
    descricao: 'Breve descrição do projeto e da solução entregue ao cliente.',
    investimento: 'R$ 00.000',
    economiaMensal: 'R$ 000',
    payback: '0 anos',
    potencia: '0 kW',
  },
  {
    categoria: 'Carregador Elétrico',
    imagem: '/images/hero/carregador-veicular-volvo.jpg',
    alt: 'Carregador veicular Volvo Enel X com quadro de proteção dedicado',
    titulo: 'Nome do projeto',
    local: 'Cidade / UF',
    descricao: 'Laudo com estudo de carga, projeto, ART e instalação.',
    investimento: 'R$ 00.000',
    economiaMensal: 'R$ 000',
    payback: '0 anos',
    potencia: '0 kW',
  },
];

export default function PaybackSection() {
  return (
    <section id="payback" className="payback" aria-labelledby="payback-title">
      <div className="container">
        <p className="payback-eyebrow">RETORNO DO INVESTIMENTO</p>
        <h2 id="payback-title">Payback dos nossos projetos</h2>
        <p className="section-subtitle">
          Quanto nossos clientes investiram em energia solar e carregadores elétricos, quanto economizam e em quanto
          tempo o investimento se paga.
        </p>

        <div className="payback-grid">
          {PROJETOS.map((p, i) => (
            <article key={`${p.imagem}-${i}`} className="payback-card">
              <figure className="payback-card__img">
                <img src={p.imagem} alt={p.alt} loading="lazy" />
                <span className={`payback-tag${p.categoria === 'Carregador Elétrico' ? ' payback-tag--ev' : ''}`}>
                  {p.categoria}
                </span>
              </figure>
              <div className="payback-card__body">
                <h3>{p.titulo}</h3>
                <p className="payback-card__local">{p.local}</p>
                <p className="payback-card__desc">{p.descricao}</p>

                <div className="payback-card__highlight">
                  <span>Payback</span>
                  <strong>{p.payback}</strong>
                </div>

                <dl className="payback-card__stats">
                  <div><dt>Investimento</dt><dd>{p.investimento}</dd></div>
                  <div><dt>Economia/mês</dt><dd>{p.economiaMensal}</dd></div>
                  <div><dt>Potência</dt><dd>{p.potencia}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="payback-cta">
          <p>Quer saber em quanto tempo o seu projeto se paga? Nossos engenheiros avaliam no local — gratuito e sem compromisso.</p>
          <ModalTriggerButton className="btn-primary">AGENDAR AVALIAÇÃO GRATUITA</ModalTriggerButton>
        </div>
      </div>
    </section>
  );
}
