import React, { Component } from 'react'

// Component stylesheet
import './style.css'

class QuantityField extends Component {
	constructor(props) {
		super(props)

		this.state = { quantity: props.initialValue }

		this.updateQuantity = this.updateQuantity.bind(this)
		this.incrementQuantity = this.incrementQuantity.bind(this)
		this.decrementQuantity = this.decrementQuantity.bind(this)
		this.validateQuantity = this.validateQuantity.bind(this)
	}

	// increase quantity by one
	incrementQuantity() {
		const quantity = Math.min(this.state.quantity + 1, this.props.maxValue)
		this.setState({ quantity })
	}

	// decrease quantity by one, unless it is at min value
	decrementQuantity() {
		const quantity = Math.max((this.state.quantity - 1), this.props.minValue)
		this.setState({ quantity })
	}

	// update quantity directly through a text input
	updateQuantity(event) {
		let submittedValue = event.target.value

		// only allow numeric entries
		submittedValue = submittedValue.replace(/\D/g,'')

		// if submittedValue has a value, 
		// parse to int for further processing and storage
		if (submittedValue) submittedValue = parseInt(submittedValue, 10)

		// don't allow values over max
		if (submittedValue > this.props.maxValue) submittedValue = this.props.maxValue

		this.setState({ quantity: submittedValue })
	}

	// validate that any user submitted entry is a valid value
	validateQuantity() {
		let quantity = this.state.quantity || this.props.initialValue
		this.setState({ quantity })
	}

	render() {
		return (
			<div className='quantity-field'>
				<label className='quantity-label'>Quantity:</label>

				<button className='quantity-button decrement' onClick={this.decrementQuantity}>
					Subtract quantity
				</button>

				<input type='text' value={this.state.quantity} onChange={this.updateQuantity} onBlur={this.validateQuantity} />

				<button className='quantity-button increment' onClick={this.incrementQuantity}>
					Add quantity
				</button>
			</div>
		)
	}
}

QuantityField.defaultProps = {
	initialValue: 1,
	minValue: 1,
	maxValue: 99
}

QuantityField.propTypes = {
	initialValue: React.PropTypes.number,
	minValue: React.PropTypes.number,
	maxValue: React.PropTypes.number
}

export default QuantityField