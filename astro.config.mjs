import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://modusdata.ch',
  base: '/',
  outDir: './docs',
  output: 'static',
  redirects: {
    '/llm': '/portfolio/self-hosted-llms/',
  },
});
