import React from 'react'
import ReactDOM from 'react-dom'

import sampleProductData from '../../data.js'
import TopReview from './index'

describe('TopReview', () => {
	it('renders without crashing', () => {
		const sampleReview = sampleProductData.CatalogEntryView[0].CustomerReview[0].Pro[0]
		const starRange = '4-5'
		const type = 'Pro'

		ReactDOM.render(<TopReview review={sampleReview} starRange={starRange} type={type} />, document.createElement('div'))
	})
})