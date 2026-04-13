import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import HeroSection from "@/components/HeroSection";
import PlacesSection from "@/components/PlacesSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero with video */}
      <div className="relative min-h-screen">
        <VideoBackground />
        <Navbar />
        <HeroSection />
      </div>

      {/* Places section */}
      <PlacesSection />

      {/* Services section */}
      <ServicesSection />

      {/* Reviews section */}
      <ReviewsSection />

      {/* Contact section */}
      <ContactSection />
    </div>
  );
};

export default Index;
