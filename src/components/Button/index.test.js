import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Button from './index'

describe('Button', () => {
	let clicked = false

	const div = document.createElement('div')
	const clickEvent = () => {
		clicked = true
	}

	const button = <Button label='Test' clickHandler={clickEvent} />
	const shallowButton = shallow(button)

	it('renders without crashing', () => {
		ReactDOM.render(button, div)
	})

	it('displays the correct label', () => {
		expect(shallowButton.text()).toEqual('Test')
	})

	it('fires click event when clicked', () => {
		clicked = false
		shallowButton.simulate('click')
		expect(clicked).toEqual(true)
	})

	it('can be properly disabled', () => {
		shallowButton.setProps({ isDisabled: true })
		expect(shallowButton.prop('disabled')).toEqual(true)
	})

	it('will not fire click event when disabled', () => {
		clicked = false
		shallowButton.simulate('click')
		expect(clicked).toEqual(false)
	})
})
