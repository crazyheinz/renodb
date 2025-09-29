import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Quote } from "lucide-react";

// todo: remove mock functionality - replace with real reviews data
const featuredReviews = [
  {
    name: "Adriaana C.",
    date: "13/06/2025",
    service: "Ventilatie-oplossing",
    rating: 5,
    comment: "Wauw! Wat een fantastische vakman. Hij heeft zijn werk uitzonderlijk goed gedaan, met veel precisie en netheid. We zijn enorm tevreden en hopen snel weer gebruik te maken van zijn vakmanschap! Dankjewel Hannes!"
  },
  {
    name: "Sam D.", 
    date: "Recent",
    service: "Extra stopcontacten",
    rating: 5,
    comment: "Als je een vakman zoekt die zaken enorm proper afwerkt, is dit je man. De kwaliteit is absoluut en Hannes is een zeer eerlijke en vlotte werkman. Denkt met je mee en vraagt naar je input, zodat alles naar wens is. Topcommunicatie, topwerk."
  },
  {
    name: "Cleo J.",
    date: "14/08/2025", 
    service: "Herstel buitenmuur",
    rating: 5,
    comment: "Super. Zeer vlotte, heldere communicatie, doordachte oplossingen voor de problemen in mijn huis die moesten opgelost worden, en zorgvuldig werk. Ik zou Hannes absoluut aanraden!"
  },
  {
    name: "Tom D.",
    date: "01/08/2025",
    service: "Floorify vinyl vloer", 
    rating: 5,
    comment: "We zijn heel tevreden van onze Floorify tegel vloer! Heel mooi resultaat, verzorgd en kwalitatief afgewerkt en zeer goede en correcte communicatie met Hannes, zeker aan te raden!"
  },
  {
    name: "Hilde V.",
    date: "24/09/2025",
    service: "Parketvloer behandelen",
    rating: 5, 
    comment: "Hannes komt zijn afspraken na. Niet alle taken bleken nodig en Hannes heeft dan ook zijn factuur navenant aangepast. Snelle dienstverlening en vlotte correcte communicatie."
  },
  {
    name: "Bianca D.",
    date: "31/03/2025",
    service: "Roofing tuinhuis",
    rating: 5,
    comment: "Zeer tevreden. Voert niet zomaar iets uit maar zoekt echt naar de oorzaak van het probleem om zo een correcte oplossing voor te stellen. Geeft deskundig advies. Kortom, wij zijn héél tevreden over het uitgevoerde werk."
  }
];

const stats = [
  { label: "Kwaliteit van dienst", score: 4.8 },
  { label: "Communicatie", score: 4.8 },
  { label: "Stiptheid", score: 4.9 },
  { label: "Prijs-kwaliteit", score: 4.6 }
];

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" data-testid="reviews-title">
            Wat klanten zeggen
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="reviews-subtitle">
            Bekijk waarom klanten Hannes zo waarderen
          </p>

          {/* Overall Rating */}
          <div className="flex flex-col items-center mb-16">
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="flex space-x-1">
                  {renderStars(5)}
                </div>
                <span className="text-4xl font-bold text-primary" data-testid="overall-rating">4.94</span>
                <span className="text-xl text-muted-foreground">/5</span>
              </div>
              <p className="text-muted-foreground text-lg mb-4" data-testid="review-count">
                Gemiddelde evaluatie door 63 klanten
              </p>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium" data-testid="repeat-customers">
                6 klanten hebben meerdere keren opnieuw een beroep gedaan op Hannes
              </Badge>
            </div>
          </div>

          {/* Detailed Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center bg-card/40 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover-elevate transition-all duration-200" 
                data-testid={`stat-${index}`}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.score}</div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredReviews.map((review, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 shadow-sm hover:shadow-lg border-border/50 bg-card/60 backdrop-blur-sm" 
              data-testid={`review-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h4 className="font-semibold text-foreground text-lg" data-testid={`review-name-${index}`}>
                      {review.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-medium" data-testid={`review-date-${index}`}>
                      {review.date}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <Badge variant="outline" className="mb-4 px-3 py-1 font-medium" data-testid={`review-service-${index}`}>
                  {review.service}
                </Badge>
                
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 h-5 w-5 text-primary/30" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6" data-testid={`review-comment-${index}`}>
                    "{review.comment}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA to Ringtwice */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm p-10 rounded-2xl max-w-3xl mx-auto border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold mb-4" data-testid="ringtwice-cta-title">
              Bekijk alle reviews op Ringtwice
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed" data-testid="ringtwice-cta-description">
              Lees alle 63 reviews en boek direct via het Ringtwice platform
            </p>
            <Button 
              asChild
              size="lg"
              className="flex items-center space-x-3 mx-auto w-fit px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              data-testid="button-ringtwice"
            >
              <a 
                href="https://ringtwice.be/nl/listworkers/244537?from=marketing&parrainage=HANNESDEB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Bekijk profiel op Ringtwice</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}