import React, { Component } from 'react'
import Helmet from 'react-helmet'

// Component imports
import ProductDetail from './components/ProductDetail'

// Stylesheet
import './App.css'

// Sample data import (in reality this should be an API fetch)
import sampleProductData from './data.js'

class App extends Component {
  render() {
  	const product = sampleProductData.CatalogEntryView[0]
  	console.log('product', product)

    return (
      <div className="App">
	    <Helmet title={`${product.title} :: myRetail`} />
        <ProductDetail product={product} />
      </div>
    )
  }
}

export default App