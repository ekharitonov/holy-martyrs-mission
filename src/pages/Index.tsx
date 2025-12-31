import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProgressSection from '@/components/ProgressSection';
import StorySection from '@/components/StorySection';
import VisionSection from '@/components/VisionSection';
import DonationSection from '@/components/DonationSection';
import WaysToHelpSection from '@/components/WaysToHelpSection';
import TrustSection from '@/components/TrustSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProgressSection />
          <StorySection />
          <VisionSection />
          <DonationSection />
          <WaysToHelpSection />
          <TrustSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
