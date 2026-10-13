import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { site } from '../data/site';

const require = createRequire(import.meta.url);
const fontFile = (weight: number) =>
  readFile(require.resolve(`@fontsource/schibsted-grotesk/files/schibsted-grotesk-latin-${weight}-normal.woff`));
// Lidas uma vez e reaproveitadas em todas as imagens
const fonts = Promise.all([fontFile(400), fontFile(800)]);

// Mesmos tokens do tema escuro em global.css
const c = { bg: '#101214', ink: '#e6e8eb', muted: '#8e95a0', line: '#262a2f', hl: 'rgba(64,201,160,0.38)' };

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export async function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const tree = h(
    'div',
    {
      width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: '72px 80px', background: c.bg, color: c.ink, fontFamily: 'Schibsted',
    },
    [
      h('div', { fontSize: 24, color: c.muted, letterSpacing: 2, textTransform: 'uppercase' }, eyebrow),
      h('div', { display: 'flex', flexDirection: 'column', gap: 24 }, [
        // Assinatura: título com marca-texto
        h('div', { display: 'flex' }, [
          h('div', {
            fontSize: title.length > 24 ? 64 : 84, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05,
            backgroundImage: `linear-gradient(${c.hl}, ${c.hl})`, backgroundSize: '100% 55%',
            backgroundPosition: '0 90%', backgroundRepeat: 'no-repeat', padding: '0 8px', borderRadius: 10,
          }, title),
        ]),
        h('div', { fontSize: 32, color: c.muted, lineHeight: 1.4, maxWidth: 980 }, subtitle),
      ]),
      h('div', { display: 'flex', width: '100%', justifyContent: 'space-between', borderTop: `2px solid ${c.line}`, paddingTop: 28, fontSize: 24, color: c.muted }, [
        h('span', {}, site.name),
        h('span', {}, site.role),
      ]),
    ],
  );

  const [regular, bold] = await fonts;
  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Schibsted', data: regular, weight: 400, style: 'normal' },
      { name: 'Schibsted', data: bold, weight: 800, style: 'normal' },
    ],
  });
  return new Resvg(svg).render().asPng();
}
