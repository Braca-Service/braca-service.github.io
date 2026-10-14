import { Key, Scissors, Pen, Stamp, Settings, Edit3, Tag, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  // Dedicated landing page for this service, if there is one.
  href?: string;
};

export const services: Service[] = [
  {
    icon: Scissors,
    title: "Schuhreparaturen",
    description: "Absatz- und Sohlenreparatur in Luzern — nachhaltig & hochwertig",
    href: "/schuhmacher-luzern/",
    items: [
      "Absatz ersetzen - schnelle Reparatur vor Ort",
      "Sohlen ersetzen & neu besohlen für langanhaltenden Schutz",
      "Orthopädische Anpassungen für mehr Komfort",
      "Weiten & Anpassungen für perfekte Passform",
      "Wanderschuh-Service & Imprägnierung",
    ],
  },
  {
    icon: Key,
    title: "Schlüsselservice",
    description: "Schlüssel & Autoschlüssel in Luzern - Programmierung & Duplikate",
    href: "/schluesseldienst-luzern/",
    items: [
      "Autoschlüssel kopieren & reparieren - alle Marken, auch Keyless",
      "Zylinderschlüssel & Ersatz nach Code",
      "Briefkasten-, Velo- & Motorradschlüssel",
      "Präzisions-Duplikate in Minuten",
      "Spezial- & Markenschlüssel: EVVA, Abus, dormakaba",
    ],
  },
  {
    icon: Pen,
    title: "Gravuren",
    description: "Präzise Gravuren in Luzern — Namensschilder, Tür- und Briefkastenschild",
    items: [
      "Briefkasten- & Klingelschilder in verschiedenen Materialien",
      "Wetterfeste Türschilder nach Mass",
      "Personalisierte Namensschilder für privat & Business",
      "Hundemarken und Geschenkgravuren",
      "Express-Gravuren möglich",
    ],
  },
  {
    icon: Stamp,
    title: "Stempel",
    description: "In 24h bereit! Professionell & nachhaltig",
    items: [
      "Express: Morgen bestellt - übermorgen fertig!",
      "11 Grössen & 4 Farben - für jeden Zweck",
      "100% individuell nach Ihrem Design",
      "Automatikstempel - keine Stempelkissen nötig",
      "Nachfüllbar - spart Geld & schont die Umwelt",
    ],
  },
  {
    icon: Settings,
    title: "Schleifarbeiten",
    description: "Rasiermesserscharf - wie neu in Minuten!",
    items: [
      "Küchenmesser schärfer als beim Kauf!",
      "Heckenscheren - schneiden wie Butter",
      "Rasenmähermesser perfekt geschliffen",
      "Scheren & Äxte - profi-scharf",
      "Sofort-Service - meist während Sie warten",
    ],
  },
  {
    icon: Edit3,
    title: "Näharbeiten",
    description: "Lieblingsteile retten - perfekte Passform garantiert!",
    items: [
      "Hosen kürzen - sitzt wie angegossen",
      "Reissverschluss kaputt? Schnell ersetzt!",
      "Flicken unsichtbar - sieht aus wie neu",
      "Änderungen aller Art - massgeschneidert",
      "Express möglich - wenn's pressiert",
    ],
  },
  {
    icon: Tag,
    title: "Beschriftungen",
    description: "Ihr Auftritt zählt - professionell beschriftet!",
    items: [
      "Parkplatzschilder - wetterfest & langlebig",
      "Firmenschilder - repräsentativ & edel",
      "Magnetschilder - flexibel einsetzbar",
      "Individuelle Beschriftungen aller Art",
      "Beratung inklusive - wir helfen bei der Gestaltung",
    ],
  },
  {
    icon: Settings,
    title: "Weitere Services",
    description: "Kleine Reparaturen statt teurer Neukauf!",
    items: [
      "Fernbedienungen reparieren - in Minuten",
      "Schlüsselgehäuse kaputt? Sofort ersetzt!",
      "Batteriewechsel Uhren & Autoschlüssel",
      "Uhrbänder kürzen - perfekte Länge",
      "Und vieles mehr - einfach fragen!",
    ],
  },
];

export const serviceByTitle = (title: string) => services.find((s) => s.title === title)!;
