import React from 'react';

export default class PlateCauseLogo extends React.Component {
	render() {
		const logoStyles = this.props.logoStyles.toJSON();

		return (
			<div className="plate-cause-logo">
				{ logoStyles && logoStyles.logoImage &&
					<img src={ `../images/logos/${ logoStyles.logoImage }` } />
				}

				{ logoStyles && logoStyles.text &&
					<div className="plate-cause-logo-text">{ logoStyles.text }</div>
				}
			</div>
		);
	}
};