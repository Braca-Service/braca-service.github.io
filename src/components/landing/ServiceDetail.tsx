import { CheckCircle } from "lucide-react";
import type { Service } from "@/lib/services";

const ServiceDetail = ({ heading, intro, service }: { heading: string; intro: string; service: Service }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">{heading}</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">{intro}</p>
        <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-3 bg-card border border-border/50 rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-sm sm:text-base text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceDetail;
