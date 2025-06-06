import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect

const AllEvents = () => {
  // Using the same events data structure but with more details
  const events = [
    {
      title: "Vanya Chaithanya",
      id: "vanya-chaithanya", // Added unique ID
      description: "Nature awareness event with 400+ students from 60+ schools, conducted with Forest Department.",
      fullDescription: "Vanya Chaithanya is our flagship nature awareness program conducted in collaboration with the Forest Department. This event brings together students from over 60 schools to learn about biodiversity conservation, wildlife protection, and sustainable practices. Through interactive workshops, nature walks, and expert talks, students develop a deeper connection with the natural world.",
      image: "/vc.png",
      date: "November 2025",
      venue: "Malnad College Campus & Forest Reserve",
      participants: "800+ Students",
      impact: "60+ Schools",
      gallery: ["/gallery/vc1.jpg", "/gallery/vc2.jpg", "/gallery/eco3.jpg"]
    },
    {
      title: "Eternity",
      id: "eternity", // Added unique ID
      description: "Flagship fest combining technical innovation with eco-awareness through competitions and exhibitions.",
      fullDescription: "Eternity is our annual eco-tech festival that bridges the gap between technological innovation and environmental sustainability. The event features project exhibitions, hackathons, and design challenges focused on solving real-world environmental problems. Students showcase their creative solutions for waste management, renewable energy, water conservation, and more.",
      image: "/eternity.png",
      date: "April 2025",
      venue: "Malnad College Auditorium",
      participants: "500+ Participants",
      impact: "Innovative Thinking",
      gallery: ["/gallery/eco6.jpg", "/gallery/eternity2.jpg", "/gallery/eternity3.jpg"]
    },
    {
      title: "Bibharthi",
      id: "bibharthi", // Added unique ID
      description: "Sapling distribution and seed ball making workshops for school children and community members.",
      fullDescription: "Bibharthi is our community greening initiative that focuses on increasing the green cover in and around Hassan. Through this program, we organize sapling distribution drives and teach seed ball making techniques to school children and community members. The event also includes educational sessions on the importance of native plant species and proper plant care.",
      image: "/bibarthi.jpg",
      date: "December 2024",
      venue: "Various Schools in Hassan",
      participants: "100+ Kids",
      impact: "Green Distribution",
      gallery: ["/gallery/bibarthi1.jpg", "/gallery/bibarthi2.jpg", "/gallery/bibarthi3.jpg"]
    },
    {
      title: "Pet Show",
      id: "pet-show", // Added unique ID
      description: "Animal compassion awareness event for students and local pet owners in the community.",
      fullDescription: "Our annual Pet Show brings together pet lovers from across the community to celebrate the bond between humans and animals. The event features pet competitions, adoption drives, and educational sessions on responsible pet ownership and animal welfare. Veterinarians provide free check-ups and advice on pet care, while animal welfare organizations raise awareness about animal rights.",
      image: "/gallery/pet1.jpg",
      date: "April 2025",
      venue: "Malnad College Grounds",
      participants: "900+ Attendees",
      impact: "Animal Welfare",
      gallery: ["/gallery/pet2.jpg", "/gallery/pet3.jpg", "/gallery/pet5.jpg"]
    },
    {
      title: "Spot Fix",
      id: "spot-fix", // Added unique ID
      description: "Cleanliness drive inspired by Swachh Bharat with before/after transformations of campus areas.",
      fullDescription: "Spot Fix is our cleanliness initiative inspired by the Swachh Bharat Mission. We identify neglected areas on campus and in the community and transform them through cleaning, painting, and beautification. Before and after photos document the dramatic transformations achieved through collective effort. The program instills a sense of ownership and pride in maintaining clean surroundings.",
      image: "/gallery/spotfix3.png",
      date: "Yearly",
      venue: "Various Locations",
      participants: "50+ Students per drive",
      impact: "Campus Transformation",
      gallery: ["/gallery/spotfix1.jpg", "/gallery/spotfix2.png", "/gallery/spotfix4.png"]
    },
    {
      title: "E-Waste Drive",
      id: "e-waste-drive", // Added unique ID
      description: "Campus-wide electronic waste collection with active student and faculty participation.",
      fullDescription: "Our E-Waste Drive is a campus-wide initiative to collect and responsibly dispose of electronic waste. Students and faculty bring in old electronics, batteries, and other e-waste for proper recycling. The event includes awareness sessions on the environmental impact of e-waste and the importance of responsible disposal. We partner with certified e-waste recyclers to ensure proper handling of collected materials.",
      image: "/ewaste.png",
      date: "September 2023",
      venue: "Malnad College Campus",
      participants: "Entire Campus",
      impact: "Waste Management",
      gallery: ["/gallery/ewaste1.png", "/gallery/ewaste2.png", "/gallery/ewaste3.png"]
    },
    {
      title: "Plastic Collection Drive",
      id: "plastic-collection-drive", // Added unique ID
      description: "Initiative to collect and recycle plastic waste from campus and surrounding communities.",
      fullDescription: "Our Plastic Collection Drive aims to reduce plastic pollution by collecting and recycling plastic waste from the campus and surrounding communities. We set up collection points across campus and organize community clean-up events. The collected plastic is sorted and sent for recycling. Educational workshops on plastic alternatives and reducing plastic consumption are conducted alongside the collection drive.",
      image: "/plastic.png",
      date: "Yearly",
      venue: "Campus & Community",
      participants: "50+ Contributors",
      impact: "Reduced Plastic Waste",
      gallery: ["/gallery/plastic1.png", "/gallery/plastic2.png", "/gallery/plastic3.png"]
    }
  ];

  // Effect to scroll to the element specified by the URL hash on mount,
  // or scroll to the top if no hash is present.
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      // Remove the '#' prefix and find the element
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Scroll to the element with a smooth behavior
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash is present, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link to="/">
            {/* Changed button variant and class names for color */}
            <Button variant="default" className="mb-6 bg-green-500 hover:bg-green-600 text-white">
              <ArrowLeft className="mr-2 h-4 w-4 " /> Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">All Eco-Events</h1>
          <p className="text-xl text-gray-300">
            Explore our complete collection of environmental initiatives and community events
          </p>
        </div>

        <div className="space-y-16">
          {events.map((event, index) => (
            // Removed the problematic comment line here
            <div key={index} id={event.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1">
                  <div className="h-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {event.date}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {event.venue}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      {event.participants}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">
                    {event.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Event Gallery</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {event.gallery.map((img, imgIndex) => (
                        <div key={imgIndex} className="aspect-video rounded-md overflow-hidden">
                          <img
                            src={img}
                            alt={`${event.title} gallery image ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block text-sm text-gray-400 mb-1">Impact</span>
                      <span className="text-blue-400 font-medium">{event.impact}</span>
                    </div>
                    {/* Removed the "Register Interest" button */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;