import { business, serviceArea } from "@/lib/business";
import { homePage, servicePages } from "@/lib/pages";

const Footer = () => {
  return (
    <footer className="on-ink pb-8 pt-14 sm:pt-20">
      <div className="wrap">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="font-display text-[1.75rem] font-bold leading-tight">Braca Service</p>
            <p className="mt-3 max-w-[26rem] text-white/75">
              Schlüsseldienst, Autoschlüssel und Schuhmacher an der Luzernerstrasse in Luzern.
            </p>
            <p className="mt-5">
              <a
                href={`tel:${business.phoneHref}`}
                className="font-display text-[1.5rem] font-bold underline decoration-white/30 decoration-2 underline-offset-4 hover:decoration-brass"
              >
                {business.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${business.email}`} className="text-white/85 underline-offset-4 hover:underline">
                {business.email}
              </a>
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="font-bold">Leistungen</p>
            <ul className="mt-3 space-y-2">
              {servicePages.map((p) => (
                <li key={p.path}>
                  <a href={p.path} className="text-white/85 underline-offset-4 hover:text-white hover:underline">
                    {p.name} Luzern
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`${homePage.path}#services`}
                  className="text-white/85 underline-offset-4 hover:text-white hover:underline"
                >
                  Alle Leistungen
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-bold">Adresse</p>
            <address className="mt-3 not-italic text-white/85">
              {business.streetAddress}
              <br />
              {business.postalCode} {business.locality}
            </address>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={business.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 underline-offset-4 hover:text-white hover:underline"
                >
                  Route planen
                </a>
              </li>
              <li>
                <a
                  href={business.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 underline-offset-4 hover:text-white hover:underline"
                >
                  Auf Google bewerten
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/20 pt-6 text-[0.9375rem] text-white/65">
          <p>Für Kundinnen und Kunden aus {serviceArea.join(", ")} und Umgebung.</p>
          <p>&copy; {new Date().getFullYear()} Braca Service. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
