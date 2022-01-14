import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const LandingPage = ({ setUserLocation, errors }) => {
	return (
		<div id='landing-wrapper'>
			<div id='landing-container'>
				<Navbar setUserLocation={setUserLocation} errors={errors} />
				<section id='hero-content'>
					<div id='hero-text-container'>
						<h1 className='hero-text'>Forecasts for you</h1>
						<p className='hero-text'>
							- CURRENT - HOURLY - THREE-DAY -
						</p>
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
};

export default LandingPage;
