import React from 'react'
import ReactDOM from 'react-dom'

import sampleProductData from '../../data.js'
import Price from './index'

describe('Price', () => {
	it('renders without crashing', () => {
		const offers = sampleProductData.CatalogEntryView[0].Offers
		const div = document.createElement('div')
		ReactDOM.render(<Price offers={offers} />, div)
	})
})