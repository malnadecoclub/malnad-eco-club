
import { useState, useEffect } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Updated to use local images from public folder
  const galleryImages = [
    "/public/gallery/eco2.jpg",
    "/public/gallery/eco6.jpg",
    "/public/gallery/ecob4.jpg",
    "/public/gallery/ecob3.jpg",
    "/public/gallery/ecob2.jpg",
    "/public/gallery/ecob1.jpg",
    "/public/gallery/eco3.jpg",
    "/public/gallery/eco4.jpg",
    "/public/gallery/eco5.jpg",
    "/public/gallery/eco.jpg",
    "/public/gallery/vc.png",
    "/public/gallery/eternity.png",
    "/public/gallery/bibarthi.jpg",
    "/public/gallery/pet.png",
    "/public/gallery/ewaste.png",
    "/public/gallery/plastic.png",
    "/public/gallery/spotfix.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capturing moments of our environmental initiatives and community events
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Single image slider with increased height */}
          <div className="relative aspect-[16/9] max-w-4xl mx-auto">
            <img
              src={galleryImages[currentIndex]}
              alt={`Malnad Eco Club gallery image ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
            
            {/* Navigation arrows */}
            <button 
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-green-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
