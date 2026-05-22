// @ts-check
import { defineConfig } from 'astro/config';

// Project lives at https://fdhani.github.io/fdhani/
export default defineConfig({
  site: 'https://fdhani.github.io',
  base: '/fdhani',
  trailingSlash: 'ignore',
  build: {
    assets: '_astro',
  },
});
