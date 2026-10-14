import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

// Bakes each page (HTML, <head> metadata, JSON-LD) into static files in dist/
// so search engines and AI agents that don't run JavaScript see the full
// content, and writes the sitemap. The client hydrates the HTML.
// Runs after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, structuredData, pages, siteUrl } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('root placeholder not found in dist/index.html');

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const setTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) throw new Error(`tag not found in template: ${pattern}`);
  return html.replace(pattern, replacement);
};

const setMeta = (html, attr, key, value) =>
  setTag(html, new RegExp(`<meta ${attr}="${key}" content="[^"]*" />`), `<meta ${attr}="${key}" content="${escapeAttr(value)}" />`);

const buildPage = ({ url, title, description, jsonLd, noindex }) => {
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`);
  html = setMeta(html, 'name', 'description', description);
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', description);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', description);
  if (noindex) {
    html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, '');
    html = setMeta(html, 'property', 'og:url', siteUrl);
    html = setMeta(html, 'name', 'robots', 'noindex, follow');
  } else {
    const pageUrl = new URL(url, siteUrl).href;
    html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${pageUrl}" />`);
    html = setMeta(html, 'property', 'og:url', pageUrl);
  }
  if (jsonLd) {
    const json = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
    html = html.replace('</head>', `  <script type="application/ld+json">${json}</script>\n  </head>`);
  }
  return html;
};

for (const page of pages) {
  const outFile = path.join(distDir, page.path, 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(
    outFile,
    buildPage({ url: page.path, title: page.title, description: page.description, jsonLd: structuredData(page) }),
    'utf8'
  );
  console.log('Prerendered', page.path);
}

// GitHub Pages serves 404.html for unknown paths.
fs.writeFileSync(
  path.join(distDir, '404.html'),
  buildPage({
    url: '/404',
    title: 'Seite nicht gefunden | Braca Service Luzern',
    description: 'Diese Seite gibt es nicht.',
    noindex: true,
  }),
  'utf8'
);
console.log('Prerendered 404.html');

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url>\n    <loc>${new URL(p.path, siteUrl).href}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
console.log('Wrote sitemap.xml');

fs.rmSync(ssrDir, { recursive: true, force: true });
