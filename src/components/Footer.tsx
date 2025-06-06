const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Club Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png"
                alt="Malnad Eco Club Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Malnad Eco Club</h3>
                <p className="text-gray-400 text-sm">Malnad College of Engineering</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Connecting youth with nature through innovative environmental initiatives, 
              sustainable practices, and community-driven conservation efforts.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/malnadecoclub" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/MalnadEcoClub" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
              <a href="https://youtube.com/@malnadecoclub?si=OUiLBHlS0RwLRi4W" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Events</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Spot Fix</span></li>
              <li><span className="text-gray-400">Vanya Chaithanya</span></li>
              <li><span className="text-gray-400">Eternity</span></li>
              <li><span className="text-gray-400">Pet Show</span></li>
              <li><span className="text-gray-400">Bibharthi</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Malnad Eco Club. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with 💚 for a sustainable future<br></br>
              <span>Designed by Eco Srinath </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
