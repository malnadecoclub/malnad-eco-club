
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Malnad Eco Club</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A student-led initiative fostering environmental awareness and sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">What is Eco Club?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Malnad Eco Club is a student-led initiative at Malnad College of Engineering focused on promoting environmental education, sustainability, and green practices among students and the wider community. We believe in the power of collective action to create meaningful environmental change.
            </p>
            <div className="bg-green-900/30 p-6 rounded-lg border border-green-500/20">
              <p className="text-green-300 font-medium">
                "Environmental protection is not just our responsibility—it's our opportunity to create a better world for future generations."
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">2008</div>
                <div className="text-sm opacity-90">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm opacity-90">Events Every Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm opacity-90">Alumus</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-gray-300">
              To create an environmentally friendly society actively engaged in environmental education and sustainable practices.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-gray-300">
              To foster environmental awareness, encourage student participation in eco-centric activities, and promote conservation efforts.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Goals</h3>
            <p className="text-gray-300">
              Promote love for nature, encourage sustainable habits, and tackle local environmental issues through community action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
