import Immutable from 'immutable';
import PlateCause from '../models/PlateCause';
import causes from '../data/causes.json';
import constants from '../constants';

const causeList = Immutable.fromJS(causes).map(c => new PlateCause(c));

export default (state, action) => {
	if (action.type === constants.SELECT_DESIGN) {
		const { design } = action.payload;
		return state.set('list', causeList.filter(c => c.designCompatibility.contains(design)));
	}

	if (action.type === constants.SELECT_CAUSE) {
		const { cause } = action.payload;
		return state.set('selected', state.get('list').find(c => c.code === cause, this, null));
	}

	return state;
};