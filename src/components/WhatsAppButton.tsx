import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917225994009?text=Hi! I am interested in renting an outfit from The Missing Fit.', '_blank');
  };

  return (
    <Button
      variant="whatsapp"
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 animate-float"
      onClick={handleWhatsApp}
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
