import { Button } from '@/components/ui/button';
import { Heart, Recycle, DollarSign, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Give Your Outfit New Life',
    description: 'Your beautiful pieces deserve to be worn and celebrated again.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Fashion',
    description: 'Join the movement towards conscious, sustainable fashion choices.',
  },
  {
    icon: DollarSign,
    title: 'Earn From Your Closet',
    description: 'Turn unused outfits into earnings while helping others look fabulous.',
  },
];

const ShareOutfitSection = () => {
  const handleContact = () => {
    const message = "Hi! I'd like to share my outfit with The Missing Fit. Can you tell me more about the process?";
    window.open(`https://wa.me/917225994009?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="share-outfit" className="py-20 bg-gradient-to-br from-cream via-champagne to-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Share Your <span className="text-gradient-gold">Beautiful Outfits</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have stunning pieces sitting in your wardrobe? Let them shine again. 
              We welcome women who wish to pass on their unused or once-worn outfits and jewelry.
            </p>
            <div className="section-divider mt-6" />
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-elegant transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl text-cream mb-4">
              Ready to Share?
            </h3>
            <p className="text-cream/70 mb-8 max-w-xl mx-auto">
              We accept lehengas, sarees, gowns, and jewelry in excellent condition. 
              Reach out to us for a consultation — we'd love to see your pieces.
            </p>
            <Button variant="hero" size="xl" onClick={handleContact}>
              <MessageCircle className="h-5 w-5" />
              Let's Talk About Your Outfit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareOutfitSection;
