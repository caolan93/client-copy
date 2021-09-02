import React from 'react';
import About from '../components/AboutSection/About';
import HeroSection from '../components/HeroSection/HeroSection';
import OpeningHours from '../components/OpeningHours/OpeningHours';
import Contact from '../components/Contact/Contact';
import Products from '../components/Products/Products';

const Homepage = () => {
	return (
		<div style={{ maxWidth: '1500px', margin: 'auto' }}>
			<HeroSection />
			<About />
			<OpeningHours />
			<Products />
			<Contact />
		</div>
	);
};

export default Homepage;
