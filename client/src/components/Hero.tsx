import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Content */}
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl text-left">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight" data-testid="hero-title">
            <span className="text-blue-600">Renovaties</span> met<br />
            oog voor detail
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-12 max-w-2xl" data-testid="hero-subtitle">
            Betrouwbare vakman met oog voor detail. Vanuit mijn IT-achtergrond koos ik bewust voor werken met mijn handen. Ik lever kwaliteit, geen haastwerk.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold flex items-center space-x-2"
              data-testid="button-quote-cta"
            >
              <Phone className="h-5 w-5" />
              <span>Offerte aanvragen</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-8 py-4 text-lg font-semibold flex items-center space-x-2"
              data-testid="button-projects-cta"
            >
              <span>Bekijk projecten</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}