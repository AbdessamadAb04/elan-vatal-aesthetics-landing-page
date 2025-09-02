import { useNavigate } from 'react-router-dom';

interface MiniContactProps {
  title?: string;
  description?: string;
  showCallButton?: boolean;
}

const MiniContact = ({ 
  title = "Need Help Choosing?", 
  description = "Our wellness experts are here to help you select the perfect treatment for your needs.",
  showCallButton = false 
}: MiniContactProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/10 text-center">
      <h3 className="text-xl font-serif text-charcoal mb-4">{title}</h3>
      <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto leading-relaxed">{description}</p>
      <div className={`flex ${showCallButton ? 'flex-col sm:flex-row' : 'justify-center'} gap-4 justify-center`}>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-sage text-white px-6 py-3 rounded-lg font-medium hover:bg-sage/90 transition-colors duration-300"
        >
          Contact Us
        </button>
        {showCallButton && (
          <button className="text-charcoal px-6 py-3 rounded-lg font-medium border-2 border-charcoal/20 hover:border-sage hover:text-sage transition-colors duration-300">
            Call (555) 123-WELLNESS
          </button>
        )}
      </div>
    </div>
  );
};

export default MiniContact;
