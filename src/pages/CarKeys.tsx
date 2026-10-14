import PageLayout from "@/components/PageLayout";
import LandingHero from "@/components/landing/LandingHero";
import Steps from "@/components/landing/Steps";
import RelatedServices from "@/components/landing/RelatedServices";
import CarKeySection from "@/components/CarKeySection";
import FAQSection from "@/components/FAQSection";
import OpeningHours from "@/components/OpeningHours";
import { carKeyPage } from "@/lib/pages";

const CarKeys = () => (
  <PageLayout page={carKeyPage}>
    <LandingHero
      page={carKeyPage}
      heading="Autoschlüssel kopieren & reparieren in Luzern"
      intro="Zweitschlüssel verloren oder Funkschlüssel kaputt? Wir kopieren, programmieren und reparieren Autoschlüssel für jede Automarke – mit und ohne Keyless. Oft schneller und günstiger als in der Markengarage."
      highlights={["Jede Automarke", "Keyless Go & Funkschlüssel", "Wegfahrsperre & Transponder", "Kostenloser Autoschlüsseltest"]}
    />
    <CarKeySection heading="Unsere Leistungen rund um den Autoschlüssel" showPageLink={false} />
    <Steps
      heading="So kommen Sie zu Ihrem Autoschlüssel"
      steps={[
        {
          title: "Anrufen",
          text: "Nennen Sie uns Marke, Modell und Jahrgang. Wir sagen Ihnen, was möglich ist und was es kostet.",
        },
        {
          title: "Vorbeikommen",
          text: "Bringen Sie Ihren Schlüssel mit an die Luzernerstrasse 117. Wir sagen Ihnen am Telefon, ob auch das Fahrzeug nötig ist.",
        },
        {
          title: "Fertig & getestet",
          text: "Wir kopieren oder reparieren den Schlüssel und testen Funk und Transponder – vieles erledigen wir, während Sie warten.",
        },
      ]}
    />
    <FAQSection topic="auto" heading="Fragen zu Autoschlüsseln" />
    <OpeningHours />
    <RelatedServices current={carKeyPage} />
  </PageLayout>
);

export default CarKeys;
