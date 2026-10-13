// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO(lucas): trocar pelo domínio final antes de publicar
  site: 'https://lucasdalla.vercel.app',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/curriculo') })],
  vite: {
    plugins: [tailwindcss()],
    // Bibliotecas nativas usadas só no build das imagens de preview
    ssr: { external: ['@resvg/resvg-js'] },
  },
});
