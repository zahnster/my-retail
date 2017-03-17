import React from 'react'

function Picture(props) {
	const altText = props.alt || ''

	return (
		<div className={`picture ${props.cssClass}`}>
			<img src={props.image} alt={altText} />
		</div>
	)
}

Picture.propTypes = {
	image: React.PropTypes.string.isRequired,
	alt: React.PropTypes.string,
	cssClass: React.PropTypes.string
}

export default Picture