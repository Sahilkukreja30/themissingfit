import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi! I have a query about The Missing Fit.', '_blank');
  };

  return (
    <footer id="contact" className="bg-primary text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="The Missing Fit" 
                className="h-16 w-16 rounded-full object-cover border-2 border-cream/30"
              />
            </div>
            <p className="font-display text-xl mb-2">The Missing Fit</p>
            <p className="text-cream/60 text-sm italic mb-4">Because one style is never enough</p>
            <p className="text-cream/70 text-sm leading-relaxed">
              Premium fashion rentals for women who love to celebrate every moment in style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#collection" className="text-cream/70 hover:text-cream transition-colors">
                  Collection
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-cream/70 hover:text-cream transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#policies" className="text-cream/70 hover:text-cream transition-colors">
                  Rental Policies
                </a>
              </li>
              <li>
                <a href="#share-outfit" className="text-cream/70 hover:text-cream transition-colors">
                  Share Your Outfit
                </a>
              </li>
              <li>
                <a href="/admin" className="text-cream/70 hover:text-cream transition-colors">
                  Admin Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-cream">+91 98765 43210</p>
                  <p className="text-cream/60 text-sm">Call or WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-cream">hello@themissingfit.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-cream">Mumbai, Maharashtra</p>
                  <p className="text-cream/60 text-sm">By appointment only</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-cream">10 AM - 7 PM</p>
                  <p className="text-cream/60 text-sm">Monday to Saturday</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-lg mb-6">Get In Touch</h4>
            <p className="text-cream/70 text-sm mb-6">
              Have questions? We're here to help you find the perfect outfit for your special occasion.
            </p>
            <div className="space-y-3">
              <Button variant="whatsapp" className="w-full" onClick={handleWhatsApp}>
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
              <Button 
                variant="goldOutline" 
                className="w-full"
                onClick={() => window.location.href = 'tel:+919876543210'}
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>
            
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a 
                href="https://instagram.com/themissingfit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
            <p>© 2026 The Missing Fit. All rights reserved.</p>
            <p>Crafted with ♡ for women who love to celebrate</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
