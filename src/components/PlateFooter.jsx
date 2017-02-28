import React from 'react';

export default class PlateFooter extends React.Component {
	render() {
		const { selectedCause, selectedDesign } = this.props;
		let bodyText = 'michigan.org';
		let styleSource = selectedCause || selectedDesign;

		if (styleSource) {
			bodyText = styleSource.styles.footerText;
		}

		return (
			<div className="plate-footer">
				<div className="plate-hole" />
				<div className="plate-footer-text">{ bodyText }</div>
				<div className="plate-hole" />
			</div>
		);
	}
};