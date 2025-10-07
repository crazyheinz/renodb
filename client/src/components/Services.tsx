import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Zap, Hammer, Wrench, Settings, Monitor } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Schilderwerk",
    description: "Gespecialiseerd in duurzaam binnen- en buitenschilderwerk. Wij zorgen voor een vlekkeloze en esthetische afwerking van plafonds, muren, ramen, deuren en gevels.",
    details: [
      "Binnenhuis schilderwerk",
      "Ramen en deuren",
      "Plafonds", 
      "Gevelschildering"
    ]
  },
  {
    icon: Zap,
    title: "Elektriciteit", 
    description: "Uitbreiding en modernisering van uw elektrische installatie. Van het aanleggen van extra stopcontacten en lichtpunten tot het vervangen van verouderde systemen, altijd conform de nieuwste veiligheidsnormen.",
    details: [
      "Extra stopcontacten",
      "Lichtpunten",
      "Verouderde materialen vervangen",
      "Elektrische installaties"
    ]
  },
  {
    icon: Hammer,
    title: "Schrijnwerk & Vloeren",
    description: "Vakkundige installatie van parket, plinten, en grootformaat tegels (tot 90x90 cm). Inclusief de professionele plaatsing van ontkoppelingsmatten voor maximale levensduur.",
    details: [
      "Plinten plaatsen",
      "Parket installatie", 
      "Tegelen (tot 90x90)",
      "Ontkoppelingsmatten"
    ]
  },
  {
    icon: Wrench,
    title: "Sanitair & Loodgieterij",
    description: "Complete oplossingen voor waterinstallaties, waaronder het aansluiten van radiatoren, het aanleggen van leidingen, en de volledige installatie en renovatie van badkamers.",
    details: [
      "Radiatoren aansluiten",
      "Leidingen aanleggen",
      "Inloopdouche installatie",
      "Badkamer renovatie"
    ]
  },
  {
    icon: Settings,
    title: "Kluswerk & Oplossingen",
    description: "Een proactieve, probleemoplossende aanpak voor diverse onderhouds- en reparatiewerkzaamheden. Uw allround partner voor elke technische uitdaging in en rond het huis.",
    details: [
      "Diverse klusjes",
      "Probleemoplossing",
      "Algemeen onderhoud",
      "Reparaties"
    ]
  },
  {
    icon: Monitor,
    title: "Informatica (Specialisatie)",
    description: "Decennialange ervaring in de IT-sector biedt een unieke meerwaarde voor smart home integraties en gespecialiseerd advies over hardware en software.",
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
    <section id="services" className="py-20 bg-muted/30" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            De Fundering van Uw Bouwproject
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="services-subtitle">
            Mijn expertise is gebouwd op uitgebreide praktijkervaring, resulterend in een fulltime, onafhankelijke onderneming. Als gedreven professional lever ik uitsluitend duurzame en hoogwaardige resultaten, van start tot oplevering.
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