import 'animate.css';
import '../styles/app.css';
import '../styles/plate-designer.css';
import PlateCauseLogo from './PlateCauseLogo';
import PlateCauseSelector from './PlateCauseSelector';
import PlateDesignSelector from './PlateDesignSelector';
import PlateValidationMessage from './PlateValidationMessage';
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
		selectedCause: state.getIn(['causes', 'selected']),
		selectedDesign: state.getIn(['designs', 'selected']),
		phrase: state.get('platePhrase'),
		validationMessage: 'hey'
	})
)(class App extends React.Component {
	render() {
		const { phrase, selectedCause, selectedDesign } = this.props;
		const currentDesign = selectedDesign && kebabCase(selectedDesign.code);
		const actions = bindActionCreators(appActions, this.props.dispatch);

		return (
			<div className="app">
				<PlateDesignSelector {...actions} selectedDesign={ selectedDesign } />
				<PlateCauseSelector {...actions} selectedDesign={ selectedDesign } />

				<PlateValidationMessage message={ this.props.validationMessage } />

				<div className="plate-designer" data-selected-design={ currentDesign }>
					<div className="plate-designer-inner">
						{ selectedDesign &&
							<PlateHeader selectedDesign={ selectedDesign } />
						}

						<div className="plate-designer-content">
							{ selectedCause &&
								<PlateCauseLogo logoStyles={ selectedCause.styles } />
							}
							<PlatePhrase {...actions} phrase={ phrase } hasCause={ !!selectedCause } hasDesign={ !!selectedDesign } />
						</div>

						<PlateFooter className="plate-designer-footer" {...this.props} />
					</div>
				</div>
			</div>
		);
	}
});