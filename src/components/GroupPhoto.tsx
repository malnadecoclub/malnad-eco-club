
const GroupPhoto = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Our Club Family</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Together we create a sustainable future for our community
          </p>
        </div>
        
        {/* Placeholder for group photo */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-700 rounded-2xl p-4 flex items-center justify-center min-h-[600px] border-2 border-dashed border-gray-600">
            <div className="w-full h-full">
              <img 
                src="gallery/eco2.jpg" 
                alt="Malnad Eco Club Group Photo" 
                className="w-full h-auto max-h-[550px] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupPhoto;
