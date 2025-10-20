import { useEffect } from 'react';

const SEOHead = () => {
  useEffect(() => {
    // Add structured data for local business
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Braca Multi Service",
      "alternateName": "Braca Service",
      "description": "Professioneller Schlüssel-, Schuh- und Gravurservice in Luzern. Verifizierter Partner von dormakaba, Sea, EVVA, Abus und VOX. Kostenloser Autoschlüsseltest.",
      "image": "https://cc1cf88a-661a-4d61-bb8b-9905aad51649.lovableproject.com/og-image.jpg",
      "@id": "https://braca-service.ch",
      "url": "https://braca-service.ch",
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
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SEOHead;
