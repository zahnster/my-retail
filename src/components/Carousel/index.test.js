import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import sampleProductData from '../../data.js'
import Carousel from './index'

describe('Carousel', () => {
	const images = sampleProductData.CatalogEntryView[0].Images[0]
	const carouselComponent = <Carousel images={images} />
	const carousel = shallow(carouselComponent)

	it('renders without crashing', () => {
		ReactDOM.render(carouselComponent, document.createElement('div'))
	})

	it('advances to the next slide', () => {
	})

	it('advances to the previous slide', () => {
	})

	it('loops forwards', () => {
	})

	it('loops backwards', () => {
	})
})