import { useNavigate } from 'react-router-dom';
import { Calendar, Leaf } from 'lucide-react';

interface CTAProps {
  serviceName?: string;
  defaultTitle?: string;
}

const CTA = ({ serviceName, defaultTitle = "Your Wellness Journey" }: CTAProps) => {
  const navigate = useNavigate();

  const handleBookSession = () => {
    navigate('/booking');
  };

  const getTitle = () => {
    if (serviceName) {
      return `Ready to Experience ${serviceName}?`;
    }
    return `Ready to Experience ${defaultTitle}?`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blush via-cream to-blush/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Botanical accent */}
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-6 h-6 text-sage/60 mr-2" />
          <div className="h-px w-12 bg-sage/30"></div>
          <Leaf className="w-6 h-6 text-sage/60 ml-2 rotate-180" />
        </div>

        {/* Dynamic headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-charcoal mb-6 leading-tight">
          {getTitle()}
        </h2>

        {/* Supporting copy */}
        <p className="text-lg sm:text-xl text-charcoal/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your wellness journey with our personalized approach to healing and beauty. 
          Experience the difference of truly individualized care.
        </p>

        {/* Button layout */}
        <div className="flex justify-center items-center">
          {/* Primary CTA */}
          <button 
            onClick={handleBookSession}
            className="group bg-sage text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-sage/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            style={{
              boxShadow: '0 4px 14px 0 rgba(168, 181, 160, 0.3)'
            }}
          >
            <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Book Your Session
          </button>
        </div>

        {/* Subtle decorative element */}
        <div className="mt-12 flex items-center justify-center opacity-30">
          <div className="w-16 h-px bg-sage"></div>
          <div className="w-2 h-2 bg-sage rounded-full mx-4"></div>
          <div className="w-16 h-px bg-sage"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
