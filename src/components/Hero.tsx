import { MapPin } from "lucide-react";
import HeroShell from "@/components/HeroShell";
import CallButton from "@/components/CallButton";
import OpenNow from "@/components/OpenNow";
import HoursPlate from "@/components/HoursPlate";
import { business } from "@/lib/business";

const Hero = () => (
  <HeroShell>
    <div className="grid gap-x-8 gap-y-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <h1 className="text-[clamp(2.125rem,1.25rem+3.7vw,4.5rem)] leading-[1.02] tracking-[-0.015em]">
          Schlüsseldienst, Autoschlüssel &amp; Schuhmacher in&nbsp;Luzern
        </h1>

        <p className="mt-4 max-w-[34rem] text-white/80 sm:mt-6 sm:text-[1.3125rem] sm:leading-normal">
          Wir kopieren und reparieren Autoschlüssel jeder Marke, auch Keyless. Dazu Schlüssel nachmachen,
          Schuhreparaturen und Gravuren, vieles während Sie warten.
        </p>

        <OpenNow onInk className="mt-5 lg:hidden" />

        {/* On phones the fixed call bar at the bottom carries these two actions. */}
        <div className="mt-8 hidden flex-wrap gap-3 sm:flex">
          <CallButton />
          <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-quiet">
            <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Route planen</span>
          </a>
        </div>

        <p className="mt-8 hidden text-[0.9375rem] text-white/65 sm:block">
          Verifizierter Partner von dormakaba, Sea, EVVA, Abus und VOX.
        </p>
      </div>

      <HoursPlate className="hidden lg:col-span-4 lg:col-start-9 lg:block" />
    </div>
  </HeroShell>
);

export default Hero;
