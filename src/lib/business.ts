// Single source of truth for business/contact data shown across the site.
// Keep in sync with the static JSON-LD in index.html if you change hours or contact info.

export const business = {
  name: "Braca Service Luzern",
  phoneDisplay: "+41 76 401 88 42",
  phoneHref: "+41764018842",
  email: "bracaservice@sunrise.ch",
  streetAddress: "Luzernerstrasse 117",
  postalCode: "6014",
  locality: "Luzern",
  region: "LU",
  country: "Schweiz",
  mapsLink: "https://maps.app.goo.gl/9pyFFFczcqGaLPuk9",
};

export const openingHours = [
  { day: "Montag", time: "Geschlossen" },
  { day: "Dienstag - Freitag", time: "08:00 - 12:00, 13:00 - 17:00" },
  { day: "Samstag", time: "08:00 - 14:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

export const faq = [
  {
    question: "Wie lange dauert eine Schuhreparatur?",
    answer:
      "Kleine Reparaturen dauern meist 30–60 Minuten; Besohlen oder aufwändigere Arbeiten können 1–3 Werktage benötigen.",
  },
  {
    question: "Bietet ihr Express-Service an?",
    answer:
      "Ja — viele Reparaturen (Absatz, Batteriewechsel, Schlüsselduplikate) erledigen wir oft sofort, während Sie warten.",
  },
  {
    question: "Was kostet ein Autoschlüssel mit Wegfahrsperre?",
    answer:
      "Das hängt vom Fahrzeugmodell ab. Rufen Sie uns an oder kommen Sie vorbei für einen kostenlosen Autoschlüsseltest und eine unverbindliche Preisauskunft.",
  },
  {
    question: "Akzeptiert ihr Markenschuhe und orthopädische Anpassungen?",
    answer:
      "Wir reparieren Markenschuhe professionell und bieten orthopädische Anpassungen nach Bedarf an.",
  },
  {
    question: "Welche Zahlungsmöglichkeiten gibt es?",
    answer:
      "Wir akzeptieren TWINT und Bargeld. Kartenzahlungen sind derzeit leider nicht möglich.",
  },
  {
    question: "Wie kann ich anrufen oder euch besuchen?",
    answer:
      "Rufen Sie an: +41 76 401 88 42 oder kommen Sie vorbei: Luzernerstrasse 117, 6014 Luzern. Wir freuen uns auf Ihren Besuch.",
  },
];
