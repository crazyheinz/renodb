import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}