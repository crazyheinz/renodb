import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, MapPin, Award, Users, CheckCircle } from "lucide-react";
import logoImage from "@assets/logo_no_background_1759141345043.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logoImage} 
              alt="RenoDB Logo" 
              className="h-24 w-auto mx-auto mb-6"
              data-testid="hero-logo"
            />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="flex items-center space-x-1" data-testid="badge-location">
              <MapPin className="h-3 w-3" />
              <span>Gent (9000)</span>
            </Badge>
            <Badge className="flex items-center space-x-1 bg-chart-2 text-white" data-testid="badge-rating">
              <Star className="h-3 w-3 fill-current" />
              <span>4.94/5 - 63 reviews</span>
            </Badge>
            <Badge variant="outline" className="flex items-center space-x-1" data-testid="badge-verified">
              <CheckCircle className="h-3 w-3" />
              <span>Geverifieerd Pro</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            Professionele Renovatie
            <br />
            <span className="text-primary">in Gent</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
            IT-achtergrond, maar liever met de handen bezig. Perfectionist die zich er niet rap rap vanaf maakt.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="text-center" data-testid="stat-rating">
              <div className="text-3xl font-bold text-primary mb-1">4.94/5</div>
              <div className="text-sm text-muted-foreground">Gemiddelde score</div>
            </div>
            <div className="text-center" data-testid="stat-reviews">
              <div className="text-3xl font-bold text-primary mb-1">63</div>
              <div className="text-sm text-muted-foreground">Tevreden klanten</div>
            </div>
            <div className="text-center" data-testid="stat-repeat">
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">Terugkerende klanten</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="flex items-center space-x-2"
              data-testid="button-contact-cta"
            >
              <Phone className="h-5 w-5" />
              <span>Contact voor offerte</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              data-testid="button-services-cta"
            >
              Bekijk diensten
            </Button>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              'Schilderwerk',
              'Elektriciteit', 
              'Schrijnwerk',
              'Loodgieterij',
              'Kluswerk',
              'Informatica'
            ].map((service) => (
              <div 
                key={service}
                className="bg-card p-4 rounded-md border text-center hover-elevate"
                data-testid={`service-preview-${service.toLowerCase()}`}
              >
                <div className="text-sm font-medium text-card-foreground">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}