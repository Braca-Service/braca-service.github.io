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
      intro="Haus-, Wohnungs-, Briefkasten-, Velo- und Autoschlüssel: Wir machen Ihre Schlüssel präzise nach, meist sofort, während Sie warten. Als verifizierter Partner von dormakaba, Sea, EVVA, Abus und VOX auch Sicherheitsschlüssel nach Code."
      highlights={["Schlüssel nachmachen", "Zylinderschlüssel nach Code", "Autoschlüssel", "Meist sofort fertig"]}
    />
    <ServiceDetail
      heading="Schlüssel nachmachen lassen in Luzern"
      intro="Bringen Sie einfach Ihren Originalschlüssel oder Ihre Sicherheitskarte vorbei."
      service={serviceByTitle("Schlüsselservice")}
    />

    <section className="bg-steel py-16 sm:py-24">
      <div className="wrap grid gap-5 md:grid-cols-2">
        <div className="rounded-lg bg-white px-5 py-7 sm:p-9">
          <h2 className="text-[1.75rem] leading-tight sm:text-[2.25rem]">Verifizierter Markenpartner</h2>
          <p className="mt-3 text-slate">
            Sicherheits- und Zylinderschlüssel nach Code, als verifizierter Partner der führenden
            Schliesssystem-Hersteller.
          </p>
          <ul className="mt-6 border-t-2 border-ink font-display text-[1.3125rem] font-semibold text-ink">
            {partners.map((p) => (
              <li key={p} className="border-b border-steel-line py-2.5">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col rounded-lg bg-white px-5 py-7 sm:p-9">
          <h2 className="text-[1.75rem] leading-tight sm:text-[2.25rem]">Autoschlüssel</h2>
          <p className="mt-3 text-slate">
            Autoschlüssel kopieren, Keyless-Schlüssel programmieren und defekte Funkschlüssel reparieren, für jede
            Automarke.
          </p>
          <a href={carKeyPage.path} className="text-link mt-6 self-start">
            Mehr zu Autoschlüsseln
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
