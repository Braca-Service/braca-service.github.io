import { MapPin } from "lucide-react";
import HeroShell from "@/components/HeroShell";
import CallButton from "@/components/CallButton";
import OpenNow from "@/components/OpenNow";
import HoursPlate from "@/components/HoursPlate";
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
    <HeroShell>
      <nav aria-label="Breadcrumb" className="mb-5 text-[0.9375rem] text-white/70 sm:mb-8">
        <ol className="flex items-center gap-2">
          <li>
            <a href={homePage.path} className="underline-offset-4 hover:text-white hover:underline">
              {homePage.name}
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-bold text-white">
            {page.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-x-8 gap-y-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h1 className="text-[clamp(2rem,1.3rem+3vw,3.75rem)] leading-[1.04] tracking-[-0.01em]">{heading}</h1>
          <p className="mt-4 max-w-[36rem] text-white/80 sm:mt-6 sm:text-[1.3125rem] sm:leading-normal">{intro}</p>

          <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-baseline gap-3 font-bold">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 translate-y-[-0.1em] bg-brass" />
                {h}
              </li>
            ))}
          </ul>

          <OpenNow onInk className="mt-6 lg:hidden" />

          {/* On phones the fixed call bar at the bottom carries these two actions. */}
          <div className="mt-8 hidden flex-wrap gap-3 sm:flex">
            <CallButton />
            <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-quiet">
              <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{business.streetAddress}, Luzern</span>
            </a>
          </div>
        </div>

        <HoursPlate className="hidden lg:col-span-4 lg:col-start-9 lg:block" />
      </div>
    </HeroShell>
  );
};

export default LandingHero;
