import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookAppointment = () => {
    navigate('/booking');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-lavender/20 to-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-charcoal mb-6">
            Ready to Treat Yourself?
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Take the first step towards wellness. Book your appointment or get in 
            touch with any questions about our treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-charcoal mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors duration-200"
                    required
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors duration-200"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your wellness goals or any questions you have..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors duration-200 resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-sage text-white px-8 py-4 rounded-lg font-medium hover:bg-sage/90 transition-colors duration-300 flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-charcoal mb-6">Visit Our Sanctuary</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sage/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Address</h4>
                    <p className="text-charcoal/80">
                      123 Wellness Way<br />
                      Serenity District<br />
                      Metropolitan City, MC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sage/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Phone</h4>
                    <p className="text-charcoal/80">(555) 123-WELLNESS</p>
                    <p className="text-charcoal/80">(555) 123-9355</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sage/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Email</h4>
                    <p className="text-charcoal/80">hello@elanvitalwellness.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sage/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Hours</h4>
                    <div className="text-charcoal/80 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="space-y-4">
              <button 
                onClick={handleBookAppointment}
                className="w-full bg-sage text-white px-8 py-4 rounded-lg font-medium hover:bg-sage/90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;