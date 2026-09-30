'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import './hero-slider.css';
import { SOCIAL, SOCIAL_ICONS } from '@/lib/social';
import { ABRIR_PROJETO_EVENT, getProjeto } from '@/lib/projetos';

type Slide = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  /** Projeto da seção de payback: define título, subtítulo e o card aberto pelo "Saiba mais". */
  projeto: string;
  /** Enquadramento da mídia (CSS object-position). */
  position?: string;
};

// O vídeo mostra a mesma usina do projeto "usina-laje-concreto".
const SLIDES: Slide[] = [
  { type: 'video', src: '/videos/video-drone-solar.mp4', poster: '/images/hero-solar-poster.jpg', alt: 'Vista aérea de usina solar em solo', projeto: 'usina-laje-concreto', position: '35% 75%' },
  { type: 'image', src: '/images/hero/usina-solar-solo.jpg', alt: 'Usina fotovoltaica de 91 kWp em solo vista de drone', projeto: 'usina-91kwp', position: '55% 45%' },
  { type: 'image', src: '/images/hero/solar-residencial.jpg', alt: 'Painéis solares em telhado residencial ao entardecer', projeto: 'residencial-condominio', position: '50% 60%' },
  { type: 'image', src: '/images/hero/solar-telhado-comercial.jpg', alt: 'Painéis solares em cobertura de fibrocimento', projeto: 'cobertura-fibrocimento', position: '40% 50%' },
  { type: 'image', src: '/images/hero/carregador-veicular-garagem.jpg', alt: 'Carregador de veículo elétrico em garagem de condomínio', projeto: 'carregador-condominio', position: '45% 50%' },
  { type: 'image', src: '/images/hero/carregador-veicular-weg.jpg', alt: 'Carregador veicular WEG instalado na parede', projeto: 'carregador-estacionamento', position: '40% 50%' },
  { type: 'image', src: '/images/hero/carregador-veicular-volvo.jpg', alt: 'Carregador veicular Volvo Enel X com quadro de proteção dedicado', projeto: 'carregador-residencial', position: '32% 50%' },
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
            <h2 className="hs-title">{getProjeto(s.projeto).titulo}</h2>
            <p className="hs-subtitle">{getProjeto(s.projeto).subtitulo}</p>
            <a
              href={`#projeto-${s.projeto}`}
              className="hs-btn"
              tabIndex={i === active ? 0 : -1}
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent(ABRIR_PROJETO_EVENT, { detail: s.projeto }));
              }}
            >
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
