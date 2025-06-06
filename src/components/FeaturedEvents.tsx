import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FeaturedEvents = () => {
  const events = [
    // Added id property to each event object
    {
      title: "Vanya Chaithanya",
      id: "vanya-chaithanya",
      description: "A nature awareness program that connects students with the environment through various activities and workshops.",
      image: "/vc.png",
      participants: "800+ Students",
      impact: "60+ Schools"
    },
    {
      title: "Eternity",
      id: "eternity",
      description: "An annual environmental fest that brings together students from various colleges to participate in eco-friendly competitions.",
      image: "/eternity.png",
      participants: "500+ Participants",
      impact: "Innovative Thinking"
    },
    {
      title: "Bibharthi",
      id: "bibharthi",
      description: "A cultural event that celebrates the rich heritage and traditions of our region while promoting environmental consciousness.",
      image: "/bibarthi.jpg",
      participants: "100+ Kids",
      impact: "Green Distribution"
    },
    {
      title: "Pet Show",
      id: "pet-show",
      description: "Animal compassion awareness event for students and local pet owners in the community.",
      image: "/public/pet.png",
      participants: "900+ Attendees",
      impact: "Animal Welfare"
    },
    {
      title: "Spot Fix",
      id: "spot-fix",
      description: "Cleanliness drive inspired by Swachh Bharat with before/after transformations of campus areas.",
      image: "/public/spotfix.png",
      participants: "50+ Students",
      impact: "Campus Transformation"
    },
    {
      title: "E-Waste Drive",
      id: "e-waste-drive",
      description: "Campus-wide electronic waste collection with active student and faculty participation.",
      image: "/public/ewaste.png",
      participants: "Entire Campus",
      impact: "Waste Management"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Eco-Events</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the impactful environmental initiatives and events that drive positive change in our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-800 border-gray-700 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-green-400 font-medium">
                    {event.participants}
                  </div>
                  <div className="text-sm text-blue-400 font-medium">
                    {event.impact}
                  </div>
                </div>
                {/* Changed Button to Link and added 'to' prop with hash */}
                <Link to={`/all-events#${event.id}`}>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* Changed 'to' prop to navigate to the base /all-events path */}
          <Link to="/all-events">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
