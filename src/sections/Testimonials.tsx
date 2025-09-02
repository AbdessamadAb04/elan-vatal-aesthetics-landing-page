import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily R.",
      text: "I've never felt so rejuvenated. The massage was heavenly and my skin is absolutely glowing! The attention to detail and personalized care exceeded all my expectations.",
      rating: 5,
      treatment: "Holistic Facial & Deep Tissue Massage"
    },
    {
      name: "Sarah N.",
      text: "Professional, peaceful, and transformative. The lymphatic drainage treatment has made such a difference in how I feel. Highly recommended for anyone seeking true wellness.",
      rating: 5,
      treatment: "Lymphatic Drainage Therapy"
    },
    {
      name: "Jennifer M.",
      text: "Élan Vital is my sanctuary. The aromatherapy massage melts away all my stress, and the staff truly understands what it means to provide exceptional, personalized care.",
      rating: 5,
      treatment: "Aromatherapy Relaxation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blush/20 to-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-charcoal mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Don't just take our word for it – hear from the wonderful clients 
            who have experienced the transformative power of our treatments.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-sage w-8 h-8 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-charcoal/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client info */}
              <div className="border-t border-charcoal/10 pt-4">
                <p className="font-serif text-charcoal font-medium">
                  {testimonial.name}
                </p>
                <p className="text-charcoal/60 text-sm">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <p className="text-charcoal/70 mb-4">See more reviews on Google</p>
          <a 
            href="https://www.google.com/search?q=elan+vital+massage+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sage hover:text-sage/80 font-medium transition-colors duration-200"
          >
            Read All Reviews
            <Star className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;