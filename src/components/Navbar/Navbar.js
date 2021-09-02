import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';

import logo from '../../images/roachestownLogo.png';
import { HiPhone, HiMenu, HiX } from 'react-icons/hi';

import { menuToggle } from '../../redux/actions/menuActions';

const Navbar = () => {
	const dispatch = useDispatch();
	const toggle = useSelector((state) => state.menuReducer);

	const menuHandler = () => {
		dispatch(menuToggle());
	};

	return (
		<React.Fragment>
			<nav className="navbar_container">
				<div className="navbar_left">
					<img className="logo_image" src={logo} alt="logo" />
				</div>
				<div className="navbar_right">
					<div className="contact_container">
						<div className="phone_background">
							<HiPhone className="phone_icon" />
						</div>
						<div>
							<h2 className="contact_number">+353 21 489 3639</h2>
						</div>
					</div>
					<ul className="navbar_tabs">
						<li className="navbar_list">HOME</li>
						<li className="navbar_list">ABOUT</li>
						<li className="navbar_list">SERVICES</li>
						<li className="navbar_list">GALLERY</li>
						<li className="navbar_list">CONTACTS</li>
					</ul>
				</div>
				<div className="burger_menu_container">
					{toggle ? <HiX onClick={menuHandler} /> : <HiMenu onClick={menuHandler} />}
				</div>
			</nav>

			<ul className={`mobile_tabs ${toggle ? 'show' : 'hidden'}`}>
				<li className="mobile_list">HOME</li>
				<li className="mobile_list">ABOUT</li>
				<li className="mobile_list">SERVICES</li>
				<li className="mobile_list">GALLERY</li>
				<li className="mobile_list">CONTACTS</li>
			</ul>
		</React.Fragment>
	);
};

export default Navbar;
