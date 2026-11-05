import { business, openingHours } from "@/lib/business";
import { useOpenStatus } from "@/hooks/use-open-status";
import OpenNow from "@/components/OpenNow";
import { cn } from "@/lib/utils";

// The shop-door sign in the hero (large screens): live status, hours, address.
const HoursPlate = ({ className }: { className?: string }) => {
  const live = useOpenStatus();

  return (
    <aside aria-label="Öffnungszeiten und Adresse" className={cn("rounded-lg bg-steel-light p-7 text-graphite", className)}>
      <OpenNow />
      <dl className="mt-5 border-t border-steel-line font-display text-[1.125rem] font-semibold">
        {openingHours.map((g) => {
          const isToday = live !== null && g.days.includes(live.clock.day);
          return (
            <div
              key={g.label}
              className={cn(
                "grid grid-cols-[5.5rem_1fr] gap-3 border-b border-steel-line py-2.5",
                isToday ? "font-bold text-ink" : "text-graphite"
              )}
            >
              <dt>{g.short}</dt>
              <dd className={g.periods.length ? undefined : "font-sans text-base font-normal text-slate"}>
                {g.periods.length
                  ? g.periods.map(([o, c]) => (
                      <span key={o} className="block">
                        {o}–{c}
                      </span>
                    ))
                  : "Geschlossen"}
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-5">
        <a
          href={business.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-[1.3125rem] font-bold leading-snug text-ink underline decoration-steel-line decoration-2 underline-offset-4 hover:decoration-brand"
        >
          {business.streetAddress}
          <br />
          {business.postalCode} {business.locality}
        </a>
      </p>
    </aside>
  );
};

export default HoursPlate;
