import React, { Component } from 'react'

// Component stylesheet
import './style.css'

class RatingStars extends Component {
	render() {
		const { rating } = this.props
		const cssClass = `rating-stars ${this.props.cssClass}`

		return (
			<div className={cssClass} data-rating={rating}>
				{rating} of 5 stars
			</div>
		)
	}
}

RatingStars.propTypes = {
	rating: React.PropTypes.number.isRequired,
	cssClass: React.PropTypes.string
}

export default RatingStars