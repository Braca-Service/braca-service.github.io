import { Plus } from "lucide-react";
import { business, faq, type FaqTopic } from "@/lib/business";

// Native <details> so the answers are part of the static HTML that
// search engines and AI agents read, even without JavaScript.
const FAQSection = ({ topic, heading = "Häufige Fragen" }: { topic?: FaqTopic; heading?: string }) => {
  const items = topic ? faq.filter((f) => f.topics.includes(topic)) : faq;

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24">
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 className="heading-section">{heading}</h2>
            <p className="mt-4 max-w-[26rem] text-slate">
              Antworten auf die Fragen, die uns Kundinnen und Kunden am häufigsten stellen. Ihre Frage ist nicht
              dabei? Rufen Sie an:{" "}
              <a href={`tel:${business.phoneHref}`} className="text-link whitespace-nowrap">
                {business.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t-2 border-ink lg:col-span-7">
          {items.map((item) => (
            <details key={item.question} className="faq-item group border-b border-steel-line">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 sm:py-6">
                <h3 className="text-[1.125rem] font-semibold leading-snug group-hover:text-brand sm:text-[1.3125rem]">
                  {item.question}
                </h3>
                <Plus
                  aria-hidden="true"
                  className="mt-0.5 h-6 w-6 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                />
              </summary>
              <p className="max-w-[40rem] pb-6 pr-10 text-slate">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
