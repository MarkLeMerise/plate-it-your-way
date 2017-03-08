import '../styles/plate-phrase.css';
import React from 'react';

export default class PlatePhrase extends React.Component {
	static get propTypes() {
		return {
			hasCause: React.PropTypes.bool,
			hasDesign: React.PropTypes.bool,
			hasError: React.PropTypes.bool,
			phrase: React.PropTypes.string
		};
	}

	_hasSymbols(input) {
		return /[^a-zA-Z0-9\s]/.test(input);
	}

	_onPhraseChanged(event) {
		const value = event.target.value.toUpperCase();

		if (!this._hasSymbols(value)) {
			this.props.changePlatePhrase(value);
		}
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
			onChange: this._onPhraseChanged.bind(this),
			pattern: `^[A-Za-z0-9\s]{0,${ maxLength }}$`,
			placeholder: maxLength === 7 ? 'YOURMSG' : 'LETSGO',
			type: 'text',
			value: this.props.phrase,
		};

		return (
			<div className={ classNames }>
				<input {...props} />
			</div>
		);
	}
};