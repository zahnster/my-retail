import React, { Component } from 'react'

class Promotions extends Component {
	render() {
		const promotions = this.props.promotions

		return (
			<div className='promotions'>
				{promotions.map((promo, index) => {
					const description = promo.Description[0]

					return (
						<div key={`promo-${index}`}>
							<p>{description.shortDescription}</p>
						</div>
					)
				})}
			</div>
		)
	}
}

Promotions.propTypes = {
	promotions: React.PropTypes.array.isRequired
}

export default Promotions