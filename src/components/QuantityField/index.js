import React, { Component } from 'react'

// Component stylesheet
import './style.css'

// Configuration Constants
const MIN_QUANTITY = 1
const MAX_QUANTITY = 99

class QuantityField extends Component {
	constructor() {
		super()

		this.state = { quantity: 1 }

		this.updateQuantity = this.updateQuantity.bind(this)
		this.incrementQuantity = this.incrementQuantity.bind(this)
		this.decrementQuantity = this.decrementQuantity.bind(this)
		this.validateQuantity = this.validateQuantity.bind(this)
	}

	// increase quantity by one
	incrementQuantity() {
		const quantity = Math.min(this.state.quantity + 1, MAX_QUANTITY)
		this.setState({ quantity })
	}

	// decrease quantity by one, unless it is at min value
	decrementQuantity() {
		const quantity = Math.max((this.state.quantity - 1), MIN_QUANTITY)
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
		if (submittedValue > MAX_QUANTITY) submittedValue = MAX_QUANTITY

		this.setState({ quantity: submittedValue })
	}

	// validate that any user submitted entry is a valid value
	validateQuantity() {
		let quantity = this.state.quantity || MIN_QUANTITY
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

export default QuantityField