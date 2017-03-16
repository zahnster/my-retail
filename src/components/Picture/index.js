import React, { Component } from 'react'

class Picture extends Component {
	render() {
		return (
			<picture className={this.props.cssClass}>
				<img src={this.props.image} alt='' />
			</picture>
		)
	}
}

Picture.propTypes = {
	image: React.PropTypes.string.isRequired,
	cssClass: React.PropTypes.string
}

export default Picture