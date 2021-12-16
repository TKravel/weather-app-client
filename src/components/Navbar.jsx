import React from 'react';

const Navbar = () => {
	return (
		<div className='navbar'>
			<ul className='nav-list'>
				<li className='nav-li'>
					<button className='nav-btn'>
						<a href='#current' className='nav-link'>
							Current
						</a>
					</button>
				</li>
				<li className='nav-li'>
					<button className='nav-btn'>
						<a href='#hourly' className='nav-link'>
							24 hour
						</a>
					</button>
				</li>
				<li className='nav-li'>
					<button className='nav-btn'>
						<a href='#3day' className='nav-link'>
							3 day
						</a>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
