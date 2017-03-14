import React, { Component } from 'react'

// Component stylesheet
import './style.css'

class Button extends Component {
	render() {
		const className = `button ${this.props.cssClass}`

		return (
			<button className={className} onClick={this.props.clickHandler}>
				{this.props.label}
			</button>
		)
	}
}

Button.propTypes = {
	label: React.PropTypes.string.isRequired,
	clickHandler: React.PropTypes.func.isRequired,
	cssClass: React.PropTypes.string
}

export default Button