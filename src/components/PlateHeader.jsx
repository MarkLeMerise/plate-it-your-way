import React from 'react';

export default class PlateFooter extends React.Component {
	render() {
		const { selectedDesign } = this.props;

		return (
			<div className="plate-header">
				<img src={ `../images/${ selectedDesign.styles.headerImage }` } />
			</div>
		);
	}
};