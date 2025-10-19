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
      <SEOHead />
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
