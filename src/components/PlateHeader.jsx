import '../styles/plate-designer-tab.css';
import React from 'react';

const abbreviatedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const date = new Date();
const month = abbreviatedMonths[date.getMonth()];

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
				<div className="plate-designer-tab">
					<div className="plate-designer-tab-spot">
						<div className="plate-designer-tab-month">{ month }</div>
						<div className="plate-designer-tab-year">{ date.getFullYear() }</div>
					</div>

					<div className="plate-designer-tab-sticker">
						<div className="plate-designer-tab-month">{ month }</div>
						<div className="plate-designer-tab-year">{ date.getFullYear() }</div>
					</div>
				</div>
			</div>
		);
	}
};