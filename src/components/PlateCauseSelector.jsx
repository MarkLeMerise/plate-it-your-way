import React from 'react';
import selectCauseAction from '../actions/selectCauseAction';
import { connect } from 'react-redux';

export default connect(
	state => ({
		causes: state.get('causes'),
		selectedCause: state.getIn(['causes', 'selected'])
	})
)(class PlateCauseSelector extends React.Component {
	_mapCausesToOptions(causes) {
		return causes.get('list')
			.unshift({ name: 'Choose cause...' })
			.map((c, i) => (<option key={ i } value={ c.name }>{ c.name }</option>));
	}

	_onSelectCause(event) {
		let { value } = event.target;
		value = value === 'Choose cause...' ? null : value;
		this.props.dispatch(selectCauseAction(value))
	}

	render() {
		const { selectedCause } = this.props;

		return (
			<div className="cause-selector">
				<select value={ selectedCause && selectedCause.name } onChange={ this._onSelectCause.bind(this) }>
					{ this._mapCausesToOptions(this.props.causes) }
				</select>
			</div>
		);
	}
});