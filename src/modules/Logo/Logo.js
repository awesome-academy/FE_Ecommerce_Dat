import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<div className="logo">
			<Link to="/"><img src={require('../../assets/images/logo.png')} /></Link>
		</div>
	);
};

export default Logo;