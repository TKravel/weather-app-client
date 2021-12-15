import React from 'react';

const Navbar = ({ currentlyLoading }) => {
	return (
		<div className='navbar'>
			{!currentlyLoading && (
				<ul className='nav-list'>
					<li>
						<button className='nav-btn'>
							<a href='#current' className='nav-link'>
								Current
							</a>
						</button>
					</li>
					<li>
						<button className='nav-btn'>
							<a href='#24Hr' className='nav-link'>
								24 hour
							</a>
						</button>
					</li>
					<li>
						<button className='nav-btn'>
							<a href='#3day' className='nav-link'>
								3 day
							</a>
						</button>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Navbar;
