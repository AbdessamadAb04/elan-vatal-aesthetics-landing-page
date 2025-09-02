import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Shield, 
  Star,
  ChevronDown,
  ChevronUp,
  Leaf
} from 'lucide-react';
import Footer from '../sections/Footer';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'General Inquiry',
    contactMethod: 'Email',
    message: ''
  });
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const serviceOptions = [
    'General Inquiry',
    'Signature Glow Facial',
    'Complete Renewal Package', 
    'Wellness Membership',
    'Other'
  ];

  const faqs = [
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a comprehensive consultation where we discuss your wellness goals, skin concerns, and create a personalized treatment plan. We'll also provide a tour of our facilities and explain our treatment process."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24-hour notice for cancellations. Cancellations made less than 24 hours in advance may be subject to a 50% charge. No-shows will be charged the full treatment fee."
    },
    {
      question: "Do you offer gift certificates?",
      answer: "Yes! Gift certificates are available for all services and can be purchased online or in-person. They make perfect gifts for birthdays, holidays, or any special occasion."
    },
    {
      question: "Are your products and treatments organic?",
      answer: "We prioritize natural, organic, and clean beauty products. All our facial treatments use certified organic skincare lines, and we'll always inform you of the ingredients used in your treatments."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceInterest: 'General Inquiry',
        contactMethod: 'Email',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blush via-cream to-blush/50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-charcoal hover:text-sage transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm">Back to Home</span>
            </button>
            
            <div className="flex items-center">
              <Sparkles className="w-6 h-6 text-sage mr-2" />
              <h1 className="text-xl font-serif font-light text-charcoal tracking-wide">Élan Vital</h1>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex items-center mt-4 text-sm text-charcoal/60">
            <span>Home</span>
            <span className="mx-2">&gt;</span>
            <span className="text-sage">Contact</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-6 h-6 text-sage/60 mr-2" />
            <div className="h-px w-12 bg-sage/30"></div>
            <Leaf className="w-6 h-6 text-sage/60 ml-2 rotate-180" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-charcoal mb-4 leading-tight">
            Connect With Us
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/70 max-w-2xl mx-auto">
            We're here to guide you on your wellness journey
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-serif text-charcoal mb-6">Send Us a Message</h2>
            
            {submitSuccess ? (
              <div className="bg-sage/10 border border-sage/20 rounded-lg p-6 text-center">
                <Star className="w-8 h-8 text-sage mx-auto mb-4" />
                <h3 className="text-sage font-medium mb-2">Message Sent Successfully!</h3>
                <p className="text-charcoal/70">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Service Interest
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors duration-300"
                    >
                      {serviceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors duration-300"
                    >
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                      <option value="Text">Text</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message/Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors duration-300 resize-none"
                    placeholder="Tell us about your wellness goals or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sage text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-sage/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <div className="flex items-center text-sm text-charcoal/60 mt-4">
                  <Shield className="w-4 h-4 mr-2 text-sage" />
                  Your information is kept confidential and secure
                </div>
              </form>
            )}
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            {/* Studio Location */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif text-charcoal mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-sage mr-2" />
                Studio Location
              </h3>
              <div className="text-charcoal/70 mb-4">
                <p className="font-medium">123 Wellness Way</p>
                <p>Harmony Heights, CA 90210</p>
              </div>
              
              {/* Mock Google Maps */}
              <div className="bg-sage/10 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-charcoal/60">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-sage" />
                  <p className="text-sm">Interactive Map</p>
                  <p className="text-xs">Click to view in Google Maps</p>
                </div>
              </div>
            </div>

            {/* Hours & Contact */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif text-charcoal mb-4 flex items-center">
                <Clock className="w-5 h-5 text-sage mr-2" />
                Hours of Operation
              </h3>
              <div className="space-y-2 text-charcoal/70 mb-6">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
              </div>
              
              <div className="border-t border-sage/10 pt-6">
                <h4 className="font-medium text-charcoal mb-4">Direct Contact</h4>
                <div className="space-y-3">
                  <a href="tel:555-123-WELLNESS" className="flex items-center text-charcoal/70 hover:text-sage transition-colors duration-300">
                    <Phone className="w-4 h-4 mr-3 text-sage" />
                    (555) 123-WELLNESS
                  </a>
                  <a href="mailto:hello@elanvital.com" className="flex items-center text-charcoal/70 hover:text-sage transition-colors duration-300">
                    <Mail className="w-4 h-4 mr-3 text-sage" />
                    hello@elanvital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-20">
          <h2 className="text-2xl font-serif text-charcoal mb-8 text-center">Common Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-sage/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-sage/5 transition-colors duration-300"
                >
                  <span className="font-medium text-charcoal">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-sage" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-sage" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4 text-charcoal/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/booking')}
            className="bg-sage text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-sage/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Book a Consultation
          </button>
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-charcoal/60">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-sage mr-2" />
              Licensed Professionals
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-sage mr-2" />
              Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
