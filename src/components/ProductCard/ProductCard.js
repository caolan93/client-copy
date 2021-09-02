import React from 'react';
import './styles.css';

const ProductCard = ({ title, image, description, valueOver = '', price }) => {
	return (
		<div className="card_container">
			<div className="img_container">
				<img className="product_img" src={image} alt={title} />
			</div>
			<div className="card_info">
				<h2 className="product_title">{title}</h2>
				<div>
					{description.map((item) => (
						<p className="product_info" key={description.indexOf(item)}>
							{item}
						</p>
					))}
				</div>
				<div className="product_price_container">
					<p className="product_prices">{valueOver}</p>
					<p className="product_prices">Price: {price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
