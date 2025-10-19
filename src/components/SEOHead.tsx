import { useEffect } from 'react';

const SEOHead = () => {
  useEffect(() => {
    // Add structured data for local business
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Braca Service",
      "description": "Professioneller Schlüssel-, Schuh- und Gravurservice in Zürich. Verifizierter KABA-Partner mit kostenlosem Autoschlüsseltest.",
      "image": "https://cc1cf88a-661a-4d61-bb8b-9905aad51649.lovableproject.com/og-image.jpg",
      "@id": "https://braca-service.ch",
      "url": "https://braca-service.ch",
      "telephone": "+41000000000",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Musterstrasse 123",
        "addressLocality": "Zürich",
        "postalCode": "8000",
        "addressCountry": "CH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.3769,
        "longitude": 8.5417
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "16:00"
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
