// Build-time OpenGraph fetcher. Used by project pages to resolve a list of
// reference URLs into { url, title, image } cards. Runs during `astro build`
// (and dev rebuilds). Failures degrade to a hostname-only card.
//
// Parsing mirrors scripts/add-external.mjs so the two stay in sync.

export type OgMeta = {
  url: string;
  title?: string;
  image?: string;
  hostname: string;
};

const cache = new Map<string, Promise<OgMeta>>();
const FETCH_TIMEOUT_MS = 5000;

export function fetchOg(url: string): Promise<OgMeta> {
  const cached = cache.get(url);
  if (cached) return cached;
  const p = doFetch(url);
  cache.set(url, p);
  return p;
}

async function doFetch(url: string): Promise<OgMeta> {
  const hostname = safeHostname(url);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Twitterbot/1.0',
        Accept: 'text/html,application/xhtml+xml',
      },
    });
    if (!res.ok) return { url, hostname };
    const html = await res.text();
    return {
      url,
      hostname,
      title: extractMeta(html, 'og:title') ?? extractTitleTag(html),
      image: extractMeta(html, 'og:image'),
    };
  } catch {
    return { url, hostname };
  } finally {
    clearTimeout(timer);
  }
}

function safeHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function extractMeta(html: string, prop: string): string | undefined {
  const patterns = [
    new RegExp(
      `<meta[^>]*property=["']${prop}["'][^>]*content=["']([^"']+)["']`,
      'i',
    ),
    new RegExp(
      `<meta[^>]*content=["']([^"']+)["'][^>]*property=["']${prop}["']`,
      'i',
    ),
    new RegExp(
      `<meta[^>]*name=["']${prop}["'][^>]*content=["']([^"']+)["']`,
      'i',
    ),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return decodeEntities(m[1]);
  }
  return undefined;
}

function extractTitleTag(html: string): string | undefined {
  const m = html.match(/<title>([^<]+)<\/title>/i);
  return m ? decodeEntities(m[1].trim()) : undefined;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'");
}
