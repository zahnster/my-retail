import React from 'react'

function Picture(props) {
	return (
		<div className={`picture ${props.cssClass}`}>
			<img src={props.image} alt='' />
		</div>
	)
}

Picture.propTypes = {
	image: React.PropTypes.string.isRequired,
	cssClass: React.PropTypes.string
}

export default Picture