import { HeroSection } from "./components/HeroSection";
import { SocialProof } from "./components/SocialProof";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { StickyWhatsAppButton } from "./components/StickyWhatsAppButton";

export default function App() {
  const whatsappNumber = "5519991979756"; // Replace with actual WhatsApp number
  const whatsappMessage = "Olá! Gostaria de agendar um horário com a Nicoly Espíndola.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
  };

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection 
        onCTAClick={handleWhatsAppClick}
        onServicesClick={handleScrollToServices}
      />

      {/* Social Proof */}
      <SocialProof />

      {/* Services */}
      <Services onBookClick={handleWhatsAppClick} />

      {/* About */}
      <About />

      {/* Gallery */}
      <Gallery />

      {/* Final CTA */}
      <CTASection onBookClick={handleWhatsAppClick} />

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Button */}
      <StickyWhatsAppButton />
    </div>
  );
}
