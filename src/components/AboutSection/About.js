import React from 'react';
import './styles.css';

const About = () => {
	return (
		<div className="about_container">
			<div className="about_section">
				<h1 className="about_title">ABOUT</h1>
				<p className="about_paragraph">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
				<button className="about_button">Read More</button>
			</div>
		</div>
	);
};

export default About;
