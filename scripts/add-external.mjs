#!/usr/bin/env node
// Scaffold a blog entry for an external article.
//
//   npm run add-external <url> [-- --tags=tag1,tag2] [-- --dry-run]
//
// Fetches the URL with a Twitterbot UA (which Medium and most platforms
// whitelist for unfurls), parses OpenGraph tags, and writes
// src/content/blog/<slug>.md with the frontmatter pre-filled. Falls back
// to blank fields if the fetch fails or a tag is missing.

import { writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BLOG_DIR = resolve(ROOT, 'src/content/blog');

const args = process.argv.slice(2);
const flags = { tags: [], dryRun: false };
let url;
for (const arg of args) {
  if (arg === '--dry-run') flags.dryRun = true;
  else if (arg.startsWith('--tags=')) {
    flags.tags = arg.slice('--tags='.length).split(',').map((s) => s.trim()).filter(Boolean);
  } else if (!url) {
    url = arg;
  }
}

if (!url) {
  console.error('Usage: npm run add-external <url> [-- --tags=tag1,tag2] [-- --dry-run]');
  process.exit(1);
}

try {
  new URL(url);
} catch {
  console.error(`Not a valid URL: ${url}`);
  process.exit(1);
}

const slug = deriveSlug(url);
const filePath = resolve(BLOG_DIR, `${slug}.md`);

if (!flags.dryRun && (await exists(filePath))) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

const meta = await fetchMeta(url);
const frontmatter = buildFrontmatter({ url, meta, tags: flags.tags });

if (flags.dryRun) {
  console.log(`# would write ${filePath}\n`);
  console.log(frontmatter);
  process.exit(0);
}

await writeFile(filePath, frontmatter, 'utf8');
console.log(`Created ${filePath}`);
if (!meta.ok) {
  console.log('  (metadata fetch failed; fields left blank — fill them in manually)');
} else {
  const missing = ['title', 'summary', 'date', 'heroImage'].filter((k) => !meta[k]);
  if (missing.length) {
    console.log(`  (missing from OG tags: ${missing.join(', ')} — fill them in manually)`);
  }
}

// ---------- helpers ----------

function deriveSlug(rawUrl) {
  const { pathname } = new URL(rawUrl);
  const last = pathname.split('/').filter(Boolean).pop() ?? 'untitled';
  return last
    .replace(/\.[a-z0-9]+$/i, '')        // strip file extension if any
    .replace(/-[0-9a-f]{8,}$/i, '')      // strip Medium-style hex post ID suffix
    .toLowerCase();
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function fetchMeta(target) {
  try {
    const res = await fetch(target, {
      redirect: 'follow',
      headers: {
        // Medium and most sites whitelist Twitter's unfurl crawler.
        'User-Agent': 'Twitterbot/1.0',
        Accept: 'text/html,application/xhtml+xml',
      },
    });
    if (!res.ok) {
      console.warn(`fetch returned HTTP ${res.status}`);
      return { ok: false };
    }
    const html = await res.text();
    return {
      ok: true,
      title: extractMeta(html, 'og:title') ?? extractTitleTag(html),
      summary: extractMeta(html, 'og:description'),
      heroImage: extractMeta(html, 'og:image'),
      date: normalizeDate(extractMeta(html, 'article:published_time')),
    };
  } catch (err) {
    console.warn(`fetch failed: ${err.message}`);
    return { ok: false };
  }
}

function extractMeta(html, prop) {
  // Tolerate both attribute orderings and single/double quotes.
  const patterns = [
    new RegExp(`<meta[^>]*property=["']${prop}["'][^>]*content=["']([^"']+)["']`, 'i'),
    new RegExp(`<meta[^>]*content=["']([^"']+)["'][^>]*property=["']${prop}["']`, 'i'),
    new RegExp(`<meta[^>]*name=["']${prop}["'][^>]*content=["']([^"']+)["']`, 'i'),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return decodeEntities(m[1]);
  }
  return undefined;
}

function extractTitleTag(html) {
  const m = html.match(/<title>([^<]+)<\/title>/i);
  return m ? decodeEntities(m[1].trim()) : undefined;
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'");
}

function normalizeDate(iso) {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

function buildFrontmatter({ url, meta, tags }) {
  const lines = ['---'];
  lines.push(`title: ${yamlString(meta.title ?? '')}`);
  lines.push(`summary: ${yamlString(meta.summary ?? '')}`);
  lines.push(`date: ${meta.date ?? new Date().toISOString().slice(0, 10)}`);
  if (meta.heroImage) {
    lines.push(`heroImage: ${yamlString(meta.heroImage)}`);
  } else {
    lines.push(`# heroImage: ''`);
  }
  lines.push(`externalUrl: ${yamlString(url)}`);
  lines.push(`tags: [${tags.map(yamlString).join(', ')}]`);
  lines.push('---', '');
  return lines.join('\n');
}

function yamlString(s) {
  return `'${String(s).replace(/'/g, "''")}'`;
}
