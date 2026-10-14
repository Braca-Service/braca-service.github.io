import { Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { homePage, type PageMeta } from "@/lib/pages";

type Props = {
  page: PageMeta;
  heading: string;
  intro: string;
  highlights: string[];
};

const LandingHero = ({ page, heading, intro, highlights }: Props) => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-8 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 text-sm text-primary-foreground/80">
          <ol className="flex items-center gap-1">
            <li>
              <a href={homePage.path} className="hover:underline">
                {homePage.name}
              </a>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-4 h-4" />
            </li>
            <li aria-current="page" className="font-medium text-primary-foreground">
              {page.name}
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 leading-tight">{heading}</h1>
          <p className="text-base sm:text-xl mb-5 sm:mb-8 text-primary-foreground/95 leading-snug sm:leading-relaxed">
            {intro}
          </p>

          <ul className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {highlights.map((h) => (
              <li
                key={h}
                className="glass-effect border border-primary-foreground/20 rounded-full px-3 py-1.5 text-sm font-medium"
              >
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-brand-xl text-base sm:text-lg px-6 sm:px-8 h-11 sm:h-14 rounded-xl font-semibold"
              asChild
            >
              <a href={`tel:${business.phoneHref}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{business.phoneDisplay}</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 text-base sm:text-lg px-6 sm:px-8 h-11 sm:h-14 rounded-xl font-semibold"
              asChild
            >
              <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{business.streetAddress}, Luzern</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
