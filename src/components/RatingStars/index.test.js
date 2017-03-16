import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import RatingStars from './index'

describe('RatingStars', () => {
	const rating = 5
	const ratingStarsComponent = <RatingStars rating={rating} />
	const ratingStars = mount(ratingStarsComponent)

	it('renders without crashing', () => {
		ReactDOM.render(ratingStarsComponent, document.createElement('div'))
	})

	it('displays the correct rating string', () => {
		expect(ratingStars.text()).toEqual(`${rating} of 5 stars`)
	})
})