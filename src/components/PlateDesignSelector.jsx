import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

export default connect(
	state => ({ availableDesigns: state.getIn(['designs', 'list']) })
)(class PlateDesignSelector extends React.Component {
	_mapDesignsToOptions(designs) {
		return designs
			.map(d => ({
				label: d.description,
				value: d.code
			}))
			.toJSON();
	}

	_onSelectDesign(option) {
		this.props.selectDesign(option ? option.value : null);
	}

	render() {
		const { selectedDesign } = this.props;

		return (
			<div className="design-selector plate-style-selector">
				<Select placeholder="Choose design..." onChange={ this._onSelectDesign.bind(this) } options={ this._mapDesignsToOptions(this.props.availableDesigns) } value={ selectedDesign && selectedDesign.code } />
			</div>
		);
	}
});