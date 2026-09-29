'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import './hero-slider.css';
import { SOCIAL, SOCIAL_ICONS } from '@/lib/social';

type Slide = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  /** Título e subtítulo são placeholders — trocar pelos textos finais de cada projeto. */
  title: string;
  subtitle: string;
  /** Enquadramento da mídia (CSS object-position). */
  position?: string;
};

const SLIDES: Slide[] = [
  {
    type: 'video',
    src: '/videos/video-drone-solar.mp4',
    poster: '/images/hero-solar-poster.jpg',
    alt: 'Vista aérea de usina solar executada pela Torreão Engenharia',
    title: 'Usina Solar',
    subtitle: 'Título placeholder do projeto',
    position: '35% 75%',
  },
  {
    type: 'image',
    src: '/images/hero/usina-solar-solo.jpg',
    alt: 'Usina fotovoltaica em solo vista de drone',
    title: 'Geração Solar em Solo',
    subtitle: 'Título placeholder do projeto',
    position: '50% 40%',
  },
  {
    type: 'image',
    src: '/images/hero/solar-residencial.jpg',
    alt: 'Painéis solares em telhado residencial ao entardecer',
    title: 'Solar Residencial',
    subtitle: 'Título placeholder do projeto',
    position: '50% 55%',
  },
  {
    type: 'image',
    src: '/images/hero/solar-telhado-comercial.jpg',
    alt: 'Painéis solares instalados em telhado comercial',
    title: 'Solar Comercial',
    subtitle: 'Título placeholder do projeto',
    position: '50% 45%',
  },
  {
    type: 'image',
    src: '/images/hero/carregador-veicular-garagem.jpg',
    alt: 'Carregador de veículo elétrico instalado em garagem de condomínio',
    title: 'Recarga Veicular',
    subtitle: 'Título placeholder do projeto',
    position: '50% 45%',
  },
  {
    type: 'image',
    src: '/images/hero/carregador-veicular-weg.jpg',
    alt: 'Carregador veicular WEG instalado na parede',
    title: 'Carregadores Elétricos',
    subtitle: 'Título placeholder do projeto',
    position: '50% 55%',
  },
  {
    type: 'image',
    src: '/images/hero/carregador-veicular-volvo.jpg',
    alt: 'Carregador veicular Volvo Enel X com quadro de proteção dedicado',
    title: 'Wallbox Residencial',
    subtitle: 'Título placeholder do projeto',
    position: '30% 22%',
  },
];

/** Tempo de cada slide antes de passar automaticamente. */
const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchX = useRef<number | null>(null);
  const total = SLIDES.length;

  const go = useCallback((dir: 1 | -1) => setActive((i) => (i + dir + total) % total), [total]);

  // Temporizador: passa para o próximo slide automaticamente
  // (a contagem reinicia a cada troca, inclusive nas manuais)
  useEffect(() => {
    const t = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [active, go]);

  // Só o vídeo do slide ativo fica tocando
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) v.play().catch(() => {});
      else v.pause();
    });
  }, [active]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section
      id="inicio"
      className="hs"
      aria-roledescription="carrossel"
      aria-label="Projetos em destaque"
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <h1 className="sr-only">Torreão Engenharia — Energia Solar, Carregadores Elétricos e Subestações</h1>

      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`hs-slide${i === active ? ' is-active' : ''}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} de ${total}`}
          aria-hidden={i !== active}
        >
          <div className="hs-media">
            {s.type === 'video' ? (
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                muted
                loop
                playsInline
                autoPlay={i === 0}
                preload={i === 0 ? 'auto' : 'none'}
                poster={s.poster}
                aria-label={s.alt}
                style={{ objectPosition: s.position }}
              >
                <source src={s.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={s.src}
                alt={s.alt}
                loading={i <= 1 ? 'eager' : 'lazy'}
                style={{ objectPosition: s.position }}
              />
            )}
          </div>

          <div className="hs-content">
            <h2 className="hs-title">{s.title}</h2>
            <p className="hs-subtitle">{s.subtitle}</p>
            <a href="#payback" className="hs-btn" tabIndex={i === active ? 0 : -1}>
              SAIBA MAIS
              <svg viewBox="0 0 8 10" width="7" height="9" aria-hidden="true"><path d="M0 0l8 5-8 5z" fill="currentColor" /></svg>
            </a>
          </div>
        </div>
      ))}

      {/* Lateral esquerda — redes sociais */}
      <div className="hs-side hs-side--left">
        <span className="hs-side__label">REDES SOCIAIS</span>
        <span className="hs-side__line" aria-hidden="true" />
        <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d={SOCIAL_ICONS.instagram} /></svg>
        </a>
        <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d={SOCIAL_ICONS.facebook} /></svg>
        </a>
        <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d={SOCIAL_ICONS.whatsapp} /></svg>
        </a>
      </div>

      {/* Lateral direita — PREV / NEXT */}
      <div className="hs-side hs-side--right">
        <button type="button" className="hs-nav" onClick={() => go(-1)} aria-label="Slide anterior">PREV</button>
        <span className="hs-side__line" aria-hidden="true" />
        <button type="button" className="hs-nav" onClick={() => go(1)} aria-label="Próximo slide">NEXT</button>
      </div>

      {/* Contador + temporizador */}
      <div className="hs-counter" aria-live="polite">
        <span className="hs-counter__current">{pad(active + 1)}</span>
        <span className="hs-counter__bar" aria-hidden="true">
          <span key={active} className="hs-counter__fill" style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
        </span>
        <span className="hs-counter__total">{pad(total)}</span>
      </div>
    </section>
  );
}
