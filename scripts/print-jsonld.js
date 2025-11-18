const lb = {
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
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "12:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"],
      "opens": "13:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dienstleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Schlüsselservice", "description": "Autoschlüssel mit Wegfahrsperre, Zylinderschlüssel, Briefkastenschlüssel" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Schuhreparaturen", "description": "Absatz ersetzen, Sohle ersetzen, kleine Orthopädie" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Gravuren", "description": "Briefkastenschilder, Namensschilder, Türklingelschilder" }
      }
    ]
  }
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie lange dauert eine Schuhreparatur?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kleine Reparaturen dauern meist 30–60 Minuten; Besohlen oder aufwändigere Arbeiten können 1–3 Werktage benötigen." }
    },
    {
      "@type": "Question",
      "name": "Bietet ihr Express-Service an?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja — viele Reparaturen (Absatz, Batteriewechsel, Schlüsselduplikate) erledigen wir oft sofort, während Sie warten." }
    },
    {
      "@type": "Question",
      "name": "Akzeptiert ihr Markenschuhe und orthopädische Anpassungen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Wir reparieren Markenschuhe professionell und bieten orthopädische Anpassungen nach Bedarf an." }
    },
    {
      "@type": "Question",
      "name": "Wie kann ich anrufen oder euch besuchen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Rufen Sie an: +41 76 401 88 42 oder kommen Sie vorbei: Luzernerstrasse 117, 6014 Luzern. Wir freuen uns auf Ihren Besuch." }
    }
  ]
};

console.log('--- LocalBusiness JSON-LD ---\n');
console.log(JSON.stringify(lb, null, 2));
console.log('\n--- FAQ JSON-LD ---\n');
console.log(JSON.stringify(faq, null, 2));
