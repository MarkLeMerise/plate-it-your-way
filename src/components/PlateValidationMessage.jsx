import React from 'react';
import { Transition } from 'react-overlays';

export default class PlateValidationMessage extends React.Component {
	render() {
		return (
			<Transition in={ true } timeout={ 5000 } enteredClassName="fadeIn" exitingClassName="fadeOut">
				<div className="animated plate-validation-message" onClick={ () => this.props.closeValidationMessage() }>
					{ this.props.message }
				</div>
			</Transition>
		);
	}
};