import '../styles/plate-cause.css';
import React from 'react';

export default class PlateCause extends React.Component {
	render() {
		const { logoStyles } = this.props;

		return (
			<div className="plate-cause">
				{ logoStyles && logoStyles.logoImage &&
					<img className="plate-cause-image" src={ `../images/logos/${ logoStyles.logoImage }` } />
				}

				{ logoStyles && logoStyles.logoText &&
					<div className="plate-cause-text">{ logoStyles.logoText }</div>
				}
			</div>
		);
	}
};