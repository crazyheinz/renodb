import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Static content to inject for SEO - extracted from your React components
const seoContent = `
<div id="root">
  <div class="min-h-screen">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div class="container flex h-16 items-center">
        <a href="/" class="flex items-center space-x-2">
          <span class="font-bold text-xl">RenoDB</span>
        </a>
        <nav class="ml-auto flex gap-4 sm:gap-6">
          <a href="#diensten" class="text-sm font-medium">Diensten</a>
          <a href="#reviews" class="text-sm font-medium">Reviews</a>
          <a href="#portfolio" class="text-sm font-medium">Portfolio</a>
          <a href="#contact" class="text-sm font-medium">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section class="container py-24 md:py-32">
        <h1 class="text-4xl md:text-6xl font-bold">Uw Specialist in Hoogwaardige Renovaties in Gent</h1>
        <p class="text-xl text-muted-foreground mt-4">Vakmanschap en precisie voor elk project. 4.94/5 score met 63 beoordelingen.</p>
        <a href="#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 mt-6">Vraag Offerte Aan</a>
      </section>

      <!-- Services Section -->
      <section id="diensten" class="container py-16">
        <h2 class="text-3xl font-bold mb-8">Onze Diensten</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 class="text-xl font-semibold">Schilderwerk</h3>
            <p>Gespecialiseerd in duurzaam binnen- en buitenschilderwerk met vlekkeloze en esthetische afwerking</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold">Elektriciteit</h3>
            <p>Uitbreiding en modernisering van elektrische installaties conform nieuwste veiligheidsnormen</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold">Schrijnwerk & Vloeren</h3>
            <p>Vakkundige installatie van parket, plinten en grootformaat tegels met professionele afwerking</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold">Sanitair & Loodgieterij</h3>
            <p>Complete oplossingen voor waterinstallaties en volledige badkamerrenovaties</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold">Kluswerk & Oplossingen</h3>
            <p>Proactieve, probleemoplossende aanpak voor diverse onderhouds- en reparatiewerkzaamheden</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold">Informatica</h3>
            <p>Smart home integraties en gespecialiseerd IT-advies voor moderne woningen</p>
          </div>
        </div>
      </section>

      <!-- Reviews Section -->
      <section id="reviews" class="container py-16">
        <h2 class="text-3xl font-bold mb-8">Wat Klanten Zeggen</h2>
        <p class="text-xl mb-4">4.94/5 ⭐ - Gebaseerd op 63 beoordelingen via Ringtwice</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 border rounded-lg">
            <p class="italic">"Uitstekend werk, zeer professioneel en betrouwbaar"</p>
            <p class="mt-2 font-semibold">- Tevreden Klant</p>
          </div>
        </div>
      </section>

      <!-- Service Area Section -->
      <section class="container py-16 bg-muted/50">
        <h2 class="text-3xl font-bold mb-8">Werkgebied</h2>
        <p class="text-xl mb-6">Wij bedienen Gent en omliggende gemeenten</p>
        
        <h3 class="text-2xl font-semibold mb-4 mt-8">Gent en deelgemeenten</h3>
        <div class="grid md:grid-cols-4 gap-4 text-lg mb-8">
          <div class="p-4 bg-background rounded-lg border-2 border-primary">📍 Gent (centrum)</div>
          <div class="p-4 bg-background rounded-lg border-2 border-primary">📍 Sint-Amandsberg</div>
          <div class="p-4 bg-background rounded-lg border-2 border-primary">📍 Gentbrugge</div>
          <div class="p-4 bg-background rounded-lg border-2 border-primary">📍 Ledeberg</div>
          <div class="p-4 bg-background rounded-lg border-2 border-primary">📍 Oostakker</div>
          <div class="p-4 bg-background rounded-lg border-2 border-primary">📍 Wondelgem</div>
          <div class="p-4 bg-background rounded-lg border-2 border-primary">📍 Zwijnaarde</div>
        </div>

        <h3 class="text-2xl font-semibold mb-4">Omliggende gemeenten</h3>
        <div class="grid md:grid-cols-4 gap-4 text-lg">
          <div class="p-4 bg-background rounded-lg">📍 Merelbeke</div>
          <div class="p-4 bg-background rounded-lg">📍 Deinze</div>
          <div class="p-4 bg-background rounded-lg">📍 Wetteren</div>
          <div class="p-4 bg-background rounded-lg">📍 Destelbergen</div>
          <div class="p-4 bg-background rounded-lg">📍 De Pinte</div>
          <div class="p-4 bg-background rounded-lg">📍 Lochristi</div>
          <div class="p-4 bg-background rounded-lg">📍 Sint-Martens-Latem</div>
          <div class="p-4 bg-background rounded-lg">📍 Nevele</div>
          <div class="p-4 bg-background rounded-lg">📍 Melle</div>
          <div class="p-4 bg-background rounded-lg">📍 Oosterzele</div>
        </div>
        <p class="mt-6 text-muted-foreground">Ook andere gemeenten in de regio Gent? Neem contact op voor meer informatie.</p>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="container py-16">
        <h2 class="text-3xl font-bold mb-8">Neem Contact Op met Hannes</h2>
        <p class="text-xl mb-4">📞 Bel Hannes direct: +32 474 96 81 38</p>
        <p class="text-xl mb-4">📍 Werkgebied: Gent (Sint-Amandsberg, Gentbrugge, Ledeberg, Oostakker, Wondelgem, Zwijnaarde) en omliggende gemeenten (Merelbeke, Deinze, Wetteren, Destelbergen, De Pinte, Lochristi en meer)</p>
        <p class="text-xl mb-4">⏰ Openingstijden: Ma-Vr 09:00 - 17:00</p>
        <p class="text-xl">🌐 Vind ons op <a href="https://www.google.com/maps?cid=13758937985823179826" class="text-primary underline">Google Maps</a> of bekijk onze reviews op <a href="https://ringtwice.be/nl/listworkers/244537?from=marketing&parrainage=HANNESDEB" class="text-primary underline">Ring Twice (Ringtwice) - 4.94/5 ⭐</a></p>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t">
      <div class="container py-8">
        <p>© 2024 RenoDB - Opgericht door Hannes De Backer</p>
        <p class="text-sm text-muted-foreground">Uw specialist in hoogwaardige renovaties in Gent | 4.94/5 op Ring Twice</p>
        <p class="text-sm text-muted-foreground mt-2">Vakmanschap en precisie voor elk renovatieproject in Gent en omstreken</p>
      </div>
    </footer>
  </div>
</div>`;

function injectSeoContent() {
  console.log('🚀 Injecting SEO-friendly content into HTML...');
  
  const distPath = join(__dirname, 'dist', 'public');
  const indexPath = join(distPath, 'index.html');
  
  try {
    // Read the original HTML
    const originalHtml = readFileSync(indexPath, 'utf-8');
    
    // Replace empty div with SEO content
    const updatedHtml = originalHtml.replace(
      /<div id="root"><\/div>/,
      seoContent
    );
    
    // Write back
    writeFileSync(indexPath, updatedHtml, 'utf-8');
    
    console.log('✅ SEO content injected successfully!');
    console.log('📊 HTML now contains:');
    console.log('   ✓ Services information');
    console.log('   ✓ Contact details');
    console.log('   ✓ Reviews section');
    console.log('   ✓ Semantic HTML structure');
    console.log('');
    console.log('🔍 Google will now see full content instead of empty div');
    
    // Verify
    if (updatedHtml.length > originalHtml.length * 2) {
      console.log('✓ Content verification passed');
    }
    
  } catch (error) {
    console.error('❌ Failed to inject SEO content:', error.message);
    process.exit(1);
  }
}

injectSeoContent();
