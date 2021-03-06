import React, { Component } from 'react'

// Component includes
import Picture from '../Picture'

// Component stylesheet
import './style.css'

class Carousel extends Component {
	constructor(props) {
		super(props)

		this.state = {
			slideIndex: 0,
			slides: this.buildSlides(props.images),
			transitionState: ''
		}

		// bind methods
		this.goToPreviousSlide = this.goToPreviousSlide.bind(this)
		this.goToNextSlide = this.goToNextSlide.bind(this)
		this.transitionEnded = this.transitionEnded.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.images && nextProps.images !== this.props.images) {
			this.buildSlides(nextProps.images)
		}
	}

	componentDidMount() {
		const carousel = document.querySelector('.carousel')
		if (carousel) carousel.addEventListener('transitionend', this.transitionEnded)
	}

	componentWillUnmount() {
		const carousel = document.querySelector('.carousel')
		if (carousel) carousel.removeEventListener('transitionend', this.transitionEnded)
	}

	// Parses submitted images and arranges into an internal state
	buildSlides(images) {
		// push primary image first
		const imageArray = [images.PrimaryImage[0].image]

		// push all alternate images
		images.AlternateImages.forEach(altImage => {
			imageArray.push(altImage.image)
		})

		return imageArray
	}

	goToPreviousSlide() {
		this.setState({ transitionState: 'previous' })
	}

	goToNextSlide() {
		this.setState({ transitionState: 'next' })
	}

	previousSlideIndex() {
		const slideCount = this.state.slides.length - 1
		let previousIndex = this.state.slideIndex - 1

		if (previousIndex < 0) previousIndex = slideCount
		return previousIndex
	}

	nextSlideIndex() {
		const slideCount = this.state.slides.length - 1
		let nextIndex = this.state.slideIndex + 1

		if (nextIndex > slideCount) nextIndex = 0
		return nextIndex
	}

	transitionEnded() {
		let { transitionState } = this.state

		switch (transitionState) {
			case 'previous':
				this.setState({ slideIndex: this.previousSlideIndex() })
			break;

			case 'next':
				this.setState({ slideIndex: this.nextSlideIndex() })
			break;

			default:
			break;
		}

		this.setState({ transitionState: '' })
	}

	render() {
		const { slideIndex, slides, transitionState } = this.state
		const carouselClass = transitionState ? `carousel move-${transitionState}` : 'carousel'
		const previousSlideIndex = this.previousSlideIndex()
		const nextSlideIndex = this.nextSlideIndex()
		const carouselAXLabel = `This is a product image gallery with ${slides.length} images`

		return (
			<div className={carouselClass}>
				<div className='carousel-gallery' aria-label={carouselAXLabel}>
					{slides.map((image, index) => {
						let pictureClassName = ''
						let ariaHidden = slideIndex !== index
						const imageCount = index + 1

						switch (index) {
							case slideIndex:
								pictureClassName = 'active'
							break;

							case previousSlideIndex:
								pictureClassName = 'previous'
							break;

							case nextSlideIndex:
								pictureClassName = 'next'
							break;

							default:
							break;
						}

						return (
							<div 
								className='gallery-image' 
								role='tabpanel' 
								id={`tabpanel-${index}`} 
								aria-hidden={ariaHidden}
								key={`picture-${index}`} 
							>
								<Picture 
									image={image} 
									alt={`Product image ${imageCount} of ${slides.length}`}
									cssClass={pictureClassName}  /> 
							</div>
						)
					})}
				</div>

				<div className='carousel-controls'>
					<button className='carousel-control control-previous' onClick={this.goToPreviousSlide}>
						Previous image
					</button>

					<div className='carousel-thumbnails' role='tablist'>
						<button className='carousel-thumbnail' onClick={this.goToPreviousSlide} aria-label='Go to previous product image'>
							<Picture image={slides[previousSlideIndex]} />
						</button>
						
						<button className='carousel-thumbnail active' aria-label='Current product image'>
							<Picture image={slides[slideIndex]} />
						</button>
						
						<button className='carousel-thumbnail' onClick={this.goToNextSlide} aria-label='Go to next product image'>
							<Picture image={slides[nextSlideIndex]} onClick={this.goToNextSlide} />
						</button>
					</div>

					<button className='carousel-control control-next' onClick={this.goToNextSlide}>
						Next image
					</button>
				</div>
			</div>
		)
	}
}

Carousel.propTypes = {
	images: React.PropTypes.object.isRequired
}

export default Carousel