import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Faq from '../sections/Faq';
import Pricing from '../sections/Pricing';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';

const HomePage = () => {
	return (
		<div className="bg-gradient-to-br from-blush via-cream to-lavender min-h-screen">
			<Hero />
			<About />
			<Services />
			<Pricing />
			<CTA />
			<Faq />
			<Footer />
		</div>
	);
};

export default HomePage;
