import Immutable from 'immutable';
import PlateStyle from './PlateStyle';

export default class PlateCause extends Immutable.Record({
	code: null,
	description: null,
	designCompatibility: null,
	styles: null,
	type: null
}) {
	constructor(props) {
		super(props);
		return this.merge({ styles: new PlateStyle(this.styles) });
	}
}