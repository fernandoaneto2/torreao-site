import HeroCopy from './HeroCopy';
import ObrasShowcase from './ObrasShowcase';
import type { SlideImage } from './ObrasShowcase';
import './hero-eletrica.css';

// TODO: cliente confirma quais fotos usar e a ordem do slideshow
const OBRAS_IMAGES: SlideImage[] = [
  { src: '/images/portfolio/complexo-luna.jpg',             alt: 'Complexo Residencial Luna — projeto elétrico BIM' },
  { src: '/images/portfolio/porto-resort.jpg',              alt: 'Porto Resort — medição agrupada e SPDA' },
  { src: '/images/portfolio/vias-atlantico.jpg',            alt: 'Vias do Atlântico — projeto elétrico comercial' },
  { src: '/images/portfolio/projeto-predial.jpg',           alt: 'Projeto predial — instalações elétricas' },
  { src: '/images/portfolio/residencial-multifamiliar.jpg', alt: 'Residencial multifamiliar — engenharia elétrica' },
];

export default function HeroEletrica() {
  return (
    <section className="he-section" aria-labelledby="he-title">
      <div className="he-grid">
        <HeroCopy />
        <div className="he-visual">
          <ObrasShowcase images={OBRAS_IMAGES} />
        </div>
      </div>
    </section>
  );
}
