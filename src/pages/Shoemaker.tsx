import PageLayout from "@/components/PageLayout";
import LandingHero from "@/components/landing/LandingHero";
import ServiceDetail from "@/components/landing/ServiceDetail";
import RelatedServices from "@/components/landing/RelatedServices";
import FAQSection from "@/components/FAQSection";
import OpeningHours from "@/components/OpeningHours";
import { shoePage } from "@/lib/pages";
import { serviceByTitle } from "@/lib/services";

const Shoemaker = () => (
  <PageLayout page={shoePage}>
    <LandingHero
      page={shoePage}
      heading="Schuhmacher in Luzern – Schuhreparatur"
      intro="Reparieren statt wegwerfen: Wir ersetzen Absätze, besohlen Ihre Schuhe neu, weiten sie und passen sie orthopädisch an. Kleine Reparaturen sind oft in 30–60 Minuten fertig."
      highlights={["Absatz ersetzen", "Neu besohlen", "Orthopädische Anpassungen", "Markenschuhe"]}
    />
    <ServiceDetail
      heading="Schuhreparaturen beim Schuhmacher in Luzern"
      intro="Ob Damenabsatz, Herrenschuh, Stiefel oder Wanderschuh – wir reparieren fachgerecht und mit hochwertigem Material."
      service={serviceByTitle("Schuhreparaturen")}
    />
    <ServiceDetail
      heading="Näharbeiten"
      intro="Auch Kleidung retten wir: Hosen kürzen, Reissverschlüsse ersetzen und Flicken."
      service={serviceByTitle("Näharbeiten")}
    />
    <FAQSection topic="schuh" heading="Fragen zur Schuhreparatur" />
    <OpeningHours />
    <RelatedServices current={shoePage} />
  </PageLayout>
);

export default Shoemaker;
