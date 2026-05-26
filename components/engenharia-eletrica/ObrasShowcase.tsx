'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './obras-showcase.css';

export type SlideImage = { src: string; alt: string };

type ObrasShowcaseProps = {
  images: SlideImage[];
  mode?: 'slideshow' | 'video';
  videoSrc?: string;
  intervalMs?: number;
};

export default function ObrasShowcase({
  images,
  mode = 'slideshow',
  videoSrc,
  intervalMs = 5000,
}: ObrasShowcaseProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  useEffect(() => {
    if (mode !== 'slideshow' || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = setInterval(next, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode, paused, intervalMs, next]);

  if (mode === 'video' && videoSrc) {
    return (
      <div className="obras-showcase obras-showcase--video">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="obras-video"
          aria-label="Vídeo de obras realizadas"
        />
      </div>
    );
  }

  return (
    <section
      className="obras-showcase"
      role="region"
      aria-label="Galeria de obras realizadas"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="obras-slides">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`obras-slide${i === current ? ' obras-slide--active' : ''}`}
            aria-hidden={i !== current}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="obras-img"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="obras-dots" role="tablist" aria-label="Navegar entre obras">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Ver obra ${i + 1} de ${images.length}`}
              className={`obras-dot${i === current ? ' obras-dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
