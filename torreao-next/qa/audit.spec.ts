import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

const ROUTES = [
  { name: 'home',                   path: '/' },
  { name: 'orcamento',              path: '/orcamento' },
  { name: 'privacidade',            path: '/privacidade' },
  { name: 'servicos-projetos',      path: '/servicos/projetos-eletricos' },
  { name: 'servicos-manutencao',    path: '/servicos/manutencao-eletrica' },
  { name: 'servicos-fotovoltaica',  path: '/servicos/fotovoltaica' },
  { name: 'servicos-carregadores',  path: '/servicos/carregadores-eletricos' },
  { name: 'servicos-subestacoes',   path: '/servicos/subestacoes-geradores' },
  { name: 'servicos-vigilancia',    path: '/servicos/vigilancia' },
];

const screenshotDir = path.join(__dirname, 'reports', 'screenshots');
const axeDir = path.join(__dirname, 'reports', 'axe');

function ensureDirs() {
  [screenshotDir, axeDir].forEach((d) => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });
}

for (const route of ROUTES) {
  test.describe(`[${route.name}] ${route.path}`, () => {

    test('screenshot + scroll horizontal', async ({ page }, testInfo) => {
      ensureDirs();
      const viewport = testInfo.project.name;
      const consoleErrors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });
      page.on('pageerror', (err) => consoleErrors.push(`[pageerror] ${err.message}`));

      const response = await page.goto(route.path, { waitUntil: 'networkidle' });
      expect(response?.status(), `${route.path} retornou status != 200`).toBe(200);

      // Screenshot
      const screenshotName = `${route.name}__${viewport}.png`;
      await page.screenshot({
        path: path.join(screenshotDir, screenshotName),
        fullPage: true,
      });

      // Scroll horizontal
      const scrollWidth: number = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth: number = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth, `Scroll horizontal em ${route.path} @ ${viewport}: scrollWidth=${scrollWidth} > clientWidth=${clientWidth}`).toBeLessThanOrEqual(clientWidth + 1);

      // Console errors
      expect(consoleErrors, `Erros de console em ${route.path}: ${consoleErrors.join(' | ')}`).toHaveLength(0);
    });

    test('axe WCAG 2.1 AA', async ({ page }, testInfo) => {
      ensureDirs();
      const viewport = testInfo.project.name;

      await page.goto(route.path, { waitUntil: 'networkidle' });

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      // Salvar resultado completo
      const axeFile = path.join(axeDir, `${route.name}__${viewport}.json`);
      fs.writeFileSync(axeFile, JSON.stringify(results.violations, null, 2));

      const summary = results.violations.map(
        (v) => `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} nó(s))`
      );

      expect(
        results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious'),
        `Violações axe críticas/sérias em ${route.path} @ ${viewport}:\n${summary.join('\n')}`
      ).toHaveLength(0);
    });

    test('elementos interativos', async ({ page }) => {
      await page.goto(route.path, { waitUntil: 'networkidle' });

      // Todos os links internos devem ser acessíveis (não 404)
      const internalLinks = await page.$$eval('a[href]', (anchors) =>
        anchors
          .map((a) => (a as HTMLAnchorElement).getAttribute('href') ?? '')
          .filter((href) => href.startsWith('/') && !href.startsWith('//#'))
      );

      for (const href of [...new Set(internalLinks)]) {
        const res = await page.request.get(`http://localhost:3000${href}`);
        expect(res.status(), `Link interno ${href} retornou ${res.status()}`).not.toBe(404);
      }

      // Links externos com target="_blank" devem ter rel contendo noopener
      const unsafeExternalLinks = await page.$$eval('a[target="_blank"]', (anchors) =>
        anchors
          .filter((a) => {
            const rel = (a as HTMLAnchorElement).rel ?? '';
            return !rel.includes('noopener');
          })
          .map((a) => (a as HTMLAnchorElement).href)
      );
      expect(unsafeExternalLinks, `Links externos sem rel=noopener: ${unsafeExternalLinks.join(', ')}`).toHaveLength(0);

      // Imagens sem alt
      const imgsWithoutAlt = await page.$$eval('img', (imgs) =>
        imgs
          .filter((img) => img.getAttribute('alt') === null)
          .map((img) => img.getAttribute('src') ?? 'sem-src')
      );
      expect(imgsWithoutAlt, `Imagens sem atributo alt: ${imgsWithoutAlt.join(', ')}`).toHaveLength(0);

      // Botões sem texto acessível
      const inaccessibleButtons = await page.$$eval('button', (btns) =>
        btns
          .filter((btn) => {
            const label = btn.getAttribute('aria-label') ?? '';
            const text = btn.textContent?.trim() ?? '';
            return !label && !text;
          })
          .map((btn) => btn.outerHTML.slice(0, 120))
      );
      expect(inaccessibleButtons, `Botões sem texto/aria-label: ${inaccessibleButtons.join(' | ')}`).toHaveLength(0);
    });

  });
}
