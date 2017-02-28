import constants from '../constants';

export default (state, action) => {
	if (action.type === constants.CHANGE_PLATE_PHRASE) {
		return action.payload.platePhrase;
	}

	return state;
};