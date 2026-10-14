import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Gerado no build como /sitemap.xml (site exportado estaticamente).
// /privacidade fica de fora: a página é noindex.
export const dynamic = 'force-static';

const PAGINAS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/servicos/fotovoltaica', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/servicos/carregadores-eletricos', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/servicos/subestacoes-geradores', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/servicos/projetos-eletricos', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicos/manutencao-eletrica', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicos/vigilancia', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/orcamento', priority: 0.8, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGINAS.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
