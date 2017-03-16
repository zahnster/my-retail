import React from 'react'

function Picture(props) {
	return (
		<div className={`picture ${props.cssClass}`}>
			<img src={props.image} alt='' />
		</div>
	)
}

export default Picture