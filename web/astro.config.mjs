// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// PUBLIC_SITE_URL: URL pública del sitio (canonical y Open Graph).
// PUBLIC_BASE_PATH: subcarpeta donde se publica (en GitHub Pages, "/website").
const { PUBLIC_SITE_URL, PUBLIC_BASE_PATH } = loadEnv(
  import.meta.env?.MODE ?? 'production',
  new URL('.', import.meta.url).pathname,
  '',
);

export default defineConfig({
  site: PUBLIC_SITE_URL || undefined,
  base: PUBLIC_BASE_PATH || '/',
  output: 'static',
});
