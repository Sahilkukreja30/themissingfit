import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Calendar, Shield } from 'lucide-react';
import { Dress } from '@/types/dress';

interface DressDetailModalProps {
  dress: Dress | null;
  isOpen: boolean;
  onClose: () => void;
}

const DressDetailModal = ({ dress, isOpen, onClose }: DressDetailModalProps) => {
  if (!dress) return null;

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in renting the "${dress.name}" from The Missing Fit. Can you help me with the booking?`;
    window.open(`https://wa.me/917225994009?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{dress.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <img
              src={dress.image}
              alt={dress.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge 
                className={dress.isAvailable 
                  ? "bg-accent text-primary" 
                  : "bg-burgundy text-cream"
                }
              >
                {dress.isAvailable ? 'Available Now' : 'Currently Rented'}
              </Badge>
              <Badge variant="outline" className="bg-card/80 backdrop-blur-sm capitalize">
                {dress.category}
              </Badge>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {dress.description}
            </p>

            {/* Pricing Card */}
            <div className="bg-secondary/50 rounded-xl p-5 space-y-4">
              <h4 className="font-display text-lg text-foreground">Rental Pricing</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Outfit Only</span>
                  <span className="text-xl font-semibold text-foreground">
                    ₹{dress.priceWithoutJewelry.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">With Matching Jewelry</span>
                  <span className="text-xl font-semibold text-accent">
                    ₹{dress.priceWithJewelry.toLocaleString()}
                  </span>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Security Deposit</span>
                    </div>
                    <span className="font-medium text-foreground">
                      ₹{dress.securityDeposit.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fully refundable upon safe return
                  </p>
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Available Sizes</h4>
              <div className="flex gap-2 flex-wrap">
                {dress.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 border-2 border-border rounded-lg text-sm font-medium hover:border-accent transition-colors cursor-pointer"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Rental Status */}
            {!dress.isAvailable && dress.rentalPeriods && dress.rentalPeriods.length > 0 && (
              <div className="bg-burgundy/10 rounded-xl p-4 flex items-start gap-3">
                <Calendar className="h-5 w-5 text-burgundy mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Currently Rented</p>
                  <p className="text-sm text-muted-foreground">
                    Available after{' '}
                    {new Date(dress.rentalPeriods[0].endDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button variant="whatsapp" size="lg" className="flex-1" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1"
                onClick={() => window.location.href = 'tel:+917225994009'}
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DressDetailModal;
