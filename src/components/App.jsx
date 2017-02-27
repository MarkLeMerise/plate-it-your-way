import '../styles/app.css';
import PlateCauseLogo from './PlateCauseLogo';
import PlateCauseSelector from './PlateCauseSelector';
import PlateDesignSelector from './PlateDesignSelector';
import PlateFooter from './PlateFooter';
import PlateHeader from './PlateHeader';
import PlateNumberInput from './PlateNumberInput';
import React from 'react';
import { connect } from 'react-redux';
import { kebabCase } from 'lodash';

export default connect(
	state => ({
		selectedCause: state.getIn(['causes', 'selected']),
		selectedDesign: state.getIn(['designs', 'selected'])
	})
)(class App extends React.Component {
	render() {
		const { selectedCause, selectedDesign } = this.props;

		return (
			<div className="app">
				<div className="app-container" data-selected-design={ _.kebabCase(selectedDesign) }>
					<PlateDesignSelector selectedDesign={ selectedDesign } />
					<PlateCauseSelector selectedDesign={ selectedDesign } />
					<div className="plate-designer">
						{ selectedDesign &&
							<PlateHeader selectedDesign={ selectedDesign } />
						}

						<div className="plate-designer-content">
							{ selectedCause &&
								<PlateCauseLogo logoStyles={ selectedCause.styles } />
							}
							<PlateNumberInput className="plate-designer-number" />
						</div>

						<PlateFooter className="plate-designer-footer" {...this.props} />
					</div>
				</div>
			</div>
		);
	}
});