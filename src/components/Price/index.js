import React from 'react'

// Component stylesheet
import './style.css'

function Price(props) {
	const priceData = props.offers[0].OfferPrice[0]

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

Price.propTypes = {
	offers: React.PropTypes.array.isRequired
}

export default Price