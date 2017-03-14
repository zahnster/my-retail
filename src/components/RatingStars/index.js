import React, { Component } from 'react'

class RatingStars extends Component {
	render() {
		return (
			<div>{this.props.rating}</div>
		)
	}
}

RatingStars.propTypes = {
	rating: React.PropTypes.number.isRequired
}

export default RatingStars