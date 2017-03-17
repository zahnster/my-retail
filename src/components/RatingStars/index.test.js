import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import RatingStars from './index'

describe('RatingStars', () => {
	const rating = 5
	const ratingStarsComponent = <RatingStars rating={rating} />
	const ratingStars = shallow(<RatingStars rating={5} />)

	it('renders without crashing', () => {
		ReactDOM.render(ratingStarsComponent, document.createElement('div'))
	})

	it('displays the correct rating string', () => {
		expect(ratingStars.text()).toEqual(`${rating} of 5 stars`)
	})

	it('has the correct data attribute', () => {
		expect(ratingStars.is('[data-rating=5]')).toEqual(true)
	})
})