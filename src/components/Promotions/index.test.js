import React from 'react'
import ReactDOM from 'react-dom'

import sampleProductData from '../../data.js'
import Promotions from './index'

describe('Promotions', () => {
	it('renders without crashing', () => {
		const promotions = sampleProductData.CatalogEntryView[0].Promotions
		const div = document.createElement('div')
		ReactDOM.render(<Promotions promotions={promotions} />, div)
	})
})