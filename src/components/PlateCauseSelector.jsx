import React from 'react';
import { connect } from 'react-redux';

export default connect(
	state => ({
		causes: state.get('causes'),
		selectedCause: state.getIn(['causes', 'selected'])
	})
)(class PlateCauseSelector extends React.Component {
	_mapCausesToOptions(causes) {
		return causes.get('list')
			.unshift({
				code: 'Choose cause...',
				description: 'Choose cause...'
			})
			.map(c => (<option key={ c.code } value={ c.code }>{ c.description }</option>));
	}

	_onSelectCause(event) {
		let { value } = event.target;
		value = value === 'Choose cause...' ? null : value;
		this.props.selectCause(value);
	}

	render() {
		const { selectedCause } = this.props;

		return (
			<div className="cause-selector">
				<select value={ selectedCause && selectedCause.code } onChange={ this._onSelectCause.bind(this) }>
					{ this._mapCausesToOptions(this.props.causes) }
				</select>
			</div>
		);
	}
});