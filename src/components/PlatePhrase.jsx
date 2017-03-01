import '../styles/plate-phrase.css';
import React from 'react';
import findFormatCollision from '../services/findFormatCollision';

export default class PlatePhrase extends React.Component {
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
		const validation = {
			formatCollision: findFormatCollision(value),
			hasSymbols: this._hasSymbols(value)
		};

		if (!validation.hasSymbols) {
			this.props.changePlatePhrase(value);
		}

		this.props.setValidationErrors(validation);
	}

	render() {
		const classNames = [
				'plate-phrase',
				this.props.hasError && 'has-format-collision',
				this.props.hasCause && 'has-cause',
				this.props.className
			]
			.filter(c => c)
			.join(' ');
		const maxLength = this.props.hasCause ? 6 : 7;
		const props = {
			className: 'plate-phrase-input',
			disabled: !this.props.hasDesign,
			maxLength,
			onChange: this._onNumberChanged.bind(this),
			onKeyPress: this._onNumberEntered.bind(this),
			pattern: `^[A-Za-z0-9\s]{0,${ maxLength }}$`,
			placeholder: maxLength === 7 ? 'YOURMSG' : 'LETSGO',
			type: 'text',
			value: this.props.phrase,
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
};