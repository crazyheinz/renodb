import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, MapPin, Award, Users, CheckCircle, ExternalLink } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2 text-sm font-medium shadow-sm" data-testid="badge-location">
              <MapPin className="h-4 w-4" />
              <span>Gent (9000)</span>
            </Badge>
            <a 
              href="https://ringtwice.be/nl/listworkers/244537?from=marketing&parrainage=HANNESDEB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-chart-2 text-white px-4 py-2 text-sm font-semibold rounded-md hover-elevate cursor-pointer transition-all duration-200 shadow-sm"
              data-testid="badge-rating"
            >
              <Star className="h-4 w-4 fill-current" />
              <span>4.94/5 - 63 reviews</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <Badge variant="outline" className="flex items-center space-x-2 px-4 py-2 text-sm font-medium shadow-sm" data-testid="badge-verified">
              <CheckCircle className="h-4 w-4" />
              <span>Geverifieerd Pro</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight" data-testid="hero-title">
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">RenoDB</span>
            <br />
            <span className="text-4xl md:text-6xl font-semibold">Professionele Renovatie in Gent</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed" data-testid="hero-subtitle">
            Betrouwbare vakman met oog voor detail. Vanuit mijn IT-achtergrond koos ik bewust voor werken met mijn handen. Ik lever kwaliteit, geen haastwerk.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="text-center bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-sm hover-elevate transition-all duration-200" data-testid="stat-rating">
              <div className="text-4xl font-bold text-primary mb-2">4.94/5</div>
              <div className="text-sm font-medium text-muted-foreground">Ringtwice score</div>
            </div>
            <div className="text-center bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-sm hover-elevate transition-all duration-200" data-testid="stat-reviews">
              <div className="text-4xl font-bold text-primary mb-2">63</div>
              <div className="text-sm font-medium text-muted-foreground">Tevreden klanten</div>
            </div>
            <div className="text-center bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-sm hover-elevate transition-all duration-200" data-testid="stat-repeat">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-sm font-medium text-muted-foreground">Terugkerende klanten</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="flex items-center space-x-3 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              data-testid="button-contact-cta"
            >
              <Phone className="h-5 w-5" />
              <span>Contact voor offerte</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              data-testid="button-services-cta"
            >
              Bekijk diensten
            </Button>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
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
                className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-border/30 text-center hover-elevate transition-all duration-200 shadow-sm hover:shadow-md"
                data-testid={`service-preview-${service.toLowerCase()}`}
              >
                <div className="text-sm font-semibold text-card-foreground">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}