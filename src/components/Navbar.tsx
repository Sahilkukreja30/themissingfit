import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpeg';

interface NavbarProps {
  onRequestCall: () => void;
}

const Navbar = ({ onRequestCall }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#collection', label: 'Collection' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#policies', label: 'Policies' },
    { href: '#share-outfit', label: 'Share Your Outfit' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi! I am interested in renting an outfit from The Missing Fit.', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-overlay">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="The Missing Fit" 
              className="h-14 w-14 rounded-full object-cover border-2 border-cream/30"
            />
            <span className="hidden sm:block font-display text-xl text-cream">
              The Missing Fit
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-cream transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="whatsapp" size="sm" onClick={handleWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button variant="goldOutline" size="sm" onClick={onRequestCall}>
              <Phone className="h-4 w-4" />
              Request Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cream p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cream/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/80 hover:text-cream transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-cream/20">
                <Button variant="whatsapp" onClick={handleWhatsApp}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </Button>
                <Button variant="goldOutline" onClick={onRequestCall}>
                  <Phone className="h-4 w-4" />
                  Request Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
