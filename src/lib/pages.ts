import type { FaqTopic } from "@/lib/business";

// Every prerendered page with its <head> metadata. scripts/prerender.js writes
// one HTML file per entry and builds the sitemap from this list.
export type PageMeta = {
  path: string;
  title: string;
  description: string;
  // Short name for breadcrumbs and cross-links.
  name: string;
  // Which FAQ entries the page shows; undefined = all.
  faqTopic?: FaqTopic;
  // schema.org Service name for the page's main service.
  serviceType?: string;
};

export const homePage: PageMeta = {
  path: "/",
  name: "Startseite",
  title: "Schlüsseldienst & Autoschlüssel Luzern – Schuhmacher | Braca Service",
  description:
    "Schlüsseldienst & Schuhmacher in Luzern: Autoschlüssel kopieren & reparieren – jede Marke, mit und ohne Keyless. Wegfahrsperre, Schlüssel nachmachen, Schuhreparatur. Kostenloser Autoschlüsseltest.",
};

export const carKeyPage: PageMeta = {
  path: "/autoschluessel-luzern/",
  name: "Autoschlüssel",
  title: "Autoschlüssel kopieren & reparieren in Luzern – auch Keyless | Braca Service",
  description:
    "Autoschlüssel nachmachen in Luzern für jede Automarke – mit und ohne Keyless. Funkschlüssel reparieren, Wegfahrsperre & Transponder programmieren. Kostenloser Autoschlüsseltest. ☎ +41 76 401 88 42",
  faqTopic: "auto",
  serviceType: "Autoschlüssel kopieren und reparieren",
};

export const locksmithPage: PageMeta = {
  path: "/schluesseldienst-luzern/",
  name: "Schlüsseldienst",
  title: "Schlüsseldienst Luzern – Schlüssel nachmachen | Braca Service",
  description:
    "Schlüsseldienst in Luzern: Schlüssel nachmachen, Zylinderschlüssel nach Code, Briefkasten-, Velo- & Motorradschlüssel. Partner von dormakaba, Sea, EVVA, Abus & VOX. Meist sofort fertig.",
  faqTopic: "schluessel",
  serviceType: "Schlüsseldienst",
};

export const shoePage: PageMeta = {
  path: "/schuhmacher-luzern/",
  name: "Schuhmacher",
  title: "Schuhmacher Luzern – Schuhreparatur, Absatz & Sohle | Braca Service",
  description:
    "Schuhmacher in Luzern: Absatz ersetzen, Schuhe neu besohlen, Weiten, orthopädische Anpassungen und Wanderschuh-Service. Kleine Reparaturen oft in 30–60 Minuten.",
  faqTopic: "schuh",
  serviceType: "Schuhreparatur",
};

export const servicePages = [carKeyPage, locksmithPage, shoePage];
export const pages = [homePage, ...servicePages];
