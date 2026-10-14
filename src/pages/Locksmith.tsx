import { Award, Car } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import LandingHero from "@/components/landing/LandingHero";
import ServiceDetail from "@/components/landing/ServiceDetail";
import RelatedServices from "@/components/landing/RelatedServices";
import FAQSection from "@/components/FAQSection";
import OpeningHours from "@/components/OpeningHours";
import { carKeyPage, locksmithPage } from "@/lib/pages";
import { serviceByTitle } from "@/lib/services";

const partners = ["dormakaba (KABA)", "Sea", "EVVA", "Abus", "VOX"];

const Locksmith = () => (
  <PageLayout page={locksmithPage}>
    <LandingHero
      page={locksmithPage}
      heading="Schlüsseldienst in Luzern – Schlüssel nachmachen"
      intro="Haus-, Wohnungs-, Briefkasten-, Velo- und Autoschlüssel: Wir machen Ihre Schlüssel präzise nach – meist sofort, während Sie warten. Als verifizierter Partner von dormakaba, Sea, EVVA, Abus und VOX auch Sicherheitsschlüssel nach Code."
      highlights={["Schlüssel nachmachen", "Zylinderschlüssel nach Code", "Autoschlüssel", "Meist sofort fertig"]}
    />
    <ServiceDetail
      heading="Schlüssel nachmachen lassen in Luzern"
      intro="Bringen Sie einfach Ihren Originalschlüssel oder Ihre Sicherheitskarte vorbei."
      service={serviceByTitle("Schlüsselservice")}
    />

    <section className="py-12 sm:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border/50 rounded-2xl p-6">
          <Award className="w-8 h-8 text-primary mb-3" />
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">Verifizierter Markenpartner</h2>
          <p className="text-muted-foreground mb-4">
            Sicherheits- und Zylinderschlüssel nach Code – als verifizierter Partner der führenden Schliesssystem-Hersteller.
          </p>
          <ul className="flex flex-wrap gap-2">
            {partners.map((p) => (
              <li key={p} className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border/50 rounded-2xl p-6">
          <Car className="w-8 h-8 text-primary mb-3" />
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">Autoschlüssel</h2>
          <p className="text-muted-foreground mb-4">
            Autoschlüssel kopieren, Keyless-Schlüssel programmieren und defekte Funkschlüssel reparieren – für jede
            Automarke.
          </p>
          <a href={carKeyPage.path} className="font-semibold text-primary hover:underline">
            Mehr zu Autoschlüsseln →
          </a>
        </div>
      </div>
    </section>

    <FAQSection topic="schluessel" heading="Fragen zum Schlüsseldienst" />
    <OpeningHours />
    <RelatedServices current={locksmithPage} />
  </PageLayout>
);

export default Locksmith;
