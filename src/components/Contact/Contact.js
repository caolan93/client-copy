import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Contact = () => {
	const [ details, setDetails ] = useState({
		name: '',
		phone: '',
		email: ''
	});

	const [ sendFormSuccess, setSendFormSuccess ] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setDetails((prevInput) => {
			return {
				...prevInput,
				[name]: value
			};
		});
	};

	const sendForm = (e) => {
		e.preventDefault();

		const newInfo = {
			name: details.name,
			phone: details.phone,
			email: details.email
		};

		if (axios.post('http://localhost:5000/contact', newInfo)) {
			setDetails({
				name: '',
				phone: '',
				email: ''
			});
			setSendFormSuccess(true);
		}
	};
	return (
		<div className="contact_info_container">
			<div className="contact_info_grid">
				<div className="contact_info_left">
					<h2 className="contact_info_header">CONTACT US</h2>
					{sendFormSuccess ? (
						<h2 className="contact_form contact_success">Thanks, we'll be in touch!</h2>
					) : (
						<form className="contact_form" method="post" action="/">
							<input
								className="form_input"
								type="name"
								name="name"
								value={details.name}
								placeholder="Name"
								onChange={handleChange}
							/>
							<input
								className="form_input"
								type="phone"
								name="phone"
								value={details.phone}
								placeholder="Phone"
								onChange={handleChange}
							/>
							<input
								className="form_input"
								type="email"
								name="email"
								value={details.email}
								placeholder="Email"
								onChange={handleChange}
							/>
							<button className="form_btn" type="submit" onClick={sendForm}>
								Submit
							</button>
						</form>
					)}
				</div>
				<div className="contact_info_right">
					<h2 className="contact_info_header">CONTACT INFORMATION</h2>
					<div className="contact_details_container">
						<div className="contact_details">
							<p className="details_header">Email:</p>
							<p className="details_info">Rochestownpharmacy@gmail.com</p>
						</div>
						<div className="contact_details">
							<p className="details_header">Phone:</p>
							<p className="details_info">(021) 489 3639</p>
						</div>
						<div className="contact_details">
							<p className="details_header">Address:</p>
							<p className="details_info">Rochestown Road, Monfieldstown, Rochestown, Cork</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
