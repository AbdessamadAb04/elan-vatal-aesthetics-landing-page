import { useState } from 'react';
import { ChevronDown, ChevronUp, Leaf } from 'lucide-react';
import MiniContact from './MiniContact';

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Élan Vital different from other spas?",
      answer: "We combine holistic wellness principles with advanced aesthetic techniques, creating a truly personalized experience. Our approach integrates your physical, emotional, and spiritual well-being, using organic products and customized treatments that address your unique needs rather than following a one-size-fits-all approach."
    },
    {
      question: "How do I know which treatment is right for me?",
      answer: "Every new client begins with a complimentary consultation where we assess your skin, discuss your wellness goals, and understand your lifestyle. Our experienced aestheticians will recommend a personalized treatment plan that evolves with your changing needs and delivers optimal results."
    },
    {
      question: "What can I expect during my first visit?",
      answer: "Your first visit includes a warm welcome, detailed consultation, skin analysis, and a mini treatment preview. We'll discuss your goals, explain our philosophy, and create a customized wellness plan. You'll leave feeling relaxed and confident about your journey with us."
    },
    {
      question: "Are your treatments suitable for sensitive skin?",
      answer: "Absolutely! We specialize in working with all skin types, including the most sensitive. We use gentle, organic products and customize every treatment to your skin's specific needs. During your consultation, we'll discuss any sensitivities and adapt our approach accordingly."
    },
    {
      question: "Do you offer packages or membership options?",
      answer: "Yes! We offer wellness memberships and treatment packages designed to provide consistent care at better value. Our memberships include priority booking, exclusive discounts, and complimentary add-ons. We'll help you choose the option that best fits your wellness goals and budget."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-cream/30 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-6 h-6 text-sage/60 mr-2" />
            <div className="h-px w-12 bg-sage/30"></div>
            <Leaf className="w-6 h-6 text-sage/60 ml-2 rotate-180" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-charcoal mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-charcoal/70 max-w-2xl mx-auto">
            Everything you need to know about your wellness journey
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-sage/10 hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-sage/5 transition-colors duration-300 group"
              >
                <span className="font-serif text-lg text-charcoal group-hover:text-charcoal/80 transition-colors duration-300 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-sage group-hover:text-sage/80 transition-all duration-300 transform group-hover:scale-110" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-sage group-hover:text-sage/80 transition-all duration-300 transform group-hover:scale-110" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedFAQ === index 
                    ? 'max-h-[500px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-charcoal/80 leading-relaxed transform transition-transform duration-500 ease-in-out">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mb-16">
          <MiniContact 
            title="Still Have Questions?"
            description="Our wellness specialists are here to help you find the perfect treatment for your unique needs and goals."
            showCallButton={false}
          />
        </div>

        {/* Decorative element */}
        <div className="mt-12 flex items-center justify-center opacity-30">
          <div className="w-16 h-px bg-sage"></div>
          <div className="w-2 h-2 bg-sage rounded-full mx-4"></div>
          <div className="w-16 h-px bg-sage"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
