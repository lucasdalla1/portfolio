import type { APIRoute } from 'astro';

// Gerado a partir de `site` (astro.config.mjs) para não divergir do domínio
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
