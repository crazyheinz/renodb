import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Zap, Hammer, Wrench, Settings, Monitor } from "lucide-react";

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
  },
  {
    icon: Monitor,
    title: "Informatica",
    description: "10tallen jaren ervaring in de IT-sector.",
    details: [
      "Hardware",
      "Software",
      "Blockchain",
      "AI"
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
    <section id="services" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" data-testid="services-title">
            Hoe kan ik jou van dienst zijn?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="services-subtitle">
            Van A tot Z zelf mijn huis gerenoveerd, nu zelfstandig in hoofdberoep. 
            Perfectionist die kwaliteit levert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="hover-elevate transition-all duration-300 shadow-sm hover:shadow-lg border-border/50 bg-card/60 backdrop-blur-sm" 
              data-testid={`service-card-${index}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl w-fit shadow-sm border border-primary/20">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold" data-testid={`service-title-${index}`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li 
                      key={detailIndex}
                      className="text-sm text-muted-foreground flex items-center group"
                      data-testid={`service-detail-${index}-${detailIndex}`}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0 group-hover:bg-primary/80 transition-colors"></span>
                      <span className="group-hover:text-foreground transition-colors">{detail}</span>
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
            className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            data-testid="button-services-contact"
          >
            Vraag een offerte aan
          </Button>
        </div>
      </div>
    </section>
  );
}