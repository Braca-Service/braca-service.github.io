import { ArrowRight } from "lucide-react";
import { homePage, servicePages, type PageMeta } from "@/lib/pages";

const RelatedServices = ({ current }: { current: PageMeta }) => {
  const others = servicePages.filter((p) => p.path !== current.path);

  return (
    <section className="py-10 sm:py-14 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">Weitere Leistungen in Luzern</h2>
        <ul className="grid sm:grid-cols-3 gap-3">
          {others.map((p) => (
            <li key={p.path}>
              <a
                href={p.path}
                className="flex items-center justify-between gap-2 bg-card border border-border rounded-xl p-4 font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {p.name} Luzern <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={`${homePage.path}#services`}
              className="flex items-center justify-between gap-2 bg-card border border-border rounded-xl p-4 font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Alle Leistungen <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RelatedServices;
