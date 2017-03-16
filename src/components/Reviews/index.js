import React from 'react'

// Component imports
import TopReview from '../TopReview'
import RatingStars from '../RatingStars'

// Component stylesheet
import './style.css'

function Reviews(props) {
	const reviews = props.reviews[0]
	const proReview = reviews.Pro[0]
	const conReview = reviews.Con[0]
	const reviewCount = reviews.Reviews.length

	return (
		<div className='reviews'>
			<div className='review-summary'>
				<div>
					<RatingStars rating={5} />
					overall						
				</div>

				<div className='view-all-reviews'>
					<a href='#'>View all {reviewCount} reviews</a>
				</div>
			</div>

			<div className='top-reviews'>
				<TopReview type='Pro' starRange='4-5' review={proReview} />
				<TopReview type='Con' starRange='1-2' review={conReview} />
			</div>
		</div>
	)
}

Reviews.propTypes = {
	reviews: React.PropTypes.array.isRequired
}

export default Reviews