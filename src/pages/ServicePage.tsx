import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowLeft, Clock, DollarSign, CheckCircle, ChevronDown, ChevronRight, Star, Shield, Users, Calendar } from 'lucide-react';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';

interface ServiceData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  overview: string;
  expectedResults: string;
  benefits: string[];
  process: string[];
  preparation: string[];
  aftercare: string[];
  faqs: { question: string; answer: string }[];
  testimonial: { name: string; text: string };
  relatedServices: { slug: string; title: string }[];
}

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleBackHome = () => {
    navigate('/');
  };

  const handleBookSession = () => {
    navigate('/booking', { state: { selectedServiceSlug: serviceSlug } });
  };

  const handleServiceClick = (slug: string) => {
    navigate(`/service/${slug}`);
    window.scrollTo(0, 0);
  };

  // Scroll to top when component mounts or service changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const servicesData: { [key: string]: ServiceData } = {
    'holistic-facial-treatments': {
      id: 1,
      slug: 'holistic-facial-treatments',
      title: "Holistic Facial Treatments",
      subtitle: "Reveal Your Natural Radiance",
      duration: "75 minutes",
      price: "$185",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      overview: "Our signature holistic facial treatment combines ancient healing wisdom with modern dermo-cosmetic science. Using only the finest organic skincare products, this personalized treatment addresses your unique skin needs while providing deep relaxation and rejuvenation.",
      expectedResults: "Immediate visible improvement in skin texture, hydration, and radiance. Long-term benefits include reduced fine lines, improved elasticity, and a more balanced complexion.",
      benefits: [
        "Deep cleansing and detoxification",
        "Improved skin texture and tone",
        "Reduced appearance of fine lines",
        "Enhanced natural glow",
        "Stress relief and relaxation",
        "Customized to your skin type"
      ],
      process: [
        "Consultation and skin analysis",
        "Gentle cleansing with organic products",
        "Steam treatment for deep pore opening",
        "Professional extraction (if needed)",
        "Customized mask application",
        "Facial massage with nourishing oils",
        "Moisturizing and sun protection"
      ],
      preparation: [
        "Avoid sun exposure 24 hours before treatment",
        "Remove all makeup before arrival",
        "Inform us of any skin sensitivities",
        "Stay hydrated throughout the day"
      ],
      aftercare: [
        "Avoid direct sunlight for 24 hours",
        "Use gentle, fragrance-free products",
        "Apply SPF 30+ daily",
        "Drink plenty of water",
        "Schedule follow-up treatments monthly"
      ],
      faqs: [
        {
          question: "Is this treatment suitable for sensitive skin?",
          answer: "Yes, our holistic facial is completely customizable and we use gentle, organic products that are suitable for all skin types, including sensitive skin."
        },
        {
          question: "How often should I get a facial?",
          answer: "For optimal results, we recommend monthly facials. However, the frequency can be adjusted based on your skin's specific needs and concerns."
        },
        {
          question: "Will I experience any downtime?",
          answer: "No downtime is required. You may experience slight redness immediately after treatment, which typically subsides within an hour."
        },
        {
          question: "Can I wear makeup after the treatment?",
          answer: "We recommend avoiding makeup for at least 4-6 hours after your facial to allow your skin to fully absorb the treatment benefits."
        }
      ],
      testimonial: {
        name: "Sarah M.",
        text: "The holistic facial at Élan Vital transformed my skin completely. The personalized approach and organic products left my skin glowing for weeks!"
      },
      relatedServices: [
        { slug: "lymphatic-drainage", title: "Lymphatic Drainage" },
        { slug: "hydraglow-microdermabrasion", title: "HydraGlow Microdermabrasion" }
      ]
    },
    'deep-tissue-massage': {
      id: 2,
      slug: 'deep-tissue-massage',
      title: "Deep Tissue Massage",
      subtitle: "Restore Balance & Harmony",
      duration: "90 minutes",
      price: "$165",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200",
      overview: "Our therapeutic deep tissue massage targets chronic muscle tension and knots, using specialized techniques to improve circulation, reduce pain, and restore your body's natural harmony. Perfect for those with active lifestyles or chronic stress.",
      expectedResults: "Immediate relief from muscle tension and improved mobility. Long-term benefits include better posture, reduced chronic pain, and enhanced overall well-being.",
      benefits: [
        "Relief from chronic muscle tension",
        "Improved circulation and flexibility",
        "Reduced stress and anxiety",
        "Better sleep quality",
        "Enhanced athletic performance",
        "Pain management for chronic conditions"
      ],
      process: [
        "Consultation about problem areas",
        "Preparation in our tranquil treatment room",
        "Warm-up with gentle Swedish massage",
        "Targeted deep tissue work on tension areas",
        "Integration with relaxation techniques",
        "Cool-down and stretching guidance",
        "Aftercare recommendations"
      ],
      preparation: [
        "Eat a light meal 2 hours before",
        "Hydrate well throughout the day",
        "Communicate any injuries or concerns",
        "Arrive 10 minutes early to relax"
      ],
      aftercare: [
        "Drink plenty of water to flush toxins",
        "Take a warm bath with Epsom salts",
        "Avoid strenuous activity for 24 hours",
        "Apply ice to any sore areas if needed",
        "Schedule regular maintenance sessions"
      ],
      faqs: [
        {
          question: "Will deep tissue massage be painful?",
          answer: "While you may feel some discomfort during treatment, it should never be painful. We adjust pressure based on your comfort level and tolerance."
        },
        {
          question: "How will I feel after the massage?",
          answer: "Most clients feel immediate relief and relaxation. Some may experience mild soreness for 24-48 hours as toxins are released from the muscles."
        },
        {
          question: "How often should I receive deep tissue massage?",
          answer: "For chronic issues, weekly sessions for 4-6 weeks, then bi-weekly or monthly for maintenance. Your therapist will create a personalized plan."
        },
        {
          question: "Is deep tissue massage covered by insurance?",
          answer: "Coverage varies by provider. We can provide receipts for you to submit to your insurance company if you have massage therapy benefits."
        }
      ],
      testimonial: {
        name: "Michael R.",
        text: "After years of desk work pain, the deep tissue massage at Élan Vital has been life-changing. I finally feel like myself again!"
      },
      relatedServices: [
        { slug: "relaxation-massage-aromatherapy", title: "Relaxation Massage & Aromatherapy" },
        { slug: "lymphatic-drainage", title: "Lymphatic Drainage" }
      ]
    },
    'lymphatic-drainage': {
      id: 3,
      slug: 'lymphatic-drainage',
      title: "Lymphatic Drainage",
      subtitle: "Detoxify & Rejuvenate",
      duration: "60 minutes",
      price: "$145",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1200",
      overview: "Our specialized lymphatic drainage massage stimulates your body's natural detoxification system, reducing puffiness, improving circulation, and enhancing your natural glow from within.",
      expectedResults: "Reduced swelling and puffiness, improved skin tone, enhanced energy levels, and a feeling of lightness throughout the body.",
      benefits: [
        "Reduced fluid retention and bloating",
        "Improved skin appearance and tone",
        "Enhanced immune system function",
        "Increased energy and vitality",
        "Faster healing and recovery",
        "Natural detoxification support"
      ],
      process: [
        "Initial consultation and assessment",
        "Comfortable positioning on treatment table",
        "Gentle, rhythmic massage movements",
        "Focus on lymph node areas",
        "Full-body drainage sequence",
        "Hydration and rest period",
        "Post-treatment wellness advice"
      ],
      preparation: [
        "Drink extra water the day before",
        "Avoid heavy meals 2 hours prior",
        "Wear comfortable, loose clothing",
        "Inform us of any medical conditions"
      ],
      aftercare: [
        "Drink plenty of water for 24 hours",
        "Avoid alcohol and caffeine",
        "Take gentle walks to maintain circulation",
        "Rest and allow your body to process",
        "Consider regular sessions for best results"
      ],
      faqs: [
        {
          question: "Who can benefit from lymphatic drainage?",
          answer: "Anyone looking to reduce puffiness, improve circulation, or support their body's natural detox processes. It's especially beneficial post-surgery or for those with sedentary lifestyles."
        },
        {
          question: "Is lymphatic drainage massage gentle?",
          answer: "Yes, this is a very gentle, relaxing treatment using light pressure and rhythmic movements. Many clients find it deeply soothing."
        },
        {
          question: "How quickly will I see results?",
          answer: "Many clients notice reduced puffiness and increased energy immediately. For lasting benefits, a series of treatments is recommended."
        },
        {
          question: "Are there any contraindications?",
          answer: "Lymphatic drainage is not recommended for those with active infections, blood clots, or certain heart conditions. We'll review your health history during consultation."
        }
      ],
      testimonial: {
        name: "Emma K.",
        text: "The lymphatic drainage treatment gave me incredible energy and my skin has never looked better. I feel completely renewed!"
      },
      relatedServices: [
        { slug: "holistic-facial-treatments", title: "Holistic Facial Treatments" },
        { slug: "body-sculpting-slimming-rituals", title: "Body Sculpting & Slimming Rituals" }
      ]
    },
    'relaxation-massage-aromatherapy': {
      id: 4,
      slug: 'relaxation-massage-aromatherapy',
      title: "Relaxation Massage & Aromatherapy",
      subtitle: "Restore Inner Peace",
      duration: "75 minutes",
      price: "$155",
      image: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=1200",
      overview: "Immerse yourself in tranquility with our signature relaxation massage enhanced by carefully selected essential oils. This treatment melts away stress, calms the mind, and restores your natural sense of peace and well-being.",
      expectedResults: "Deep relaxation, reduced stress levels, improved sleep quality, and a renewed sense of mental clarity and emotional balance.",
      benefits: [
        "Deep stress relief and relaxation",
        "Improved sleep quality",
        "Enhanced mood and mental clarity",
        "Reduced anxiety and tension",
        "Aromatherapy benefits for mind and body",
        "Improved circulation and flexibility"
      ],
      process: [
        "Aromatherapy consultation and oil selection",
        "Preparation in our serene treatment space",
        "Gentle Swedish massage techniques",
        "Integration of essential oil blends",
        "Focus on stress-holding areas",
        "Scalp and facial relaxation",
        "Meditation and grounding time"
      ],
      preparation: [
        "Arrive early to decompress",
        "Share any scent sensitivities",
        "Turn off electronic devices",
        "Set intention for your healing"
      ],
      aftercare: [
        "Rest quietly for a few minutes",
        "Drink herbal tea or water",
        "Avoid stimulating activities",
        "Practice deep breathing",
        "Maintain the peaceful mindset"
      ],
      faqs: [
        {
          question: "What essential oils do you use?",
          answer: "We use premium, therapeutic-grade essential oils including lavender, eucalyptus, bergamot, and custom blends. We'll select the perfect combination for your needs."
        },
        {
          question: "Can I request specific scents?",
          answer: "Absolutely! We'll discuss your preferences and any sensitivities during consultation to create your perfect aromatherapy experience."
        },
        {
          question: "Is this treatment good for anxiety?",
          answer: "Yes, the combination of gentle massage and calming essential oils is particularly effective for reducing anxiety and promoting relaxation."
        },
        {
          question: "How long do the aromatherapy benefits last?",
          answer: "The immediate relaxation effects can last 24-48 hours, while regular treatments provide cumulative benefits for stress management and overall well-being."
        }
      ],
      testimonial: {
        name: "David L.",
        text: "This is pure bliss. The aromatherapy massage transported me to another world. I left feeling completely peaceful and centered."
      },
      relatedServices: [
        { slug: "deep-tissue-massage", title: "Deep Tissue Massage" },
        { slug: "holistic-facial-treatments", title: "Holistic Facial Treatments" }
      ]
    },
    'body-sculpting-slimming-rituals': {
      id: 5,
      slug: 'body-sculpting-slimming-rituals',
      title: "Body Sculpting & Slimming Rituals",
      subtitle: "Contour Your Natural Beauty",
      duration: "90 minutes",
      price: "$225",
      image: "https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=1200",
      overview: "Our advanced body sculpting treatment combines non-invasive techniques including targeted massage, body wraps, and specialized tools to help tone, firm, and contour your natural silhouette while promoting overall wellness.",
      expectedResults: "Improved skin texture and firmness, reduced appearance of cellulite, enhanced body contours, and increased confidence in your natural beauty.",
      benefits: [
        "Non-invasive body contouring",
        "Improved skin firmness and texture",
        "Reduced appearance of cellulite",
        "Enhanced circulation and lymphatic flow",
        "Increased confidence and body positivity",
        "Complementary to healthy lifestyle choices"
      ],
      process: [
        "Body analysis and goal discussion",
        "Exfoliation with organic scrubs",
        "Targeted massage techniques",
        "Application of firming body mask",
        "Specialized contouring tools",
        "Hydrating and firming treatments",
        "Aftercare and maintenance planning"
      ],
      preparation: [
        "Exfoliate skin 24 hours before",
        "Stay well-hydrated",
        "Avoid large meals before treatment",
        "Wear comfortable undergarments"
      ],
      aftercare: [
        "Drink plenty of water",
        "Maintain regular exercise routine",
        "Use recommended firming products",
        "Schedule follow-up treatments",
        "Practice body-positive self-care"
      ],
      faqs: [
        {
          question: "How many sessions are needed for results?",
          answer: "While some improvement may be visible after one session, optimal results typically require a series of 6-8 treatments combined with a healthy lifestyle."
        },
        {
          question: "Is this treatment painful?",
          answer: "The treatment is generally comfortable. Some techniques may cause mild discomfort, but we adjust pressure based on your tolerance level."
        },
        {
          question: "Can this replace diet and exercise?",
          answer: "No, our body sculpting treatments are designed to complement, not replace, a healthy diet and regular exercise routine for best results."
        },
        {
          question: "Are the results permanent?",
          answer: "Results can be long-lasting with proper maintenance, healthy lifestyle choices, and periodic touch-up treatments."
        }
      ],
      testimonial: {
        name: "Lisa H.",
        text: "I'm amazed at how firm and smooth my skin feels after the body sculpting treatment. It's given me so much confidence!"
      },
      relatedServices: [
        { slug: "lymphatic-drainage", title: "Lymphatic Drainage" },
        { slug: "deep-tissue-massage", title: "Deep Tissue Massage" }
      ]
    },
    'hydraglow-microdermabrasion': {
      id: 6,
      slug: 'hydraglow-microdermabrasion',
      title: "HydraGlow Microdermabrasion",
      subtitle: "Reveal Radiant Youthful Skin",
      duration: "60 minutes",
      price: "$195",
      image: "https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=1200",
      overview: "Experience the ultimate in advanced skincare with our HydraGlow microdermabrasion treatment. This professional-grade exfoliation removes dead skin cells, reveals fresh skin, and provides immediate visible results for a radiant, youthful complexion.",
      expectedResults: "Immediately smoother, brighter skin with reduced fine lines, minimized pores, and improved overall texture. Long-term benefits include enhanced product absorption and maintained youthful appearance.",
      benefits: [
        "Immediate visible skin improvement",
        "Reduced fine lines and wrinkles",
        "Minimized pore appearance",
        "Enhanced product absorption",
        "Improved skin texture and tone",
        "Stimulated collagen production"
      ],
      process: [
        "Thorough skin cleansing and analysis",
        "Gentle microdermabrasion treatment",
        "Dead skin cell removal",
        "Hydrating infusion therapy",
        "Soothing mask application",
        "Moisturizing and sun protection",
        "Aftercare education"
      ],
      preparation: [
        "Avoid sun exposure for 48 hours",
        "Discontinue retinoids 3 days prior",
        "No waxing or chemical peels for 1 week",
        "Inform us of any recent skin treatments"
      ],
      aftercare: [
        "Apply SPF 30+ daily for 1 week",
        "Avoid direct sun exposure",
        "Use gentle, hydrating products only",
        "No exfoliating products for 48 hours",
        "Schedule follow-up treatments as recommended"
      ],
      faqs: [
        {
          question: "Is microdermabrasion suitable for all skin types?",
          answer: "Microdermabrasion is suitable for most skin types, but we'll assess your skin during consultation to ensure it's the right treatment for you."
        },
        {
          question: "Will my skin be red after treatment?",
          answer: "Mild redness is normal immediately after treatment and typically subsides within a few hours. We'll provide post-care instructions to minimize any discomfort."
        },
        {
          question: "How often can I have microdermabrasion?",
          answer: "For best results, treatments can be performed every 2-4 weeks. Your aesthetician will recommend the ideal frequency based on your skin's needs."
        },
        {
          question: "When will I see results?",
          answer: "You'll notice immediate improvement in skin texture and brightness. Continued improvements develop over the following days as your skin continues to regenerate."
        }
      ],
      testimonial: {
        name: "Rachel S.",
        text: "The HydraGlow treatment gave me the most amazing results! My skin looks 10 years younger and feels incredibly smooth."
      },
      relatedServices: [
        { slug: "holistic-facial-treatments", title: "Holistic Facial Treatments" },
        { slug: "lymphatic-drainage", title: "Lymphatic Drainage" }
      ]
    }
  };

  const currentService = servicesData[serviceSlug || 'holistic-facial-treatments'];

  if (!currentService) {
    return <div>Service not found</div>;
  }

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
              onClick={handleBackHome}
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
            <span>Services</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-sage">{currentService.title}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-charcoal mb-4 leading-tight">
                {currentService.title}
              </h2>
              <p className="text-xl text-sage italic mb-6">{currentService.subtitle}</p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center text-charcoal/70">
                  <Clock className="w-5 h-5 mr-2 text-sage" />
                  <span>{currentService.duration}</span>
                </div>
                <div className="flex items-center text-charcoal/70">
                  <DollarSign className="w-5 h-5 mr-2 text-sage" />
                  <span className="text-2xl font-light text-sage">{currentService.price}</span>
                </div>
              </div>

              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                {currentService.overview}
              </p>

              <button
                onClick={handleBookSession}
                className="bg-sage text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-sage/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book This Treatment
              </button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={currentService.image} 
                  alt={currentService.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What to Expect */}
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-charcoal mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-charcoal mb-3">Treatment Process</h4>
                  <ol className="space-y-3">
                    {currentService.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-sage text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-charcoal/80">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-medium text-charcoal mb-3">Expected Results</h4>
                  <p className="text-charcoal/80 leading-relaxed">{currentService.expectedResults}</p>
                </div>
              </div>
            </section>

            {/* Benefits & Features */}
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-charcoal mb-6">Benefits & Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage mr-3 flex-shrink-0" />
                    <span className="text-charcoal/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Preparation & Aftercare */}
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-charcoal mb-6">Preparation & Aftercare</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-charcoal mb-4">Before Your Treatment</h4>
                  <ul className="space-y-2">
                    {currentService.preparation.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-sage rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-charcoal/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-charcoal mb-4">After Your Treatment</h4>
                  <ul className="space-y-2">
                    {currentService.aftercare.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-sage rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-charcoal/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-charcoal mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {currentService.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-charcoal/10 pb-4">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="flex items-center justify-between w-full text-left p-4 rounded-lg hover:bg-sage/5 transition-all duration-300"
                    >
                      <span className="font-medium text-charcoal pr-4">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-sage transition-transform duration-300 flex-shrink-0 ${
                          expandedFAQ === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedFAQ === index 
                          ? 'max-h-96 opacity-100 mt-3' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="text-charcoal/80 leading-relaxed px-4 pb-2">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Client Testimonial */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-charcoal/80 italic mb-4">"{currentService.testimonial.text}"</p>
              <p className="font-medium text-charcoal">— {currentService.testimonial.name}</p>
            </div>

            {/* Related Services */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h4 className="font-serif text-charcoal mb-4">Related Services</h4>
              <div className="space-y-3">
                {currentService.relatedServices.map((service) => (
                  <button
                    key={service.slug}
                    onClick={() => handleServiceClick(service.slug)}
                    className="block w-full text-left p-3 rounded-lg hover:bg-sage/5 transition-colors duration-200"
                  >
                    <span className="text-charcoal hover:text-sage">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Elements */}
            <div className="bg-sage/5 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-sage mr-3" />
                  <span className="text-charcoal font-medium">Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-sage mr-3" />
                  <span className="text-charcoal font-medium">Licensed Professionals</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-sage mr-3" />
                  <span className="text-charcoal font-medium">Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <CTA serviceName={currentService.title} />

      <Footer />
    </div>
  );
};

export default ServicePage;
