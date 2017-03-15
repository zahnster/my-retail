import React, { Component } from 'react'

// Component imports
import Button from '../Button'
import Carousel from '../Carousel'
import Price from '../Price'
import Promotions from '../Promotions'
import QuantityField from '../QuantityField'
import Reviews from '../Reviews'

// Component stylesheet
import './style.css'

class ProductDetail extends Component {
	constructor() {
		super()

		this.state = {
			isWide: false
		}

		this.checkForWideLayout = this.checkForWideLayout.bind(this)
		this.openStorePickup = this.openStorePickup.bind(this)
		this.addToCart = this.addToCart.bind(this)
		this.addToRegistry = this.addToRegistry.bind(this)
		this.addToList = this.addToList.bind(this)
		this.share = this.share.bind(this)
	}

	componentWillMount() {
		window.addEventListener('resize', this.checkForWideLayout)
		this.checkForWideLayout()
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.checkForWideLayout)
	}

	checkForWideLayout() {
		const isWide = document.body.clientWidth > 768
		this.setState({ isWide })
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
		const productDetailClassName = this.state.isWide ? 'product-detail wide-view' : 'product-detail'

		// assigning review component to different injection vars, 
		// depending on screen size. This is needed due to the layout differences.
		const reviewNormalMode = this.state.isWide ? null : <Reviews reviews={product.CustomerReview} />
		const reviewWideMode = this.state.isWide ? <Reviews reviews={product.CustomerReview} /> : null

		return (
			<div className={productDetailClassName}>
				<div className='column-content'>
					<h1 className='product-title'>{product.title}</h1>
					
					<Carousel images={product.Images[0]} />

					{reviewWideMode}
				</div>

				<div className='column-content'>
					<Price offers={product.Offers} />
					<Promotions promotions={product.Promotions} />
					<QuantityField />

					<div className='product-actions'>
						<Button label='Pick Up In Store' clickHandler={this.openStorePickup} cssClass='alt' />
						<Button label='Add To Cart' clickHandler={this.addToCart} />
					</div>

					<div className='product-returns'>
						<h3 className='product-returns-title'>Returns</h3>
						<p className='product-returns-content'>This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.</p>
					</div>

					<div className='meta-buttons'>
						<Button label='Add to Registry' clickHandler={this.addToRegistry} cssClass='secondary' />
						<Button label='Add To List' clickHandler={this.addToList} cssClass='secondary' />
						<Button label='Share' clickHandler={this.share} cssClass='secondary' />
					</div>

					<div className='product-highlights'>
						<h2 className='product-highlights-title'>Product Highlights</h2>
						<ul className='product-highlights-list'>
							{product.ItemDescription[0].features.map((item, index) => (
								<li key={`highlight-${index}`} dangerouslySetInnerHTML={{__html: item}}></li>
							))}
						</ul>
					</div>

					{reviewNormalMode}
				</div>
			</div>
		)
	}
}

ProductDetail.propTypes = {
	product: React.PropTypes.object.isRequired
}

export default ProductDetail