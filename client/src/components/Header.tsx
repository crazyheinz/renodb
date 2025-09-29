import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Star, ExternalLink } from "lucide-react";
import logoImage from "@assets/logo_no_background_1759141345043.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="RenoDB Logo" 
              className="h-10 w-auto"
              data-testid="logo-image"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              Diensten
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-reviews"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-gallery"
            >
              Galerij
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2"
              data-testid="button-contact"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-services"
              >
                Diensten
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-reviews"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-gallery"
              >
                Galerij
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 w-fit"
                data-testid="mobile-button-contact"
              >
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}