import '../styles/number-input.css';
import React from 'react';
import changePlateNumberAction from '../actions/changePlateNumberAction';
import findFormatCollision from '../services/findFormatCollision';
import { connect } from 'react-redux';

export default connect(
	state => ({
		hasSelectedCause: !!state.get('selectedCause'),
		plateNumber: state.get('plateNumber')
	})
)(class PlateNumberInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formatCollision: null,
			hasSymbol: false
		};
	}

	_hasSymbols(input) {
		return /[^a-zA-Z0-9\s]/.test(input);
	}

	_onNumberEntered(event) {
		const char = String.fromCharCode(event.which);
		this.setState({ hasSymbol: this._hasSymbols(char) });
	}

	_onNumberChanged(event) {
		const value = event.target.value.toUpperCase();
		const newState = {
			formatCollision: findFormatCollision(value),
			hasSymbol: this._hasSymbols(value)
		};

		if (!newState.hasSymbols) {
			this.props.dispatch(changePlateNumberAction(value));
		}

		this.setState(newState);
	}

	render() {
		const classNames = [
				'plate-number-input',
				!!this.state.formatCollision && 'has-format-collision',
				this.props.className
			]
			.filter(c => c)
			.join(' ');
		const maxLength = this.props.hasSelectedCause ? 6 : 7;
		const props = {
			className: 'number-input',
			maxLength,
			onChange: this._onNumberChanged.bind(this),
			onKeyPress: this._onNumberEntered.bind(this),
			pattern: `^[A-Za-z0-9\s]{0,${ maxLength }}$`,
			type: 'text',
			value: this.props.plateNumber,
		};

		return (
			<div className={ classNames }>
				{ this.state.hasSymbol &&
					<p>Sorry, we can only print numbers and letters on your plate.</p>
				}

				{ this.state.formatCollision &&
					<p>Sorry, this format is already reserved for { this.state.formatCollision.description } type of plate.</p>
				}

				<input {...props} />
			</div>
		);
	}
});