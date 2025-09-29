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
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="reviews-title">
            Wat klanten zeggen
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="reviews-subtitle">
            Bekijk waarom klanten Hannes zo waarderen
          </p>

          {/* Overall Rating */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex space-x-1">
                {renderStars(5)}
              </div>
              <span className="text-3xl font-bold text-foreground" data-testid="overall-rating">4.94</span>
              <span className="text-lg text-muted-foreground">/5</span>
            </div>
            <p className="text-muted-foreground" data-testid="review-count">
              Gemiddelde evaluatie door 63 klanten
            </p>
            <Badge variant="secondary" className="mt-2" data-testid="repeat-customers">
              6 klanten hebben meerdere keren opnieuw een beroep gedaan op Hannes
            </Badge>
          </div>

          {/* Detailed Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-2xl font-bold text-primary mb-1">{stat.score}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredReviews.map((review, index) => (
            <Card key={index} className="hover-elevate" data-testid={`review-card-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground" data-testid={`review-name-${index}`}>
                      {review.name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`review-date-${index}`}>
                      {review.date}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <Badge variant="outline" className="mb-3" data-testid={`review-service-${index}`}>
                  {review.service}
                </Badge>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 h-4 w-4 text-muted-foreground/30" />
                  <p className="text-sm text-muted-foreground italic pl-4" data-testid={`review-comment-${index}`}>
                    {review.comment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA to Ringtwice */}
        <div className="text-center">
          <div className="bg-muted p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4" data-testid="ringtwice-cta-title">
              Bekijk alle reviews op Ringtwice
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="ringtwice-cta-description">
              Lees alle 63 reviews en boek direct via het Ringtwice platform
            </p>
            <Button 
              asChild
              className="flex items-center space-x-2 mx-auto w-fit"
              data-testid="button-ringtwice"
            >
              <a 
                href="https://ringtwice.be/nl/listworkers/244537?from=marketing&parrainage=HANNESDEB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Bekijk profiel op Ringtwice</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}