import CallButton from "@/components/CallButton";
import { carBrands, carKeyServices } from "@/lib/business";
import { carKeyPage } from "@/lib/pages";

// Alphabetical, so people can scan for their brand.
const brandsAz = [...carBrands].sort((a, b) => a.localeCompare(b, "de"));

const CarKeySection = ({ heading = "Autoschlüssel kopieren & reparieren in Luzern", showPageLink = true }) => {
  return (
    <section id="autoschluessel" className="scroll-mt-20 pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <h2 className="heading-section">{heading}</h2>
          <p className="lead mt-5">
            Jede Automarke, mit oder ohne Keyless. Wir machen Ihren Zweitschlüssel, programmieren die Wegfahrsperre
            und reparieren defekte Funkschlüssel. Oft günstiger und schneller als in der Garage.
          </p>
          <div className="mt-8 flex flex-col items-start gap-5">
            {/* Phones use the fixed call bar instead. */}
            <CallButton label="Autoschlüssel anfragen:" className="hidden max-w-full text-left sm:inline-flex" />
            {showPageLink && (
              <a href={carKeyPage.path} className="text-link">
                Alles zu Autoschlüsseln in Luzern
              </a>
            )}
          </div>
        </div>

        <ul className="border-t-2 border-ink lg:col-span-7 lg:col-start-6">
          {carKeyServices.map((service) => (
            <li
              key={service.title}
              className="grid gap-1.5 border-b border-steel-line py-5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8 sm:py-6"
            >
              <h3 className="heading-sub">{service.title}</h3>
              <p className="text-slate">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap mt-14 sm:mt-20">
        <div className="grid gap-8 rounded-lg bg-steel px-5 py-8 sm:p-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <h3 className="heading-sub">Autoschlüssel für alle Marken</h3>
            <p className="mt-3 text-slate">
              Ihre Marke fehlt? Einfach anrufen. Mit Marke, Modell und Jahrgang sagen wir Ihnen sofort, was möglich
              ist.
            </p>
          </div>
          <ul className="columns-2 gap-x-6 font-display text-[1.0625rem] font-semibold text-ink min-[420px]:columns-3 sm:text-[1.125rem] md:columns-4 lg:col-span-8">
            {brandsAz.map((brand) => (
              <li key={brand} className="break-inside-avoid border-b border-steel-line py-1.5">
                {brand}
              </li>
            ))}
            <li className="break-inside-avoid py-1.5 font-sans text-base font-normal text-slate">und weitere</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CarKeySection;
