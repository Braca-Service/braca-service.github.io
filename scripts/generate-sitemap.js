import fs from 'fs';
import path from 'path';

// Simple sitemap generator for the known routes of this SPA
// Edit `routes` if you add more pages or change paths.

const baseUrl = 'https://bracaservice.ch';
const routes = ['/', '/404'];

const today = new Date().toISOString();

const sitemapItems = routes
  .map((r) => `  <url>\n    <loc>${baseUrl}${r}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapItems}\n</urlset>`;

const outDir = path.resolve(process.cwd(), 'public');
const outPath = path.join(outDir, 'sitemap.xml');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(outPath, sitemap, { encoding: 'utf8' });
console.log('Sitemap generated at', outPath);
