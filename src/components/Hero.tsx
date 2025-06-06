import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "/gallery/eternity.png",
    "/gallery/eco6.jpg",
    "/gallery/ecob3.jpg",
    "/gallery/ecob2.jpg",
    "/gallery/ecob1.jpg",
    "/gallery/eco2.jpg",
    "/gallery/ecob4.jpg",
    "/gallery/eco3.jpg",
    "/gallery/eco4.jpg",
    "/gallery/eco5.jpg",
    "/gallery/eco.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${image}")`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src="/logo.png"
              alt="Malnad Eco Club Logo"
              className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm p-2 object-scale-down"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in delay-200">
            Malnad Eco Club
            <span className="block text-green-400 mt-2 text-3xl md:text-4xl font-normal">
              Connecting Youth with Nature
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in delay-300 leading-relaxed font-light">
            Fostering environmental awareness and sustainable practices through innovative initiatives
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center animate-fade-in delay-500">
            <a href="#events">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0"
              >
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-16 animate-fade-in delay-700">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-green-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="">
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;