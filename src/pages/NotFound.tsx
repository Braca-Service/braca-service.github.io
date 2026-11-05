import PageLayout from "@/components/PageLayout";
import HeroShell from "@/components/HeroShell";
import CallButton from "@/components/CallButton";
import { homePage, servicePages, type PageMeta } from "@/lib/pages";

const notFoundPage: PageMeta = {
  path: "/404",
  name: "Seite nicht gefunden",
  title: "Seite nicht gefunden | Braca Service Luzern",
  description: "Diese Seite gibt es nicht.",
  noindex: true,
};

const NotFound = () => (
  <PageLayout page={notFoundPage}>
    <HeroShell>
      <h1 className="text-[clamp(2rem,1.3rem+3vw,3.75rem)] leading-[1.04]">Seite nicht gefunden</h1>
      <p className="mt-4 max-w-[36rem] text-white/80 sm:text-[1.3125rem]">
        Diese Adresse gibt es auf bracaservice.ch nicht. Wählen Sie eine dieser Seiten oder rufen Sie uns an.
      </p>
      <CallButton className="mt-8 hidden sm:inline-flex" />
    </HeroShell>
    <section className="py-14 sm:py-20">
      <div className="wrap">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[homePage, ...servicePages].map((p) => (
            <li key={p.path}>
              <a
                href={p.path}
                className="block rounded-lg border-2 border-steel-line px-5 py-4 font-display text-[1.3125rem] font-bold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </PageLayout>
);

export default NotFound;
