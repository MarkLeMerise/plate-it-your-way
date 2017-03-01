import '../styles/plate-validation.css';
import React from 'react';
import { Transition } from 'react-overlays';

export default class PlateValidation extends React.Component {
	render() {
		let { message } = this.props;
		const hasError = !!message;
		const classNames = [
			'animated',
			'plate-validation',
			hasError && 'has-error-message'
		]
			.filter(c => c)
			.join(' ');
		message = message || 'Nevermind! 😀';

		return (
			<Transition in={ hasError } timeout={ 2500 } enteredClassName="fadeIn" exitingClassName="fadeOut" exitedClassName="fadeOut">
				<div className={ classNames }>
					<div className="plate-validation-message">
						{ message }
					</div>
				</div>
			</Transition>
		);
	}
};