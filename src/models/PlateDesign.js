import Immutable from 'immutable';
import PlateStyle from './PlateStyle';

export default class PlateDesign extends Immutable.Record({
	code: null,
	description: null,
	styles: null
}) {
	constructor(props) {
		super(props);
		return this.merge({ styles: new PlateStyle(this.styles) });
	}
}