import fs from 'fs';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'public', 'jsonld');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Braca Multi Service",
  "alternateName": "Braca Service",
  "description": "Professioneller Schlüssel-, Schuh- und Gravurservice in Luzern. Verifizierter Partner von dormakaba, Sea, EVVA, Abus und VOX. Kostenloser Autoschlüsseltest.",
  "image": "https://cc1cf88a-661a-4d61-bb8b-9905aad51649.lovableproject.com/og-image.jpg",
  "@id": "https://bracaservice.ch/",
  "url": "https://bracaservice.ch/",
  "telephone": "+41764018842",
  "email": "bracaservice@sunrise.ch",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Luzernerstrasse 117",
    "addressLocality": "Luzern",
    "postalCode": "6014",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.0502,
    "longitude": 8.3093
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "12:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"], "opens": "13:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "14:00" }
  ],
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dienstleistungen",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schlüsselservice", "description": "Autoschlüssel mit Wegfahrsperre, Zylinderschlüssel, Briefkastenschlüssel" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schuhreparaturen", "description": "Absatz ersetzen, Sohle ersetzen, kleine Orthopädie" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gravuren", "description": "Briefkastenschilder, Namensschilder, Türklingelschilder" } }
    ]
  }
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Wie lange dauert eine Schuhreparatur?", "acceptedAnswer": { "@type": "Answer", "text": "Kleine Reparaturen dauern meist 30–60 Minuten; Besohlen oder aufwändigere Arbeiten können 1–3 Werktage benötigen." } },
    { "@type": "Question", "name": "Bietet ihr Express-Service an?", "acceptedAnswer": { "@type": "Answer", "text": "Ja — viele Reparaturen (Absatz, Batteriewechsel, Schlüsselduplikate) erledigen wir oft sofort, während Sie warten." } },
    { "@type": "Question", "name": "Akzeptiert ihr Markenschuhe und orthopädische Anpassungen?", "acceptedAnswer": { "@type": "Answer", "text": "Wir reparieren Markenschuhe professionell und bieten orthopädische Anpassungen nach Bedarf an." } },
    { "@type": "Question", "name": "Wie kann ich anrufen oder euch besuchen?", "acceptedAnswer": { "@type": "Answer", "text": "Rufen Sie an: +41 76 401 88 42 oder kommen Sie vorbei: Luzernerstrasse 117, 6014 Luzern. Wir freuen uns auf Ihren Besuch." } }
  ]
};

// Write JSON-LD files
fs.writeFileSync(path.join(outDir, 'localbusiness.jsonld'), JSON.stringify(localBusiness, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'faq.jsonld'), JSON.stringify(faq, null, 2), 'utf8');

// Create an HTML wrapper for easy Rich Results testing
const html = `<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n<title>Braca Multi Service - Structured Data Test</title>\n<script type="application/ld+json">${JSON.stringify(localBusiness)}</script>\n<script type="application/ld+json">${JSON.stringify(faq)}</script>\n</head>\n<body>\n<h1>Structured Data Export für Braca Multi Service</h1>\n<p>Diese Seite enthält LocalBusiness und FAQ JSON-LD für Tests.</p>\n</body>\n</html>`;

fs.writeFileSync(path.join(outDir, 'structured-data-test.html'), html, 'utf8');
console.log('Exported JSON-LD to', outDir);
