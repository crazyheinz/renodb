import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Zap, Hammer, Wrench, Settings, Monitor } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Schilderwerk",
    description: "Gespecialiseerd in duurzaam binnen- en buitenschilderwerk met professionele afwerking. Van gyproc plaatsen en pleisterwerk tot stukadoorswerk en het schilderen van plafonds, muren, ramen, deuren en gevels.",
    details: [
      "Gyproc & gipsplaten plaatsen",
      "Pleisterwerk & stukadoorswerk",
      "Binnenhuis schilderwerk",
      "Ramen en deuren",
      "Plafonds afwerking", 
      "Gevelschildering"
    ]
  },
  {
    icon: Zap,
    title: "Elektriciteit", 
    description: "Uitbreiding en modernisering van uw elektrische installatie. Van het plaatsen van extra stopcontacten en verlichting tot het vervangen van zekeringkasten en verouderde systemen, altijd conform de nieuwste veiligheidsnormen.",
    details: [
      "Stopcontacten installeren",
      "Verlichting & lichtpunten",
      "Zekeringkast moderniseren",
      "Schakelmateriaal vervangen",
      "Elektrische installaties uitbreiden"
    ]
  },
  {
    icon: Hammer,
    title: "Schrijnwerk & Vloeren",
    description: "Vakkundige installatie van parket, laminaat, plinten, en grootformaat tegels (tot 90x90 cm). Inclusief voorbereidend werk zoals vloerverwarming en de professionele plaatsing van ontkoppelingsmatten voor maximale levensduur.",
    details: [
      "Parket & laminaat leggen",
      "Plinten plaatsen",
      "Vloerverwarming voorbereiden",
      "Grootformaat tegels (tot 90x90)",
      "Ontkoppelingsmatten",
      "Deuren & kozijnen"
    ]
  },
  {
    icon: Wrench,
    title: "Sanitair & Loodgieterij",
    description: "Complete oplossingen voor waterinstallaties en sanitair. Van het plaatsen van toiletten, douches en kranen tot het aansluiten van radiatoren en de volledige renovatie van badkamers met hoogwaardige afwerking.",
    details: [
      "Badkamer renovatie compleet",
      "Douche & toilet plaatsen",
      "Kranen en mengkranen",
      "Radiatoren aansluiten",
      "Leidingen aanleggen",
      "Inloopdouche installatie"
    ]
  },
  {
    icon: Settings,
    title: "Kluswerk & Oplossingen",
    description: "Een proactieve, probleemoplossende aanpak voor diverse onderhouds- en renovatiewerkzaamheden. Van kleine reparaties tot complete verbouwingen - uw allround klusjesman en vakman voor elke technische uitdaging in en rond het huis.",
    details: [
      "Kleine & grote renovaties",
      "Verbouwingen & afwerking",
      "Algemeen onderhoud",
      "Reparaties & herstellingen",
      "Probleemoplossing",
      "Klussen op maat"
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