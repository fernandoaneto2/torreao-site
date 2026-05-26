'use client';
import { useState } from 'react';
import { getUtmSuffix } from '@/lib/utm';

const WA_NUMBER = '5511922763114';

const SERVICES = [
  'Segurança Elétrica / Laudos',
  'Geração Fotovoltaica',
  'Projetos de Engenharia',
  'Carregadores Elétricos',
  'Manutenção e Construção',
  'Subestações e Geradores',
  'Sistemas de Vigilância',
  'Outro',
];

function maskPhone(v: string): string {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (!d) return '';
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

interface Props {
  formId: string;
  submitLabel?: string;
  textareaPlaceholder?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ formId, submitLabel = 'FALAR CONOSCO', textareaPlaceholder, onSuccess }: Props) {
  const [fields, setFields] = useState({ nome: '', telefone: '', email: '', servico: '', mensagem: '' });

  function set(k: keyof typeof fields, v: string) {
    setFields((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const suffix = getUtmSuffix();
    const msg =
      `Olá! Gostaria de um orçamento.\n\n` +
      `Nome: ${fields.nome}\nTelefone: ${fields.telefone}\nE-mail: ${fields.email}\nServiço: ${fields.servico}\n\nProjeto:\n${fields.mensagem}` +
      suffix;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    const toast = document.createElement('div');
    toast.textContent = 'Mensagem enviada! Abrindo WhatsApp...';
    toast.style.cssText =
      'position:fixed;top:80px;right:20px;background:#8B3A3A;color:#fff;padding:1rem 1.5rem;border-radius:4px;box-shadow:0 5px 15px rgba(139,58,58,.3);z-index:3000;font-size:.95rem;font-weight:600;';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
    setFields({ nome: '', telefone: '', email: '', servico: '', mensagem: '' });
    onSuccess?.();
  }

  return (
    <form className="contact-form" id={formId} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={`${formId}-nome`} className="sr-only">Nome Completo</label>
        <input id={`${formId}-nome`} type="text" name="nome" placeholder="Nome Completo *" required value={fields.nome} onChange={(e) => set('nome', e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor={`${formId}-telefone`} className="sr-only">Telefone / WhatsApp</label>
        <input id={`${formId}-telefone`} type="tel" name="telefone" placeholder="Telefone / WhatsApp *" required value={fields.telefone} onChange={(e) => set('telefone', maskPhone(e.target.value))} />
      </div>
      <div className="form-group">
        <label htmlFor={`${formId}-email`} className="sr-only">E-mail</label>
        <input id={`${formId}-email`} type="email" name="email" placeholder="E-mail *" required value={fields.email} onChange={(e) => set('email', e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor={`${formId}-servico`} className="sr-only">Serviço de interesse</label>
        <select id={`${formId}-servico`} name="servico" required value={fields.servico} onChange={(e) => set('servico', e.target.value)}>
          <option value="">Selecione um serviço</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor={`${formId}-mensagem`} className="sr-only">Descrição do projeto</label>
        <textarea
          id={`${formId}-mensagem`}
          name="mensagem"
          placeholder={textareaPlaceholder ?? 'Descreva seu projeto: localização, porte, prazo estimado e qualquer detalhe relevante...'}
          rows={5}
          required
          value={fields.mensagem}
          onChange={(e) => set('mensagem', e.target.value)}
        />
      </div>
      <input type="hidden" name="utm_source" data-utm="utm_source" />
      <input type="hidden" name="utm_medium" data-utm="utm_medium" />
      <input type="hidden" name="utm_campaign" data-utm="utm_campaign" />
      <button type="submit" className="btn-whatsapp">{submitLabel}</button>
      <p className="form-disclaimer">
        Seus dados serão utilizados exclusivamente para contato comercial, conforme nossa{' '}
        <a href="/privacidade">Política de Privacidade</a> e a Lei 13.709/2018 (LGPD). Não enviamos spam.
      </p>
    </form>
  );
}
