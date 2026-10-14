import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import CarKeySection from "@/components/CarKeySection";
import ServicesGrid from "@/components/ServicesGrid";
import OpeningHours from "@/components/OpeningHours";
import FAQSection from "@/components/FAQSection";
import { homePage } from "@/lib/pages";

const Index = () => (
  <PageLayout page={homePage}>
    <Hero />
    <CarKeySection />
    <TrustSection />
    <ServicesGrid />
    <OpeningHours />
    <FAQSection />
  </PageLayout>
);

export default Index;
