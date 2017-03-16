import React from 'react'
import ReactDOM from 'react-dom'

import Picture from './index'

describe('Picture', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<Picture image='http://placekitten.com/200/300' />, div)
	})
})