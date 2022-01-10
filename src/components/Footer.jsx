import React from 'react';

const Footer = () => {
	const date = new Date();
	const currentYear = date.getFullYear();

	return (
		<div className='footer'>
			<p>&copy; {currentYear} TKDevDesign.com</p>
		</div>
	);
};

export default Footer;
