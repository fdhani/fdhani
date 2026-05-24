// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to Vercel at the project's root path.
// Once a custom domain is wired up, set `site` so canonical URLs,
// sitemap entries, and OG tags resolve correctly.
export default defineConfig({
  // site: 'https://your-domain.com',
  trailingSlash: 'ignore',
  build: {
    assets: '_astro',
  },
});
