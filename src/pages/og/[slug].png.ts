import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOg } from '../../lib/og';
import { site } from '../../data/site';

// Uma imagem de preview (1200×630) por página: /og/index.png e /og/<projeto>.png
export const getStaticPaths: GetStaticPaths = async () => {
  const projetos = await getCollection('projetos');
  return [
    { params: { slug: 'index' }, props: { eyebrow: site.location, title: site.shortName, subtitle: site.tagline } },
    ...projetos.map((p) => ({
      params: { slug: p.id },
      props: { eyebrow: `Projeto · ${p.data.year} · ${p.data.status}`, title: p.data.title, subtitle: p.data.summary },
    })),
  ];
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props as Parameters<typeof renderOg>[0]);
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
