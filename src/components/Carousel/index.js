import React, { Component } from 'react'

// Component includes
import Picture from '../Picture'

class Carousel extends Component {
	render() {
		const image = this.props.images.PrimaryImage[0].image

		return (
			<Picture image={image} />
		)
	}
}

Carousel.propTypes = {
	images: React.PropTypes.object.isRequired
}

export default Carousel