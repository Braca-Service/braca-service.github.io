// Practical facts people want before they come by.
const facts = [
  {
    term: "Schliesssysteme",
    value: "Verifizierter Partner von dormakaba, Sea, EVVA, Abus und VOX",
  },
  {
    term: "Wartezeit",
    value: "Meist sofort fertig, während Sie warten",
    note: "Express-Service für Schlüssel, Absätze und Batteriewechsel.",
  },
  {
    term: "Preise",
    value: "Transparent kalkuliert, ohne Überraschungen",
    note: "Der Autoschlüsseltest ist kostenlos.",
  },
  {
    term: "Bezahlen",
    value: "TWINT oder bar",
    note: "Kartenzahlung ist derzeit nicht möglich.",
  },
];

const TrustSection = () => (
  <section className="on-ink py-16 sm:py-24">
    <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-x-8">
      <h2 className="heading-section lg:col-span-4">Gut zu wissen, bevor Sie kommen</h2>
      <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-8">
        {facts.map((fact) => (
          <div key={fact.term} className="border-t border-white/25 pt-4">
            <dt className="text-[0.9375rem] text-white/65">{fact.term}</dt>
            <dd className="mt-1.5">
              <span className="block font-display text-[1.3125rem] font-semibold leading-snug text-white sm:text-[1.5rem]">
                {fact.value}
              </span>
              {fact.note && <span className="mt-2 block text-white/75">{fact.note}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default TrustSection;
