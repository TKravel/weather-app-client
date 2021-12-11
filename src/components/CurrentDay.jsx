import React from 'react';

const CurrentDay = () => {
	return (
		<>
			<div>
				<div>
					<h1>Name</h1>
					<span>Region</span>
				</div>

				<span>Currently</span>
				<span>Temp</span>
				<span>Feels like</span>
				<span>Condition</span>
				<div>
					<div>
						<span>Wind</span>
						<span>MPH</span>
					</div>
					<div>
						<span>Rain</span>
						<span>Chance</span>
					</div>
				</div>
			</div>
			<div>
				<p>Low</p>
				<p>High</p>
				<p>Humidity</p>
				<p>Wind chill</p>
				<p>Sunrise</p>
				<p>Sunset</p>
			</div>
		</>
	);
};

export default CurrentDay;
