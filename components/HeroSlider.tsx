'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import './hero-slider.css';

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
    position: '35% 60%',
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
];

const AUTOPLAY_MS = 7000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchX = useRef<number | null>(null);
  const total = SLIDES.length;

  const go = useCallback((dir: 1 | -1) => setActive((i) => (i + dir + total) % total), [total]);

  // Autoplay (reinicia a contagem a cada troca de slide)
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [active, paused, go]);

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
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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

      {/* Lateral esquerda — contato (no lugar de "Social Media" da referência) */}
      <div className="hs-side hs-side--left">
        <span className="hs-side__label">FALE CONOSCO</span>
        <span className="hs-side__line" aria-hidden="true" />
        <a href="https://wa.me/5511922763114?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20t%C3%A9cnica%20gratuita" target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2zm5.8 14.07c-.24.68-1.4 1.3-1.93 1.35-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.93-4.66-4.11-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.25-.27.54-.34.72-.34h.52c.17 0 .39-.06.61.46.23.54.77 1.87.84 2 .07.14.11.29.02.47-.09.18-.14.29-.27.45l-.41.47c-.14.14-.28.28-.12.56.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.27.14.43.11.59-.07.16-.18.68-.79.86-1.07.18-.27.36-.23.61-.14.25.09 1.58.75 1.85.88.27.14.45.2.52.32.07.11.07.66-.17 1.33z" /></svg>
        </a>
        <a href="tel:+5511922763114" aria-label="Telefone">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.35.03.74-.25 1.02L6.6 10.8z" /></svg>
        </a>
        <a href="mailto:torreaoengenharia@gmail.com" aria-label="E-mail">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
        </a>
      </div>

      {/* Lateral direita — PREV / NEXT */}
      <div className="hs-side hs-side--right">
        <button type="button" className="hs-nav" onClick={() => go(-1)} aria-label="Slide anterior">PREV</button>
        <span className="hs-side__line" aria-hidden="true" />
        <button type="button" className="hs-nav" onClick={() => go(1)} aria-label="Próximo slide">NEXT</button>
      </div>

      {/* Contador */}
      <div className="hs-counter" aria-live="polite">
        <span className="hs-counter__current">{pad(active + 1)}</span>
        <span className="hs-counter__bar" aria-hidden="true">
          <span key={active} className={`hs-counter__fill${paused ? ' is-paused' : ''}`} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
        </span>
        <span className="hs-counter__total">{pad(total)}</span>
      </div>
    </section>
  );
}
