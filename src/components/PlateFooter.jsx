import React from 'react';

export default class PlateFooter extends React.Component {
	render() {
		const { selectedCause, selectedDesign } = this.props;
		let bodyText = 'michigan.org';

		if (selectedCause) {
			bodyText = selectedCause.styles.get('footerText');
		}
		else if (selectedDesign) {
			bodyText = selectedDesign.styles.text;
		}

		return (
			<div className="plate-footer">
				<div className="plate-footer-text">
					{ bodyText }
				</div>
			</div>
		);
	}
};