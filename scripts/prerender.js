import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

// Bakes the rendered page and JSON-LD into dist/index.html so search engines
// and AI agents that don't run JavaScript still see the full content.
// Runs after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.

const root = process.cwd();
const indexPath = path.join(root, 'dist', 'index.html');
const ssrDir = path.join(root, 'dist-ssr');

const { render, structuredData } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const appHtml = render('/');
const jsonLd = JSON.stringify(structuredData()).replace(/</g, '\\u003c');

let html = fs.readFileSync(indexPath, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found in dist/index.html');
html = html
  .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  .replace('</head>', `  <script type="application/ld+json">${jsonLd}</script>\n  </head>`);

fs.writeFileSync(indexPath, html, 'utf8');
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('Prerendered dist/index.html');
