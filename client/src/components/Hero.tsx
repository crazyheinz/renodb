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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-20" aria-label="Introductie">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="flex items-center space-x-1" data-testid="badge-location">
              <MapPin className="h-3 w-3" />
              <span>Gent (9000)</span>
            </Badge>
            <a 
              href="https://ringtwice.be/nl/listworkers/244537?from=marketing&parrainage=HANNESDEB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 bg-chart-2 text-white px-2.5 py-0.5 text-xs font-semibold rounded-md hover-elevate cursor-pointer transition-colors"
              data-testid="badge-rating"
            >
              <Star className="h-3 w-3 fill-current" />
              <span>4.94/5 - 63 reviews</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <Badge variant="outline" className="flex items-center space-x-1" data-testid="badge-verified">
              <CheckCircle className="h-3 w-3" />
              <span>Geverifieerd Pro</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            <span className="text-primary text-5xl md:text-7xl">RenoDB</span>{" "}
            <span className="text-3xl md:text-5xl font-normal">uw specialist in hoogwaardige renovaties</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-semibold" data-testid="hero-subtitle-tagline">
            Vakmanschap en Precisie voor Elk Project.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto" data-testid="hero-subtitle">
            Als uw betrouwbare renovatiepartner in Gent garandeer ik een nauwkeurige uitvoering met oog voor detail. Dankzij een achtergrond in IT combineer ik projectbeheer met bewezen, ambachtelijk vakmanschap. Bij RenoDB is kwaliteit de standaard, niet de uitzondering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
}