import HeroCopy from './HeroCopy';
import ObrasShowcase from './ObrasShowcase';
import type { SlideImage } from './ObrasShowcase';
import './hero-eletrica.css';

// TODO: cliente confirma quais fotos usar e a ordem do slideshow
const OBRAS_IMAGES: SlideImage[] = [
  { src: '/images/portfolio/projeto-luna.jpg',                       alt: 'Complexo Residencial Luna — projeto elétrico BIM' },
  { src: '/images/portfolio/projeto-eletrico-vias-do-atlantico.jpg', alt: 'Vias do Atlântico — projeto elétrico comercial' },
  { src: '/images/portfolio/projeto-pci.jpg',                        alt: 'Projeto PCI — prevenção e combate a incêndio' },
  { src: '/images/portfolio/projeto-predial-residencial.jpg',        alt: 'Projeto predial residencial — instalações elétricas' },
  { src: '/images/portfolio/projeto-poinsp.jpg',                     alt: 'Projeto POINSP — policlínica com geradores' },
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
