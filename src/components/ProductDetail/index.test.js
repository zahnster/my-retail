import React from 'react'
import ReactDOM from 'react-dom'

import sampleProductData from '../../data.js'
import ProductDetail from './index'

describe('ProductDetail', () => {
	it('renders without crashing', () => {
		const product = sampleProductData.CatalogEntryView[0]
		const div = document.createElement('div')
		ReactDOM.render(<ProductDetail product={product} />, div)
	})
})