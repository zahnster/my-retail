import React from 'react'
import ReactDOM from 'react-dom'

import sampleProductData from '../../data.js'
import Reviews from './index'

describe('Reviews', () => {
	it('renders without crashing', () => {
		const reviews = sampleProductData.CatalogEntryView[0].CustomerReview
		ReactDOM.render(<Reviews reviews={reviews} />, document.createElement('div'))
	})
})