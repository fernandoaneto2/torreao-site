'use client';
import { useEffect, useRef, useState } from 'react';
import ContactForm from './ContactForm';

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handler = () => {
      triggerRef.current = document.activeElement as HTMLElement;
      setOpen(true);
    };
    window.addEventListener('modal:open', handler);
    return () => window.removeEventListener('modal:open', handler);
  }, []);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    } else {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div
      className={`modal${open ? ' active' : ''}`}
      id="ctaModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="modal-content">
        <button ref={closeRef} className="modal-close" aria-label="Fechar modal" onClick={() => setOpen(false)}>
          &times;
        </button>
        <h2 id="modalTitle">Solicitar Orçamento Gratuito</h2>
        <ContactForm
          formId="modalForm"
          textareaPlaceholder="Descreva seu projeto..."
          onSuccess={() => setTimeout(() => setOpen(false), 1500)}
        />
      </div>
    </div>
  );
}
