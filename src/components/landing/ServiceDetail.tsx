import { Check } from "lucide-react";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

type Props = { heading: string; intro: string; service: Service; tone?: "white" | "steel" };

const ServiceDetail = ({ heading, intro, service, tone = "white" }: Props) => {
  return (
    <section className={cn("py-16 sm:py-24", tone === "steel" && "bg-steel")}>
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <h2 className="heading-section">{heading}</h2>
          <p className="lead mt-4">{intro}</p>
        </div>
        <ul className="border-t-2 border-ink lg:col-span-7 lg:col-start-6">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-4 border-b border-steel-line py-4">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceDetail;
