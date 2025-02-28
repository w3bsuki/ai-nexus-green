import { MainLayout } from "@/components/layout/MainLayout";
import { 
  HeroSection, 
  FeaturesSection, 
  TechnologySection, 
  TestimonialsSection, 
  InvestorsSection, 
  ContactSection,
  AboutSection,
  CTASection
} from "@/components/sections";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TechnologySection />
      <TestimonialsSection />
      <InvestorsSection />
      <CTASection />
      <ContactSection />
    </MainLayout>
  );
}
