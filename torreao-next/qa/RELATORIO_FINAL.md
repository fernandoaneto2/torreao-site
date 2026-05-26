# Relatório Final de QA — Torreão Engenharia

**Data:** 25 de maio de 2026  
**Site:** https://torreaoengenharia.com.br  
**Stack:** Next.js 16 · App Router · TypeScript · CSS puro

---

## Resultado Final

| Fase | Descrição | Status |
|------|-----------|--------|
| Fase 1 | Setup Playwright + axe-core | ✅ Concluída |
| Fase 2 | Inventário de rotas, componentes e interativos | ✅ Concluída |
| Fase 3 | Execução automatizada (9 rotas × 8 viewports) | ✅ Concluída |
| Fase 4–5 | Auditoria manual de código + relatório consolidado | ✅ Concluída |
| Fase A | Correções 🟢 auto-corrigíveis | ✅ Aplicadas |
| Fase B | Correções 🟠 altas (`<a>` → `<Link>`) | ✅ Aplicadas |
| Fase C | Correções 🟡 médias (contraste + modal) | ✅ Aplicadas |
| Fase 8 | Re-execução do audit para validar fixes | ✅ **216/216 testes passaram** |

---

## Cobertura da Auditoria

**Rotas testadas:** 9  
**Viewports:** 8 (mobile 360/390/412 · tablet 768/820 · desktop 1280/1440/1920)  
**Suítes por rota:** 3 (screenshot + scroll horizontal · axe WCAG 2.1 AA · elementos interativos)  
**Total de testes:** 216 → **216 passed · 0 failed**

---

## Correções Aplicadas

### 🟢 Fase A — Auto-corrigíveis (sem aprovação)

| ID | Problema | Arquivo | Correção |
|----|----------|---------|----------|
| A-01a | Labels ausentes nos inputs do `ContactForm` | `components/ContactForm.tsx` | Adicionados `<label htmlFor>` com classe `.sr-only` |
| A-01b | Classe `.sr-only` ausente no CSS global | `app/globals.css` | Adicionada regra `.sr-only` (padrão WCAG visually-hidden) |
| A-01c | Links WhatsApp do `Footer` sem `rel="noreferrer"` | `components/Footer.tsx` | Corrigido para `rel="noopener noreferrer"` em ambos |
| A-01d | `WhatsappFloat` com `rel` incompleto | `components/WhatsappFloat.tsx` | Corrigido para `rel="noopener noreferrer"` |
| A-01e | Import `Navbar` não utilizado em `privacidade` | `app/privacidade/page.tsx` | Removido |
| A-01f | Variável `_ts` flagada como não utilizada | `lib/utm.ts` | Renomeada para `_` |
| A-01g | ESLint: `no-unused-vars` sem suporte a `_` prefix | `eslint.config.mjs` | Adicionado `varsIgnorePattern: '^_'` |
| A-01h | `key` não único no loop de logos (marquee) | `app/page.tsx` | Alterado para `key={\`${logo.src}-${i}\`}` |
| A-01i | `.gitignore` não ignorava relatórios de QA | `.gitignore` | Adicionados `/qa/reports/`, `/test-results/`, `/playwright-report/` |

### 🟠 Fase B — Altos: `<a>` → `<Link>` para rotas internas

| Arquivo | Link corrigido |
|---------|---------------|
| `app/orcamento/page.tsx` | Footer logo link |
| `app/privacidade/page.tsx` | Logo, CTA "Solicitar Orçamento", "Voltar ao site" |
| `app/servicos/fotovoltaica/page.tsx` | "← Voltar aos serviços" |
| `app/servicos/carregadores-eletricos/page.tsx` | "← Voltar aos serviços" |
| `app/servicos/manutencao-eletrica/page.tsx` | "← Voltar aos serviços" |
| `app/servicos/projetos-eletricos/page.tsx` | "← Voltar aos serviços" |
| `app/servicos/subestacoes-geradores/page.tsx` | "← Voltar aos serviços" |
| `app/servicos/vigilancia/page.tsx` | "← Voltar aos serviços" |

### 🟡 Fase C — Médios: Contraste e Acessibilidade de Modal

| ID | Problema | Arquivo | Antes | Depois | Razão (WCAG) |
|----|----------|---------|-------|--------|--------------|
| A-02 | `.form-disclaimer` contraste insuficiente | `app/globals.css` | `#999999` / `#f5f5f5` → 2.61:1 | `#666666` → 5.74:1 | 1.4.3 AA |
| A-03 | `.orc-wa-btn` contraste insuficiente | `app/orcamento/orcamento.css` | `#fff` / `#25d366` → 1.98:1 | `#fff` / `#0f7838` → 5.07:1 | 1.4.3 AA |
| A-04 | `.updated` (privacidade) contraste insuficiente | `app/privacidade/privacidade.css` | `#999999` / `#ffffff` → 2.84:1 | `#666666` → 5.74:1 | 1.4.3 AA |
| A-05 | `.sp-entrega-card > p` contraste insuficiente | `app/servicos/servicos-layout.css` | `#888` / `#fff` → 3.54:1 | `#666` → 5.74:1 | 1.4.3 AA |
| A-06 | `ContactModal` sem gerenciamento de foco ao abrir | `components/ContactModal.tsx` | Foco permanecia no botão de trigger | `closeRef.current?.focus()` ao abrir | 2.4.3 |
| A-07 | `ContactModal` sem handler de tecla ESC | `components/ContactModal.tsx` | ESC não fechava o modal | `document.addEventListener('keydown', onKeyDown)` | 2.1.2 |
| A-08 | Cookie banner: link "Saiba mais" contraste insuficiente | `app/globals.css` | `#a0424d` / `#0e0e10` → 2.85:1 | `#e07a84` → 6.18:1 | 1.4.3 AA |

*A-08 foi descoberto na re-execução (Fase 8) e corrigido imediatamente.*

---

## Melhorias Adicionais ao `ContactModal`

Além das correções A-06 e A-07, o modal recebeu:
- `role="dialog"` + `aria-modal="true"` + `aria-labelledby="modalTitle"`
- `id="modalTitle"` no `<h2>` para associação semântica
- Restauração de foco no elemento que abriu o modal ao fechar (`triggerRef`)

---

## Itens Pendentes (decisão do cliente)

| Item | Prioridade | Descrição |
|------|-----------|-----------|
| `metadataBase` | 🔵 Baixa | Configurar com o domínio de produção em `app/layout.tsx` |
| `<img>` → `next/image` | 🔵 Baixa | Migrar imagens para o componente otimizador do Next.js |
| `robots.txt` + `sitemap.xml` | 🔵 Baixa | Gerar via `app/robots.ts` e `app/sitemap.ts` do Next.js |
| Lighthouse performance | 🔵 Baixa | Exige servidor de produção (não funciona com `npm run dev`) |

---

## Resumo Executivo

O site Torreão Engenharia passou por auditoria completa cobrindo **acessibilidade WCAG 2.1 AA**, **qualidade de código TypeScript/React**, **links internos**, **contraste de cores** e **interatividade de teclado**. Todas as violações críticas e sérias identificadas foram corrigidas. O resultado final é **216/216 testes automatizados passando** em 9 rotas × 8 viewports.
