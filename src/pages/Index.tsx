import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesGrid from "@/components/ServicesGrid";
import OpeningHours from "@/components/OpeningHours";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Schuhmacher Luzern — Braca Multi Service | Schuhreparatur & Schlüssel"
        description="Schuhmacher in Luzern — Braca Multi Service: Absatz- und Sohlenreparatur, Schuhpflege und Schlüsselservice. Schnell, professionell und zuverlässig."
        faq={[
          { question: 'Wie lange dauert eine Schuhreparatur?', answer: 'Kleine Reparaturen dauern meist 30–60 Minuten; Besohlen oder aufwändigere Arbeiten können 1–3 Werktage benötigen.' },
          { question: 'Bietet ihr Express-Service an?', answer: 'Ja — viele Reparaturen (Absatz, Batteriewechsel, Schlüsselduplikate) erledigen wir oft sofort, während Sie warten.' },
          { question: 'Akzeptiert ihr Markenschuhe und orthopädische Anpassungen?', answer: 'Wir reparieren Markenschuhe professionell und bieten orthopädische Anpassungen nach Bedarf an.' },
          { question: 'Wie kann ich anrufen oder euch besuchen?', answer: 'Rufen Sie an: +41 76 401 88 42 oder kommen Sie vorbei: Luzernerstrasse 117, 6014 Luzern. Wir freuen uns auf Ihren Besuch.' }
        ]}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <TrustSection />
          <ServicesGrid />
          <OpeningHours />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
