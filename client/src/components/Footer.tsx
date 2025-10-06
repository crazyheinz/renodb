import { Button } from "@/components/ui/button";
import { ExternalLink, Star, MapPin } from "lucide-react";
import logoImage from "@assets/logo_no_background_1759141345043.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="RenoDB - Professionele Renovatiediensten" 
                className="h-12 w-auto"
                data-testid="footer-logo"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs" data-testid="footer-description">
              Professionele renovatiediensten in Gent. IT-achtergrond, maar liever met de handen bezig. 
              Perfectionist in elke klus.
            </p>
            <div className="flex items-center space-x-2" data-testid="footer-location">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Gent (9000)</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground" data-testid="footer-services-title">
              Diensten
            </h4>
            <ul className="space-y-2">
              {[
                'Schilderwerk',
                'Elektriciteit',
                'Schrijnwerk', 
                'Loodgieterij',
                'Kluswerk',
                'Informatica'
              ].map((service, index) => (
                <li key={service}>
                  <button 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    onClick={() => {
                      const element = document.getElementById('services');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    data-testid={`footer-service-${index}`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Proof */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground" data-testid="footer-contact-title">
              Contact & Reviews
            </h4>
            
            {/* Ringtwice Link */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2" data-testid="footer-rating">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-foreground">4.94/5</span>
                <span className="text-sm text-muted-foreground">(63 reviews)</span>
              </div>
              
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="flex items-center space-x-2 w-fit"
                data-testid="footer-ringtwice-button"
              >
                <a 
                  href="https://ringtwice.be/nl/listworkers/244537?from=marketing&parrainage=HANNESDEB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Bekijk op Ringtwice</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="pt-2">
              <Button 
                size="sm"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                data-testid="footer-contact-button"
              >
                Contact opnemen
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-1">
            <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
              © {currentYear} RenoDB. Alle rechten voorbehouden.
            </p>
            <p className="text-xs text-muted-foreground" data-testid="footer-btw">
              BTW: BE0790636904
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-back-to-top"
            >
              Terug naar boven
            </button>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground" data-testid="footer-hannes">
              Door Hannes - Zelfstandig vakman
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}