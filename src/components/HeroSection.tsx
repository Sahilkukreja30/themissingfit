import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-chocolate/95 via-chocolate/80 to-chocolate/60" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold-light/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-cream text-sm font-medium">Premium Fashion Rentals</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6 animate-slide-up">
            Because One Style is{' '}
            <span className="text-gradient-gold italic">Never Enough</span>
          </h1>

          {/* Subheading */}
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Discover a curated collection of exquisite lehengas, sarees, and Indo-western wear. 
            Look stunning for every occasion — without the commitment of ownership.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#collection">
                Explore Collection
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#how-it-works">
                How It Works
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-cream/20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <p className="text-3xl font-display text-accent">50+</p>
              <p className="text-cream/60 text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display text-accent">50+</p>
              <p className="text-cream/60 text-sm">Designer Outfits</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display text-accent">4.5★</p>
              <p className="text-cream/60 text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
