'use client';
import { useEffect, useRef } from 'react';
import { getUtmSuffix } from '@/lib/utm';
import { SOCIAL, SOCIAL_ICONS } from '@/lib/social';

type Props = {
  baseHref: string;
};

// Botões flutuantes sempre visíveis: Facebook, Instagram e WhatsApp.
export default function WhatsappFloat({ baseHref }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  // UTM suffix injection
  useEffect(() => {
    const suffix = getUtmSuffix();
    if (suffix && ref.current) {
      try {
        const url = new URL(ref.current.href);
        const text = url.searchParams.get('text') ?? '';
        url.searchParams.set('text', text + suffix);
        ref.current.href = url.toString();
      } catch {}
    }
  }, []);

  return (
    <div className="social-float">
      <a href={SOCIAL.facebook} className="social-float__btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Torreão Engenharia">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d={SOCIAL_ICONS.facebook} /></svg>
      </a>
      <a href={SOCIAL.instagram} className="social-float__btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Torreão Engenharia">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d={SOCIAL_ICONS.instagram} /></svg>
      </a>
      <a ref={ref} href={baseHref} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true"><path d={SOCIAL_ICONS.whatsapp} /></svg>
      </a>
    </div>
  );
}
