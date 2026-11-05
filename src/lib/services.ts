export type Service = {
  title: string;
  description: string;
  items: string[];
  // Dedicated landing page for this service, if there is one.
  href?: string;
  // Text for the link to that page.
  linkLabel?: string;
};

export const services: Service[] = [
  {
    title: "Schlüsselservice",
    description: "Schlüssel nachmachen und Autoschlüssel programmieren, meist in wenigen Minuten.",
    href: "/schluesseldienst-luzern/",
    linkLabel: "Mehr zum Schlüsseldienst",
    items: [
      "Autoschlüssel kopieren und reparieren, alle Marken, auch Keyless",
      "Zylinderschlüssel und Ersatzschlüssel nach Code",
      "Briefkasten-, Velo- und Motorradschlüssel",
      "Präzise Duplikate in wenigen Minuten",
      "Spezial- und Markenschlüssel von EVVA, Abus und dormakaba",
    ],
  },
  {
    title: "Schuhreparaturen",
    description: "Absätze, Sohlen und Anpassungen in Luzern. Reparieren statt wegwerfen.",
    href: "/schuhmacher-luzern/",
    linkLabel: "Mehr zur Schuhreparatur",
    items: [
      "Absatz ersetzen, oft direkt vor Ort",
      "Sohlen ersetzen und Schuhe neu besohlen",
      "Orthopädische Anpassungen für mehr Komfort",
      "Schuhe weiten und anpassen",
      "Wanderschuh-Service und Imprägnierung",
    ],
  },
  {
    title: "Gravuren",
    description: "Schilder und Gravuren für Haus, Büro und Geschenk.",
    items: [
      "Briefkasten- und Klingelschilder in verschiedenen Materialien",
      "Wetterfeste Türschilder nach Mass",
      "Namensschilder für privat und Geschäft",
      "Hundemarken und Geschenkgravuren",
      "Express-Gravuren möglich",
    ],
  },
  {
    title: "Stempel",
    description: "Individuelle Stempel, in 24 Stunden bereit.",
    items: [
      "Express: heute bestellt, morgen fertig",
      "11 Grössen und 4 Farben",
      "Gestaltet nach Ihrer Vorlage",
      "Automatikstempel, kein Stempelkissen nötig",
      "Nachfüllbar statt neu kaufen",
    ],
  },
  {
    title: "Schleifarbeiten",
    description: "Messer und Gartenwerkzeug wieder scharf, meist während Sie warten.",
    items: [
      "Küchenmesser",
      "Scheren und Äxte",
      "Heckenscheren",
      "Rasenmähermesser",
    ],
  },
  {
    title: "Näharbeiten",
    description: "Kleider ändern und flicken.",
    items: [
      "Hosen kürzen",
      "Reissverschlüsse ersetzen",
      "Flicken, so unauffällig wie möglich",
      "Änderungen aller Art",
      "Express möglich",
    ],
  },
  {
    title: "Beschriftungen",
    description: "Schilder und Beschriftungen für Firma und Parkplatz.",
    items: [
      "Parkplatzschilder, wetterfest",
      "Firmenschilder",
      "Magnetschilder",
      "Individuelle Beschriftungen",
      "Beratung zur Gestaltung inklusive",
    ],
  },
  {
    title: "Weitere Services",
    description: "Kleine Reparaturen statt Neukauf.",
    items: [
      "Fernbedienungen reparieren",
      "Schlüsselgehäuse ersetzen",
      "Batteriewechsel für Uhren und Autoschlüssel",
      "Uhrbänder kürzen",
      "Und vieles mehr, fragen Sie einfach",
    ],
  },
];

export const serviceByTitle = (title: string) => services.find((s) => s.title === title)!;
