import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import painterImage from "@assets/generated_images/Professional_painter_at_work_bacdf019.png";
import electricianImage from "@assets/generated_images/Electrician_installation_work_0d658561.png";
import flooringImage from "@assets/generated_images/Hardwood_floor_installation_f1b829f8.png";
import plumbingImage from "@assets/generated_images/Bathroom_plumbing_work_bfc5f55f.png";

// todo: remove mock functionality - replace with real project images
const galleryItems = [
  {
    image: painterImage,
    title: "Professioneel Schilderwerk",
    category: "Schilder",
    description: "Kwaliteitsvol binnenschilderwerk met aandacht voor detail"
  },
  {
    image: electricianImage,
    title: "Elektrische Installaties", 
    category: "Elektricien",
    description: "Veilige en moderne elektrische aansluitingen"
  },
  {
    image: flooringImage,
    title: "Parket & Vloeren",
    category: "Schrijnwerk", 
    description: "Professionele vloerinstallatie met perfecte afwerking"
  },
  {
    image: plumbingImage,
    title: "Badkamer Renovatie",
    category: "Loodgieter",
    description: "Complete badkamerinstallaties en renovaties"
  }
];

export default function Gallery() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="gallery-title">
            Voorbeelden van mijn werk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="gallery-subtitle">
            Kwaliteit en perfectie in elke klus - van schilderwerk tot complete renovaties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover-elevate group" data-testid={`gallery-item-${index}`}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`gallery-image-${index}`}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="flex items-center space-x-2"
                    data-testid={`gallery-view-${index}`}
                    onClick={() => console.log(`Viewing ${item.title}`)}
                  >
                    <Eye className="h-4 w-4" />
                    <span>Bekijk</span>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" data-testid={`gallery-category-${index}`}>
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`gallery-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`gallery-description-${index}`}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card p-8 rounded-lg max-w-2xl mx-auto border">
            <h3 className="text-xl font-semibold mb-4" data-testid="gallery-cta-title">
              Meer voorbeelden bekijken?
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="gallery-cta-description">
              Bekijk mijn volledige portfolio op Ringtwice met foto's van afgeronde projecten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="outline"
                className="flex items-center space-x-2"
                data-testid="button-portfolio"
              >
                <a 
                  href="https://ringtwice.be/nl/listworkers/244537?from=marketing&parrainage=HANNESDEB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Bekijk portfolio</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                onClick={scrollToContact}
                data-testid="button-gallery-contact"
              >
                Vraag offerte aan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}