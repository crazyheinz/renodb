import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ExternalLink, 
  CheckCircle, 
  Award,
  Shield
} from "lucide-react";

export default function Contact() {
  const handleRingtwiceContact = () => {
    window.open('https://ringtwice.be/nl/listworkers/244537?from=marketing&parrainage=HANNESDEB', '_blank');
    console.log('Redirecting to Ringtwice profile');
  };

  const handlePhoneCall = () => {
    console.log('Phone call initiated');
    // In real implementation, this would open phone dialer
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
            Klaar voor jouw project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-subtitle">
            Neem contact op voor een vrijblijvende offerte. Eerlijk, betrouwbaar en kwaliteitsvol werk gegarandeerd.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="hover-elevate" data-testid="contact-info-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2" data-testid="contact-info-title">
                <Phone className="h-5 w-5 text-primary" />
                <span>Contact informatie</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Location */}
              <div className="flex items-start space-x-3" data-testid="contact-location">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Locatie</h4>
                  <p className="text-muted-foreground">Gent (9000)</p>
                  <p className="text-sm text-muted-foreground">Actief in Gent en omgeving</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3" data-testid="contact-hours">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Werkuren</h4>
                  <p className="text-muted-foreground">Ma-Vr: 8:00 - 18:00</p>
                  <p className="text-sm text-muted-foreground">Weekend: op afspraak</p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Waarom kiezen voor RenoDB?</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2" data-testid="trust-verified">
                    <Shield className="h-4 w-4 text-chart-2" />
                    <span className="text-sm text-muted-foreground">Identiteitskaart gecontroleerd</span>
                  </div>
                  <div className="flex items-center space-x-2" data-testid="trust-phone">
                    <CheckCircle className="h-4 w-4 text-chart-2" />
                    <span className="text-sm text-muted-foreground">Telefoonnummer gecontroleerd</span>
                  </div>
                  <div className="flex items-center space-x-2" data-testid="trust-pro">
                    <Award className="h-4 w-4 text-chart-2" />
                    <span className="text-sm text-muted-foreground">Geverifieerd Pro op Ringtwice</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center" data-testid="quick-stat-rating">
                  <div className="text-xl font-bold text-primary">4.94/5</div>
                  <div className="text-xs text-muted-foreground">Score</div>
                </div>
                <div className="text-center" data-testid="quick-stat-reviews">
                  <div className="text-xl font-bold text-primary">63</div>
                  <div className="text-xs text-muted-foreground">Reviews</div>
                </div>
                <div className="text-center" data-testid="quick-stat-repeat">
                  <div className="text-xl font-bold text-primary">6</div>
                  <div className="text-xs text-muted-foreground">Terugkerend</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <Card className="hover-elevate" data-testid="contact-methods-card">
            <CardHeader>
              <CardTitle data-testid="contact-methods-title">Contact opnemen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Ringtwice Contact (Primary) */}
              <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Badge className="bg-chart-2 text-white">Aanbevolen</Badge>
                </div>
                <h4 className="font-semibold text-foreground mb-2" data-testid="ringtwice-contact-title">
                  Boek via Ringtwice
                </h4>
                <p className="text-sm text-muted-foreground mb-4" data-testid="ringtwice-contact-description">
                  Veilig boeken via het platform, volledige bescherming en garantie
                </p>
                <Button 
                  onClick={handleRingtwiceContact}
                  className="w-full flex items-center justify-center space-x-2"
                  data-testid="button-ringtwice-contact"
                >
                  <span>Boek op Ringtwice</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              {/* Direct Contact */}
              <div className="p-6 bg-muted rounded-lg">
                <h4 className="font-semibold text-foreground mb-2" data-testid="direct-contact-title">
                  Direct contact
                </h4>
                <p className="text-sm text-muted-foreground mb-4" data-testid="direct-contact-description">
                  Voor vragen of spoedgevallen
                </p>
                <Button 
                  variant="outline"
                  onClick={handlePhoneCall}
                  className="w-full flex items-center justify-center space-x-2"
                  data-testid="button-phone-contact"
                >
                  <Phone className="h-4 w-4" />
                  <span>Bel direct</span>
                </Button>
              </div>

              {/* Services Reminder */}
              <div className="p-4 bg-card rounded-lg border">
                <h5 className="font-medium text-foreground mb-2" data-testid="services-reminder-title">
                  Mijn specialiteiten:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Schilderwerk',
                    'Elektriciteit', 
                    'Schrijnwerk',
                    'Loodgieterij',
                    'Kluswerk',
                    'Informatica'
                  ].map((service, index) => (
                    <Badge 
                      key={service} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`service-tag-${index}`}
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground" data-testid="response-time">
                  <strong>Snelle reactie:</strong> Meestal binnen 24 uur antwoord
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4" data-testid="bottom-cta-text">
            "Perfectionist die zich er niet rap rap vanaf maakt"
          </p>
          <Button 
            size="lg"
            onClick={handleRingtwiceContact}
            className="flex items-center space-x-2 mx-auto"
            data-testid="button-bottom-cta"
          >
            <span>Start jouw project</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}