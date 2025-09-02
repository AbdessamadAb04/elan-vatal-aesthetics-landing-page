import { useNavigate } from 'react-router-dom';
import { Leaf, Flower, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const navigate = useNavigate();

  const handleBookNow = (serviceId: number) => {
    navigate('/booking', { state: { selectedServiceId: serviceId } });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blush via-cream to-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-charcoal mb-6 leading-tight">
            Our Treatment
            <span className="block text-sage italic">Packages</span>
          </h2>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Carefully curated wellness experiences designed for your journey to natural vitality.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Signature Glow Facial */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-white/50 flex flex-col h-full">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-sage mr-3" />
              <div className="w-16 h-0.5 bg-sage/30"></div>
            </div>
            
            <h3 className="text-2xl font-serif font-medium text-charcoal text-center mb-4">
              Signature Glow Facial
            </h3>
            
            <div className="text-center mb-6">
              <span className="text-4xl font-light text-sage">$185</span>
            </div>
            
            <div className="space-y-3 mb-8 flex-grow">
              <p className="text-charcoal/70 text-center">
                <span className="font-medium">Duration:</span> 75 minutes
              </p>
              <div className="border-t border-sage/20 pt-4">
                <h4 className="font-medium text-charcoal mb-3">Includes:</h4>
                <ul className="space-y-2 text-charcoal/70">
                  <li>• Holistic facial treatment</li>
                  <li>• Organic skincare application</li>
                  <li>• Personalized consultation</li>
                </ul>
              </div>
            </div>
            
            <button 
              onClick={() => handleBookNow(1)}
              className="w-full bg-sage text-white py-4 rounded-full font-medium text-lg hover:bg-sage/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl mt-auto"
            >
              Book Now
            </button>
          </div>

          {/* Card 2: Complete Renewal Package - Featured */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-sage/30 flex flex-col h-full">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-sage text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg flex items-center">
                <Crown className="w-4 h-4 mr-2" />
                Most Popular
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-6 mt-4">
              <Flower className="w-8 h-8 text-sage mr-3" />
              <div className="w-16 h-0.5 bg-sage/30"></div>
            </div>
            
            <h3 className="text-2xl font-serif font-medium text-charcoal text-center mb-4">
              Complete Renewal Package
            </h3>
            
            <div className="text-center mb-6">
              <span className="text-4xl font-light text-sage">$350</span>
            </div>
            
            <div className="space-y-3 mb-8 flex-grow">
              <p className="text-charcoal/70 text-center">
                <span className="font-medium">Duration:</span> 2.5 hours
              </p>
              <div className="border-t border-sage/20 pt-4">
                <h4 className="font-medium text-charcoal mb-3">Includes:</h4>
                <ul className="space-y-2 text-charcoal/70">
                  <li>• Facial treatment</li>
                  <li>• Deep tissue massage</li>
                  <li>• Lymphatic drainage</li>
                  <li>• Aromatherapy session</li>
                </ul>
              </div>
            </div>
            
            <button 
              onClick={() => handleBookNow(2)}
              className="w-full bg-sage text-white py-4 rounded-full font-medium text-lg hover:bg-sage/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl mt-auto"
            >
              Book Now
            </button>
          </div>

          {/* Card 3: Wellness Membership */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-white/50 flex flex-col h-full">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-yellow-600 mr-3" />
              <div className="w-16 h-0.5 bg-yellow-600/30"></div>
            </div>
            
            <h3 className="text-2xl font-serif font-medium text-charcoal text-center mb-4">
              Wellness Membership
            </h3>
            
            <div className="text-center mb-6">
              <span className="text-4xl font-light text-yellow-600">$299</span>
              <span className="text-charcoal/60">/month</span>
            </div>
            
            <div className="space-y-3 mb-8 flex-grow">
              <p className="text-charcoal/70 text-center">
                <span className="font-medium">Ongoing Benefits</span>
              </p>
              <div className="border-t border-yellow-600/20 pt-4">
                <h4 className="font-medium text-charcoal mb-3">Includes:</h4>
                <ul className="space-y-2 text-charcoal/70">
                  <li>• 2 treatments monthly</li>
                  <li>• 15% off additional services</li>
                  <li>• Priority booking access</li>
                  <li>• Exclusive member events</li>
                </ul>
              </div>
            </div>
            
            <button 
              onClick={() => handleBookNow(3)}
              className="w-full bg-yellow-600 text-white py-4 rounded-full font-medium text-lg hover:bg-yellow-600/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl mt-auto"
            >
              Join Now
            </button>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-4 opacity-30">
            <div className="w-12 h-12 bg-sage rounded-full blur-xl"></div>
            <div className="w-8 h-8 bg-blush rounded-full blur-lg"></div>
            <div className="w-16 h-16 bg-lavender rounded-full blur-2xl"></div>
            <div className="w-8 h-8 bg-blush rounded-full blur-lg"></div>
            <div className="w-12 h-12 bg-sage rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;