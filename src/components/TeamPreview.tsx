import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TeamPreview = () => {
  const conveners = [
    {
      name: "Ms. Shruthi D V",
      designation: "Club Convener",
      image: "/members/convener1.png"
    },
    {
      name: "Dr. Pradeep D.G.",
      designation: "Club Convener",
      image: "/members/convener2.png"
    }
  ];


  // Data structured by year with photo paths
  const clubMembersByYear = {
    "Final Years": [
      { name: "Rohith H R", designation: "President", image: "/members/4/rohith.jpg" },
      { name: "Moulya S Gowda", designation: "Vice President", image: "/members/4/moulya.jpg" },
      { name: "Sagar S Y", designation: "Vice President", image: "/members/4/sagar.jpg" },
      { name: "Charmitha Jain", designation: "General Secretary", image: "/members/4/charmitha.jpg" },
      { name: "Deepthi J Prakash", designation: "Student Convener", image: "/members/4/deepthi.jpg" },
      { name: "Prarthana Y T", designation: "Head Treasurer", image: "/members/4/prarthana.jpg" },
      { name: "Srinath Gowda S M", designation: "Digital & Social Media Head", image: "/members/4/seena.jpg" },
      { name: "Yuktha S Gowda", designation: "Editorial Head", image: "/members/4/yuktha.jpg" },
      { name: "Yashaswini B C", designation: "Management Head", image: "/members/4/yashu.jpg" },
      { name: "Spandhitha I S", designation: "Social Media Head", image: "/members/4/spandhitha.jpg" },
      { name: "Vishal Miranda", designation: "Management Head", image: "/members/4/vishal.jpg" },
      { name: "Abhinav S Kulkurni", designation: "Digital Head", image: "/members/4/abhinav.jpg" },
      // Add more Final Year members here (up to 12 will be displayed in this section)
    ],
    "3rd Years": [
      // Add 3rd Year members here (up to 12)
      { name: "Ankith", designation: "Member", image: "/members/3/ankith.jpg" },
      { name: "Tharun", designation: "Member", image: "/members/3/tharun.jpg" },
      { name: "Rahul", designation: "Member", image: "/members/3/rahul.jpg" },
      { name: "Surya", designation: "Member", image: "/members/3/surya.jpg" },
      { name: "Anusha", designation: "Member", image: "/members/3/anusha.jpg" },
      { name: "Vidya", designation: "Member", image: "/members/3/vidya.jpg" },
      { name: "Roland", designation: "Member", image: "/members/3/ronald.jpg" },
      { name: "Nayana", designation: "Member", image: "/members/3/nayana.jpg" },
      { name: "Likitha", designation: "Member", image: "/members/3/likitha.jpg" },
      { name: "Durga", designation: "Member", image: "/members/3/durga.JPG" },
      { name: "Shreyas", designation: "Member", image: "/members/3/shreyas.jpg" },
      { name: "Amit", designation: "Member", image: "/members/3/amit.jpg" },
      // ...
    ],
    "2nd Years": [
      // Add 2nd Year members here (up to 12)
      { name: "Vikas", designation: "Member", image: "/members/2/vikas.jpg" },
      { name: "Chandan", designation: "Member", image: "/members/2/chandan.jpg" },
      { name: "Hithali", designation: "Member", image: "/members/2/hithali.jpg" },
      { name: "Rujula", designation: "Member", image: "/members/2/rujula.jpg" },
      { name: "Dhanush", designation: "Member", image: "/members/2/dhanush.jpg" },
      { name: "Bhoomika R", designation: "Member", image: "/members/2/bhoomika r.JPG" },
      { name: "Bhoomika K B", designation: "Member", image: "/members/2/bhoomika kb.jpg" },
      { name: "Nanditha", designation: "Member", image: "/members/2/nanditha.jpg" },
      { name: "Sinchana", designation: "Member", image: "/members/2/sinchana.jpg" },
      { name: "Srujan", designation: "Member", image: "/members/2/srujan.jpg" },
      { name: "Praneeth", designation: "Member", image: "/members/2/praneeth.jpg" },
      // ...
    ],
    "1st Years": [
      // Add 1st Year members here (up to 12)
      { name: "Yashwanth", designation: "Member", image: "/members/1/yashwanth.jpg" },
      { name: "Sudeep", designation: "Member", image: "/members/1/sudeep.jpg" },
      { name: "Jaswith", designation: "Member", image: "/members/1/jashwith.jpg" },
      { name: "Khanish", designation: "Member", image: "/members/1/khanish.jpg" },
      { name: "Vilas", designation: "Member", image: "/members/1/vilas.jpg" },
      { name: "Charan", designation: "Member", image: "/members/1/charan.jpg" },
      { name: "Sanvi", designation: "Member", image: "/members/1/saanvi.jpg" },
      { name: "Anagha", designation: "Member", image: "/members/1/anagha.jpg" },
      { name: "Inchara", designation: "Member", image: "/members/1/inchara.jpg" },
      { name: "Krishi", designation: "Member", image: "/members/1/krishi.jpg" },
      { name: "Yashas", designation: "Member", image: "/members/1/Yashas.jpg" },
      { name: "Harshith", designation: "Member", image: "/members/1/harshith.jpg" },
      { name: "Manya", designation: "Member", image: "/members/1/manya.jpg" },
      { name: "Aadhya", designation: "Member", image: "/members/1/aadhya.jpg" },
      // ...
    ],
  };

  return (
    <section id="team" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate leaders and members driving environmental change with enthusiasm and expertise
          </p>
        </div>

        {/* Club Conveners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-400 text-center mb-8">Club Conveners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {conveners.map((convener, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gray-600 flex items-center justify-center border-4 border-green-400 overflow-hidden">
                      {/* Use the image from the data */}
                      <img 
                        src={convener.image} 
                        alt={convener.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.innerHTML = '<div class="text-4xl text-gray-400">👤</div>';
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{convener.name}</h3>
                  <div className="text-green-400 font-medium mb-4">{convener.designation}</div>
                  <p className="text-gray-300 text-sm">Assistant Professor, B.E., M.Tech ,(Ph.D)</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Club Members by Year */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-400 text-center mb-8">Club Members</h3>

          {/* Iterate through each year */}
          {Object.entries(clubMembersByYear).map(([year, members]) => (
            <div key={year} className="mb-12"> {/* Add margin bottom to separate sections */}
              <h4 className="text-xl font-semibold text-white mb-6 text-center">{year}</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {/* Map over members for the current year, limiting to 16 */}
                {members.slice(0, 16).map((member, index) => (
                  <Card key={index} className="bg-gray-700 border-gray-600 text-center group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gray-600 flex items-center justify-center mb-3 overflow-hidden">
                        {/* Use the image from the data */}
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.innerHTML = '<div class="text-2xl text-gray-400">👤</div>';
                          }}
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1">{member.name}</h4>
                      <div className="text-xs text-green-400">{member.designation}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-700 rounded-2xl p-8 text-center border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference in environmental conservation. 
            Whether you're a student, faculty member, or community volunteer, there's a place for you in our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              Become a Member
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
