import React, { Component } from 'react'

// Component imports
import Button from '../Button'
import Carousel from '../Carousel'
import Price from '../Price'
import Promotions from '../Promotions'
import QuantityField from '../QuantityField'
import Reviews from '../Reviews'

class ProductDetail extends Component {
	constructor() {
		super()

		this.openStorePickup = this.openStorePickup.bind(this)
		this.addToCart = this.addToCart.bind(this)
		this.addToRegistry = this.addToRegistry.bind(this)
		this.addToList = this.addToList.bind(this)
		this.share = this.share.bind(this)
	}

	openStorePickup() {
		console.log('click on open store pickup')
	}

	addToCart() {
		console.log('add to cart')
	}

	addToRegistry() {
		console.log('add to registry')
	}

	addToList() {
		console.log('add to list')
	}

	share() {
		console.log('share')
	}

	render() {
		const product = this.props.product

		return (
			<div className='product-detail'>
				<h1>{product.title}</h1>
				
				<Carousel images={product.Images[0]} />

				<Price offers={product.Offers} />
				<Promotions promotions={product.Promotions} />
				<QuantityField />

				<div className='product-actions'>
					<Button label='Pick Up In Store' clickHandler={this.openStorePickup} />
					<Button label='Add To Cart' clickHandler={this.addToCart} />
				</div>

				<div className='product-returns'>
					<h3>Returns</h3>
					<p>This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.</p>
				</div>

				<div className='meta-buttons'>
					<Button label='Add to Registry' clickHandler={this.addToRegistry} />
					<Button label='Add To List' clickHandler={this.addToList} />
					<Button label='Share' clickHandler={this.share} />
				</div>

				<div className='product-highlights'>
					<h2>Product Highlights</h2>
					<ul>
						{product.ItemDescription[0].features.map((item, index) => <li key={`highlight-${index}`} dangerouslySetInnerHTML={{__html: item}}></li>)}
					</ul>
				</div>

				<Reviews reviews={product.CustomerReview} />
			</div>
		)
	}
}

ProductDetail.propTypes = {
	product: React.PropTypes.object.isRequired
}

export default ProductDetail