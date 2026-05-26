'use client';
import { useState } from 'react';

type Category = 'all' | 'comercial' | 'industrial' | 'residencial';

const CARDS = [
  { slug: 'complexo-luna', category: 'residencial', img: '/images/portfolio/complexo-luna.jpg', alt: 'Complexo Residencial Luna — projeto elétrico executivo', tag: 'Residencial', area: '8.500 m²', year: '2025', title: 'Complexo Residencial Luna', desc: 'Projeto elétrico executivo com medição agrupada e SPDA.', tags: ['Projeto BIM', 'Alta Tensão'] },
  { slug: 'porto-resort', category: 'residencial', img: '/images/portfolio/porto-resort.jpg', alt: 'Porto Resort — agrupamento de medição elétrica', tag: 'Residencial', area: '8.500 m²', year: '2023', title: 'Porto Resort', desc: 'Medição agrupada conforme padrão da concessionária.', tags: ['Agrupamento', 'Eficiência energética'] },
  { slug: 'residencial-multifamiliar', category: 'residencial', img: '/images/portfolio/residencial-multifamiliar.jpg', alt: 'Edifício residencial multifamiliar — agrupamento e SPDA', tag: 'Residencial', area: '12.000 m²', year: '2024', title: 'Edifício Multifamiliar', desc: 'Medição agrupada, SPDA e cabeamento estruturado.', tags: ['Projeto BIM', 'Laudo SPDA'] },
  { slug: 'arco-metropolitano', category: 'comercial', img: '/images/portfolio/arco-metropolitano.jpg', alt: 'Arco Metropolitano — iluminação pública viária', tag: 'Comercial', area: '2.000 m²', year: '2024', title: 'Iluminação Pública — Arco Metropolitano', desc: 'Sistema de iluminação viária com eficiência energética.', tags: ['Projeto BIM', 'Aterramento'] },
  { slug: 'vias-atlantico', category: 'comercial', img: '/images/portfolio/vias-atlantico.jpg', alt: 'Vias do Atlântico — projeto elétrico executivo', tag: 'Comercial', area: '2.000 m²', year: '2024', title: 'Vias do Atlântico', desc: 'Projeto elétrico executivo para loteamento comercial.', tags: ['Projeto BIM', 'Subestação'] },
  { slug: 'projeto-pci', category: 'residencial', img: '/images/portfolio/projeto-pci.jpg', alt: 'Projeto PCI — prevenção e combate a incêndio', tag: 'Residencial', area: '2.000 m²', year: '2024', title: 'Projeto PCI', desc: 'Sistema completo de prevenção e combate a incêndio.', tags: ['AVCB aprovado', 'Projeto BIM'] },
  { slug: 'projeto-spda', category: 'industrial', img: '/images/portfolio/projeto-spda.jpg', alt: 'Projeto SPDA — proteção contra descargas atmosféricas NBR 5419', tag: 'Industrial', area: '2.000 m²', year: '2024', title: 'Projeto SPDA', desc: 'Proteção contra descargas atmosféricas conforme NBR 5419.', tags: ['Laudo SPDA', 'Aterramento'] },
  { slug: 'projeto-predial', category: 'residencial', img: '/images/portfolio/projeto-predial.jpg', alt: 'Projeto elétrico predial residencial — NR-10', tag: 'Residencial', area: '2.000 m²', year: '2024', title: 'Projeto Predial', desc: 'Projeto elétrico completo com ART, As Built e NR-10.', tags: ['Projeto BIM', 'Conformidade NR-10'] },
  { slug: 'projeto-eletrico-cabeamento', category: 'comercial', img: '/images/portfolio/projeto-eletrico-cabeamento.jpg', alt: 'Projeto elétrico e cabeamento estruturado corporativo', tag: 'Comercial', area: '2.000 m²', year: '2024', title: 'Projeto Elétrico + Cabeamento', desc: 'Infraestrutura elétrica e TI para ambiente corporativo.', tags: ['Projeto BIM', 'Termografia'] },
  { slug: 'projeto-poinsp', category: 'comercial', img: '/images/portfolio/projeto-poinsp.jpg', alt: 'Projeto POINSP — policlínica integrada', tag: 'Comercial', area: '2.000 m²', year: '2024', title: 'Policlínica — Projeto POINSP', desc: 'Elétrica hospitalar com geradores de emergência.', tags: ['Projeto BIM', 'Conformidade NR-10'] },
  { slug: 'projeto-der', category: 'industrial', img: '/images/portfolio/projeto-der.jpg', alt: 'Projeto DER — infraestrutura elétrica viária pública', tag: 'Industrial', area: '2.000 m²', year: '2024', title: 'Projeto DER', desc: 'Elétrica viária pública com aterramento e proteção contra surtos.', tags: ['Projeto BIM', 'Aterramento'] },
];

const FILTERS: { key: Category; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'comercial', label: 'Comercial' },
  { key: 'industrial', label: 'Industrial' },
  { key: 'residencial', label: 'Residencial' },
];

export default function PortfolioFilter() {
  const [active, setActive] = useState<Category>('all');

  return (
    <>
      <div className="portfolio-filters">
        {FILTERS.map(({ key, label }) => (
          <button key={key} className={`filter-btn${active === key ? ' active' : ''}`} onClick={() => setActive(key)}>
            {label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {CARDS.filter((c) => active === 'all' || c.category === active).map((card) => (
          <article key={card.slug} className="portfolio-card" data-category={card.category}>
            <figure className="portfolio-image">
              <img src={card.img} alt={card.alt} loading="lazy" />
              <span className="category-tag">{card.tag}</span>
            </figure>
            <div className="portfolio-body">
              <div className="portfolio-meta-top">
                <span className="area">{card.area}</span>
                <span className="year">{card.year}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="portfolio-tags">
                {card.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
