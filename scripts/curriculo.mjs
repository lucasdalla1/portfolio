// Gera public/curriculo.pdf a partir da página /curriculo/ já construída em dist/.
// Uso: pnpm curriculo (roda o build antes).
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { chromium } from 'playwright';

const dist = new URL('../dist/', import.meta.url).pathname;
const saida = new URL('../public/curriculo.pdf', import.meta.url).pathname;
const origem = 'http://curriculo.local';
const tipos = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };

const browser = await chromium.launch();
const page = await browser.newPage();

// Serve os arquivos de dist/ sem precisar de servidor
await page.route(`${origem}/**`, async (route) => {
  let caminho = decodeURIComponent(new URL(route.request().url()).pathname);
  if (caminho.endsWith('/')) caminho += 'index.html';
  try {
    const body = await readFile(join(dist, caminho));
    await route.fulfill({ body, contentType: tipos[extname(caminho)] ?? 'application/octet-stream' });
  } catch {
    await route.fulfill({ status: 404 });
  }
});

await page.goto(`${origem}/curriculo/`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: saida, format: 'A4', printBackground: true, preferCSSPageSize: true });

await browser.close();
console.log(`PDF gerado em public/curriculo.pdf`);
