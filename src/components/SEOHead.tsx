import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  faq?: FAQItem[];
}

const SEOHead = ({
  title = 'Schuhmacher Luzern — Braca Multi Service | Schuhreparatur & Schlüssel',
  description = 'Schuhmacher in Luzern — Braca Multi Service: Absatz- und Sohlenreparatur, Schuhpflege und Schlüsselservice. Schnell, professionell und zuverlässig.',
  url = 'https://bracaservice.ch/',
  image = 'https://cc1cf88a-661a-4d61-bb8b-9905aad51649.lovableproject.com/og-image.jpg',
  faq = []
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (attrName: 'name' | 'property', key: string, content: string) => {
      const selector = attrName === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, key);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    ensureMeta('name', 'description', description);
    ensureMeta('property', 'og:title', title);
    ensureMeta('property', 'og:description', description);
    ensureMeta('property', 'og:type', 'website');
    ensureMeta('property', 'og:url', url);
    ensureMeta('property', 'og:image', image);
    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', title);
    ensureMeta('name', 'twitter:description', description);
    ensureMeta('name', 'twitter:image', image);

    // Canonical link
    let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // LocalBusiness JSON-LD
    const lbScript = document.createElement('script');
    lbScript.type = 'application/ld+json';
    lbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Braca Multi Service",
      "alternateName": "Braca Service",
      "description": "Professioneller Schlüssel-, Schuh- und Gravurservice in Luzern. Verifizierter Partner von dormakaba, Sea, EVVA, Abus und VOX. Kostenloser Autoschlüsseltest.",
      "image": image,
      "@id": url,
      "url": url,
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
          "dayOfWeek": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "12:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
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
            "itemOffered": {
              "@type": "Service",
              "name": "Schlüsselservice",
              "description": "Autoschlüssel mit Wegfahrsperre, Zylinderschlüssel, Briefkastenschlüssel"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Schuhreparaturen",
              "description": "Absatz ersetzen, Sohle ersetzen, kleine Orthopädie"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gravuren",
              "description": "Briefkastenschilder, Namensschilder, Türklingelschilder"
            }
          }
        ]
      }
    });
    document.head.appendChild(lbScript);

    // FAQ JSON-LD (optional)
    let faqScript: HTMLScriptElement | null = null;
    if (faq && faq.length > 0) {
      faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      const faqJson = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map((f, i) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      };
      faqScript.text = JSON.stringify(faqJson);
      document.head.appendChild(faqScript);
    }

    return () => {
      // cleanup meta tags we added (leave others intact)
      try {
        const keys = [
          'meta[name="description"]',
          'meta[property="og:title"]',
          'meta[property="og:description"]',
          'meta[property="og:type"]',
          'meta[property="og:url"]',
          'meta[property="og:image"]',
          'meta[name="twitter:card"]',
          'meta[name="twitter:title"]',
          'meta[name="twitter:description"]',
          'meta[name="twitter:image"]'
        ];
        keys.forEach((sel) => {
          const el = document.head.querySelector(sel);
          if (el && el.parentNode) el.parentNode.removeChild(el);
        });
        if (canonical && canonical.parentNode) canonical.parentNode.removeChild(canonical);
        if (lbScript && lbScript.parentNode) lbScript.parentNode.removeChild(lbScript);
        if (faqScript && faqScript.parentNode) faqScript.parentNode.removeChild(faqScript);
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, [title, description, url, image, JSON.stringify(faq)]);

  return null;
};

export default SEOHead;
