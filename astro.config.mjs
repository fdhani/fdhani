// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fdhani.vercel.app',
  trailingSlash: 'ignore',
  build: {
    assets: '_astro',
  },
});
