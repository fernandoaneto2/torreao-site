const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as const;
type UtmKey = (typeof UTM_KEYS)[number];
const STORAGE_KEY = 'torreao_utms';
const EXPIRY_DAYS = 30;

type StoredUtms = { ts: number } & Partial<Record<UtmKey, string>>;

export function saveUtms(): void {
  const params = new URLSearchParams(window.location.search);
  if (!UTM_KEYS.some((k) => params.get(k))) return;
  const data: StoredUtms = { ts: Date.now() };
  UTM_KEYS.forEach((k) => { data[k] = params.get(k) ?? ''; });
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

export function getUtms(): Partial<Record<UtmKey, string>> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw) as StoredUtms;
    if ((Date.now() - data.ts) / 864e5 > EXPIRY_DAYS) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    const { ts: _, ...rest } = data;
    return rest;
  } catch { return {}; }
}

export function getUtmSuffix(): string {
  const u = getUtms();
  const parts: string[] = [];
  if (u.utm_source) parts.push('Fonte: ' + u.utm_source);
  if (u.utm_campaign) parts.push('Campanha: ' + u.utm_campaign);
  if (u.utm_medium) parts.push('Meio: ' + u.utm_medium);
  return parts.length ? '\n\n[Origem: ' + parts.join(' | ') + ']' : '';
}

export function populateUtmFields(): void {
  const u = getUtms();
  document.querySelectorAll<HTMLInputElement>('[data-utm]').forEach((el) => {
    const key = el.getAttribute('data-utm') as UtmKey | null;
    if (key && u[key]) el.value = u[key]!;
  });
}
