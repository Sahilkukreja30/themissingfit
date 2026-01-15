import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CollectionSection from '@/components/CollectionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PoliciesSection from '@/components/PoliciesSection';
import ShareOutfitSection from '@/components/ShareOutfitSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import RequestCallModal from '@/components/RequestCallModal';

const Index = () => {
  const [isRequestCallOpen, setIsRequestCallOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onRequestCall={() => setIsRequestCallOpen(true)} />
      <HeroSection />
      <CollectionSection />
      <HowItWorksSection />
      <PoliciesSection />
      <ShareOutfitSection />
      <Footer />
      <WhatsAppButton />
      <RequestCallModal 
        isOpen={isRequestCallOpen} 
        onClose={() => setIsRequestCallOpen(false)} 
      />
    </div>
  );
};

export default Index;
