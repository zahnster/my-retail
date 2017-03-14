import React, { Component } from 'react'

// Component imports
import TopReview from '../TopReview'

class Reviews extends Component {
	render() {
		const reviews = this.props.reviews[0]
		const proReview = reviews.Pro[0]
		const conReview = reviews.Con[0]

		return (
			<div className='reviews'>
				<TopReview type='Pro' starRange='4-5' review={proReview} />
				<TopReview type='Con' starRange='1-2' review={conReview} />
			</div>
		)
	}
}

Reviews.propTypes = {
	reviews: React.PropTypes.array.isRequired
}

export default Reviews