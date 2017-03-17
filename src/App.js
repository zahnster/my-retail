import React, { Component } from 'react'
import Helmet from 'react-helmet'

// Component imports
import Header from './components/Header'
import ProductDetail from './components/ProductDetail'

// Stylesheet
import './App.css'

// Sample data import (in reality this should be an API fetch)
import sampleProductData from './data.js'

class App extends Component {
	render() {
		const product = sampleProductData.CatalogEntryView[0]

		return (
			<div className='app'>
				<Helmet title={`${product.title} :: myRetail`} />
				<Header />

				<div className='content'>
					<ProductDetail product={product} />
				</div>
			</div>
		)
	}
}

export default App