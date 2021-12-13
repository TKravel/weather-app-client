import React from 'react';

const ToggleButton = ({ openStatus, setStatus }) => {
	const toggle = () => {
		openStatus ? setStatus(false) : setStatus(true);
	};
	return (
		<div className='toggle-btn' onClick={toggle}>
			{openStatus ? (
				<>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path
							fill='#377373'
							d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z'
						/>
					</svg>
				</>
			) : (
				<>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path
							fill='#1687a7'
							d='M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z'
						/>
					</svg>
				</>
			)}
		</div>
	);
};

export default ToggleButton;
