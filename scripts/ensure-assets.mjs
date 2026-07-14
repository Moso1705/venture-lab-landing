/**
 * Recreate binary public assets when they are missing from the file tree.
 * Needed because MCP/source-only deploys to Vercel cannot carry binaries;
 * git checkouts and local dev already have the real files, so this no-ops.
 */
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fontsDir = join(root, 'public/fonts');
const ogPath = join(root, 'public/og.png');
const ogB64Path = join(root, 'scripts/og.png.b64');

const GOOGLE_CSS =
  'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100..1000&family=DM+Mono:wght@400;500&display=swap';
// A Chrome UA makes the API return woff2 sources.
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const fontFile = (family, weight, style) =>
  `${family.replaceAll(' ', '')}-${weight.replaceAll(' ', '-')}-${style}.woff2`;

async function ensureFonts() {
  const expected = [
    'DMSans-100-1000-normal.woff2',
    'DMMono-400-normal.woff2',
    'DMMono-500-normal.woff2',
  ];
  if (expected.every((f) => existsSync(join(fontsDir, f)))) return;

  const res = await fetch(GOOGLE_CSS, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Google Fonts CSS request failed: ${res.status}. Fonts are missing and cannot be restored.`);
  const css = await res.text();
  await mkdir(fontsDir, { recursive: true });

  const blocks = css.matchAll(/\/\* (\w[\w-]*) \*\/\s*@font-face \{([^}]*)\}/g);
  for (const [, subset, body] of blocks) {
    if (subset !== 'latin') continue;
    const family = body.match(/font-family: '([^']+)'/)[1];
    const style = body.match(/font-style: (\w+)/)[1];
    const weight = body.match(/font-weight: ([\d ]+)/)[1].trim();
    const url = body.match(/url\((https:[^)]+\.woff2)\)/)[1];
    const name = fontFile(family, weight, style);
    if (!expected.includes(name) || existsSync(join(fontsDir, name))) continue;
    const font = await fetch(url, { headers: { 'User-Agent': UA } });
    if (!font.ok) throw new Error(`Font download failed for ${name}: ${font.status}`);
    await writeFile(join(fontsDir, name), Buffer.from(await font.arrayBuffer()));
    console.log(`restored ${name}`);
  }

  const missing = expected.filter((f) => !existsSync(join(fontsDir, f)));
  if (missing.length) throw new Error(`Fonts still missing after restore: ${missing.join(', ')}`);
}

async function ensureOgImage() {
  if (existsSync(ogPath)) return;
  if (existsSync(ogB64Path)) {
    const b64 = (await readFile(ogB64Path, 'utf8')).replace(/\s/g, '');
    await writeFile(ogPath, Buffer.from(b64, 'base64'));
    console.log('restored og.png');
    return;
  }
  // Source-only deploys cannot carry the b64 sidecar either; fall back to the
  // copy the live site already serves.
  const res = await fetch('https://venture-lab-landing.vercel.app/og.png');
  if (!res.ok) {
    throw new Error(`og.png missing and live fetch failed (${res.status}). Restore public/og.png or scripts/og.png.b64.`);
  }
  await writeFile(ogPath, Buffer.from(await res.arrayBuffer()));
  console.log('restored og.png from the live site');
}

await ensureFonts();
await ensureOgImage();
