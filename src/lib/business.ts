// Single source of truth for business/contact data shown across the site.
// The JSON-LD structured data (src/lib/structuredData.ts) and the prerendered
// HTML are generated from this file at build time.

export const siteUrl = "https://bracaservice.ch/";

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
  latitude: 47.0502,
  longitude: 8.3093,
};

export const openingHours = [
  { day: "Montag", time: "Geschlossen" },
  { day: "Dienstag - Freitag", time: "08:00 - 12:00, 13:00 - 17:00" },
  { day: "Samstag", time: "08:00 - 14:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

// Places around the shop that customers come from (used for areaServed and copy).
export const serviceArea = [
  "Luzern",
  "Littau",
  "Kriens",
  "Emmen",
  "Horw",
  "Ebikon",
  "Root",
  "Malters",
  "Meggen",
  "Adligenswil",
];

export const carKeyServices = [
  {
    title: "Autoschlüssel kopieren",
    description:
      "Zweitschlüssel oder Ersatzschlüssel für Ihr Auto: Schlüsselbart fräsen und Transponder (Wegfahrsperre) übertragen bzw. anlernen.",
  },
  {
    title: "Keyless-Schlüssel (Keyless Go / Smart Key)",
    description:
      "Kopie und Programmierung von Keyless-Entry- und Keyless-Go-Schlüsseln sowie Funkschlüsseln mit Fernbedienung.",
  },
  {
    title: "Autoschlüssel reparieren",
    description:
      "Defektes Gehäuse, abgebrochener Klappschlüssel, Tasten ohne Funktion, Platine oder Batterie: Wir reparieren statt teuer neu zu kaufen.",
  },
  {
    title: "Wegfahrsperre & Transponder",
    description:
      "Transponderschlüssel programmieren und Wegfahrsperre anlernen. Kostenloser Autoschlüsseltest: Wir prüfen, ob Funk und Transponder funktionieren.",
  },
];

export const carBrands = [
  "VW",
  "Audi",
  "BMW",
  "Mercedes-Benz",
  "Škoda",
  "Seat",
  "Cupra",
  "Opel",
  "Ford",
  "Renault",
  "Dacia",
  "Peugeot",
  "Citroën",
  "Fiat",
  "Alfa Romeo",
  "Jeep",
  "Toyota",
  "Lexus",
  "Mazda",
  "Nissan",
  "Honda",
  "Mitsubishi",
  "Subaru",
  "Suzuki",
  "Hyundai",
  "Kia",
  "Volvo",
  "Mini",
  "Porsche",
  "Land Rover",
  "Jaguar",
  "Smart",
];

export const faq = [
  {
    question: "Kann ich bei euch einen Autoschlüssel kopieren lassen?",
    answer:
      "Ja. Wir kopieren Autoschlüssel aller gängigen Automarken in Luzern – klassische Schlüssel mit Transponder, Funkschlüssel und Keyless-Schlüssel. Rufen Sie kurz an (+41 76 401 88 42) und nennen Sie Marke, Modell und Jahrgang, dann sagen wir Ihnen, was nötig ist.",
  },
  {
    question: "Könnt ihr Keyless-Go-Schlüssel kopieren und programmieren?",
    answer:
      "Ja. Wir kopieren und programmieren sowohl Keyless-Schlüssel (Keyless Entry / Keyless Go / Smart Key) als auch Autoschlüssel ohne Keyless-Funktion.",
  },
  {
    question: "Für welche Automarken macht ihr Autoschlüssel?",
    answer:
      "Für jede gängige Automarke, z. B. VW, Audi, BMW, Mercedes-Benz, Škoda, Seat, Opel, Ford, Renault, Peugeot, Citroën, Fiat, Toyota, Mazda, Nissan, Honda, Hyundai, Kia, Volvo, Mini, Porsche und viele mehr.",
  },
  {
    question: "Kann man einen kaputten Autoschlüssel reparieren?",
    answer:
      "Meistens ja. Wir ersetzen defekte Gehäuse und Klappschlüssel, reparieren Tasten und Platinen und wechseln die Batterie – oft günstiger und schneller als ein neuer Schlüssel von der Garage.",
  },
  {
    question: "Was kostet ein Autoschlüssel mit Wegfahrsperre?",
    answer:
      "Das hängt vom Fahrzeugmodell ab. Rufen Sie uns an oder kommen Sie vorbei für einen kostenlosen Autoschlüsseltest und eine unverbindliche Preisauskunft.",
  },
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
