import React, { Component } from 'react'

// Component stylesheet
import './style.css'

class Button extends Component {
	constructor() {
		super()

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		if (!this.props.isDisabled) this.props.clickHandler()
	}

	render() {
		const className = `button ${this.props.cssClass}`

		return (
			<button className={className} onClick={this.handleClick} disabled={this.props.isDisabled}>
				{this.props.label}
			</button>
		)
	}
}

Button.propTypes = {
	label: React.PropTypes.string.isRequired,
	clickHandler: React.PropTypes.func.isRequired,
	cssClass: React.PropTypes.string,
	isDisabled: React.PropTypes.bool
}

export default Button