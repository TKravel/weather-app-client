import React from 'react';

const Footer = () => {
	const date = new Date();
	const currentYear = date.getFullYear();

	return (
		<div className='footer'>
			<p>TKDevDesign.com &copy; {currentYear}</p>
		</div>
	);
};

export default Footer;
