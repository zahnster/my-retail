import React, { Component } from 'react'

class Picture extends Component {
	render() {
		return (
			<picture>
				<img src={this.props.image} alt='' />
			</picture>
		)
	}
}

Picture.propTypes = {
	image: React.PropTypes.string.isRequired
}

export default Picture