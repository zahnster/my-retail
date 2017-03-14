import React, { Component } from 'react'

class Button extends Component {
	render() {
		return (
			<button>{this.props.label}</button>
		)
	}
}

Button.propTypes = {
	label: React.PropTypes.string.isRequired,
	clickHandler: React.PropTypes.func.isRequired
}

export default Button