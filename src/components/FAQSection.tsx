import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/business";

// Native <details> so the answers are part of the static HTML that
// search engines and AI agents read, even without JavaScript.
const FAQSection = () => {
  return (
    <section id="faq" className="scroll-mt-20 py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Häufige Fragen
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Antworten auf die Fragen, die uns Kundinnen und Kunden am häufigsten stellen.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faq.map((item) => (
            <details key={item.question} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base sm:text-lg font-semibold hover:underline [&::-webkit-details-marker]:hidden">
                <h3>{item.question}</h3>
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
