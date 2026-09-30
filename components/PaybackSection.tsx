'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import ModalTriggerButton from './ModalTriggerButton';
import { ABRIR_PROJETO_EVENT, PROJETOS_PAYBACK, type Projeto } from '@/lib/projetos';
import './payback-section.css';

function Tag({ categoria }: { categoria: Projeto['categoria'] }) {
  return (
    <span className={`payback-tag${categoria === 'Carregador Elétrico' ? ' payback-tag--ev' : ''}`}>{categoria}</span>
  );
}

export default function PaybackSection() {
  const [aberto, setAberto] = useState<Projeto | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const abrir = useCallback((p: Projeto) => {
    triggerRef.current = document.activeElement as HTMLElement;
    setAberto(p);
    history.replaceState(null, '', `#projeto-${p.slug}`);
  }, []);

  const fechar = useCallback(() => {
    setAberto(null);
    history.replaceState(null, '', location.pathname + location.search);
  }, []);

  // Abre um card pelo slug: rola até ele e amplia (usado pelo "Saiba mais" do hero e por links #projeto-<slug>)
  const abrirPorSlug = useCallback(
    (slug: string) => {
      const p = PROJETOS_PAYBACK.find((x) => x.slug === slug);
      if (!p) {
        // projeto ainda sem card (aguardando dados): leva para o início da seção
        document.getElementById('payback')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      document.getElementById(`projeto-${slug}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.setTimeout(() => abrir(p), 450);
    },
    [abrir],
  );

  useEffect(() => {
    const onAbrir = (e: Event) => abrirPorSlug((e as CustomEvent<string>).detail);
    const fromHash = () => {
      const h = location.hash;
      if (h.startsWith('#projeto-')) abrirPorSlug(h.slice('#projeto-'.length));
    };
    window.addEventListener(ABRIR_PROJETO_EVENT, onAbrir);
    window.addEventListener('hashchange', fromHash);
    fromHash();
    return () => {
      window.removeEventListener(ABRIR_PROJETO_EVENT, onAbrir);
      window.removeEventListener('hashchange', fromHash);
    };
  }, [abrirPorSlug]);

  // Card ampliado: trava a rolagem, fecha com Esc e devolve o foco ao fechar
  useEffect(() => {
    if (!aberto) {
      triggerRef.current?.focus();
      triggerRef.current = null;
      return;
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') fechar(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [aberto, fechar]);

  return (
    <section id="payback" className="payback" aria-labelledby="payback-title">
      <div className="container">
        <p className="payback-eyebrow">RETORNO DO INVESTIMENTO</p>
        <h2 id="payback-title">Payback dos nossos projetos</h2>
        <p className="section-subtitle">
          Quanto nossos clientes economizam com energia solar e carregadores elétricos. Clique em um projeto para ver
          todos os detalhes.
        </p>

        <div className="payback-grid">
          {PROJETOS_PAYBACK.map((p) => (
            <button
              key={p.slug}
              id={`projeto-${p.slug}`}
              type="button"
              className="payback-card"
              onClick={() => abrir(p)}
              aria-haspopup="dialog"
            >
              <span className="payback-card__img">
                <img src={p.imagem} alt={p.alt} loading="lazy" />
                <Tag categoria={p.categoria} />
              </span>
              <span className="payback-card__body">
                <span className="payback-card__title">{p.titulo}</span>
                <span className="payback-card__subtitle">{p.subtitulo}</span>
                {p.destaques && (
                  <span className="payback-card__highlights">
                    {p.destaques.map((d) => (
                      <span key={d.label} className="payback-card__highlight">
                        <span>{d.label}</span>
                        <strong>{d.valor}</strong>
                      </span>
                    ))}
                  </span>
                )}
                <span className="payback-card__more">
                  Ver detalhes
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="payback-cta">
          <p>Quer saber em quanto tempo o seu projeto se paga? Nossos engenheiros avaliam no local — gratuito e sem compromisso.</p>
          <ModalTriggerButton className="btn-primary">AGENDAR AVALIAÇÃO GRATUITA</ModalTriggerButton>
        </div>
      </div>

      {/* Card ampliado */}
      <div
        className={`payback-modal${aberto ? ' is-open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) fechar(); }}
        aria-hidden={!aberto}
      >
        {aberto && (
          <div className="payback-modal__card" role="dialog" aria-modal="true" aria-labelledby="payback-modal-title">
            <button ref={closeRef} type="button" className="payback-modal__close" onClick={fechar} aria-label="Fechar detalhes do projeto">
              &times;
            </button>
            <div className="payback-modal__img">
              <img src={aberto.imagem} alt={aberto.alt} />
              <Tag categoria={aberto.categoria} />
            </div>
            <div className="payback-modal__body">
              <h3 id="payback-modal-title">{aberto.titulo}</h3>
              <p className="payback-modal__subtitle">{aberto.subtitulo}</p>
              <p className="payback-modal__desc">{aberto.descricao}</p>

              {aberto.dados ? (
                <dl className="payback-modal__stats">
                  {aberto.dados.map((d) => (
                    <div key={d.label}>
                      <dt>{d.label}</dt>
                      <dd>{d.valor}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="payback-modal__nodata">Os dados de geração e economia deste projeto serão publicados em breve.</p>
              )}
              {aberto.dados?.some((d) => /\d/.test(d.valor)) && (
                <p className="payback-modal__note">Valores estimados, informados no projeto.</p>
              )}

              <button
                type="button"
                className="payback-modal__cta"
                onClick={() => { fechar(); window.dispatchEvent(new Event('modal:open')); }}
              >
                QUERO UM PROJETO ASSIM — AVALIAÇÃO GRATUITA
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
