import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import QuantityField from './index'

describe('QuantityField', () => {
	const quantityFieldComponent = <QuantityField />
	const quantityField = mount(quantityFieldComponent)
	const incrementButton = quantityField.find('.quantity-button.increment')
	const decrementButton = quantityField.find('.quantity-button.decrement')
	const input = quantityField.find('input')

	const initialValue = 1
	const minValue = 1
	const maxValue = 99
	const incrementedValue = initialValue + 1

	it('renders without crashing', () => {
		ReactDOM.render(quantityFieldComponent, document.createElement('div'))
	})

	it('has correct initial state', () => {
		expect(quantityField.state('quantity')).toEqual(initialValue)
	})

	it('properly increments', () => {
		incrementButton.simulate('click')
		expect(quantityField.state('quantity')).toEqual(incrementedValue)
	})

	it('properly decrements', () => {
		decrementButton.simulate('click')
		expect(quantityField.state('quantity')).toEqual(initialValue)
	})

	it('will not go below bounds', () => {
		decrementButton.simulate('click')
		expect(quantityField.state('quantity')).toEqual(minValue)
	})

	it('will not go above bounds', () => {
		quantityField.setState({ quantity: maxValue })
		incrementButton.simulate('click')
		expect(quantityField.state('quantity')).toEqual(maxValue)
	})

	it('will update via the quantity input', () => {
		input.simulate('change', { target: { value: '20' } }).simulate('blur')
		expect(quantityField.state('quantity')).toEqual(20)
	})

	it('will reject non-numerical input values on blur', () => {
		input.simulate('change', { target: { value: '---' } }).simulate('blur')
		expect(quantityField.state('quantity')).toEqual(initialValue)
	})
})
