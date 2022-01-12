import React from 'react';
import CurrentSection from '../currentForecast/CurrentSection';
import ExtenedSection from '../extendedForecast/ExtendedSection';
import Footer from '../Footer';
import HourlySection from '../hourly/HourlySection';
import Navbar from '../Navbar';

export const ForecastPage = ({
	setUserLocation,
	errors,
	forecast,
	dailyForecast,
	tmrForecast,
	extendedForecast,
}) => {
	return (
		<div id='forecast-wrapper'>
			<Navbar
				id='landing-nav'
				setUserLocation={setUserLocation}
				errors={errors}
			/>
			<CurrentSection forecast={forecast} />
			<HourlySection
				dailyForecast={dailyForecast}
				tmrForecast={tmrForecast}
			/>
			<ExtenedSection extendedForecast={extendedForecast} />
			<Footer id='landing-footer' />
		</div>
	);
};
