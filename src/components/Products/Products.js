import React from 'react';
import './styles.css';

import ProductCard from '../ProductCard/ProductCard';

import dove from '../../images/dove_set.jpeg';
import sanc from '../../images/sanc_spa.jpeg';
import corona from '../../images/corona_pack.jpeg';

const Products = () => {
	return (
		<div className="products_container">
			<h1 className="products_header">FEATURED PRODUCTS</h1>
			<div className="productcard_container">
				<ProductCard
					title="CORONAVIRUS ESSENTIALS PACK"
					image={dove}
					description={[
						'> 5 face masks',
						'> 5 pairs of gloves',
						'> 100ml Hand Sanitiser',
						'> 300ml Antibacterial Hand Wash',
						'> Anitbacterial Wipes (Clean Touch) 48 pack'
					]}
					valueOver="Value over €30"
					price="€19.95"
				/>
				<ProductCard
					title="SPA MUM TO BE PACK"
					image={sanc}
					description={[
						'> White Lily & Damask Rose Body Wash (75ml)',
						'> Stretch Mark Oil (75ml)',
						'> Foaming Bath Soak (75ml)',
						'> Hand Cream (75ml)'
					]}
					valueOver="Value over €30"
					price="€19.95"
				/>
				<ProductCard
					title="TREAT YOURSELF PAMPER PACK"
					image={corona}
					description={[
						'> 5 face masks',
						'> 5 pairs of gloves',
						'> 100ml Hand Sanitiser',
						'> 300ml Antibacterial Hand Wash',
						'> Anitbacterial Wipes (Clean Touch) 48 pack'
					]}
					valueOver="Value over €30"
					price="€19.95"
				/>
			</div>
		</div>
	);
};

export default Products;
