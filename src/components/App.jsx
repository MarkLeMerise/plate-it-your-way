import 'animate.css';
import '../styles/app.css';
import '../styles/plate-designer.css';
import PlateCause from './PlateCause';
import PlateCauseSelector from './PlateCauseSelector';
import PlateDesignSelector from './PlateDesignSelector';
import PlateValidation from './PlateValidation';
import PlateFooter from './PlateFooter';
import PlateHeader from './PlateHeader';
import PlatePhrase from './PlatePhrase';
import React from 'react';
import * as appActions from '../actions';
import kebabCase from 'lodash/kebabCase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default connect(
	state => ({
		plate: state.getIn(['plate']).toJSON(),
		selectedCause: state.getIn(['causes', 'selected']),
		selectedDesign: state.getIn(['designs', 'selected']),
	})
)(class App extends React.Component {
	render() {
		const { plate, selectedCause, selectedDesign } = this.props;
		const currentDesign = selectedDesign && kebabCase(selectedDesign.code);
		const actions = bindActionCreators(appActions, this.props.dispatch);

		return (
			<div className="app">
				<PlateDesignSelector {...actions} selectedDesign={ selectedDesign } />
				<PlateCauseSelector {...actions} selectedDesign={ selectedDesign } />

				<div className="plate-designer" data-selected-design={ currentDesign }>
					<div className="plate-designer-inner">
						<PlateValidation hasError={ plate.hasError } phrase={ plate.phrase } />

						{ selectedDesign &&
							<PlateHeader selectedDesign={ selectedDesign } />
						}

						<div className="plate-designer-content">
							{ selectedCause &&
								<PlateCause logoStyles={ selectedCause.styles } />
							}
							<PlatePhrase {...actions} phrase={ this.props.plate.phrase } hasError={ plate.hasError } hasCause={ !!selectedCause } hasDesign={ !!selectedDesign } />
						</div>

						<PlateFooter className="plate-designer-footer" {...this.props} />
					</div>
				</div>
			</div>
		);
	}
});