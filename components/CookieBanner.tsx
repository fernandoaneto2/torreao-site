'use client';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieAccepted')) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookieAccepted', '1');
    setVisible(false);
  }

  return (
    <div
      className={`cookie-banner${visible ? ' visible' : ''}`}
      id="cookieBanner"
      role="region"
      aria-label="Aviso de cookies"
    >
      <p>
        Este site não utiliza cookies de rastreamento de terceiros. Apenas cookies funcionais
        essenciais são utilizados. <a href="/privacidade">Saiba mais</a>.
      </p>
      <button className="cookie-accept" onClick={accept}>Aceitar</button>
    </div>
  );
}
