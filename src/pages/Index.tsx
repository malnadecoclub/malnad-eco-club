
import Hero from "@/components/Hero";
import About from "@/components/About";
import GroupPhoto from "@/components/GroupPhoto";
import FeaturedEvents from "@/components/FeaturedEvents";
import Gallery from "@/components/Gallery";
import TeamPreview from "@/components/TeamPreview";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <GroupPhoto />
      <FeaturedEvents />
      <Gallery />
      <TeamPreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
