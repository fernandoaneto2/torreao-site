// Projetos exibidos no hero (carrossel) e na seção de payback.
// O título e o subtítulo de cada projeto são os MESMOS nas duas seções.
//
// Dados numéricos: somente os informados nas artes dos projetos.
// Projetos sem arte correspondente ficam sem números até recebermos os dados.

export type Categoria = 'Energia Solar' | 'Carregador Elétrico';

export type Dado = { label: string; valor: string };

export type Projeto = {
  /** Usado no link do hero: #projeto-<slug> abre o card correspondente. */
  slug: string;
  categoria: Categoria;
  titulo: string;
  subtitulo: string;
  imagem: string;
  alt: string;
  descricao: string;
  /** Até 2 números em destaque na capa do card. */
  destaques?: Dado[];
  /** Ficha completa exibida no card ampliado. */
  dados?: Dado[];
};

export const PROJETOS: Projeto[] = [
  {
    slug: 'usina-91kwp',
    categoria: 'Energia Solar',
    titulo: 'Geração Fotovoltaica Industrial',
    subtitulo: 'Usina de 91 kWp em área rural',
    imagem: '/images/hero/usina-solar-solo.jpg',
    alt: 'Usina fotovoltaica de 91 kWp instalada em solo, vista de drone',
    descricao:
      'Usina fotovoltaica em solo com 174 módulos e potência total de 91 kWp. Geração estimada de 11.800 kWh por mês, com economia estimada de R$ 9.340 por mês — mais de R$ 112 mil por ano.',
    destaques: [
      { label: 'Potência', valor: '91 kWp' },
      { label: 'Economia/ano', valor: 'R$ 112.080' },
    ],
    dados: [
      { label: 'Potência total', valor: '91 kWp' },
      { label: 'Módulos', valor: '174' },
      { label: 'Geração estimada mensal', valor: '11.800 kWh' },
      { label: 'Economia estimada mensal', valor: 'R$ 9.340,00' },
      { label: 'Economia estimada anual', valor: 'R$ 112.080,00' },
    ],
  },
  {
    slug: 'residencial-34kwp',
    categoria: 'Energia Solar',
    titulo: 'Geração Fotovoltaica Residencial',
    subtitulo: 'Sistema de 34,7 kWp em telhado cerâmico',
    imagem: '/images/payback/solar-residencial-34kwp.jpg',
    alt: 'Sistema fotovoltaico de 34,7 kWp em telhado cerâmico residencial, vista de drone',
    descricao:
      'Sistema fotovoltaico com 56 módulos de 620 W distribuídos no telhado cerâmico da residência. Geração média de 4.500 kWh por mês e economia de cerca de R$ 48 mil por ano.',
    destaques: [
      { label: 'Potência', valor: '34,7 kWp' },
      { label: 'Economia/ano', valor: 'R$ 48 mil' },
    ],
    dados: [
      { label: 'Potência total', valor: '34,7 kWp' },
      { label: 'Módulos', valor: '56 de 620 W' },
      { label: 'Geração média mensal', valor: '4.500 kWh' },
      { label: 'Economia anual', valor: 'R$ 48 mil' },
    ],
  },
  {
    slug: 'usina-laje-concreto',
    categoria: 'Energia Solar',
    titulo: 'Geração Fotovoltaica Industrial',
    subtitulo: 'Usina em solo sobre base de concreto',
    imagem: '/images/hero/usina-solar-laje.jpg',
    alt: 'Usina fotovoltaica em solo sobre base de concreto, vista de drone',
    descricao:
      'Usina fotovoltaica em solo, com fileiras de módulos montadas sobre base de concreto e área cercada. Projeto, instalação e ART.',
  },
  {
    slug: 'residencial-condominio',
    categoria: 'Energia Solar',
    titulo: 'Geração Fotovoltaica Residencial',
    subtitulo: 'Sistema em telhado de residência em condomínio',
    imagem: '/images/hero/solar-residencial.jpg',
    alt: 'Painéis solares em telhado residencial de condomínio ao entardecer',
    descricao:
      'Sistema fotovoltaico instalado no telhado de uma residência em condomínio. Projeto, instalação e ART.',
  },
  {
    slug: 'cobertura-fibrocimento',
    categoria: 'Energia Solar',
    titulo: 'Geração Fotovoltaica Industrial',
    subtitulo: 'Sistema em cobertura de fibrocimento',
    imagem: '/images/hero/solar-telhado-comercial.jpg',
    alt: 'Dois blocos de painéis solares em cobertura de fibrocimento, vista de drone',
    descricao:
      'Sistema fotovoltaico dividido em dois blocos sobre cobertura de fibrocimento, aproveitando toda a área útil do telhado. Projeto, instalação e ART.',
  },
  {
    slug: 'carregador-condominio',
    categoria: 'Carregador Elétrico',
    titulo: 'Carregador Elétrico',
    subtitulo: 'Wallbox em garagem de condomínio',
    imagem: '/images/hero/carregador-veicular-garagem.jpg',
    alt: 'Carregador veicular Wallbox instalado em garagem de condomínio',
    descricao:
      'Instalação de carregador veicular Wallbox na vaga do morador, em garagem de condomínio, com circuito e proteções dedicados.',
  },
  {
    slug: 'carregador-estacionamento',
    categoria: 'Carregador Elétrico',
    titulo: 'Carregador Elétrico',
    subtitulo: 'Carregador WEG em vaga de estacionamento',
    imagem: '/images/hero/carregador-veicular-weg.jpg',
    alt: 'Carregador veicular WEG instalado na parede de uma vaga de estacionamento',
    descricao:
      'Instalação de carregador veicular WEG em vaga de estacionamento, com circuito e proteções dedicados.',
  },
  {
    slug: 'carregador-residencial',
    categoria: 'Carregador Elétrico',
    titulo: 'Carregador Elétrico',
    subtitulo: 'Wallbox com quadro de proteção dedicado',
    imagem: '/images/hero/carregador-veicular-volvo.jpg',
    alt: 'Carregador veicular Volvo Enel X com quadro de proteção dedicado',
    descricao: 'Laudo com estudo de carga, projeto, ART e instalação do carregador com quadro de proteção dedicado.',
  },
];

export function getProjeto(slug: string): Projeto {
  const p = PROJETOS.find((x) => x.slug === slug);
  if (!p) throw new Error(`Projeto não encontrado: ${slug}`);
  return p;
}

/** Evento usado pelo "Saiba mais" do hero para abrir o card de um projeto. */
export const ABRIR_PROJETO_EVENT = 'payback:abrir';
