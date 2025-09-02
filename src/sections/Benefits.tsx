import React from 'react';
import { Leaf, Award, Clock, User, Flower, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Natural & Cruelty-Free",
      description: "All treatments use natural, ethically-sourced products"
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Licensed therapists and certified skin specialists"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Appointments tailored to your busy lifestyle"
    },
    {
      icon: User,
      title: "Personalized Care",
      description: "Custom wellness plans for long-term results"
    },
    {
      icon: Flower,
      title: "Tranquil Environment",
      description: "Peaceful, aromatherapy-infused sanctuary"
    },
    {
      icon: Shield,
      title: "Premium Standards",
      description: "Highest safety and hygiene protocols maintained"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-lavender/20 to-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-charcoal mb-6">
            Why Choose Élan Vital
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            We're committed to providing you with an exceptional wellness experience 
            that exceeds your expectations.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-4 group-hover:text-sage transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;