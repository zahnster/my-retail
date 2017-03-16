import React, { Component } from 'react'

// Component stylesheet
import './style.css'

function Promotions(props) {
	const promotions = props.promotions

	return (
		<div className='promotions'>
			<ul>
				{promotions.map((promo, index) => {
					const description = promo.Description[0]

					return (
						<li className='promo-item' key={`promo-${index}`}>
							{description.shortDescription}
						</li>
					)
				})}
			</ul>
		</div>
	)	
}

Promotions.propTypes = {
	promotions: React.PropTypes.array.isRequired
}

export default Promotions