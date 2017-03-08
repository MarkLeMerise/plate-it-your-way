import Immutable from 'immutable';
import reservedFormats from '../data/reserved-formats.json';

class PlateFormat extends Immutable.Record({
	description: null,
	length: null,
	pattern: null
}) {
	test(input) {
		return new RegExp(this.pattern).test(input);
	}
}

const testsByLength = Immutable.fromJS(reservedFormats)
	.map(f => new PlateFormat(f))
	.groupBy(f => f.length);

export default (input = '') => {
	const testGroup = testsByLength.get(input.length);

	if (!testGroup) {
		return true;
	}

	return !testGroup.find(t => t.test(input), this, null);
};