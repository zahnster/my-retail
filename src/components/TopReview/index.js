import React from 'react'
import moment from 'moment'

// Component imports
import RatingStars from '../RatingStars'

// Component stylesheet
import './style.css'

function TopReview(props) {
	const { type, starRange, review } = props
	const rating = parseInt(review.overallRating, 10)
	const datePosted = moment(Date.parse(review.datePosted)).format('MMMM Do YYYY')

	return (
		<div className='top-review'>
			<div className='top-review-header'>
				<h4 className='top-review-type'>{type}</h4>
				<p>most helpful {starRange} star review</p>
			</div>

			<div className='top-review-content'>
				<RatingStars rating={rating} cssClass='alt' />
				<h5 className='top-review-title'>{review.title}</h5>
				<p>{review.review}</p>

				<p className='top-review-author'>
					<a href='#'>{review.screenName}</a> {datePosted}						
				</p>
			</div>
		</div>
	)
}

TopReview.propTypes = {
	type: React.PropTypes.string.isRequired,
	starRange: React.PropTypes.string.isRequired,
	review: React.PropTypes.object.isRequired
}

export default TopReview