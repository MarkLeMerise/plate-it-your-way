import 'react-select/dist/react-select.css';
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

export default connect(
	state => ({
		causes: state.get('causes'),
		selectedCause: state.getIn(['causes', 'selected'])
	})
)(class PlateCauseSelector extends React.Component {
	_mapCausesToOptions(causes) {
		return causes.get('list')
			.map(c => ({
				label: c.description,
				value: c.code
			}))
			.toJSON();
	}

	_onSelectCause(option) {
		this.props.selectCause(option ? option.value : null);
	}

	render() {
		const { selectedCause } = this.props;
		const options = this._mapCausesToOptions(this.props.causes);

		return (
			<div className="cause-selector plate-style-selector">
				{ options.length > 0 &&
					<Select onChange={ this._onSelectCause.bind(this) } placeholder="Choose cause..." options={ options } value={ selectedCause && selectedCause.code } />
				}
			</div>
		);
	}
});