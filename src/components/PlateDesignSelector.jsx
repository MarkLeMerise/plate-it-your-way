import React from 'react';
import { connect } from 'react-redux';

export default connect(
	state => ({ availableDesigns: state.getIn(['designs', 'list']) })
)(class PlateDesignSelector extends React.Component {
	_mapDesignsToOptions(designs) {
		return designs
			.unshift({
				code: 'Choose design...',
				description: 'Choose design...'
			})
			.map((d, i) => (<option key={ i } value={ d.code }>{ d.description }</option>));
	}

	_onSelectDesign(event) {
		let { value } = event.target;
		value = value === 'Choose Design...' ? null : value;
		this.props.selectDesign(value);
	}

	render() {
		const { selectedDesign } = this.props;

		return (
			<div className="design-selector">
				<select value={ selectedDesign && selectedDesign.code } onChange={ this._onSelectDesign.bind(this) }>
					{ this._mapDesignsToOptions(this.props.availableDesigns) }
				</select>
			</div>
		);
	}
});