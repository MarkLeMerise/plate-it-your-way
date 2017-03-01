import PlateTab from './PlateTab';
import React from 'react';

export default class PlateFooter extends React.Component {
	render() {
		const { selectedDesign } = this.props;

		return (
			<div className="plate-header">
				<div className="plate-hole" />
				<div className="plate-header-image">
					<img src={ `../images/${ selectedDesign.styles.headerImage }` } />
				</div>
				<div className="plate-hole" />
				<PlateTab />
			</div>
		);
	}
};