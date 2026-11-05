import { MapPin, Star } from "lucide-react";
import OpenNow from "@/components/OpenNow";
import { business, openingHours } from "@/lib/business";
import { useOpenStatus } from "@/hooks/use-open-status";
import { cn } from "@/lib/utils";

const OpeningHours = () => {
  const live = useOpenStatus();

  return (
    <section id="opening-hours" className="scroll-mt-20 bg-steel py-16 sm:py-24">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-6">
          <h2 className="heading-section">Öffnungszeiten</h2>
          <OpenNow className="mt-4" />

          <dl className="mt-8 rounded-lg bg-white px-5 sm:px-7">
            {openingHours.map((g) => {
              const isToday = live !== null && g.days.includes(live.clock.day);
              return (
                <div
                  key={g.label}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-steel-line py-4 last:border-b-0 sm:py-5"
                >
                  <dt className={cn("font-bold", isToday ? "text-brand" : "text-ink")}>
                    {g.label}
                    {isToday && <span className="ml-2 font-normal">(heute)</span>}
                  </dt>
                  <dd className="text-right font-display text-[1.1875rem] font-semibold text-ink">
                    {g.periods.length ? (
                      g.periods.map(([o, c]) => (
                        <span key={o} className="block">
                          {o}–{c}
                        </span>
                      ))
                    ) : (
                      <span className="font-sans text-base font-normal text-slate">Geschlossen</span>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div id="contact" className="scroll-mt-20 lg:col-span-5 lg:col-start-8">
          <h2 className="heading-section">Kontakt</h2>

          <address className="mt-6 not-italic">
            <span className="block font-display text-[1.75rem] font-bold leading-tight text-ink sm:text-[2.25rem]">
              {business.streetAddress}
              <br />
              {business.postalCode} {business.locality}
            </span>
            <span className="mt-1 block text-slate">Stadtteil Littau, {business.country}</span>
          </address>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-[0.9375rem] text-slate">Telefon</dt>
              <dd>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="font-display text-[1.5rem] font-bold text-ink underline decoration-steel-line decoration-2 underline-offset-4 hover:decoration-brand"
                >
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.9375rem] text-slate">E-Mail</dt>
              <dd>
                <a href={`mailto:${business.email}`} className="text-link break-all">
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.9375rem] text-slate">Bezahlen</dt>
              <dd>TWINT oder bar. Kartenzahlung ist derzeit nicht möglich.</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Phones have "Route" in the fixed call bar. */}
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quiet hidden border-ink/25 text-ink hover:border-ink sm:inline-flex"
            >
              <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Route planen</span>
            </a>
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quiet border-ink/25 text-ink hover:border-ink"
            >
              <Star className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Auf Google bewerten</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
