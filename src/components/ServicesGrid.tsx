import { services } from "@/lib/services";

// The two trades with their own pages get room; the rest form a compact index.
const main = services.filter((s) => s.href);
const more = services.filter((s) => !s.href);

const ServicesGrid = () => {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-24">
      <div className="wrap">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <h2 className="heading-section lg:col-span-6">Unsere Leistungen in Luzern</h2>
          <p className="lead lg:col-span-5 lg:col-start-8">
            Schlüsselservice, Schuhreparaturen, Gravuren und mehr. Meist sofort erledigt, fachgerecht und fair
            bepreist.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2">
          {main.map((service) => (
            <article key={service.title} className="flex flex-col rounded-lg bg-steel px-5 py-7 sm:p-9">
              <h3 className="text-[1.75rem] leading-tight sm:text-[2.25rem]">{service.title}</h3>
              <p className="mt-2 text-slate">{service.description}</p>
              <ul className="mt-6 list-[square] space-y-2 pl-5 marker:text-brand">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={service.href} className="text-link mt-auto self-start pt-7">
                {service.linkLabel}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((service) => (
            <article key={service.title} className="border-t-2 border-ink pt-4">
              <h3 className="heading-sub">{service.title}</h3>
              <p className="mt-1.5 text-slate">{service.description}</p>
              <ul className="mt-4 list-[square] space-y-1.5 pl-5 text-[1rem] marker:text-brand">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
