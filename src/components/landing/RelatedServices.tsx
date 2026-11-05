import { homePage, servicePages, type PageMeta } from "@/lib/pages";

const RelatedServices = ({ current }: { current: PageMeta }) => {
  const links = [
    ...servicePages.filter((p) => p.path !== current.path).map((p) => ({ href: p.path, label: `${p.name} Luzern` })),
    { href: `${homePage.path}#services`, label: "Alle Leistungen" },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="wrap">
        <h2 className="heading-sub">Weitere Leistungen in Luzern</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg border-2 border-steel-line px-5 py-4 font-display text-[1.3125rem] font-bold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RelatedServices;
