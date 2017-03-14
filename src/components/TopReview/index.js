import React, { Component } from 'react'

// Component imports
import RatingStars from '../RatingStars'

class TopReview extends Component {
	render() {
		const { type, starRange, review } = this.props

		return (
			<div className='top-review'>
				<h4>{type}</h4>
				<p>most helpful {starRange} star review</p>

				<div className='review'>
					<RatingStars rating={parseInt(review.overallRating, 10)} />
					<h5>{review.title}</h5>
					<p>{review.review}</p>

					<p>
						<a href='#'>{review.screenName}</a>
						{review.datePosted}						
					</p>
				</div>
			</div>
		)
	}
}

TopReview.propTypes = {
	type: React.PropTypes.string.isRequired,
	starRange: React.PropTypes.string.isRequired,
	review: React.PropTypes.object.isRequired
}

export default TopReview