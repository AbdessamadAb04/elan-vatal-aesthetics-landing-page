import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sparkles, ChevronRight, Calendar, Clock, User, Mail, Phone, MessageSquare, Shield, Star, ArrowLeft } from 'lucide-react';
import Footer from '../sections/Footer';
import MiniContact from '../sections/MiniContact';

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedService, setSelectedService] = useState({
    id: 1,
    slug: 'holistic-facial-treatments',
    name: 'Holistic Facial Treatments',
    price: 185,
    duration: '75 minutes',
    description: 'Personalized facials using organic skincare and dermo-cosmetic science to reveal your natural radiance'
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [paymentOption, setPaymentOption] = useState('pay-now');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [validationErrors, setValidationErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    {
      id: 1,
      slug: 'holistic-facial-treatments',
      name: 'Holistic Facial Treatments',
      price: 185,
      duration: '75 minutes',
      description: 'Personalized facials using organic skincare and dermo-cosmetic science to reveal your natural radiance'
    },
    {
      id: 2,
      slug: 'deep-tissue-massage',
      name: 'Deep Tissue Massage',
      price: 165,
      duration: '90 minutes',
      description: 'Therapeutic massage that relieves muscular tension, improves circulation, and restores body harmony'
    },
    {
      id: 3,
      slug: 'lymphatic-drainage',
      name: 'Lymphatic Drainage',
      price: 145,
      duration: '60 minutes',
      description: 'Detoxifying treatment to improve fluid retention, reduce puffiness, and enhance skin appearance'
    },
    {
      id: 4,
      slug: 'relaxation-massage-aromatherapy',
      name: 'Relaxation Massage & Aromatherapy',
      price: 155,
      duration: '75 minutes',
      description: 'Essential oils and gentle touch combine to restore mental clarity and inner peace'
    },
    {
      id: 5,
      slug: 'body-sculpting-slimming-rituals',
      name: 'Body Sculpting & Slimming Rituals',
      price: 225,
      duration: '90 minutes',
      description: 'Non-invasive techniques to tone, firm, and contour your natural silhouette'
    },
    {
      id: 6,
      slug: 'hydraglow-microdermabrasion',
      name: 'HydraGlow Microdermabrasion',
      price: 195,
      duration: '60 minutes',
      description: 'Advanced exfoliation treatment for radiant, youthful skin with immediate visible results'
    }
  ];

  const availableDates = [
    '2025-08-01', '2025-08-02', '2025-08-05', '2025-08-06', '2025-08-07',
    '2025-08-08', '2025-08-09', '2025-08-12', '2025-08-13', '2025-08-14'
  ];

  const timeSlots = [
    '9:00 AM', '10:30 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear validation error when user starts typing
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {
      fullName: '',
      email: '',
      phone: '',
      date: '',
      time: ''
    };

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Only validate date and time for non-subscription services
    if (selectedService.id !== 3) {
      if (!selectedDate) {
        errors.date = 'Please select a date for your appointment';
      }
      if (!selectedTime) {
        errors.time = 'Please select a time for your appointment';
      }
    }

    setValidationErrors(errors);
    return !Object.values(errors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Booking submitted:', { selectedService, selectedDate, selectedTime, formData, paymentOption });
        setSubmitSuccess(true);
        // Handle successful submission - could redirect or show success message
      } catch (error) {
        console.error('Submission error:', error);
        // Handle error state
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Pre-select service based on navigation state
  useEffect(() => {
    const state = location.state as { selectedServiceSlug?: string; selectedServiceId?: number } | null;
    if (state?.selectedServiceSlug) {
      const service = services.find(s => s.slug === state.selectedServiceSlug);
      if (service) {
        setSelectedService(service);
      }
    } else if (state?.selectedServiceId) {
      const service = services.find(s => s.id === state.selectedServiceId);
      if (service) {
        setSelectedService(service);
      }
    }
  }, [location.state]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blush via-cream to-lavender">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-sage mr-3" />
              <h1 className="text-2xl font-serif font-light text-charcoal tracking-wide">
                Élan Vital
              </h1>
            </div>

            {/* Back Button */}
            <button 
              onClick={handleBackToHome}
              className="flex items-center text-charcoal/70 hover:text-sage transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-charcoal/60 mt-4">
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Treatments</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-sage">
              {selectedService.id === 3 ? 'Membership Registration' : 'Book Appointment'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-charcoal mb-4 leading-tight">
            Book Your
            <span className="block text-sage italic">Wellness Journey</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {selectedService.id === 3 
              ? 'Start your wellness membership journey with personalized monthly treatments'
              : 'Select your preferred treatment and time for a personalized experience'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Service Selection */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-charcoal mb-6 flex items-center">
                <span className="bg-sage text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Select Service
              </h3>
              
              <div className="space-y-4">
                <select 
                  value={selectedService.id}
                  onChange={(e) => {
                    const service = services.find(s => s.id === parseInt(e.target.value));
                    if (service) setSelectedService(service);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors duration-200"
                >
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - ${service.price}{service.id === 3 ? '/month' : ''}
                    </option>
                  ))}
                </select>
                
                <div className="bg-sage/5 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-charcoal">{selectedService.name}</h4>
                    <span className="text-sage font-medium">{selectedService.duration}</span>
                  </div>
                  <p className="text-charcoal/70 text-sm">{selectedService.description}</p>
                </div>
              </div>
            </div>

            {/* Date & Time Selection */}
            {selectedService.id !== 3 && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif text-charcoal mb-6 flex items-center">
                  <span className="bg-sage text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                  Choose Date & Time
                </h3>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-charcoal font-medium mb-3">Select Date</label>
                  {validationErrors.date && (
                    <div className="text-red-500 text-sm mb-2 bg-red-50 px-3 py-2 rounded">
                      {validationErrors.date}
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {availableDates.map(date => {
                      const dateObj = new Date(date);
                      const isSelected = selectedDate === date;
                      return (
                        <button
                          key={date}
                          onClick={() => {
                            setSelectedDate(date);
                            if (validationErrors.date) {
                              setValidationErrors({ ...validationErrors, date: '' });
                            }
                          }}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                            isSelected 
                              ? 'border-sage bg-sage text-white' 
                              : 'border-charcoal/20 hover:border-sage hover:bg-sage/5'
                          }`}
                        >
                          <div className="text-sm font-medium">
                            {dateObj.toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          <div className="text-lg">
                            {dateObj.getDate()}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-charcoal font-medium mb-3">Select Time</label>
                  {validationErrors.time && (
                    <div className="text-red-500 text-sm mb-2 bg-red-50 px-3 py-2 rounded">
                      {validationErrors.time}
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map(time => {
                      const isSelected = selectedTime === time;
                      const isUnavailable = time === '1:00 PM' || time === '4:00 PM'; // Example unavailable times
                      return (
                        <button
                          key={time}
                          onClick={() => {
                            if (!isUnavailable) {
                              setSelectedTime(time);
                              if (validationErrors.time) {
                                setValidationErrors({ ...validationErrors, time: '' });
                              }
                            }
                          }}
                          disabled={isUnavailable}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                            isUnavailable
                              ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                              : isSelected 
                                ? 'border-sage bg-sage text-white' 
                                : 'border-charcoal/20 hover:border-sage hover:bg-sage/5'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Membership Information */}
            {selectedService.id === 3 && (
              <div className="bg-gradient-to-r from-sage/10 via-lavender/10 to-blush/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-sage/30">
                <h3 className="text-2xl font-serif text-charcoal mb-6 flex items-center">
                  <span className="bg-sage text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                  Membership Details
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white/70 p-6 rounded-lg">
                    <h4 className="text-lg font-medium text-charcoal mb-4 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-sage" />
                      Monthly Wellness Membership Benefits
                    </h4>
                    <ul className="space-y-3 text-charcoal/80">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                        2 treatments per month (choose from any service)
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                        15% discount on additional services
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                        Priority booking access
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                        Complimentary wellness consultation
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                        Exclusive access to member-only events
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-lavender/20 p-6 rounded-lg">
                    <h5 className="font-medium text-charcoal mb-2">How It Works:</h5>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      After completing your membership registration, our wellness coordinator will contact you within 24 hours to schedule your first appointment and explain how to book your monthly treatments.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Information */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-charcoal mb-6 flex items-center">
                <span className="bg-sage text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  {selectedService.id === 3 ? '3' : '3'}
                </span>
                Personal Information
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-charcoal font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 outline-none ${
                        validationErrors.fullName 
                          ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                          : 'border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20'
                      }`}
                      required
                    />
                    {validationErrors.fullName && (
                      <div className="text-red-500 text-sm mt-1 bg-red-50 px-3 py-1 rounded">
                        {validationErrors.fullName}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-charcoal font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 outline-none ${
                        validationErrors.phone 
                          ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                          : 'border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20'
                      }`}
                      required
                    />
                    {validationErrors.phone && (
                      <div className="text-red-500 text-sm mt-1 bg-red-50 px-3 py-1 rounded">
                        {validationErrors.phone}
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 outline-none ${
                      validationErrors.email 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20'
                    }`}
                    required
                  />
                  {validationErrors.email && (
                    <div className="text-red-500 text-sm mt-1 bg-red-50 px-3 py-1 rounded">
                      {validationErrors.email}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Special Requests / {selectedService.id === 3 ? 'Preferences' : 'Skin Concerns'} (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors duration-200 resize-none"
                    placeholder={selectedService.id === 3 
                      ? "Let us know your wellness goals, preferred treatment types, or any specific requests..."
                      : "Let us know about any skin sensitivities, allergies, or specific areas of focus..."
                    }
                  />
                </div>
              </form>
            </div>

            {/* Payment Options */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-charcoal mb-6 flex items-center">
                <span className="bg-sage text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  {selectedService.id === 3 ? '4' : '4'}
                </span>
                Payment Options
              </h3>
              
              <div className="space-y-4 mb-6">
                <label className="flex items-center p-4 border-2 border-charcoal/20 rounded-lg cursor-pointer hover:border-sage transition-colors duration-200">
                  <input
                    type="radio"
                    name="payment"
                    value="pay-now"
                    checked={paymentOption === 'pay-now'}
                    onChange={(e) => setPaymentOption(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${paymentOption === 'pay-now' ? 'border-sage bg-sage' : 'border-charcoal/30'}`}>
                    {paymentOption === 'pay-now' && <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>}
                  </div>
                  <div>
                    <div className="font-medium text-charcoal">
                      {selectedService.id === 3 ? 'Set Up Monthly Billing' : 'Pay Now (Secure Payment)'}
                    </div>
                    <div className="text-sm text-charcoal/60">
                      {selectedService.id === 3 
                        ? 'Automatic monthly billing starts immediately' 
                        : 'Complete payment to secure your booking'
                      }
                    </div>
                  </div>
                </label>
                
                {selectedService.id !== 3 && (
                  <label className="flex items-center p-4 border-2 border-charcoal/20 rounded-lg cursor-pointer hover:border-sage transition-colors duration-200">
                    <input
                      type="radio"
                      name="payment"
                      value="pay-later"
                      checked={paymentOption === 'pay-later'}
                      onChange={(e) => setPaymentOption(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${paymentOption === 'pay-later' ? 'border-sage bg-sage' : 'border-charcoal/30'}`}>
                      {paymentOption === 'pay-later' && <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>}
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">Pay at Appointment</div>
                      <div className="text-sm text-charcoal/60">Pay when you arrive for your treatment</div>
                    </div>
                  </label>
                )}
              </div>

              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-sage border-charcoal/20 rounded focus:ring-sage"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-charcoal/70">
                  I agree to the <span className="text-sage hover:underline cursor-pointer">terms and conditions</span> and 
                  {selectedService.id === 3 
                    ? <span className="text-sage hover:underline cursor-pointer"> membership agreement</span>
                    : <span className="text-sage hover:underline cursor-pointer"> cancellation policy</span>
                  }
                </label>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-medium transition-all duration-300 transform flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-sage/60 text-white cursor-not-allowed' 
                    : 'bg-sage text-white hover:bg-sage/90 hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5 mr-2" />
                    {selectedService.id === 3 ? 'Start Membership' : 'Confirm Booking'}
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center text-green-800">
                    <div className="w-5 h-5 mr-2 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-medium">
                      {selectedService.id === 3 ? 'Membership activated successfully!' : 'Booking confirmed!'}
                    </span>
                  </div>
                  <p className="text-green-700 text-sm mt-2">
                    {selectedService.id === 3 
                      ? 'Our wellness coordinator will contact you within 24 hours to schedule your first appointment.'
                      : 'You will receive a confirmation email shortly with your appointment details.'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg sticky top-8">
              <h3 className="text-xl font-serif text-charcoal mb-6">Booking Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="border-b border-charcoal/10 pb-4">
                  <h4 className="font-medium text-charcoal">{selectedService.name}</h4>
                  <p className="text-sm text-charcoal/60">
                    {selectedService.id === 3 ? 'Monthly Subscription' : selectedService.duration}
                  </p>
                </div>
                
                {selectedDate && selectedService.id !== 3 && (
                  <div className="border-b border-charcoal/10 pb-4">
                    <div className="flex items-center text-charcoal/70 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      Date
                    </div>
                    <p className="font-medium text-charcoal">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                )}
                
                {selectedTime && selectedService.id !== 3 && (
                  <div className="border-b border-charcoal/10 pb-4">
                    <div className="flex items-center text-charcoal/70 mb-1">
                      <Clock className="w-4 h-4 mr-2" />
                      Time
                    </div>
                    <p className="font-medium text-charcoal">{selectedTime}</p>
                  </div>
                )}
                
                {selectedService.id === 3 && (
                  <div className="border-b border-charcoal/10 pb-4">
                    <div className="flex items-center text-charcoal/70 mb-1">
                      <Star className="w-4 h-4 mr-2" />
                      Billing Cycle
                    </div>
                    <p className="font-medium text-charcoal">Monthly - Auto-renewal</p>
                  </div>
                )}
                
                <div className="pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-charcoal">Total</span>
                    <span className={`text-2xl font-light ${
                      selectedService.id === 3 ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      ${selectedService.price}{selectedService.id === 3 ? '/month' : ''}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-sage/5 p-4 rounded-lg mb-6">
                <h5 className="font-medium text-charcoal mb-2">What's Included:</h5>
                <p className="text-sm text-charcoal/70">{selectedService.description}</p>
              </div>
              
              <div className="bg-blush/10 p-4 rounded-lg">
                <div className="flex items-center text-charcoal/70 mb-2">
                  <Star className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">
                    {selectedService.id === 3 ? 'Membership Terms' : 'Cancellation Policy'}
                  </span>
                </div>
                <p className="text-xs text-charcoal/60">
                  {selectedService.id === 3 
                    ? 'Monthly membership can be cancelled anytime with 30 days notice. No long-term commitment required.'
                    : 'Free cancellation up to 24 hours before your appointment. Same-day cancellations may incur a fee.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Help Section */}
        <div className="mt-16 text-center">
          <MiniContact showCallButton={true} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;