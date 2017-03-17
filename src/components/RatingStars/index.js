import React from 'react'

// Component stylesheet
import './style.css'

function RatingStars(props) {
	const { rating, cssClass } = props

	return (
		<div className={`rating-stars ${cssClass}`} data-rating={rating}>
			{rating} of 5 stars
		</div>
	)
}

RatingStars.propTypes = {
	rating: React.PropTypes.number.isRequired,
	cssClass: React.PropTypes.string
}

export default RatingStars