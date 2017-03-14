import React, { Component } from 'react'

class Price extends Component {
	render() {
		const price = this.props.offers[0].OfferPrice[0].formattedPriceValue

		return (
			<div className='price'>
				<p>{price}</p>
			</div>
		)
	}
}

Price.propTypes = {
	offers: React.PropTypes.array
}

export default Price