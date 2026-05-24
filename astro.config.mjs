// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fdhani.com',
  trailingSlash: 'ignore',
  build: {
    assets: '_astro',
  },
});
