import { useNavigate } from 'react-router-dom';
import { Sparkles, Heart, Droplets, Leaf, Zap, Star } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const handleBookSession = () => {
    navigate('/booking');
  };

  const handleServiceClick = (serviceSlug: string) => {
    navigate(`/service/${serviceSlug}`);
  };

  const services = [
    {
      id: 1,
      slug: "holistic-facial-treatments",
      icon: Sparkles,
      title: "Holistic Facial Treatments",
      description: "Personalized facials using organic skincare and dermo-cosmetic science to reveal your natural radiance.",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      slug: "deep-tissue-massage",
      icon: Heart,
      title: "Deep Tissue Massage",
      description: "Therapeutic massage that relieves muscular tension, improves circulation, and restores body harmony.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      slug: "lymphatic-drainage",
      icon: Droplets,
      title: "Lymphatic Drainage",
      description: "Detoxifying treatment to improve fluid retention, reduce puffiness, and enhance skin appearance.",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      slug: "relaxation-massage-aromatherapy",
      icon: Leaf,
      title: "Relaxation Massage & Aromatherapy",
      description: "Essential oils and gentle touch combine to restore mental clarity and inner peace.",
      image: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      slug: "body-sculpting-slimming-rituals",
      icon: Zap,
      title: "Body Sculpting & Slimming Rituals",
      description: "Non-invasive techniques to tone, firm, and contour your natural silhouette.",
      image: "https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      slug: "hydraglow-microdermabrasion",
      icon: Star,
      title: "HydraGlow Microdermabrasion",
      description: "Advanced exfoliation treatment for radiant, youthful skin with immediate visible results.",
      image: "https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-charcoal mb-6">
            Signature Treatments
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Each treatment is carefully curated to provide you with a transformative experience 
            that nurtures both body and soul.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleServiceClick(service.slug)}
              >
                {/* Service image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
                  />
                  
                  {/* Hover overlay with "See more" link */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-lg font-medium text-sage bg-white/90 px-4 py-2 rounded-full">See more</span>
                    </div>
                  </div>
                </div>

                {/* Service content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-sage/10 p-3 rounded-full mr-4">
                      <IconComponent className="w-6 h-6 text-sage" />
                    </div>
                    <h3 className="text-xl font-serif text-charcoal">{service.title}</h3>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={handleBookSession}
            className="bg-sage text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-sage/90 transition-all duration-300 transform hover:scale-105"
          >
            Book a Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;