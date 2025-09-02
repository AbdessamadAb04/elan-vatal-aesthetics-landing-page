import { useNavigate } from 'react-router-dom';
import { Sparkles, Calendar } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const handleBookSession = () => {
    navigate('/booking');
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blush via-cream to-lavender overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-blush rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lavender rounded-full blur-3xl animate-pulse delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-sage mr-3" />
          <h1 className="text-2xl sm:text-3xl font-serif font-light text-charcoal tracking-wide">
            Élan Vital
          </h1>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-charcoal mb-4 leading-tight">
          Awaken Your
          <span className="block text-sage italic">Natural Glow</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-charcoal/80 mb-16 max-w-2xl mx-auto leading-relaxed">
          Boutique aesthetics & massage therapy designed for your wellness journey. 
          Experience personalized treatments in our tranquil urban sanctuary.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button 
            onClick={handleBookSession}
            className="group bg-sage text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-sage/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
          >
            <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Book a Session
          </button>
          <button 
            onClick={handleExploreServices}
            className="text-charcoal px-8 py-4 rounded-full font-medium text-lg border-2 border-charcoal/20 hover:border-sage hover:text-sage transition-all duration-300 transform hover:scale-105"
          >
            Explore Treatments
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-6 animate-bounce">
          <div className="w-6 h-10 border-2 border-charcoal/30 -translate-x-4 -translate-y-0 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sage rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;