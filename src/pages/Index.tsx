import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import CarKeySection from "@/components/CarKeySection";
import ServicesGrid from "@/components/ServicesGrid";
import OpeningHours from "@/components/OpeningHours";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

const Index = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col pb-20 sm:pb-0">
        <Header />
        <main className="flex-1">
          <Hero />
          <CarKeySection />
          <TrustSection />
          <ServicesGrid />
          <OpeningHours />
          <FAQSection />
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    </>
  );
};

export default Index;
