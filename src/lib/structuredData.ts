import { business, carBrands, carKeyServices, faq, serviceArea, siteUrl } from "@/lib/business";

// schema.org JSON-LD for search engines and AI agents. Injected into the
// prerendered index.html by scripts/prerender.js.
export const structuredData = () => {
  const businessId = `${siteUrl}#business`;

  const offer = (name: string, description: string) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, description, areaServed: "Luzern" },
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Locksmith", "LocalBusiness"],
        "@id": businessId,
        name: business.name,
        alternateName: ["Braca Service", "Braca Multi Service"],
        description:
          "Schlüsseldienst und Schuhmacher in Luzern. Autoschlüssel kopieren und reparieren für jede Automarke – mit und ohne Keyless. Wegfahrsperre programmieren, Schlüssel nachmachen, Schuhreparaturen, Gravuren und Stempel. Verifizierter Partner von dormakaba, Sea, EVVA, Abus und VOX.",
        url: siteUrl,
        image: `${siteUrl}og-image.jpg`,
        logo: `${siteUrl}favicon.png`,
        telephone: business.phoneHref,
        email: business.email,
        priceRange: "$$",
        currenciesAccepted: "CHF",
        paymentAccepted: "Cash, TWINT",
        address: {
          "@type": "PostalAddress",
          streetAddress: business.streetAddress,
          addressLocality: business.locality,
          postalCode: business.postalCode,
          addressRegion: business.region,
          addressCountry: "CH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.latitude,
          longitude: business.longitude,
        },
        hasMap: business.mapsLink,
        areaServed: serviceArea.map((name) => ({ "@type": "City", name })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "12:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "13:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "14:00",
          },
        ],
        knowsAbout: [
          "Autoschlüssel kopieren",
          "Autoschlüssel reparieren",
          "Keyless Go Schlüssel",
          "Funkschlüssel",
          "Transponderschlüssel",
          "Wegfahrsperre programmieren",
          "Schlüssel nachmachen",
          "Schlüsseldienst",
          "Schuhreparatur",
          "Schuhmacher",
          "Gravuren",
          "Stempel",
          ...carBrands.map((brand) => `${brand} Autoschlüssel`),
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dienstleistungen",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Autoschlüssel",
              itemListElement: carKeyServices.map((s) => offer(s.title, s.description)),
            },
            offer(
              "Schlüsseldienst",
              "Schlüssel nachmachen, Zylinderschlüssel nach Code, Briefkasten-, Velo- und Motorradschlüssel. Partner von dormakaba, Sea, EVVA, Abus und VOX."
            ),
            offer(
              "Schuhmacher / Schuhreparatur",
              "Absatz ersetzen, Schuhe neu besohlen, orthopädische Anpassungen, Weiten, Wanderschuh-Service."
            ),
            offer("Gravuren", "Briefkastenschilder, Klingelschilder, Türschilder, Namensschilder, Hundemarken."),
            offer("Stempel", "Individuelle Automatikstempel in 24 Stunden."),
            offer("Schleifservice", "Messer, Scheren, Heckenscheren und Rasenmähermesser schleifen."),
          ],
        },
        sameAs: [business.mapsLink],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: business.name,
        inLanguage: "de-CH",
        publisher: { "@id": businessId },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}#faq`,
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
};
