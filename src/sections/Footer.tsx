import { useNavigate } from 'react-router-dom';
import { Sparkles, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const services = [
    { slug: "holistic-facial-treatments", title: "Holistic Facial Treatments" },
    { slug: "deep-tissue-massage", title: "Deep Tissue Massage" },
    { slug: "lymphatic-drainage", title: "Lymphatic Drainage" },
    { slug: "relaxation-massage-aromatherapy", title: "Relaxation Massage & Aromatherapy" },
    { slug: "body-sculpting-slimming-rituals", title: "Body Sculpting & Slimming" },
    { slug: "hydraglow-microdermabrasion", title: "HydraGlow Microdermabrasion" }
  ];

  const handleServiceClick = (slug: string) => {
    navigate(`/service/${slug}`);
  };
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 text-sage mr-2" />
              <h3 className="text-xl font-serif font-light tracking-wide">Élan Vital</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Holistic wellness and aesthetic therapy boutique dedicated to nurturing your natural radiance.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage/30 transition-colors duration-200 cursor-pointer">
                <span className="text-sage text-sm font-semibold">f</span>
              </div>
              <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage/30 transition-colors duration-200 cursor-pointer">
                <span className="text-sage text-sm font-semibold">@</span>
              </div>
              <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage/30 transition-colors duration-200 cursor-pointer">
                <span className="text-sage text-sm font-semibold">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {services.slice(0, 4).map((service) => (
                <li 
                  key={service.slug}
                  onClick={() => handleServiceClick(service.slug)}
                  className="hover:text-sage transition-colors duration-200 cursor-pointer"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-sage hover:text-sage/80 transition-colors duration-200 cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-sage" />
                (555) 123-WELLNESS
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-sage" />
                hello@elanvital.com
              </li>
              <li className="flex items-start">
                <span className="w-4 h-4 mr-2 mt-0.5 text-sage">📍</span>
                123 Wellness Way<br />
                Harmony Heights, CA 90210
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 Élan Vital Aesthetics Therapy Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;