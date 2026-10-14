import { Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { homePage, servicePages, type PageMeta } from "@/lib/pages";

const notFoundPage: PageMeta = {
  path: "/404",
  name: "Seite nicht gefunden",
  title: "Seite nicht gefunden | Braca Service Luzern",
  description: "Diese Seite gibt es nicht.",
};

const NotFound = () => (
  <PageLayout page={notFoundPage}>
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Seite nicht gefunden</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Diese Seite gibt es leider nicht. Vielleicht suchen Sie eine dieser Seiten:
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-8">
          {[homePage, ...servicePages].map((p) => (
            <li key={p.path}>
              <a href={p.path} className="inline-block px-4 py-2 rounded-xl border border-border font-semibold text-primary hover:border-primary">
                {p.name}
              </a>
            </li>
          ))}
        </ul>
        <Button size="lg" className="rounded-xl font-semibold" asChild>
          <a href={`tel:${business.phoneHref}`} className="inline-flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>{business.phoneDisplay}</span>
          </a>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default NotFound;
