# Portfólio

Site pessoal feito com Astro + Tailwind CSS.

## Rodando

```bash
pnpm install
pnpm dev
```

## Onde editar

- `src/data/site.ts`: nome, contato, experiência e stack
- `src/data/principios.ts`: itens da seção "Como trabalho"
- `src/styles/global.css`: tokens de cor (claro/escuro) e o efeito de marca-texto
- `astro.config.mjs`: domínio do site, usado no sitemap, no robots.txt e nas imagens de preview

As imagens de preview para redes sociais (`/og/*.png`) são geradas no build a partir de `src/lib/og.ts`.
