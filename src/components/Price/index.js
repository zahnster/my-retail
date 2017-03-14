import React, { Component } from 'react'

// Component stylesheet
import './style.css'

class Price extends Component {
	render() {
		const priceData = this.props.offers[0].OfferPrice[0]

		return (
			<div className='price'>
				<p>
					{priceData.formattedPriceValue}
					
					<span className='price-type'>
						{priceData.priceQualifier}
					</span>
				</p>
			</div>
		)
	}
}

Price.propTypes = {
	offers: React.PropTypes.array
}

export default Price