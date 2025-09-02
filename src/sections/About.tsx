import { useNavigate } from 'react-router-dom';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const handleBookSession = () => {
    navigate('/booking');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-charcoal mb-8">
              Our Philosophy
            </h2>
            
            <div className="space-y-6 text-charcoal/80 leading-relaxed">
              <p className="text-lg">
                At Élan Vital, we believe that true beauty radiates from within. Our mission 
                is to create a sanctuary where modern aesthetic science meets ancient healing 
                wisdom, allowing you to reconnect with your natural vitality.
              </p>
              
              <p>
                Founded with a vision to provide personalized, boutique-level care, we've 
                carefully curated every aspect of your experience – from our hand-selected 
                organic products to our thoughtfully designed treatment spaces.
              </p>
              
              <p>
                We understand that wellness is a journey, not a destination. That's why we 
                take the time to understand your unique needs and create customized treatment 
                plans that evolve with you.
              </p>
            </div>

            {/* Founder quote */}
            <div className="mt-12 p-6 bg-cream/50 rounded-2xl border-l-4 border-sage">
              <p className="text-charcoal/80 italic mb-4">
                "Every person who walks through our doors deserves to feel seen, heard, 
                and cared for. We're not just treating skin or muscles – we're nurturing 
                the whole person."
              </p>
              <p className="text-sage font-medium">
                – Isabella Chen, Founder & Lead Therapist
              </p>
            </div>
          </div>

          {/* About image and stats */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder at work"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-sage" />
                </div>
                <div className="text-2xl font-serif text-charcoal mb-2">500+</div>
                <div className="text-charcoal/60 text-sm">Happy Clients</div>
              </div>
              
              <div className="text-center">
                <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-sage" />
                </div>
                <div className="text-2xl font-serif text-charcoal mb-2">5+</div>
                <div className="text-charcoal/60 text-sm">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-sage" />
                </div>
                <div className="text-2xl font-serif text-charcoal mb-2">100%</div>
                <div className="text-charcoal/60 text-sm">Natural Products</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-cream/50 rounded-2xl p-6">
              <h3 className="font-serif text-charcoal mb-4">Certifications & Memberships</h3>
              <ul className="space-y-2 text-charcoal/80 text-sm">
                <li>• International Spa & Wellness Association Member</li>
                <li>• Licensed Massage Therapy Certification</li>
                <li>• Advanced Aesthetics Training Certified</li>
                <li>• Lymphatic Drainage Specialist</li>
              </ul>
            </div>
          </div>
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

export default About;