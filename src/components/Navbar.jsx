import React from 'react';
import SearchInput from './SearchInput';

const Navbar = ({ setUserLocation, errors }) => {
	return (
		<div id='navbar'>
			<SearchInput setUserLocation={setUserLocation} errors={errors} />
		</div>
	);
};

export default Navbar;
