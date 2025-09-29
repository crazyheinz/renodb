import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Zap, Hammer, Wrench, Settings } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Schilder",
    description: "Ervaring in binnenhuis schilderen, ramen, deuren, plafonds en gevels.",
    details: [
      "Binnenhuis schilderwerk",
      "Ramen en deuren",
      "Plafonds", 
      "Gevelschildering"
    ]
  },
  {
    icon: Zap,
    title: "Elektricien", 
    description: "Eenvoudige elektriciteitswerken, extra stopcontacten en vernieuwen van verouderde materialen.",
    details: [
      "Extra stopcontacten",
      "Lichtpunten",
      "Verouderde materialen vervangen",
      "Elektrische installaties"
    ]
  },
  {
    icon: Hammer,
    title: "Schrijnwerk",
    description: "Plaatsen van plinten, parket en tegelen tot grootste formaat 90x90.",
    details: [
      "Plinten plaatsen",
      "Parket installatie", 
      "Tegelen (tot 90x90)",
      "Ontkoppelingsmatten"
    ]
  },
  {
    icon: Wrench,
    title: "Loodgieter",
    description: "Radiatoren aansluiten, leidingen aanleggen, inloopdouche of bad installeren.",
    details: [
      "Radiatoren aansluiten",
      "Leidingen aanleggen",
      "Inloopdouche installatie",
      "Badkamer renovatie"
    ]
  },
  {
    icon: Settings,
    title: "Klusjesman",
    description: "Met internet, gezond verstand en 2 rechterhanden praktisch elke klus aanpakken.",
    details: [
      "Diverse klusjes",
      "Probleemoplossing",
      "Algemeen onderhoud",
      "Reparaties"
    ]
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Hoe kan ik jou van dienst zijn?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="services-subtitle">
            Van A tot Z zelf mijn huis gerenoveerd, nu zelfstandig in hoofdberoep. 
            Perfectionist die kwaliteit levert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="hover-elevate" data-testid={`service-card-${index}`}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl" data-testid={`service-title-${index}`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li 
                      key={detailIndex}
                      className="text-sm text-muted-foreground flex items-center"
                      data-testid={`service-detail-${index}-${detailIndex}`}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            data-testid="button-services-contact"
          >
            Vraag een offerte aan
          </Button>
        </div>
      </div>
    </section>
  );
}