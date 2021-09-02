import React from 'react';
import './styles.css';

import { FaFacebook, FaTwitter, FaPlayCircle, FaSearch } from 'react-icons/fa';

const Socials = () => {
	return (
		<div className="background">
			<div className="socials_container">
				<div className="react_icons">
					<FaPlayCircle style={{ color: '#fff' }} className="social_icons" />
					<FaFacebook style={{ color: '#fff' }} className="social_icons" />
					<FaTwitter className="social_icons inverted" />
					<FaSearch className="social_icons inverted" />
				</div>
			</div>
		</div>
	);
};

export default Socials;
